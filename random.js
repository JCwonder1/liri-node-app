var fs = require('fs');

fs.readFile('random.txt', 'utf8', (err, data)=> {
    return data;
});



exports.module = {
    fs: fs,
}