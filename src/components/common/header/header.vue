<template>
  <div class="free_header">
    <div class="header content-width">
      <div class="logo" @click="toHome()">
        <img src="../../../assets/img/logo.png" alt="" />
      </div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="rgb(84,154,171)"
        :default-active="activeIndex"
      >
        <el-menu-item :index="'/recom'" @click="toPage('/recom')"
          >发现音乐</el-menu-item
        >
        <el-menu-item :index="'/rank'" @click="toPage('/rank')"
          >排行榜</el-menu-item
        >
        <el-menu-item :index="'/song'" @click="toPage('/song')"
          >歌单</el-menu-item
        >
        <el-menu-item :index="'/singer'" @click="toPage('/singer')"
          >歌手</el-menu-item
        >
        <el-menu-item :index="'/mv'" @click="toPage('/mv')">MV</el-menu-item>
      </el-menu>
      <div>
        <el-row :gutter="20">
          <el-col :span="25">
            <el-input
              placeholder="音乐 / 歌手 / 歌单 / mv"
              clearable
              v-model="inputValue"
              @keyup.enter.native="toSearch"
            >
              <el-button
                class="searchBtn"
                size="mini"
                slot="append"
                icon="el-icon-search"
                @click="toSearch()"
              ></el-button>
            </el-input>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "name",
  methods: {
    toPage(path) {
      // 方法跳转路由
      this.$router.push(path);
      //每次点击就将地址赋值给activeIndex
      this.activeIndex = path;
      console.log(this.activeIndex);
    },
    toHome() {
      //当点击logo就回到最开始的页面，发现音乐应该被选中
      this.$router.push("/home");
      this.activeIndex = "/recom";
    },
    toSearch(){
      if(this.inputValue==''){
        // console.log(this.$message)//这个玩意是element里的
        return this.$message.error('搜索关键词不能为空')
      }
      this.$router.push({
        path:'/search'
      })
    }
  },
  data() {
    return {
      activeIndex: "/recom",
      inputValue: "",
    };
  },
  props: {
    // 利用会默认显示的设置状态，所以写在props，而activeIndex和index的情况要相同，所以用:
    // element ui提供的代码名，所以可能内部有进行的判断
    index: {
      type: String,
      default: "/recom",
    },
  },
};
</script>

<style lang="less" scoped>
.free_header {
  height: 70px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  display: flex;
  margin: 0 auto;
  min-width: 1200px;
  z-index: 20;
  box-shadow: 0 5px 35px -1px rgba(2, 10, 38, 0.1);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 200px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
}
div .el-menu {
  border-bottom: 0px;

  .el-menu-item {
    padding: 0 30px;
    font-weight: 700;
  }
}
.searchBtn {
  &:hover {
    color: rgb(84, 154, 171);
  }
}
</style>