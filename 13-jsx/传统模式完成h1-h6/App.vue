<template>
  <div id="app">
    <Test :n=1>hello</Test>
    <Test :n=2>hello</Test>
    <Test :n=3>hello</Test>
    <Test :n=4>hello</Test>
    <Test :n=5>hello</Test>
    <Test :n=6>hello</Test>
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