const ARTICLES = {
  Array: '数组基础 | JS',
  UsingMapInsteadOfIfElse: '用遍历代替if/else | JS',
  Introduce_node: '基础概念 | NodeJs'
}

const getArticalPath = () => {
  const article_data = {};
  let index = 0
  for (let item in ARTICLES) {
    article_data[index] = {
      title: ARTICLES[item],
      content: require(`../../articles/${item}.md`)
    }
    index++
  }
  return article_data
}

module.exports.ARTICLE_LIST = getArticalPath()