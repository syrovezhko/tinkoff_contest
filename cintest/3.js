var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = -1;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', (line1) => {
  rl.on('line', (line2) => {
    const n = +line1
    const s = line2.split('')
    let myMap = new Map();
    s.map(i => myMap.has(i) ? myMap.set(i, myMap.get(i)+1) : myMap.set(i, 1))
    const mapKeys = [ ...myMap.keys() ].length

    console.log(mapKeys)
    rl.close()
  })
})
s.map(i => s.slice(i+1).map(j => )) 
