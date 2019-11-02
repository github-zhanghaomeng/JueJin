<template>
    <div class="find">
        <Header title="发现" bt_cn="plus"></Header>
        <div class="content">
            <Cell
            src='pyq.jpg'
            title="朋友圈"
            path="/circle"
            ></Cell>
        </div>
    </div>
</template>


<script>
import Header from '../components/Header'
import Cell from '../components/Cell1'
export default {
    components:{
        Header,Cell
    },
    data(){
        return{
            
        }
    }
}
</script>


<style scoped>
.find {
  width: 100%;
  height: calc(100% - 55px);
  position: relative;
  box-sizing: border-box;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
}
</style>