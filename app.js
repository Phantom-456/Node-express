/*
function sayhello(name){
    console.log("Hello "+name);
}
sayhello("shi");
*/

/*
const loggerer = require('./logger');
loggerer.log("mundane");
console.log(module);
console.log(__filename);
console.log(__dirname);
*/

//path module
/*
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
*/

//os module
/*
const os = require('os');
var freeMem = os.freemem();
var TotalMem = os.totalmem();
console.log(`Total Memory = ${TotalMem}`);
console.log(`Free Memory = ${freeMem}`);
*/

//fs module
/*
const fs = require('fs');

//syncronous form
const files = fs.readdirSync('./');
console.log(files);

//asyncronous form
fs.readdir('./',function (err,files){
    if(err) console.log('ERROR - '+err)
    else console.log(files)
})  //always prefer asyncronous form
*/

/*
const EventEmitter = require('events');
const emitter = new EventEmitter();
// create a lisener
emitter.on('messageLogged',(eventArgs) => {
    console.log("listener called successfully "+eventArgs)
});
// raise an event
emitter.emit('messageLogged',{id:1,url:'http://mylogger.io/log'});   //Making a noise or signal of an event taking place
*/


//event module
/*
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged',(eventArgs) => {
    console.log("listener called successfully ",eventArgs)
});

logger.log('message');
*/

//http module
const http = require('http');
const { write } = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/lk'){
        res.write('Hello2World');
        res.end();
    }
});
/*
server.on('connection',(socket) => {
    console.log('new Connection...');
});
*/
server.listen(6060);

console.log('listening on port 6060');
