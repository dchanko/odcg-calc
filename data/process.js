import path from 'path';
import fs from 'fs';
import parse from 'csv-parse';
import stringify from "csv-stringify";
import transform from 'stream-transform';
import { fromJS } from 'immutable';
import Rx from 'rxjs';
import rxNode from 'rx-node';
import { calculateScore, calculateCombinedScore } from '../src/services/calculator';

var output = [];
var file = path.join(__dirname, 'input.csv');
var outFile = path.join(__dirname, 'output.csv');
var input = fs.createReadStream(file);
var output = fs.createWriteStream(outFile);
var parser = parse({delimiter: ','})
var stringifier = stringify({delimiter: ','});
stringifier.write(["Diamond", "Expected GIA", "Actual GIA", "Expected Score", "Actual Score", "Difference"]);
stringifier.on('readable', function(){
  const row = stringifier.read().toString();
  //console.log(row);
  output.write(row);
});

var transformer = transform(function(record, callback) {
  callback(null, {
    diamond: {
      name: record[1],
      grade: {
        gia: record[2],
        score: parseFloat(record[3])
      },
      length: parseFloat(record[4]),
      width: parseFloat(record[5])
    },
    //??: record[6],
    inclusion: {
      id: record[0],
      length: parseFloat(record[7]),
      width: parseFloat(record[8]),
      contrast: parseFloat(record[9]),
      position: parseInt(record[10], 10),
      grade: {
        score: parseFloat(record[11])
      }
    }
  });
}, { parallel: 5 });

var sub = rxNode.fromTransformStream(transformer).share()
                .groupBy(line => line.diamond.name)
                .flatMap(group => group.reduce((acc, cur) => {
                  return {
                    diamond: acc.diamond || cur.diamond,
                    inclusions: [
                      ...acc.inclusions, cur.inclusion
                    ]}
                  }, {
                    diamond: false,
                    inclusions: []
                  }))
                .map(fromJS)
                //.filter(entry => entry.diamond.name == "93")
                .map(entry => {
                  var inclusionScores = entry.get('inclusions').map(i => {
                    return calculateScore(entry.get('diamond'), i);
                  });
                  var combinedScore = calculateCombinedScore(entry.get('diamond'), inclusionScores);
                  return {
                    name: entry.getIn(['diamond', 'name']),
                    expected: {
                      gia: entry.getIn(['diamond', 'grade', 'gia']),
                      score: entry.getIn(['diamond', 'grade', 'score'])
                    },
                    actual: {
                      gia: combinedScore.getIn(['grade', 'gia']),
                      score: combinedScore.getIn(['grade', 'score'])
                    }
                  };
                })
                .map(result => {
                  const scoreDifference = Math.abs(result.actual.score - result.expected.score);
                  return Object.assign({}, result, {
                    error: {
                      difference: scoreDifference,
                      gradeMatch: result.actual.gia === result.expected.gia
                    }
                  });
                })
                .filter(result => !result.error.gradeMatch || result.error.difference > 0.25)
                //.count()
                .do(i => {
                  stringifier.write([
                    i.name, i.expected.gia, i.actual.gia, i.expected.score, i.actual.score, i.error.difference
                  ]);
                })
                .count()
                .subscribe(console.log);
                // .map(group => Rx.Observable.from(group.toArray()).aggregate({
                //   inclusions: []
                // }, ((acc, item) => {
                //   if (undefined === acc.diamond) {
                //     acc.diamond = item.diamond;
                //   }
                //   acc.inclusions.push(item.inclusion);
                //   return acc;
                // })))
                // .subscribe(console.log);

input.pipe(parser).pipe(transformer);
