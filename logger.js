const EventEmitter = require('events');

var url = "http://mylogger.io/log";

class Logger extends EventEmitter{
    log (message){
        //send HTTP request
        console.log(message);
        // raise an event
        this.emit('messageLogged',{id:1,url:'http://mylogger.io/log'});   //Making a noise or signal of an event taking place
    }
}

//module.exports.Logger = Logger;
module.exports = Logger;