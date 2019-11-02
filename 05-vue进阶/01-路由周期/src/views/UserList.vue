<template>
    <div>
        <li><router-link to="/user/detail/1">用户1</router-link></li>
        <li><router-link to="/user/detail?id=2">用户2</router-link></li>
        <li><router-link to="/user/detail?id=3">用户3</router-link></li>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to,from,next){
        console.log("beforeRouteEnter")
        if(from.name === 'useradd'){
            console.log("是从添加用户过来的")
        }
        next(vm=>{
            console.log(vm)
        })
    }
}
</script>