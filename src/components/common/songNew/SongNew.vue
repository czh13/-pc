<template>
  <div class="list">
    <el-row :gutter="12">
      <el-col :span="12" v-for="(item,index) in musicList" :key="item.id">
        <el-card shadow="always">
          <span class="index">{{index+1}}</span>
          <div class="img">
            <el-image :src=item.picUrl></el-image>
          </div>
          <span class="musicName">{{item.name}}</span>
          <span class="albomName">《{{ item.song.album.name}}》</span>
          <span class="singerName">{{item.song.artists[0].name}}</span>
        </el-card>  
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'WyySongnew',
  components: {  },
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
 // /deep/  深度选择器
  /deep/ .el-card__body{
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .list{
    .el-card{
      margin: 5px;
      &:hover{
        cursor: pointer;
      }
      span{
        display: flex;
        justify-content: center;
      }
      .index{
        width: 1px;
        margin-left:20px ;
      }
      .img{
        height: 65px;
        width: 65px;
        padding: 5px;
        margin: 0 25px;
      }
      .musicName{
        display: block;
        flex: 1;
        font-size: 14px;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .albomName{
        display: block;
        flex: 1.5;
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: center;
        white-space: nowrap;
      }
      .singerName{
        display: block;
        flex: 1;
        font-weight: 700;
        white-space: nowrap;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
      }
    }
  }
</style>