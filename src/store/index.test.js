import reducer$ from "../reducers";
import { getState, saveState } from "../services/storage";
import store from "../store";
import configureStore from "./configureStore";

jest.mock("../reducers");
jest.mock("../services/storage");
jest.mock("./configureStore");

describe('Creating the store', () => {

  test('Configures the store using reducers and getState', () => {
    expect(getState.mock.calls.length).toBe(1);
    expect(configureStore.mock.calls[0][1]).toBe(getState());
    expect(configureStore.mock.calls[0][0]).toBe(reducer$);
  });

  test('Subscribes to the store with saveState', () => {
    expect(saveState.mock.calls.length).toBe(0);
    reducer$.next();
    expect(saveState.mock.calls.length).toBe(1);
  });

});
