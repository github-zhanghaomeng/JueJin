<template>
    <div>
        userDetail{{this.$route.query.id}}
        {{this.$route.params.id}}
    </div>
</template>

<script>
export default {
    // hash模式下才可以监控到
    // watch:{
    //     $route(){
    //         alert(1)
    //     }
    // }
    beforeRouteUpdate(to,from,next){
        console.log("beforeRouteUpdate")
        alert(1);
        next()

    }
}
</script>