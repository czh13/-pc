<template>
  <div class="recomSong">
    <h2><i></i>推荐歌单</h2>
    <song-sheet :songList="songList"></song-sheet>
  </div>
</template>

<script>
import SongSheet from "../../../components/common/songSheet/SongSheet";
export default {
  name: "WyyRecomsong",
  components: {
    SongSheet,
  },
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
  methods: {},
};
</script>

<style lang="less" scoped>
.recomSong h2 {
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