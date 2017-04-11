import { fromJS } from 'immutable';

const currentVersion = "0.0.1";
const defaultState = {
  version: currentVersion,
  diamond: {
    length: 0,
    width: 0,
    grade: {
      score: 0,
      gia: ""
    }
  },
  inclusionIndex: 0,
  inclusions: [{
    length: 0,
    width: 0,
    contrast: 3,
    position: 1,
    grade: {
      score: 0,
      gia: ""
    }
  }],
  errors: {}
};

export function getState() {
  const saved = localStorage.getItem("state");
  let initialState = defaultState;

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.version === currentVersion) {
        initialState = parsed;
      } else {
        initialState = defaultState;
      }
    } catch (ex) {
      initialState = defaultState;
    }
  }
  return fromJS(initialState);
};

export function saveState(state) {
  localStorage.setItem("state", JSON.stringify(state.toJS()))
};
