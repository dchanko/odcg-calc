import {
  calculateScore,
  calculateCombinedScore
} from "./calculator";
import { fromJS } from 'immutable';


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
        length: 0.01,
        width: 0.01,
        contrast: 0,
        position: 1,
        grade: {
          score: 0,
          gia: ""
        }
      };
    });

    describe('no inclusion scaling', () => {

      test('VVS1: no contrast adjustment', () => {
        inclusion.length = 0.01;
        inclusion.width = 0.01;
        expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 1.0, gia: "VVS1" });
      });

      test('VVS2: no contrast adjustment', () => {
        inclusion.length = 0.02;
        inclusion.width = 0.02;
        expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 2.0, gia: "VVS2" });
      });

      describe('contrast adjustment', () => {
        beforeEach(() => {
          inclusion.length = 0.04;
          inclusion.width = 0.04;
        });

        test('light contrast (1): two grades better', () => {
          inclusion.contrast = -2;
          expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 1.0, gia: "VVS1" });
        });

        test('light-medium contrast (2): one grade better', () => {
          inclusion.contrast = -1;
          expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 2.0, gia: "VVS2" });
        });

        test('medium contrast (3): no change', () => {
          inclusion.contrast = 0;
          expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 3.0, gia: "VS1" });
        });

         test('medium-dark contrast (4): half-grade worse', () => {
          inclusion.contrast = 0.5;
          expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 3.5, gia: "VS1" });
        });

         test('dark contrast (5): one grade worse', () => {
          inclusion.contrast = 1;
          expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 4.0, gia: "VS2" });
        });

      });

      describe('position adjustment', () => {

        test('Under table (1): no adjustment', () => {
          inclusion.position = 1;
          expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 1.0, gia: "VVS1" });
        });

        describe('Just outside table (2)', () => {

          beforeEach(() => {
            inclusion.position = 2;
          });

          test('VS2 or better: quarter grade better', () => {
            inclusion.length = 0.08;
            inclusion.width = 0.08;
            expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 3.75, gia: "VS1" });
          });

          test('SI1 or worse: no adjustment', () => {
            inclusion.length = .16;
            inclusion.width = .16;
            expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 5.0, gia: "SI1" });
          });

        });

        describe('Near girdle (3)', () => {

          beforeEach(() => {
            inclusion.position = 3;
          });

          test('VS2 or better: half grade better', () => {
            inclusion.length = 0.08;
            inclusion.width = 0.08;
            expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 3.5, gia: "VS1" });
          });

          test('SI1 or better: quarter grade better', () => {
            inclusion.length = .16;
            inclusion.width = .16;
            expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 4.75, gia: "VS2" });
          });

          test('SI2 or worse: no adjustment', () => {
            inclusion.length = .32;
            inclusion.width = .32;
            expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 6.0, gia: "SI2" });
          });

        });

        describe('Almost or touching girdle (4)', () => {

          beforeEach(() => {
            inclusion.position = 4;
          });

          test('VS2 or better: full grade better', () => {
            inclusion.length = 0.08;
            inclusion.width = 0.08;
            expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 3.0, gia: "VS1" });
          });

          test('SI1 or better: half grade better', () => {
            inclusion.length = 0.16;
            inclusion.width = 0.16;
            expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 4.5, gia: "VS2" });
          });

          test('SI2 or worse: no adjustment', () => {
            inclusion.length = 0.32;
            inclusion.width = 0.32;
            expect(calculateScore(fromJS(diamond), fromJS(inclusion)).get('grade').toJS()).toEqual({ score: 6.0, gia: "SI2" });
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
      result = calculateCombinedScore(fromJS(diamond), fromJS(inclusions));
      expect(result.get('length')).toEqual(diamond.length);
      expect(result.get('width')).toEqual(diamond.width);
      expect(result.get('contrast')).toEqual(diamond.contrast);
      expect(result.get('position')).toEqual(diamond.position);
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
        result = calculateCombinedScore(fromJS(diamond), fromJS(inclusions));
        expect(result.getIn(['grade','score'])).toBe(2);
        expect(result.getIn(['grade','gia'])).toBe("VVS2");
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
        result = calculateCombinedScore(fromJS(diamond), fromJS(inclusions));
        expect(result.getIn(['grade','score'])).toBe(3);
        expect(result.getIn(['grade','gia'])).toBe("VS1");
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
        result = calculateCombinedScore(fromJS(diamond), fromJS(inclusions));
        expect(result.getIn(['grade', 'score'])).toBe(10);
        expect(result.getIn(['grade', 'gia'])).toBe("Reject");
      });

    });

  });

});
