
export function calculateScore(diamond, inclusion) {
  const diamondValidaion = validateDiamond(diamond);
  if (!diamondValidation.ok) return diamondValidaion;

  const inclusionValidation = validateInclusion(inclusion);
  if (!inclusionValidation.ok) return inclusionValidation;

};

let validateDiamondLength = (state) => {
  return state.diamond.length ? {} : {
    diamond: {
      length: "Length required."
    }
  };
};

let validateDiamondWidth = (state) => {
  return state.diamond.width ? {} : {
    diamond: {
      width: "Width required."
    }
  };
};

let validateInclusionLength = (state) => {
  return state.inclusion.length ? {} : {
    inclusion: {
      length: "Length required."
    }
  };
};

let validateInclusionWidth = (state) => {
  return state.inclusion.width ? {} : {
    inclusion: {
      width: "Width required."
    }
  };
};

let validateInclusionContrastRequired = (state) => {
  return state.inclusion.contrast ? {} : {
    inclusion: {
      contrast: "Contrast required."
    }
  };
};

let validateInclusionContrastOneToFive = (state) => {
  const contrast = state.inclusion.contrast;
  const valid = contrast >= 1 && contrast <= 5;
  return valid ? {} : {
    inclusion: {
      contrast: "Must be between 1 and 5."
    }
  };
};

let validateInclusionPositionRequired = (state) => {
  return state.inclusion.position ? {} : {
    inclusion: {
      position: "Position required."
    }
  };
};

let validateInclusionPositionOneToFour = (state) => {
  const position = state.inclusion.position;
  const valid = position >= 1 && position <= 4;
  return valid ? {} : {
    inclusion: {
      position: "Must be between 1 and 4."
    }
  };
};

export const validations = {
  diamond: {
    length: validateDiamondLength,
    width: validateDiamondWidth
  },
  inclusion: {
    length: validateInclusionLength,
    width: validateInclusionWidth,
    contrast: validateInclusionContrastRequired,
    contrastRange: validateInclusionContrastOneToFive,
    position: validateInclusionPositionRequired,
    positionRange: validateInclusionPositionOneToFour
  }
};

function validateDiamond(diamond) {

  if (!diamond.length) {

  }
}

export function calculateCombinedScore(diamond, ...inclusions) {
  return 42;
};
