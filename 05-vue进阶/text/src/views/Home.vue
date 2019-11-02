<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
      <el-submenu index="1" v-for="m in menuList" :key="m.id">
        <template #title><router-link :to="m.path">{{m.name}}</router-link></template>
        <ReSubMenu v-if="m.children" :data="m"></ReSubMenu>
      </el-submenu>
    </el-menu>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import ReSubMenu from "../components/menu/ReSubMenu";
import { mapState } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapState(["menuList"])
  },
  components: {
    ReSubMenu
  }
};
</script>