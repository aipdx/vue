import axios from 'axios'
import _get from 'lodash.get'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 60000, // 请求超时时间
  withCredentials: true,
  headers: {
    'cache-control': 'no-cache',
    'Pragma': 'no-cache'
  }
});

service.interceptors.response.use((res) => {
  const code = _get(res, 'data.code');
  const msg = _get(res, 'data.msg');
  if (code === 50014) {
    store.commit('turnOnShowLoginBox');
    return;
  }

  if (code !== 1 && code !== 200 &&  msg){
    Message.error(msg);
    return Promise.reject(msg);
  }
  return res.data;
}, error => {
  return Promise.reject(error);
});

export default service
