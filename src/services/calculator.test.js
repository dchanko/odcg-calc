import {
  calculateScore,
  calculateCombinedScore
} from "./calculator";


describe('calculations', () => {

  describe('calculateCombinedScore', () => {
    let diamond = { };
    let inclusions = [];
    let result;
    beforeEach(() => {
      diamond = {
        length: 6.5,
        width: 6.5,
        contrast: 3,
        position: 1
      };
    });

    test('returns copy of diamond', () => {
      result = calculateCombinedScore(diamond, inclusions);
      expect(result).not.toBe(diamond);
      expect(result.length).toEqual(diamond.length);
      expect(result.width).toEqual(diamond.width);
      expect(result.contrast).toEqual(diamond.contrast);
      expect(result.position).toEqual(diamond.position);
    });

    describe('one inclusion', () => {

      beforeEach(() => {
        inclusions = [{
          grade: {
            score: 2,
            gia: "VVS2"
          }
        }];
      });

      test('returns single score', () => {
        result = calculateCombinedScore(diamond, inclusions);
        expect(result.grade.score).toBe(2);
        expect(result.grade.gia).toBe("VVS2");
      });

    });

    describe('multiple inclusions', () => {

      beforeEach(() => {
        inclusions = [{
          grade: {
            score: 2,
            gia: "VVS2"
          }
        },{
          grade: {
            score: 2,
            gia: "VVS2"
          }
        },{
          grade: {
            score: 2,
            gia: "VVS2"
          }
        },{
          grade: {
            score: 2,
            gia: "VVS2"
          }
        }];
      });

      test('returns combined score', () => {
        result = calculateCombinedScore(diamond, inclusions);
        expect(result.grade.score).toBe(3);
        expect(result.grade.gia).toBe("VS1");
      });

    });

    describe('rejected diamond', () => {

      beforeEach(() => {
        inclusions = [{
          grade: {
            score: 9,
            gia: "I3"
          }
        },{
          grade: {
            score: 9,
            gia: "I3"
          }
        },{
          grade: {
            score: 9,
            gia: "I3"
          }
        },{
          grade: {
            score: 9,
            gia: "I3"
          }
        }];
      });

      test('returns combined score', () => {
        result = calculateCombinedScore(diamond, inclusions);
        expect(result.grade.score).toBe(10);
        expect(result.grade.gia).toBe("Reject");
      });

    });

  });

});
