<template>
<!-- 当v-slot:default时 具名插槽不管用 -->
  <div id="app">   
    <Test>
      <!-- 显示 -->
      <template v-slot:wangcai>Hello</template>
    </Test>
    <Test>
      <!-- 不显示 -->
      <template v-slot:default>hello</template> 
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