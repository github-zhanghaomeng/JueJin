
export default{
   props:{
      item:{
         type:String
      },
      render:{
         type:Function
      }
   },
   render(h){
      return this.render(h,this.item)
   }
}
