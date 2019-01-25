var net = require('net')
var client = net.connect({port: 2226}, function () {
  console.log('connected to server')
})
client.on('senddata', function () {
  console.log('senddata')
})
