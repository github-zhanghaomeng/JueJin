<template>
  <div>
    <div class="home">
      首页面
    </div>
    <p>当前的用户为{{$store.state.username}}</p>
  </div>
</template>

<script>
import {getUser} from '../api/user'
export default {
  async mounted(){
    let a = await getUser()
    console.log(a)
  }
}
</script>


