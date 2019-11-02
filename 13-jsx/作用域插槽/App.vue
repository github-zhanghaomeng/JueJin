<template>
  <div id="app"> 
    <!-- 作用域插槽 即使是default 也会显示 但对于具名插槽就不显示 -->
    <!-- <Test>
      <template v-slot:default>Hello</template>
    </Test> -->
    <!-- 在Test.vue 中没有name时 默认为default -->
    <!-- <Test>
      <template v-slot:default='ctx'>{{ctx.foo}}</template>
    </Test> -->
    <Test>
      <template v-slot:wangcai='ctx'>{{ctx.foo}}</template>
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