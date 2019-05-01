const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

//  Init object
const myEmitter  = new MyEmitter();

myEmitter.on('event', () => console.log('Key Up 21'));

//  Init event
myEmitter.emit('event');
