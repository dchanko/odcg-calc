
export function calculateScore(diamond, inclusion) {
  const diamondValidaion = validateDiamond(diamond);
  if (!diamondValidation.ok) return diamondValidaion;

  const inclusionValidation = validateInclusion(inclusion);
  if (!inclusionValidation.ok) return inclusionValidation;


};

let validateDiamondLength = (state) => {
  return state.diamond.length ? [] : [{
    diamond: {
      length: "Length required."
    }
  }];
}

export const validations = {
  diamond: {
    length: validateDiamondLength
  }
};

function validateDiamond(diamond) {

  if (!diamond.length) {

  }
}

export function calculateCombinedScore(diamond, ...inclusions) {
  return 42;
};
