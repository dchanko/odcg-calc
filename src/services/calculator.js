export function calculateScore(diamond, inclusion) {

};

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

function log4(val) {
  return Math.log(val) / Math.log(4);
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
