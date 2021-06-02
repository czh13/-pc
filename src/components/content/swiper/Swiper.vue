<template>
  <div>
    <el-carousel :interval="3000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in swiperInfo" :key="index">
        <h2 class="medium"><img :src="item.imageUrl" /></h2>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "WyySwiper",
  data() {
    return {};
  },
  props: {
    swiperInfo: {
      type: Array,
      dafult() {
        return [];
      },
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.el-carousel__item h2 {
  color: #475669;
  font-size: 14px;
  opacity: 0.8;
  line-height: 200px;
  margin: 0;
  img{
    width: 100%;
    height: 100%;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #a1aab8;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #c9d5e0;
}
</style>