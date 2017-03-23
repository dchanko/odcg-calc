import validate, { validations } from "./validations";

describe('validations', () => {
  let state = {};
  beforeEach(() => {
    state = {
      diamond: {},
      inclusionIndex: 0,
      inclusions: [{}]
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
      state.inclusions[0].length = null;
      expect(validations.inclusion.length(state.inclusions[0]).inclusion.length).toBeDefined();
    });

    test('valid', () => {
      state.inclusions[0].length = 6.5;
      expect(validations.inclusion.length(state.inclusions[0])).toEqual({});
    });

  });

  describe('inclusion.width', () => {

    test('invalid', () => {
      state.inclusions[0].width = null;
      expect(validations.inclusion.width(state.inclusions[0]).inclusion.width).toBeDefined();
    });

    test('valid', () => {
      state.inclusions[0].width = 6.5;
      expect(validations.inclusion.width(state.inclusions[0])).toEqual({});
    });

  });

  describe('inclusion.contrast', () => {

    test('invalid', () => {
      state.inclusions[0].contrast = null;
      expect(validations.inclusion.contrast(state.inclusions[0]).inclusion.contrast).toBeDefined();
    });

    test('valid', () => {
      state.inclusions[0].contrast = 0.50;
      expect(validations.inclusion.contrast(state.inclusions[0])).toEqual({});
    });

  });

    describe('inclusion.contrastRange', () => {

    test('invalid', () => {
      state.inclusions[0].contrast = 6;
      expect(validations.inclusion.contrastRange(state.inclusions[0]).inclusion.contrast).toBeDefined();
    });

    test('valid', () => {
      state.inclusions[0].contrast = 5;
      expect(validations.inclusion.contrastRange(state.inclusions[0])).toEqual({});
    });

  });


  describe('inclusion.position', () => {

    test('invalid', () => {
      state.inclusions[0].position = null;
      expect(validations.inclusion.position(state.inclusions[0]).inclusion.position).toBeDefined();
    });

    test('valid', () => {
      state.inclusions[0].position = 4;
      expect(validations.inclusion.position(state.inclusions[0])).toEqual({});
    });

  });

    describe('inclusion.positionRange', () => {

    test('invalid', () => {
      state.inclusions[0].position = 6;
      expect(validations.inclusion.positionRange(state.inclusions[0]).inclusion.position).toBeDefined();
    });

    test('valid', () => {
      state.inclusions[0].position = 4;
      expect(validations.inclusion.positionRange(state.inclusions[0])).toEqual({});
    });

  });

});

describe('validate', () => {

  test('invalid inclusion', () => {
    expect(validate({
      diamond: {
        width: 6.5
      },
      inclusionIndex: 0,
      inclusions: [{
        length: 0.4
      }]
    })).toEqual({
      diamond: {
        length: "Length required."
      },
      inclusion: {
        position: "Must be between 1 and 4.",
        contrast: "Must be between 1 and 5.",
        width: "Width required."
      }
    });
  });

});
