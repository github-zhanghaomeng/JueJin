
export default{
   props:{
      n:{
         type:Number
      }
   },
   render(h){
      let tag ='h'+this.n
       // return <tag><slot></slot></tag>  //错误写法
       return <tag>{this.$slots.default}</tag>
   }
}
