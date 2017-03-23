import { Map } from 'immutable';

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
      const parsed = Map(JSON.parse(saved));
      if (parsed.get('version') === currentVersion) {
        initialState = parsed;
      } else {
        initialState = defaultState;
      }
    } catch (ex) {
      initialState = defaultState;
    }
  }
  return Map(initialState);
};

export function saveState(state) {
  //console.log(state.toJS());
  localStorage.setItem("state", JSON.stringify(state))
};
