<template>
  <div id="app">
    <Test :data="['html','css','js']">App</Test>
   
  </div>
</template>

<script>
import Test from './Test'
export default {
  components:{
    Test
  }
}
</script>