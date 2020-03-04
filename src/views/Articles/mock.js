export const category = [
  {
    categoryId: '01',
    categoryTitle: 'js'
  },
  {
    categoryId: '02',
    categoryTitle: 'node'
  },
  {
    categoryId: '03',
    categoryTitle: 'book'
  }
];

export const articleList = [
  {
    categoryId: '01',
    categoryTitle: 'js',
    articleList: [
      {
        id: '0101', // 01文集编号 01文章编号
        title: 'Title 1',
        publishDate: 1583315601995
      },
      {
        id: '0102',
        title: 'Title 2',
        publishDate: 1583315601995
      }
    ]
  }
];

export const articleDetail = {
  id: '0101',
  title: 'Title 1',
  publishDate: 1583315601995,
  categoryId: '01',
  categoryTitle: 'js',
  content: require('../../articles/LHS_RHS.md')
}
