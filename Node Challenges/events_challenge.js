var events = require('events');
var emitter = new events.EventEmitter();

//Assign the event handler to some events:
emitter.on('event1', () => console.log('Do something'));
emitter.on('event2', () => console.log('Do something else'));

//Fire the 'scream' event:
emitter.emit('event2');
emitter.emit('event1');