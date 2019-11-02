<template>
  <div>
    <k-form ref="loginName" :rules="rules" :model="model">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" type="text" placeholder="请输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" type="password" placeholder="请输入密码"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="submitMessage('loginName')">点击</button>
      </k-form-item>
    </k-form>
    {{model}}
  </div>
</template>


<script>
import KForm from "./Form";
import KFormItem from "./FormItem";
import KInput from "./Input";
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules:{
          username:[{required:true,message:"用户名不能为空"}],
          password:[{required:true,message:"密码不能为空"}]
      }
    };
  },
  components: {
    KForm,
    KFormItem,
    KInput
  },
  methods: {
    submitMessage(formName) {
        this.$refs[formName].validate(valid=>{
            if(valid){
                alert('请求登录')
            }else{
                alert('校验失败')
            }
        })
    }
  }
};
</script>