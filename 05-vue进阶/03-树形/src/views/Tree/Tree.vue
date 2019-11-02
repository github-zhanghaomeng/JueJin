<template>
  <li>
    <div @click="toggle">
        {{data.title}}
        <span v-show="isFolder">[{{open ? "-" : "+"}}]</span>
    </div>
    <ul v-if="isFolder" v-show="open">
        <Tree v-for="child in data.children" :key="child.title" :data="child"></Tree>
    </ul>
  </li>
</template>



<script>

export default {
  name: "Tree",
  data() {
    return {
     open:false,
    };
  },
  props: {
   data:{
       type:Object,
       require:true,
       default:()=>({})
   }
  },
  methods: {
   toggle(){
      if(this.isFolder){
          this.open = !this.open
      }
   }
  },
  computed: {
      isFolder(){
          return this.data.children && this.data.children.length
      }
  }
};
</script>