<template>
    <div>
        <p>我是subcounter子组件，当前的counter值为{{counter}}</p>
        <button @click="subnum">减1</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
            ...mapState(["counter"])
        },
    methods:{
        subnum(){
            // this.$store.commit("sub")
            this.counter--
        },
        
    }
}
</script>

