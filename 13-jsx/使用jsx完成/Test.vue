<template>
  <div>
    <template v-for="(item,index) in data">
      <li :key="index" v-if='!render'>{{item}}</li>
      <ListItem v-else :key="index" :item='item' :render='render'></ListItem>
    </template>
  </div>
</template>

<script>
import ListItem from "./ListItem";
export default {
  props: {
    data: {
      type: Array
    },
    render:{
        type:Function
    }
  },
  components:{
      ListItem
  }
};
</script>