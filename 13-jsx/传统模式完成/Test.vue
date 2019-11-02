<template>
    <div>
        <!-- 如果想使用a标签显示  则还得动用组件中的li变成a -->
       <li v-for="(item,index) in data" :key="index">{{item}}</li>
    </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Array
        }
    }
}
</script>