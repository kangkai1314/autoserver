import axios from 'axios'
var service = axios.create({
  baseURL: '/api',
  timeout: 5000

})

export default service
