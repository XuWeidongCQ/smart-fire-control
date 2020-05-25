import axios from 'axios'
import authApi from './auth-api'

let pagePool = axios.create({
  baseURL:'https://www.zhxf.yuhualab.com:8080'
})

const Http = {}
const allApi = Object.assign({},authApi)

for (let key in allApi){
  let method = allApi[key]['method'];
  let url = allApi[key]['url'];

  switch (method) {
    case 'get':
      Http[key] = function(config={}) {
        return pagePool[method](url,config)
      };
      break;
    case 'delete':
      Http[key] = function(config={}) {
        return pagePool[method](url,config)
      };
      break;
    case 'post':
      Http[key] = function (data=[],config={}) {
        return pagePool[method](url,data,config)
      };
      break;
    case 'put':
      Http[key] = function (data=[],config={}) {
        return pagePool[method](url,data,config)
      };
      break;
    default:
      Http[key] = null;
  }
}

export default Http