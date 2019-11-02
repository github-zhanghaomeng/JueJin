<template>
  <div>
    <SubMenu v-for="child in data.children" :key="child.title">
        <template #title>{{child.title}}</template>
        <Reb v-if="child.children" :data="child"></Reb>
    </SubMenu>
  </div>
</template>


<script>
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
export default {
  name: "Reb",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    SubMenu,
    MenuItem
  }
};
</script>