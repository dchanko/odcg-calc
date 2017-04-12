import { Map } from 'immutable';

let validateDiamondLength = (state) => {
  return state.get('diamond').get('length') ? {} : {
    diamond: {
      length: "Length required."
    }
  };
};

let validateDiamondWidth = (state) => {
  return state.get('diamond').get('width') ? {} : {
    diamond: {
      width: "Width required."
    }
  };
};

let validateInclusionLength = (inclusion) => {
  return inclusion.get('length') ? {} : {
    inclusion: {
      length: "Length required."
    }
  };
};

let validateInclusionWidth = (inclusion) => {
  return inclusion.get('width') ? {} : {
    inclusion: {
      width: "Width required."
    }
  };
};

let validateInclusionContrastRequired = (inclusion) => {
  return undefined != inclusion.get('contrast') ? {} : {
    inclusion: {
      contrast: "Contrast required."
    }
  };
};

let validateInclusionContrastRange = (inclusion) => {
  const contrast = inclusion.get('contrast');
  const valid = contrast >= -2 && contrast <= 1;
  return valid ? {} : {
    inclusion: {
      contrast: "Must be between -2 and 1."
    }
  };
};

let validateInclusionPositionRequired = (inclusion) => {
  return inclusion.get('position') ? {} : {
    inclusion: {
      position: "Position required."
    }
  };
};

let validateInclusionPositionOneToFour = (inclusion) => {
  const position = inclusion.get('position');
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
    contrastRange: validateInclusionContrastRange,
    position: validateInclusionPositionRequired,
    positionRange: validateInclusionPositionOneToFour
  }
};

export default (state) => {
  const inclusionVals = validations.inclusion;
  const diamondVals = validations.diamond;
  const result =  Map({
    diamond: Object.keys(diamondVals)
                   .map(k => diamondVals[k](state))
                   .filter(v => Object.keys(v).length > 0)
                   .map(v => v.diamond)
                   .reduce((acc, err) => acc.mergeDeep(err), Map({})),
    inclusion: Object.keys(inclusionVals)
                     .map(k => inclusionVals[k](state.get('inclusions').get(state.get('inclusionIndex'))))
                     .filter(v => Object.keys(v).length > 0)
                     .map(v => v.inclusion)
                     .reduce((acc, err) => acc.mergeDeep(err), Map({}))
  });
  return result;
};
