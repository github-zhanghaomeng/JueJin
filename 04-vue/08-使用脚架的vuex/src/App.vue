<template>
  <div id="app">
   <p>我是父组件，当前counter的值为{{this.$store.state.counter}}</p>
   <br/>
   <add-counter></add-counter>
   <br>
   <sub-counter></sub-counter>
   </div>
   
  
</template>

<script>
import AddCounter from "@/components/AddCounter.vue"
import SubCounter from "@/components/SubCounter.vue"
export default {
  components:{
    AddCounter,
    SubCounter
  }
}
</script>

