
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

export let validations = {
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

export default (state) => {
  const inclusionVals = validations.inclusion;
  const diamondVals = validations.diamond;
  return {
    diamond: Object.assign.apply({},
                    Object.keys(diamondVals)
                          .map(k => diamondVals[k](state))
                          .filter(v => Object.keys(v).length > 0)
                          .map(v => v.diamond)),
    inclusion: Object.assign.apply({},
                      Object.keys(inclusionVals)
                            .map(k => inclusionVals[k](state))
                            .filter(v => Object.keys(v).length > 0)
                            .map(v => v.inclusion))
  };
};
