// 引入 bootstrap 的 css 样式
// require('../command/less/bootstrap.less');

// 引入 jquery
window.$ = require('../command/jquery.js');

// 重置标签属性，增加兼容性
require('./reset.less');

// 首页 css
require('./header.less');
require('./bodyIndex.less');
require('./footer.less');

// 首页 JS
require('./bodyIndex.js');


// node中process
// webpack-dev-middleware
// webpack-hot-middleware