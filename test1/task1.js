var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
        data = data.split(' ').filter(i => i!=='').map(i=>Number(i));
        let total = data[0];
        if(data[3] > data[1]){
          total += (data[3]-data[1])*data[2]
        }
        console.log(total)
        rl.close();
});