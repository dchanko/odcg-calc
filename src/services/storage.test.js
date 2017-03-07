import { getState, saveState } from "./storage";
import localStorage from "../__mocks__/localStorage";

window.localStorage = localStorage;

describe('getState', () => {

  describe('state has current version', () => {
    const currentState = {
      version: "0.0.1"
    };

    beforeEach(() => {
      localStorage.setItem("state", JSON.stringify(currentState));
    });

    test("state is pulled from storage", () => {
      expect(getState()).toEqual(currentState);
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
      expect(getState().version).toEqual("0.0.1");
    });

  });

});

describe('saveState', () => {

  test('sets the localStorage value to the supplied state', () => {
    saveState("Hello, World");
    expect(localStorage.getItem("state")).toBe(JSON.stringify("Hello, World"));
  });

});
