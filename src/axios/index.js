
/* jshint esversion: 6 */

import axios from 'axios';
import qs from 'qs';
//let hostUrl='http://192.168.100.191:8080/rest/'
//let hostUrl='http://192.168.100.131:8080/rest/'
let hostUrl='https://needbao.tianrx.com/front/insuranceinfo'  //生产
// let hostUrl='http://192.168.100.160/front/insuranceinfo'  //测试地址
axios.defaults.baseURL = hostUrl;

axios.interceptors.request.use(function (config) {



  if (config.headers['Content-Type'] !== 'multipart/form-data') {
    config.transformRequest = [function (data) {
      return qs.stringify(data);
    }]
  }



  return config;
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // return false;
  //if (response.data.msg == '未登录') {
    
    //setTimeout(() => {
   ////   window.location.href = "login.html";
   // }, 2500)
  //}
 

  return response.data
}, function (error) {
 
  return Promise.reject(error);
});

export default axios;