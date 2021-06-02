<template>
  <div class="list">
    <div v-for="item in singerList" :key="item.id" class="singItem">
      <div class="img">
        <el-image :src="item.picUrl"></el-image>
      </div>
      <div class="info">
        <span class="name">{{ item.name }}</span>
        <span class="musicSize">单曲:{{ item.musicSize }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WyySinger",
  data() {
    return {};
  },
  props: {
    singerList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .singItem {
    padding: 20px;
    flex: 13.5%;

    .img {
      display: flex;
      justify-content: center;
      cursor: pointer;

      .el-image {
        display: flex;
        justify-content: center;
        border-radius: 50%;
        box-shadow: 0px 0px 12px #7b7b7b;
        width: 102px;
        height: 94px;
      }
    }
    .info{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      .musicSize{
        margin-top: 6px;
        font-size: 14px;
        color: #ca3636;
      }
    }
  }
}
</style>