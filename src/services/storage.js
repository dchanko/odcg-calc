
const currentVersion = "0.0.3";
const defaultState = {
  version: currentVersion,
  command: {
    type: "add",
    text: ""
  },
  items: []
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
