<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt />
      <InputGroup
        type="number"
        placeholder="手机号"
        :disabled="disabled"
        :btnTitle="btnTitle"
        v-model="phone"
        :error="errors.phone"
        @click="getVerifyCode"
      />
      <InputGroup type="number" placeholder="验证码" v-model="verifyCode" :error="errors.code" />
    </div>
    <div class="login_des">
      <p>
          新用户登录即自动注册，表示已同意
          <span>《用户服务协议》</span>
      </p>
    </div>
    <div class="login_btn">
        <button :disabled='isClick' @click="handleLogin">登录</button>
    </div>
  </div>
</template>


<script>
import InputGroup from "../components/InputGroup";
import { setInterval, clearInterval } from "timers";
export default {
  components: {
    InputGroup
  },
  data() {
    return {
      phone: "",
      verifyCode: "",
      disabled: false,
      errors: {},
      btnTitle: "获取验证码"
    };
  },
  computed:{
      isClick(){
          if(!this.phone || !this.verifyCode){
              return true
          }else{
              return false
          }
      }
  },
  methods: {
    getVerifyCode() {
      if (this.validatePhone()) {
        this.validateBtn();
        this.$axios.post("/api/posts/sms_send",{
            tpl_id: "177604",
            key : 'b7296da6c3303cfb00ba2d52a69d7820',
            phone : this.phone
        })
        .then(res=>{
            console.log(res)
        })
      }
    // alert("hello")
    },
    validatePhone() {
      if (!this.phone) {
        this.errors = {
          phone: "手机号不能为空"
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: "请输入正确的手机号"
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
    validateBtn() {
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        } else {
          this.btnTitle = time + "秒后重填";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    handleLogin(){
        this.errors={};
        this.$axios.post("/api/posts/sms_back",{
            phone : this.phone,
            code : this.verifyCode
        }).then(res=>{
            localStorage.setItem("ele_login",true);
            this.$router.push('/');
        }).catch(err=>{
            this.errors = {code: err.response.data.msg}
        })
    }
  }
  
};
</script>



<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}
.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>