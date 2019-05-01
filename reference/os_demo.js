const os = require('os');

//  Platform
console.log(os.platform());

//  CPU Architecture
console.log(os.arch());

//  CPU CoreInfo
// console.log(os.cpus());

//  Free Memory
console.log(os.freemem()/1024/1024, 'MB');

//  Total Memory
console.log(os.totalmem()/1024/1024, 'MB');

//  Home Directory
console.log(os.homedir());

//  Host Name
console.log(os.hostname()); //Lexx

//  Uptime /czas działania systemu od uruchomienia w s.
console.log(os.uptime());

// 
console.log(os.type());

// 
console.log(os.release());

// 
// console.log(os.networkInterfaces());


// 
console.log(os.loadavg()); //Windows always returns [0, 0, 0]

// 
console.log(os.getPriority());

// 
console.log(os.endianness()); // LE

//
console.log(os.tmpdir());