//封装一些共用的方法


let app = {
    // app.f1(this,'admin','status','{{@$value._id}}')"
    f1:function(el,collectionName,attr,id){
        // alert('111')
        $.get('/admin/changeStatus',{collectionName:collectionName,attr:attr,id:id},function(data){
            // console.log(data)  //{message: "更新成功", success: true}
            if(data.success){
                if(el.src.indexOf('yes') != -1){
                    el.src = '/admin/images/no.gif'
                }else{
                    el.src = '/admin/images/yes.gif'
                }
            }
        })

    },
    
}