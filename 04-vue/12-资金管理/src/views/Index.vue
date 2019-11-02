<template>
  <div class="index">
    <head-nav></head-nav>
    <left-nav></left-nav>
    <div class="rightContainer">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import HeadNav from "../components/HeadNav";
import LeftNav from "../components/LeftNav";
export default {
  components: {
    HeadNav,
    LeftNav
  }
};
</script>


<style scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>

