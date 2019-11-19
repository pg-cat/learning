//  引入SRC里面的所有文件，并且使用
//  接收swiper.js
window.$ = require('./src/jquery.js');
import swiper from './src/swiper';
import tabbar from './src/tabbar';
import goImg from './src/goImg';

import './src/style.css';

tabbar.shuchu();

swiper.shuchu();

goImg.img();