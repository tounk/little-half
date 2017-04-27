// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import Jquery from 'jquery'
import ElementUI from 'element-ui'  //引入样式所需要的组件类库
import 'element-ui/lib/theme-default/index.css'
import _ from 'lodash'
import Vuex from 'vuex'
import UE from 'UE'
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueCookie);
Vue.use(Vuex);
window.$ = Jquery;
window._ =  _;

// const UE = require('UE');


/* eslint-disable no-new */
window.MyApp = {
    isLogin: false
};
window.UE = UE;
// window.UE =  UE.getEditor(window.ueTagId);
// window.UETagId = '';
//Vue.http.options.root = 'http://192.168.100.158:8010'

Vue.http.interceptors.push((request, next)  => {
  next((response) => {
    console.log(response);
    if (response.status == 200){
      if (response.data.result != '0') {
//      var result = JSON.parse(response.data);
//      console.log(response.data);
      }else{
        return response;
      }
    }else {
      return response;
    }
  });
});

new Vue({
  router
}).$mount('#start');
