var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', (line1) => {
  rl.on('line', (line2) => {
    rl.on('line', (line3) => {
      employers = line1.split(' ').filter(i => i!=='').map(i=>Number(i))
      t = employers[1]
      employers = employers[0]-1
      levels = line2.split(' ').filter(i => i!=='').map(i=>Number(i))
      faggot = (+line3)-1

      if(levels[faggot] - levels[0] <= t || levels[levels.length-1] - levels[faggot] <= t) {
        total = levels[employers] - levels[0]
      }
      else if (levels[employers] - levels[faggot] > levels[faggot] - levels[0]) {
        total = levels[faggot] + levels[employers] - levels[0] * 2
      }
      else {
        total = levels[employers] * 2 - levels[faggot] - levels[0]
      }

      console.log(total)
      rl.close()
    })
  })
})