import { getState, saveState } from "./storage";
import localStorage from "../__mocks__/localStorage";
import { Map } from 'immutable';

window.localStorage = localStorage;

describe('getState', () => {

  describe('state has current version', () => {
    const currentState = Map({
      version: "0.0.1"
    });

    beforeEach(() => {
      localStorage.setItem("state", JSON.stringify(currentState));
    });

    test("state is pulled from storage", () => {
      expect(getState().get('version')).toEqual(currentState.get('version'));
    });

  });

  describe('current state has old version', () => {
    const currentState = {
      version: "0.0.0"
    };

    beforeEach(() => {
      localStorage.setItem("state", JSON.stringify(currentState));
    });

    test("state is pulled from storage", () => {
      expect(getState().get('version')).toEqual("0.0.1");
    });

  });

});

describe('saveState', () => {

  test('sets the localStorage value to the supplied state', () => {
    const state = Map({ greet: "Hello, World" });
    saveState(state);
    expect(localStorage.getItem("state")).toBe(JSON.stringify(state));
  });

});
