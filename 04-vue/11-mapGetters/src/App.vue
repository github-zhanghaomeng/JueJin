<template>
  <div id="app">
    <p>{{list}}</p>
    <p>不及格的同学有{{failScore}}</p>
    <p>不及格的同学有{{this.$store.getters.failScore}}</p>

  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default{
  getters:{

  },
  computed:{
    ...mapState(["list"]),
    ...mapGetters(["failScore"])
  }
}

</script>

