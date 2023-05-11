var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 'NO';
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
        let newData = data.split(' ').filter(i => i!=='').map(i=>Number(i));
        if(data === newData.sort().join(' ') || data === newData.sort().reverse().join(' ')){
          console.log('YES')
        } else {
          console.log('NO')
        }
        rl.close();
});