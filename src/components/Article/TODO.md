# Article

## 交互部分
按照文集形式

## 数据部分
改用接口获取的方式
1. getCategory
- response
```
[
  {
    categoryId: '01',
    categoryTitle: 'js'
  },
  {
    categoryId: '02',
    categoryTitle: 'node'
  }
]
```

2. getArticleList
- request
```
{
  categoryId: '01'
}
```
- response
```
[{
  categoryId: '01',
  categoryTitle: 'js',
  articleList: [{
    id: '0101', // 01文集编号 01文章编号
    title: 'Title 1',
    publishDate: timestamp
  },
  {
    id: '0102',
    title: 'Title 2',
    publishDate: timestamp
  }]
}]
```

3. getArticle
- request
```
{
  id: '0101'
}
```
- response
```
[{
  id: '0101',
  title: 'Title 1',
  publishDate: timestamp,
  categoryId: '01',
  categoryTitle: 'js',
  content: '' // md
}]
```