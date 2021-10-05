let fs = require('fs')
let path = require('path')

if(fs.existsSync("Logs")) {
    fs.readdir("Logs", (err, files) => {
        if (err) {throw err;}
        for (const file of files) {
            const location = path.join("Logs", file);
            fs.unlink(location, err => {
                if (err) { throw err;}
            });
            console.log(`delete files...${file}`);
        }
        fs.rmdirSync("Logs");
    });
}