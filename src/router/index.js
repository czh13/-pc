import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// const Login = () => import("@/views/login/Login");
const Home = () => import("../views/home/home");
const Recom = () => import("../views/home/children/recom/Recom");
const Rank = () => import("../views/home/children/rank/Rank");
const Singer = () => import("../views/home/children/singer/Singer");
const Song = () => import("../views/home/children/song/Song");
const Mv = () => import("../views/home/children/mv/Mv");
// const SongDetails = () => import("@/views/home/childComp/songDetails/SongDetails");
// const MvDetails = () => import("@/views/home/childComp/mvDetails/MvDetails")
// const SingerDetails =() => import("@/views/home/childComp/singerDetails/SingerDetails")
// const AlbumDetails =() => import("@/views/home/childComp/albumDetails/AlbumDetails")
const Search =() => import("../views/home/children/search/Search")
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  { //首页
    path: "/home",
    component: Home,
    redirect: "/recom",
    children: [
      {
        //推荐
        path: "/recom",
        component: Recom
      },
      {
        //排行
        path: "/rank",
        component: Rank
      },
      {
        //歌手
        path: "/singer",
        component: Singer
      },
      {
        //歌单
        path: "/song",
        component: Song
      },
      {
        //mv
        path: "/mv",
        component: Mv
      },
      {
        path:'/search',
        component:Search
      }
    ]
  }
];

const router = new VueRouter({
  // BUG: 刷新出现Cannot GET /recom
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
