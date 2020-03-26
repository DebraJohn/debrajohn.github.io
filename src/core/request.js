import axios from 'axios'
const { HOST } = global.Variables

export function get(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url, { params: {...param} }).then(res => {
      resolve(res.data)
    }).catch(reject)
  })
}