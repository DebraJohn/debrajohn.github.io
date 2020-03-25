import axios from 'axios'

const IS_DEV = false

export function get(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(IS_DEV ? `http://localhost:8888${url}` : `http://49.235.94.148:8888${url}`, { params: {...param} }).then(res => {
    // axios.get(`http://localhost:8888${url}`, { params: {...param} }).then(res => {
      resolve(res.data)
    }).catch(reject)
  })
}