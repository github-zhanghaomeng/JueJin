<template>
  <div class="login">
    <div class="container">
      <div class="title">用户登录</div>
      <div class="content">
        <form>
          <InputGroup label="邮箱" placeholder="请输入邮箱" v-model="user.email"></InputGroup>
          <InputGroup label="密码" placeholder="请输入密码" v-model="user.password" type="password"></InputGroup>
        </form>
        <div class="btn_wrap">
            <KButton
            :disabled='false'
            @click="loginClick"
            >登录</KButton>
        </div>
      </div>
      <div class="footer_wrap">
          <button class="register" @click="$router.push('/register')">注册</button>
      </div>
    </div>
  </div>
</template>



<script>
import InputGroup from "../components/InputGroup";
import KButton from "../components/KButton";
export default {
  components: {
    InputGroup,
    KButton
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods:{
      loginClick(){
           var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
           if(!reg.test(this.user.email)){
               alert("邮箱格式不正确")
               return 
           }
           this.$axios.post("http://160.238.86.82:5002/api/users/login",this.user)
           .then(res=>{
               alert("登陆成功")
           },error=>{
               alert("登录失败")
               return false
           })
      }
  }
};
</script>




<style scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
}
.title {
  margin-top: 80px;
  font-size: 22px;
  text-align: center;
}
.footer_wrap {
  position: absolute;
  left: 0;
  bottom: 16px;
  text-align: center;
  width: 100%;
  color: #888;
}
.footer_wrap .register {
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #7b8ca9;
}
.content,
.btn_wrap {
  margin-top: 30px;
}
</style>