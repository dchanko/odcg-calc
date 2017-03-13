import validations from "./validations";

describe('validations', () => {
  let state = {};
  beforeEach(() => {
    state = {
      diamond: {},
      inclusion: {}
    };
  });

  describe('diamond.length', () => {

    test('invalid', () => {
      state.diamond.length = null;
      expect(validations.diamond.length(state).diamond.length).toBeDefined();
    });

    test('valid', () => {
      state.diamond.length = 6.5;
      expect(validations.diamond.length(state)).toEqual({});
    });

  });

  describe('diamond.width', () => {

    test('invalid', () => {
      state.diamond.width = null;
      expect(validations.diamond.width(state).diamond.width).toBeDefined();
    });

    test('valid', () => {
      state.diamond.width = 6.5;
      expect(validations.diamond.width(state)).toEqual({});
    });

  });

  describe('inclusion.length', () => {

    test('invalid', () => {
      state.inclusion.length = null;
      expect(validations.inclusion.length(state).inclusion.length).toBeDefined();
    });

    test('valid', () => {
      state.inclusion.length = 6.5;
      expect(validations.inclusion.length(state)).toEqual({});
    });

  });

  describe('inclusion.width', () => {

    test('invalid', () => {
      state.inclusion.width = null;
      expect(validations.inclusion.width(state).inclusion.width).toBeDefined();
    });

    test('valid', () => {
      state.inclusion.width = 6.5;
      expect(validations.inclusion.width(state)).toEqual({});
    });

  });

  describe('inclusion.contrast', () => {

    test('invalid', () => {
      state.inclusion.contrast = null;
      expect(validations.inclusion.contrast(state).inclusion.contrast).toBeDefined();
    });

    test('valid', () => {
      state.inclusion.contrast = 0.50;
      expect(validations.inclusion.contrast(state)).toEqual({});
    });

  });

    describe('inclusion.contrastRange', () => {

    test('invalid', () => {
      state.inclusion.contrast = 6;
      expect(validations.inclusion.contrastRange(state).inclusion.contrast).toBeDefined();
    });

    test('valid', () => {
      state.inclusion.contrast = 5;
      expect(validations.inclusion.contrastRange(state)).toEqual({});
    });

  });


  describe('inclusion.position', () => {

    test('invalid', () => {
      state.inclusion.position = null;
      expect(validations.inclusion.position(state).inclusion.position).toBeDefined();
    });

    test('valid', () => {
      state.inclusion.position = 4;
      expect(validations.inclusion.position(state)).toEqual({});
    });

  });

    describe('inclusion.positionRange', () => {

    test('invalid', () => {
      state.inclusion.position = 6;
      expect(validations.inclusion.positionRange(state).inclusion.position).toBeDefined();
    });

    test('valid', () => {
      state.inclusion.position = 4;
      expect(validations.inclusion.positionRange(state)).toEqual({});
    });

  });

});
