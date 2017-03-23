
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

let validateInclusionLength = (inclusion) => {
  return inclusion.length ? {} : {
    inclusion: {
      length: "Length required."
    }
  };
};

let validateInclusionWidth = (inclusion) => {
  return inclusion.width ? {} : {
    inclusion: {
      width: "Width required."
    }
  };
};

let validateInclusionContrastRequired = (inclusion) => {
  return inclusion.contrast ? {} : {
    inclusion: {
      contrast: "Contrast required."
    }
  };
};

let validateInclusionContrastOneToFive = (inclusion) => {
  const contrast = inclusion.contrast;
  const valid = contrast >= 1 && contrast <= 5;
  return valid ? {} : {
    inclusion: {
      contrast: "Must be between 1 and 5."
    }
  };
};

let validateInclusionPositionRequired = (inclusion) => {
  return inclusion.position ? {} : {
    inclusion: {
      position: "Position required."
    }
  };
};

let validateInclusionPositionOneToFour = (inclusion) => {
  const position = inclusion.position;
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
                            .map(k => inclusionVals[k](state.inclusions[state.inclusionIndex]))
                            .filter(v => Object.keys(v).length > 0)
                            .map(v => v.inclusion))
  };
};
