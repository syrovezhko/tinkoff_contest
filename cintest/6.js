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
    let l = points.map(i => i[0])
    let r = points.map(i => i[1])
    let medians = [];

    for(let i = 0; i < n; i++){
      if(l[i] !== r[i]){
        medians.push(median(fillArr(l[i], r[i])))
      }else{
        medians.push(l[i])
      }
      
    }
    let medianOfMedians = median(fillArr(median(l.sort()), median(r.sort())))
    console.log('----------------------')
    if(medianOfMedians*n <= s){
      console.log(median(r.sort()))
    } else {
      console.log(Math.floor(medianOfMedians))
    }
    
    // console.log('сумма максисмуммов ',sum)
    // console.log('медиана мин ',median(l))
    // console.log('медиана макс ',median(r))
    // console.log('left', l)
    // console.log('right', r)
    // console.log('----------------------')

    // console.log('min ', median(l.sort()))
    // console.log('max ', median(r.sort()))
    // console.log('----------------------')
    // console.log(median(fillArr(l[2], r[2])))
    // console.log(medians)
    // console.log(medians, ' => ', median(medians))
    
    // console.log("chtlytt fhba ", s/n)
    // console.log("min to max ", median(fillArr(median(l.sort()), median(r.sort()))))


    rl.close();

    
   }
});
