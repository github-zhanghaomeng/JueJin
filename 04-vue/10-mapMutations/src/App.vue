<template>
  <div id="app">
    <p>我是父组件，当前counter的值为{{counter}}</p>
    <br>
    <add-counter></add-counter>
    <sub-counter></sub-counter>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddCounter from "@/components/AddCounter"
import SubCounter from "@/components/SubCounter"
export default {
  computed: {
    ...mapState(["counter"])
  },
  components:{
    AddCounter,
    SubCounter
  }
};
</script>

