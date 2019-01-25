const axios = require('axios')
var instance = axios.create(
  {
    baseURI: 'http://127.0.0.1:8000',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  }
)
instance.get('/framework/funcs/?page=2').then(function (response) {
  console.log(response)
}).catch(function (error) {
  console.log(error)
})
