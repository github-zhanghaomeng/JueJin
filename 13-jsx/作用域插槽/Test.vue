<template>
  <div>
    <!-- 没有name -->
    <!-- <slot :foo='foo'></slot> -->
    <!-- 有name -->
    <slot :foo='foo' name="wangcai"></slot>
  </div>
</template>
<script>
export default {
  data(){
    return{
      foo:'bar'
    }
  }
}
</script>

