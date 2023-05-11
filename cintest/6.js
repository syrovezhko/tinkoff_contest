function median(data) {
  data.sort((a, b) => a - b);
  if (data.length % 2) {
    return data[Math.floor(data.length / 2)];
  } else {
    return (data[data.length / 2] + data[data.length / 2 - 1]) / 2;
  }
}

function fillArr(a, b) {
  let start = a
  let end = b
  let result = []
  while(start <= end) {
    result.push(start++)
  }
  return result
}

function indexOfMax(arr) {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }
  return maxIndex;
}

var readline = require('readline');

var input = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputNumbers = [];
rl.on('line', function(line) {
  inputNumbers.push((line.split(' ').filter(i => i!=='').map(i=>Number(i))));

  const n = inputNumbers[0][0]
  const s = inputNumbers[0][1]
  const points = inputNumbers.slice(1)

  if (inputNumbers.length == n+1) {
    // let l = points.map(i => i[0])
    let r = points.map(i => i[1])
    console.log('______________')
    console.log(r)
    while(s < r.reduce((partialSum, a) => partialSum + a, 0)) {

      console.log(s, " < ", r.reduce((partialSum, a) => partialSum + a, 0))
      r[indexOfMax(r)]--
    }
    console.log(median(r))

    rl.close();

    
   }
});
