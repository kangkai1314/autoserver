const axios = require('axios')
var fs = require('fs')
console.log('this is for axios')
axios.get('http://127.0.0.1:8000/api/jobs/').then(
  response =>{
    console.log(response.data)
  })

function readfiles () {
  var data = 'hello world'
  var writerstream = fs.createWriteStream('a.txt')
  writerstream.write(data)
  writerstream.end()
  writerstream.on('finish', function () {
    console.log('write finshed')
  })
  writerstream.on('err', function () {
    console.log('write error')
  })
  console.log('program executed finished')
}
function say (word) {
  console.log(word)
}
function execute (someFunction, value) {
  someFunction(value)
}
execute(say, 'heelo')
function executeennormous (somefunction, value) {
  somefunction(value)
}
executeennormous(function (word) {
  console.log(word)
}, 'hello')
readfiles()
console.log(__filename,__dirname);
process.on('exit', function (code) {
  console.log('about to exit with code: ' + code);
});
