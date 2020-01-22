import axios from 'axios';

let host = 'http://127.0.0.1:8000';

// 获取文章列表
export const GET_ARTICLE_LIST = params => {return axios.get(`${host}/article/`);};

// 写文章
export const POST_ARTICLE_LIST = params => {return axios.post(`${host}/article/`, params);};
