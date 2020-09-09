import { get } from './request'

const api = {
    getCategory(params = {}) {
        return new Promise((resolve, reject) => {
            get('/article/getCategory', { ...params })
            .then(resolve)
            .catch(reject)
        })
    },
    getArticleList(params = {}) {
        return new Promise((resolve, reject) => {
            get('/article/getArticleList', { ...params })
            .then(resolve)
            .catch(reject)
        })
    }
}
export default api