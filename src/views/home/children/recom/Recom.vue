<template>
  <div class="free_recom">
    <div class="content-width">
      <swiper :swiperInfo="swiperInfo" class="swiper"></swiper>
      <div class="main-body">
        <recom-song :songList="recomSongInfo.songList"></recom-song>
        <recom-music :musicList="recomMusicList"></recom-music>
        <recom-singer :singerList="recomSingerList.singerList"></recom-singer>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../../../../components/content/swiper/Swiper";
import RecomSong from "../../../../components/content/recomSong/RecomSong";
import RecomMusic from "../../../../components/content/recomMusic/RecomMusic";
import RecomSinger from "../../../../components/content/recomSinger/RecomSinger";

import {
  getSwiperInfo,
  getRecomSongList,
  getRecomMusicList,
  getRecomSingerList,
} from "../../../../networks/home";

export default {
  name: "WyyRecom",
  components: {
    Swiper,
    RecomSong,
    RecomMusic,
    RecomSinger,
  },
  data() {
    return {
      // 轮播图
      swiperInfo: [],
      // 推荐歌单
      recomSongInfo: {
        limit: 28, //数据数量
        songList: [],
      },
      recomMusicList: [],
      recomSingerList: {
        offset:0,
        limit:28,
        singerList:[]
      }
    };
  },
  created() {
    this.getSwiperInfo();
    this.getRecomSongList(this.recomSongInfo.limit);
    this.getRecomMusicList();
    this.getRecomSingerList(this.recomSingerList.offset,this.recomSingerList.limit);
  },
  methods: {
    // 轮播图
    // getSwiperInfo(){
    //   getSwiperInfo().then(res=>{
    //     this.swiperInfo=res.banners
    //   })
    // }
    async getSwiperInfo() {
      //配合着await使用
      let res = await getSwiperInfo(); //await 后面接收Promise对象
      this.swiperInfo = res.banners;
      // console.log(this.swiperInfo)
    },
    async getRecomSongList(limit) {
      let res = await getRecomSongList(limit);
      this.recomSongInfo.songList = res.result;
      // console.log(this.recomSongInfo.songList)
    },
    async getRecomMusicList() {
      let res = await getRecomMusicList();
      this.recomMusicList = res.result;
    },
    async getRecomSingerList(offset,limit){
      let res=await getRecomSingerList(offset,limit)
      console.log(res.artists)
      this.recomSingerList.singerList=res.artists
    }
  },
};
</script>

<style scoped>
.swiper {
  margin: 30px 0;
}
</style>