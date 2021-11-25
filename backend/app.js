const express  = require('express');
const dialer = require('dialer').Dialer;
const bodyParser = require('body-parser');
const app = express();
const url = 'https://uni-call.fcc-online.pl';
var _bridge = null;
const { Server } = require("socket.io");

const configuration = { login: 'login', password: 'password', url: url };
dialer.configure(configuration)
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
   next();
});
app.use(bodyParser.text())
app.use(bodyParser.json())
const server = app.listen(3000, function () {
 console.log('Sitecall app listening on port 3000!')
})
const io = new Server(server)

let currentStatus
app.post('/call', async function (req, res) {
let data = req.body;
_bridge = await dialer.call('792751705', data.number);

 let interval = setInterval(async () => {
     let status = await _bridge.getStatus();
     console.log({status})
     if (currentStatus !== status) {
         currentStatus = status;
         io.emit('status', status)
         console.log({status})
     }

     if (
         currentStatus === "ANSWERED" ||
         currentStatus === "FAILED" ||
         currentStatus === "BUSY" ||
         currentStatus === "NO ANSWER"
     ) {
         console.log('stop')
         clearInterval(interval)
     }
  }, 1000)

res.json({ id: '123', status: _bridge.STATUSES.NEW });
})


app.get('/status', async function (req, res) {
 let status = await _bridge.getStatus();
 res.json({ id: '123', "status": status });
})
