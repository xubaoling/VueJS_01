//import Vue from 'vue'
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from './components/UserReg.vue'
import Article from './components/Article.vue'

export default[{
    path:'/home',
    component:Home
  },
  {
    path:'/follow',
    component:Follow
  },
  {
    path:'/column',
    component:Column
},{
  path:"/user-info",
  component:UserInfo
},{
  path:'/',
  redirect:"/Home"
},{
  path:'*',
  redirect: "/Home"
}]
