<template>
    <div>
        <Input v-model="username" placeholder="输入用户名" style="width: 150px" />
        <Button type="primary" @click="login">登录</Button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            username:''
        }
    },
 
    methods:{
        ...mapActions(['toLogin']),
        login(){
            // alert('...')
            this['toLogin'](this.username).then(data=>{
                this.$router.push('/')
            },err=>{
                this.$Message.error(err)
            })
            // console.log(this.username)
            
        }
    },
    //    watch:{
    //     username(){
    //         console.log(this.username)
    //     }
    // },
}
</script>