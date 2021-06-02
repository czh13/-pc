<template>
  <div class="list">
    <div class="item" v-for="item in songList" :key="item.id">
      <div class="item-box">
        <el-image :src="item.picUrl"></el-image>
      </div>
      <div class="item-title">
        {{ item.name }}
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WyySongsheet",
  data() {
    return {};
  },
  props: {
    songList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {},
  methods: {
    itemclick() {
      console.log(this.songList);
    },
  },
};
</script>

<style lang='less'  scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 25px;

  .item {
    justify-content: left;
    cursor: pointer;
    // flex: 13.5%;
    flex: 0 0 13.5%;
    padding: 0px 12px 30px 5px;

    .item-box {
      white-space: nowrap;
      width: 100%;
      height: 130px;
      transition: all 0.4s;
      background: url("../../../assets/img/coverall.png") -4px 650px;

      &:hover {
        background: url("../../../assets/img/coverall.png") -0px 650px;
        transition: all 0.2s;
      }

      .el-image {
        height: 130px;
        width: 130px;
      }
    }
    .item-title {
      font-size: 13px;
      line-height: 1.3;
      font-weight: 700;
      margin: 7px 0;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>