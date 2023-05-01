var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
        data = Number(data);
        let cut = 1;
        let move = 0;
        while(cut < data){
          move++;
          cut*=2;
        }
        total = move
        console.log(total)
        rl.close();
});