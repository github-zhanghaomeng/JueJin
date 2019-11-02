<template>
    <div>
        <input type="text" v-model="username">
        <button @click="toList">去列表页面</button>
    </div>
</template>

<script>
export default {
    beforeRouteLeave(to,from,next){
        console.log("beforeRouteLeave")
        if(this.username){
            let confirm = window.confirm("您确定切换吗");
            if(confirm){
                next();
            }
        }else{
                next();
            }
    },
    methods:{
        toList(){
            this.$router.push('/user/list')
        }
    },
    data(){
        return {
            username:""
        }
    }
}
</script>