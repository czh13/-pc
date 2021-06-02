<template>
  <div id='home'>
    <el-container>
      <el-header>
        <free-header></free-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <free-footer></free-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import FreeHeader from '../../components/common/header/header.vue'
  import FreeFooter from '../../components/common/footer/footer'
  
export default {
  name: 'name',
  components:{
    FreeHeader,
    FreeFooter
  }

}
</script>

<style lang='less' scoped>
div .el-header{
  padding: 0;
}
div .el-footer{
  padding: 0;
}
</style>