<template>
  <div>
    <el-submenu :index="data.path" v-for="item in data.children" :key="item.id">
      <template slot="title">
        <router-link :to="item.path">{{item.name}}</router-link>
      </template>
      <ReSubMenu :data="item" v-if="item.children"></ReSubMenu>
    </el-submenu>
  </div>
</template>


<script>
export default {
  name: "ReSubMenu",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>