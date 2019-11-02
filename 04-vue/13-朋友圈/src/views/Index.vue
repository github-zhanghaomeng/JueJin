<template>
  <div class="index">
    <router-view></router-view>
    <TabBar :data="TabBarData"></TabBar>
  </div>
</template>


<script>
import TabBar from "../components/TabBar";
export default {
  components: {
    TabBar
  },
  data() {
    return {
      TabBarData: [
        { title: "微信", icon: "comment", path: "/wchart" },
        { title: "通讯录", icon: "address-book", path: "/addbook" },
        { title: "发现", icon: "compass", path: "/find" },
        { title: "我", icon: "user", path: "/mine" }
      ]
    };
  }
};
</script>
