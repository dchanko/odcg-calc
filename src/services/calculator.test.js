import {
  calculateScore,
  calculateCombinedScore
} from "./calculator";


describe('calculations', () => {
  let diamond = { };
  let result;
  beforeEach(() => {
    diamond = {
      length: 6.5,
      width: 6.5
    };
  });

  describe('calculateScore', () => {
    let inclusion = { };

    beforeEach(() => {
      inclusion = {
        length: 0.1,
        width: 0.1,
        contrast: 3,
        position: 1,
        grade: {
          score: 0,
          gia: ""
        }
      };
    });

    describe('no inclusion scaling', () => {

      test('VVS1: no contrast adjustment', () => {
        inclusion.length = 0.1;
        inclusion.width = 0.1;
        expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 1.0, gia: "VVS1" });
      });

       test('VVS2: no contrast adjustment', () => {
        inclusion.length = 0.2;
        inclusion.width = 0.2;
        expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 2.0, gia: "VVS2" });
      });

      describe('contrast adjustment', () => {
        beforeEach(() => {
          inclusion.length = 0.4;
          inclusion.width = 0.4;
        });

        test('light contrast (1): two grades better', () => {
          inclusion.contrast = 1;
          expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 1.0, gia: "VVS1" });
        });

        test('light-medium contrast (2): one grade better', () => {
          inclusion.contrast = 2;
          expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 2.0, gia: "VVS2" });
        });

        test('medium contrast (3): no change', () => {
          inclusion.contrast = 3;
          expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 3.0, gia: "VS1" });
        });

         test('medium-dark contrast (4): half-grade worse', () => {
          inclusion.contrast = 4;
          expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 3.5, gia: "VS1" });
        });

         test('dark contrast (5): one grade worse', () => {
          inclusion.contrast = 5;
          expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 4.0, gia: "VS2" });
        });

      });

      describe('position adjustment', () => {

        test('Under table (1): no adjustment', () => {
          inclusion.position = 1;
          expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 1.0, gia: "VVS1" });
        });

        describe('Just outside table (2)', () => {

          beforeEach(() => {
            inclusion.position = 2;
          });

          test('VS2 or better: quarter grade better', () => {
            inclusion.length = 0.8;
            inclusion.width = 0.8;
            expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 3.75, gia: "VS1" });
          });

          test('SI1 or worse: no adjustment', () => {
            inclusion.length = 1.6;
            inclusion.width = 1.6;
            expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 5.0, gia: "SI1" });
          });

        });

        describe('Near girdle (3)', () => {

          beforeEach(() => {
            inclusion.position = 3;
          });

          test('VS2 or better: half grade better', () => {
            inclusion.length = 0.8;
            inclusion.width = 0.8;
            expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 3.5, gia: "VS1" });
          });

          test('SI1 or better: quarter grade better', () => {
            inclusion.length = 1.6;
            inclusion.width = 1.6;
            expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 4.75, gia: "VS2" });
          });

          test('SI2 or worse: no adjustment', () => {
            inclusion.length = 3.2;
            inclusion.width = 3.2;
            expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 6.0, gia: "SI2" });
          });

        });

        describe('Almost or touching girdle (4)', () => {

          beforeEach(() => {
            inclusion.position = 4;
          });

          test('VS2 or better: full grade better', () => {
            inclusion.length = 0.8;
            inclusion.width = 0.8;
            expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 3.0, gia: "VS1" });
          });

          test('SI1 or better: half grade better', () => {
            inclusion.length = 1.6;
            inclusion.width = 1.6;
            expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 4.5, gia: "VS2" });
          });

          test('SI2 or worse: no adjustment', () => {
            inclusion.length = 3.2;
            inclusion.width = 3.2;
            expect(calculateScore(diamond, inclusion).grade).toEqual({ score: 6.0, gia: "SI2" });
          });

        });


      });

    });

    describe('inclusion scaling', () => {

    });

  });

  describe('calculateCombinedScore', () => {
    let inclusions = [];

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
