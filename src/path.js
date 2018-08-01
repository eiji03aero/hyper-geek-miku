const path = require('path');

const rootPath = path.resolve(__dirname, '../');
const srcPath = path.resolve(__dirname);

exports.getImagePath = name => path.resolve(srcPath, 'images', name + '.png');
