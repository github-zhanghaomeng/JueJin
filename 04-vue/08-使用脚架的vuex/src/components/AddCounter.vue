<template>
  <div>
    <p>我是addcounter子组件，当前counter的值为{{this.$store.state.counter}}</p>
    <button @click="addnum">加1</button>
  </div>
</template>

<script>
export default {
    methods:{
        addnum(){
            // this.$store.state.counter++  //第一种方法
            this.$store.commit("add")   //第二种方法
        }
    }
}
</script>

