export function calculateScore(diamond, inclusion) {
  let gradedInclusion = calculateInclusionScore(inclusion);
  return scaleInclusionScore(diamond, gradedInclusion);
};

function calculateInclusionScore(inclusion) {
  let score = log2(Math.sqrt(inclusion.length * 1000 * inclusion.width * 1000) / 50);
  score = adjustForContrast(score, inclusion.contrast);
  score = adjustForPosition(score, inclusion.position);
  return  Object.assign({}, inclusion, {
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
  switch (contrast) {
    case 1:
      return score - 2.0;
    case 2:
      return score - 1.0;
    case 3:
      return score;
    case 4:
      return score + 0.5;
    case 5:
      return score + 1.0;
    default:
      return score;
  }
}

function adjustForPosition(score, contrast) {
  switch (contrast) {
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

function scaleInclusionScore(diamond, gradedInclusion) {
  return gradedInclusion;
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
