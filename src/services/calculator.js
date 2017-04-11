export function calculateScore(diamond, inclusion) {
  const scaledInclusion = scaleInclusion(diamond, inclusion);
  return calculateInclusionScore(scaledInclusion);
};

function scaleInclusion(diamond, inclusion) {
  const diamondArea = diamond.length * diamond.width;
  const tenPercentOfDiamondArea = diamondArea * 0.1;
  const oneCaratArea = 6.5 * 6.5;
  const inclusionArea = inclusion.length * inclusion.width;
  const isLargeDiamond = diamondArea > oneCaratArea;
  const shouldScale = isLargeDiamond && inclusionArea > tenPercentOfDiamondArea;
  if (shouldScale) {
    const scalingFactor = Math.sqrt(oneCaratArea) / Math.sqrt(diamondArea);
    return Object.assign({}, inclusion, {
      length: inclusion.length * scalingFactor,
      width: inclusion.width * scalingFactor
    });
  }
  return inclusion;
}

function calculateInclusionScore(inclusion) {
  let score = log2(Math.sqrt(inclusion.length * 1000 * inclusion.width * 1000 / 25));
  score = adjustForContrast(score, inclusion.contrast);
  score = adjustForPosition(score, inclusion.position);
  score = Math.max(0, score);
  return Object.assign({}, inclusion, {
    grade: {
      score: score,
      gia: getGiaScore(score)
    }
  });
}

function log2(val) {
  return Math.log(val) / Math.LN2;
}

function adjustForContrast(score, contrast) {
  return score + contrast;
}

function adjustForPosition(score, position) {
  switch (position) {
    case 1:
      return score;
    case 2:
      return score < 5 ? score - 0.25 : score;
    case 3:
      if (score < 5) return score - 0.5;
      else if (score < 6) return score - 0.25;
      else return score;
    case 4:
      if (score < 5) return score - 1.0;
      else if (score < 6) return score - 0.5;
      else return score;
    default:
      return score;
  }
}

export function calculateCombinedScore(diamond, inclusions) {
  return Object.assign({}, diamond, combineGrade(inclusions));
};

const denominator = 25;

function combineGrade(inclusions) {
  const score = combineScores(inclusions);
  return {
    grade: {
      score: score,
      gia: getGiaScore(score)
    }
  };
}

function combineScores(inclusions) {
  return inclusions.length > 0
            ? log4(inclusions.map(i => i.grade.score)
                             .map(invertScore)
                             .reduce((acc, score) => acc + score, 0))
            : 0;
}

const LOG4 = Math.log(4);

function log4(val) {
  return Math.log(val) / LOG4;
}

function invertScore(score) {
  return Math.pow(
            Math.sqrt(denominator) * Math.pow(2, score),
            2)
         / denominator;
}

const GIA_SCORES = [
  "IF",
  "VVS1",
  "VVS2",
  "VS1",
  "VS2",
  "SI1",
  "SI2",
  "I1",
  "I2",
  "I3",
  "Reject"
];

function getGiaScore(val) {
  return GIA_SCORES[Math.min(Math.floor(val), 10)];
}
