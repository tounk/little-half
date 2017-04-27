import Vue from 'vue'
import Router from 'vue-router'
import Master from 'master'
import Login from '../components/login'
import firstPage from '../components/firstPage'
import xiugai from '../components/xiugai'
import manpower from '../components/manpower'
import empoyer from '../components/empoyer'
import job from '../components/job'
import foster from '../components/foster'
import insueence from '../components/insueence'
import wrge from '../components/wrge'
import system from '../components/system'
import add1 from '../components/addpersonInfor1'
import zhiding2 from '../components/zhiding2'
import add3 from '../components/add3'
import zhiding4 from '../components/zhiding4'
import tianjia5 from '../components/tianjia5'
import zhiding6 from '../components/zhiding6'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Login',component: Login},
    {path: '/manpower',name: 'manpower',component: manpower},
    {path: '/firstPage',name: 'firstPage',component: firstPage},
    {path: '/xiugai',name: 'xiugai',component: xiugai},
    {path: '/empoyer',name: 'empoyer',component: empoyer},
    {path: '/job',name: 'job',component: job},
    {path: '/foster',name: 'foster',component: foster},
    {path: '/insueence',name: 'insueence',component: insueence},
    {path: '/wrge',name: 'wrge',component: wrge},
    {path: '/system',name: 'system',component: system},
    {path: '/add1',name: 'add1',component: add1},
    {path: '/zhiding2',name: 'zhiding2',component: zhiding2},
    {path: '/add3',name: 'add3',component: add3},
    {path: '/zhiding4',name: 'zhiding4',component: zhiding4},
    {path: '/tianjia5',name: 'tianjia5',component: tianjia5},
    {path: '/zhiding6',name: 'zhiding6',component: zhiding6}
    ]
})
