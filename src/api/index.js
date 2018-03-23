import axios from 'axios'
import server from '../config/server'

export default {
  request(method, uri, data = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

    var url = server.serverURI + uri
    // console.log('api', url);
    return axios({ method, url, data })
  }
}
