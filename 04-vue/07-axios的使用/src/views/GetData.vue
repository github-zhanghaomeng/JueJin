<template>
  <div id="getdata">
      <button @click="f">获取数据</button>
      <p>{{msg}}</p>
  </div>
</template>

<script>
import axios from "axios"
// import {constants} from 'crypto'
export default {
    data(){
        return{
            msg : ""
        }
    },
    methods:{
        f(){
            axios.get("https://www.easy-mock.com/mock/5d3ebdfb327cee3134a3d017/")
            .then(res=>{
                // console.log(res.data.subjects[0].title)
                // return this.msg = res.data.subjects[0].title
                
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>


