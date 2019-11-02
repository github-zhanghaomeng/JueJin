<template>
  <div>
    <p>我是addcounter子组件，当前的counter值为{{counter}}</p>
    <p>我是addcounter子组件，当前的name值为{{name}}</p>
    <p>我使用data进行传数据，counter当前的值为{{msg}}</p>
    <button @click="addnum">加1</button>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    addnum() {
      // this.$store.commit("add")
      this.$store.state.counter++;
    }
  },
  computed: {
    ...mapState(["counter","name"])  //第一种方法  自动映射
    
    
    // counter(){
    //     return this.$store.state.counter  //第二种方法  
    // },
    // name(){
    //     return this.$store.state.name
    // }
  },
  data(){
      return{
          msg:this.$store.state.counter
      }
  }

};
</script>

