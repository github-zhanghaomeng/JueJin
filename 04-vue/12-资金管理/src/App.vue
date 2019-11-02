<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import jwt_code from 'jwt-decode'
export default{
  created(){
    if(localStorage.eleToken){
      const decode = localStorage.eleToken;
      this.$store.dispatch("setIsAutnenticated",!this.isEmpty(decode))
      this.$store.dispatch("setUser",decode)
    }
  },
  methods:{
    isEmpty(value){
      return(
        value === undefined ||
        value === null
      )
    }
  }
}

</script>



<style>
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
