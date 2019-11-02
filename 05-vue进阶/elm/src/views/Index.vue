<template>
    <div>
        <TabBar :data="tabbarData"></TabBar>
        <router-view></router-view>
    </div>
</template>


<script>
import TabBar from "../components/TabBar"
export default {
    components:{
        TabBar
    },
    data(){
        return{
            tabbarData:[
                {title:"首页",icon:"home",path:"/home"},
                {title:"订单",icon:"file-text-o",path:"/order"},
                {title:"我的",icon:"user",path:"/mine"}
            ]
        }
    }
}
</script>
