import '@babel/polyfill';
import * as $ from 'jquery';
import '@css/style.css';
import Post from '@model/post';
import json from '@assets/data';
import webpackLogo from '@assets/icon-square-big.png';
import xml from '@assets/data.xml';
import csv from '@/assets/data.csv';
import './less/style.less';
import './sass/style.scss';
import './sass/style.sass';

const post = new Post('Webpack Post Title', webpackLogo);
$('pre').addClass('code').html(post.toString());
console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);

async function start() {
  return await new Promise((r) => setTimeout(() => r('Async done.'), 2000));
  }
  start().then((res) => console.log(res));

  class Util {
    static id = Date.now();
    }
    console.log('Util Id:', Util.id);

