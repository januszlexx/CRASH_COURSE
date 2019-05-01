const path = require('path');

// console.log(path)

// Basename file name
console.log('basename file name: ', path.basename(__filename));

// Basename directory name
console.log('basename directory name: ' +  path.dirname(__filename));
// Create path object
console.log(path.parse(__filename).base);


// Concatenate paths
// ../test/hello.html
console.log(path.join(__filename, 'test', 'hello.html'));



