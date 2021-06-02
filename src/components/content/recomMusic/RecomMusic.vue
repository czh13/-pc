<template>
  <div class="recomMusic">
    <h2><i></i>推荐歌曲</h2>
    <song-new :musicList='musicList'></song-new>
  </div>
</template>

<script>
import SongNew from '../../common/songNew/SongNew'
export default {
  name: 'WyyRecommusic',
  components: {
    SongNew
  },
  data() {
    return {
      
    };
  },
  props:{
    musicList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.recomMusic h2 {
  margin: 15px;

  // 侧边小竖线
  i {
    width: 5px;
    height: 17px;
    background-color: rgb(84, 154, 171);
    margin-right: 5px;
    display: inline-block;
  }
}
</style>