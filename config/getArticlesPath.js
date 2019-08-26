const fs = require('fs')

const { ARTICLE_PATH } = require('./consts')

const getArticalsName = () => {
  const articles = []
  const fileNames = fs.readdirSync(ARTICLE_PATH);
  fileNames.map(fileName => {
    articles.push(fileName)
  })
  return articles
}

module.exports.ALL_ARTICLES_NAME = getArticalsName()