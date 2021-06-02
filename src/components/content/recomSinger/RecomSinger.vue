<template>
  <div class="recomSinger">
    <h2><i></i>推荐歌手</h2>
    <singer :singerList="singerList"></singer>
  </div>
</template>

<script>
import Singer from "../../common/singer/Singer.vue";
export default {
  name: "WyyRecomsinger",
  components: {
    Singer,
  },
  props: {
    singerList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.recomSinger {
  h2 {
    margin: 15px;
    padding: 15px 0;

    i {
      width: 5px;
      height: 17px;
      background-color: rgb(84, 154, 171);
      margin-right: 5px;
      display: inline-block;
    }
  }
}
</style>