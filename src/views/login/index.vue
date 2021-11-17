<template>
  <div class="login-container">
       <!-- <div class="logoImg">
       <img :src="imgs"  alt />
       <span class="text">|</span>
       <span class="text">AI值守平台</span>
    </div> -->
    <div class="login-form">
    <div class="login-form">
      <div class="login_word">登录</div>
      <div class="login_input">
        <el-alert
          v-if="isShowErrorMessage"
          :title="errorMessage"
          type="warning"
          show-icon
          :closable="false"
        />
        <el-form
          :model="loginForm"
          :rules="loginRules"
          ref="loginForm"
          class="input_ruleForm"
        >
          <el-form-item prop="username">
            <el-input
              v-model.trim="loginForm.username"
              placeholder="请输入用户名"
              maxlength="20"
              @keyup.enter.native="handleLogin"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" style="margin-top: 32px">
            <el-input
              type="password"
              v-model.trim="loginForm.password"
              placeholder="请输入密码"
              autocomplete="off"
              @keyup.enter.native="handleLogin"
            ></el-input>
          </el-form-item>
          <el-row type="flex" justify="space-between">
            <el-col>
              <el-form-item prop="rememberMe">
                <!-- <el-checkbox ref="rememberMe" v-model="loginForm.rememberMe"
                  >记住密码</el-checkbox
                > -->
              </el-form-item>
            </el-col>
          </el-row>
          <el-button type="primary" class="loginButton" @click="handleLogin"
            >登录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import * as api from "@/api/ai/login";
// import { initWebSocket } from "@/plugin/socket";
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value.trim()) {
        callback(new Error("请输入用户名！"));
      }else if(value.indexOf(" ")!=-1) {
        callback(new Error("用户名不能包含空格"));
      }else if(value.trim().length>=16) {
        callback(new Error("用户名最大长度为16！"));
      }else {
        callback();
      }
    };
    // 密码校验
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码！"));
      } else if (!value) {
        callback(new Error("密码输入错误！"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        password: "",
        username: "",
        rememberMe: true
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
          {
            pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,16}$/,
            message: "密码必须包含大小写字母和数字且长度在6-16之间",
          }
        ]
      },
      loading: false,
      isShowErrorMessage: false,
      errorMessage: "",
    };
  },
  mounted:{
  },
  methods: {
    // // 跳转到首页第一个显示菜单
    // handleToPage() {
    //   this.$router.replace({ path: "/3D/deviceManage" });
    // },
    // // 登录功能
    // handleLogin() {
    //   localStorage.getItem('noticeNum') && localStorage.removeItem('noticeNum');
    //   this.$refs.loginForm.validate(valid => {
    //     if (valid) {
    //       this.loading = true;
    //       const username = this.loginForm.username;
    //       const password = this.loginForm.password;
    //       // 登录以form-data形式传参
    //       const formData = new FormData();
    //       formData.set("username", username);
    //       formData.set("password", password);
    //       api
    //         .login(formData)
    //         .then(res => {
    //           const userInfo = res.result.userInfo;
    //           const token = (res.result && res.result.token) || '';
    //           localStorage.setItem("userInfo", JSON.stringify(userInfo));
    //           this.handleToPage();
    //           this.loading = false;
    //           this.$message({
    //             type: "success",
    //             message: "登录成功"
    //           });
    //             token && localStorage.setItem("token", token);
    //           // if (this.loginForm.rememberMe === true) {
    //           //   token && localStorage.setItem("token", token);
    //           // } else {
    //           //   token && sessionStorage.setItem("token", token);
    //           // }
    //          initWebSocket(userInfo,token);
    //         })
    //         .catch(res => {
    //           this.isShowErrorMessage = true;
    //           this.errorMessage = res.message;
    //           this.loading = false;
    //         });
    //     }
    //   });
    // },
  }
};
</script>
// <style lang="scss">
// @media screen and  (min-width:1300px) and (max-width:1650px){
//   .login-container .login-form {
//     height: 564px !important;
//   }
// }
// @media screen  and (max-width: 1300px){
//   .login-form {
//     height: 604px !important;
//   }
//   .loginButton {
//     height:56px !important;
//   }
// }
// </style>
<style lang="scss" scoped>
.login-container {
  .logoImg{
    img{
      width:160px;
      height:32px
    }
    .text{
      font-size: 33px;
      color: white;
      margin-left: 20px;
    }
    margin-left: 20px;
    margin-top: 20px;
  }
  font-size: 30px;
  height: 100%;
  width: 100%;
  background-image: url("~@/assets/img/login.jpg");
  background-size: 100% 100%;
  position: fixed;
  .login-form {
    background-color: white;
    height:400px;
    width: 500px;
    position: fixed;
    border-radius: 20px;
    right: 9%;
    top: 22%;
  }
  .login_word {
    width: 100%;
    height: 164px;
    text-align: center;
    font-weight: bold;
    line-height: 164px;
    color: #0a1933;
  }
  .forgetPass {
    cursor: pointer;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    text-align: right;
    color: #666;
    line-height: 19px;
    margin-top: 18px;
  }
  .login_input {
    width: 78%;
    height: 70%;
    margin: 0 auto;
  }
  .input_ruleForm {
    width: 100%;
    height: 100%;
  }
  .input_word {
    width: 100%;
  }
  .loginButton {
    width: 100%;
    height:48px;
  }
  .el-alert--warning.is-light {
    color: #ff3a3a;
    background: #fff;
    padding-top: 0px;
    padding-left: 0px;
    display: flex;
    align-items: center;
  }
  /deep/.el-alert__content {
    display: flex;
  }
}
 
</style>
