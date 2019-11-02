<template>
  <div>
    <p>我是subcounter子组件，当前counter的值为{{this.$store.state.counter}}</p>
    <button @click="subnum">减1</button>
  </div>
</template>

<script>
export default {
    methods:{
        subnum(){
            // this.$store.state.counter--   //第一种方法
            this.$store.commit("sub")       //第二种方法
        }
    }
}
</script>

