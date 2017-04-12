import { fromJS } from 'immutable';

export function calculateScore(diamond, inclusion) {
  const scaledInclusion = scaleInclusion(diamond, inclusion);
  return calculateInclusionScore(scaledInclusion);
};

function scaleInclusion(diamond, inclusion) {
  const diamondArea = diamond.get('length') * diamond.get('width');
  const tenPercentOfDiamondArea = diamondArea * 0.1;
  const oneCaratArea = 6.5 * 6.5;
  const inclusionArea = inclusion.get('length') * inclusion.get('width');
  const isLargeDiamond = diamondArea > oneCaratArea;
  const shouldScale = isLargeDiamond && inclusionArea > tenPercentOfDiamondArea;
  let scaledInclusion = inclusion;
  if (shouldScale) {
    const scalingFactor = Math.sqrt(oneCaratArea) / Math.sqrt(diamondArea);
    scaledInclusion = inclusion.set('length', inclusion.get('length') * scalingFactor);
    scaledInclusion = inclusion.set('width', inclusion.get('width') * scalingFactor);
  }
  return scaledInclusion;
}

function calculateInclusionScore(inclusion) {
  let score = log2(Math.sqrt(inclusion.get('length') * 1000 * inclusion.get('width') * 1000 / 25));
  score = adjustForContrast(score, inclusion.get('contrast'));
  score = adjustForPosition(score, inclusion.get('position'));
  score = Math.max(0, score);
  let scoredInclusion = inclusion;
  scoredInclusion = scoredInclusion.setIn(['grade', 'score'], score);
  scoredInclusion = scoredInclusion.setIn(['grade', 'gia'], getGiaScore(score));
  return scoredInclusion;
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
  return diamond.set('grade', combineGrade(inclusions));
};

const denominator = 25;

function combineGrade(inclusions) {
  const score = combineScores(inclusions);
  return fromJS({
    score: score,
    gia: getGiaScore(score)
  });
}

function combineScores(inclusions) {
  return inclusions.count() > 0
            ? log4(inclusions.map(i => i.getIn(['grade', 'score']))
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
