
export function calculateScore(diamond, inclusion) {
  const diamondValidaion = validateDiamond(diamond);
  if (!diamondValidation.ok) return diamondValidaion;

  const inclusionValidation = validateInclusion(inclusion);
  if (!inclusionValidation.ok) return inclusionValidation;

};


export function calculateCombinedScore(diamond, ...inclusions) {
  return 42;
};
