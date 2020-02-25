const chokidar = require('chokidar');

chokidar.watch('./log.txt').on('all', (event, path) => {
    console.log('file changed');
});