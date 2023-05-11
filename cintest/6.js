
function compare(a, b){
  return a[0] - b[0]
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
  let points = inputNumbers.slice(1)

  if (inputNumbers.length == n+1) {
    let l = points.map(i => i[0])
    let r = points.map(i => i[1])

    let looserNum = (n-1)/2
    // let sorted = points.sort(compare)
    let sorted = points.sort((a, b) => a[0]-b[0])

    let looserSum = 0
    for(let i=0; i<looserNum; i++){
      looserSum+=sorted[i][0]
    }
    
    let tail = s-looserSum
    let best = (tail)/((n+1)/2)
    let bestArr = sorted.slice((n-1)/2)
    let bestSum = 0
    bestArr.map(i => bestSum+=i[1])
    if(bestSum < tail) best = bestSum/((n+1)/2)
    console.log(Math.floor(best))


    rl.close();

    
   }
});