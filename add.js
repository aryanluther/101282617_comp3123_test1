let fs = require('fs')

if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}
process.chdir("Logs");
for(let x = 0; x < 10; x++) {
    const filename = `log${x}.txt`;
    fs.writeFile(filename, `Hello log file ${x}`, (err) => {
        if (err) { throw err; }
    });
    console.log(filename);
}