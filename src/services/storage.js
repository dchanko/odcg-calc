
const currentVersion = "0.0.1";
const defaultState = {
  version: currentVersion,
  diamond: {
    length: 0,
    width: 0
  },
  inclusion: {
    length: 0,
    width: 0,
    contrast: .5,
    position: 1
  },
  inclusions: [],
  grade: {
    score: 0,
    gia: ""
  }
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
  return initialState;
};

export function saveState(state) {
  localStorage.setItem("state", JSON.stringify(state))
};
