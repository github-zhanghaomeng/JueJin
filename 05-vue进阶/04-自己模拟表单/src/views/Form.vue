<template>
    <div>
       <slot></slot>
    </div>
</template>


<script>
export default {
   provide(){
       return{
           form:this
       }
   },
   props:{
       model:{
           type:Object,
           default:()=>({})
       },
        rules:{
           type:Object,
           default:()=>({})
       }
   },
   methods:{
       validate(cb){
         let tasks = this.$children.filter(item=>item.prop).map(item=>item.validate())
         Promise.all(tasks).then(()=>cb(true)).catch(()=>cb(false))
       }
   }
}
</script>