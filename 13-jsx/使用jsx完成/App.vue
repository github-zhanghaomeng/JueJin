<template>
  <div id="app">
    <Test :data="['html','css','js']" :render='render'>App</Test>
   
  </div>
</template>

<script>
import Test from './Test'
export default {
  components:{
    Test
  },
  methods:{
    render(h,data){
      return <span>{data}</span>
    }
  }
}
</script>