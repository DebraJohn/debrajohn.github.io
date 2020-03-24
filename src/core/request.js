import axios from 'axios'

export function get(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:8888${url}`, { params: {...param} }).then(res => {
      resolve(res.data)
    }).catch(reject)
  })
}