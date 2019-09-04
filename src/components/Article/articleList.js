const ARTICLES = [
  {
    id: 'Array',
    title: '数组基础 | JS',
    postTime: '2019.08.13',
    tag:['js']
  },
  {
    id: 'UsingMapInsteadOfIfElse',
    title: '用遍历代替if/else | JS',
    postTime: '2019.07.29',
    tag:['js']
  },
  {
    id: 'Introduce_node',
    title: '基础概念 | NodeJs',
    postTime: '2019.05.05',    
    tag:['node']
  },
]

const getArticalPath = (articleList) => {
  articleList.map(article => article.content = require(`../../articles/${article.id}.md`))
  return articleList
}

const getTags = (articleList) => {
  const tagArray = []
  articleList.map(article => {
    tagArray.push(...article.tag)
  })
  return Array.from(new Set(tagArray))
}

const ARTICLE_LIST = getArticalPath(ARTICLES);
const TAG_LIST = getTags(ARTICLES);


module.exports = {
  ARTICLE_LIST,
  TAG_LIST
}