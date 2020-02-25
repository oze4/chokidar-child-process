/**
 * Pretend this is your main app
 */

const fs = require('fs');
const { execFile } = require('child_process');

const child = execFile('node', ['runOnFileChange.js']);

child.stdout.on('data', data => {
    // Only here to let us know it's working...
    console.log(`Data Received: '${data.toString()}'`); 
});

let count = 0;
const interval = setInterval(() => {
    if (count === 10) clearInterval(interval);
    fs.appendFile('./log.txt', 'Added data', err => {
        if (err) console.log(err);
    });
    count++;
}, 5000);