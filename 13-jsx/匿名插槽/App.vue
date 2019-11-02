
<template>
<!-- 匿名插槽有两种形式  -->
  <div id="app"> 
    <Test>hello</Test>  
    <Test>
      <template v-slot:default>Hello</template>
    </Test>
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