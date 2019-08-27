const ARTICLE_TITLE = ['Array', 'UsingMapInsteadOfIfElse'];

const getArticalPath = () => {
  const dir_paths = {};
  ARTICLE_TITLE.map(item => {
    dir_paths[item] = require('../../articles/' + item + '.md');
  });
  return dir_paths
}
module.exports.ARTICLE_LIST = getArticalPath()