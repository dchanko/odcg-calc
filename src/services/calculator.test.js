import {
  calculateScore,
  calculateCombinedScore,
  validations
} from "./calculator";

describe('calculator services', () => {

  beforeEach(() => {

  });

  describe('validations', () => {
    let state = {};
    beforeEach(() => {
      state = {
        diamond: {}
      };
    });

    describe('diamond.length', () => {

      test('invalid', () => {
        state.diamond.length = null;
        expect(validations.diamond.length(state).length).toBeGreaterThan(0);
      });

      test('valid', () => {
        state.diamond.length = 6.5;
        expect(validations.diamond.length(state).length).toBe(0);
      });

    });

  });

  describe('calculateScore', () => {

  });

  describe('calculateCombinedScore', () => {

    test('placeholder', () => {
      expect(calculateCombinedScore()).toBe(42);
    });

  });

});
