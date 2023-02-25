<template>
  <van-nav-bar title="注册页面" />
  <div class="login">
    <van-form @failed="onFailed" @submit="onSubmit">
    <van-cell-group inset>
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入用户名"
        label="用户名"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="password"
        name="password"
        placeholder="请输入密码"
        type="password"
        label="密码"
        :rules="[{ pattern, message: '请输入8位以上10位以下包含大小写字母和数字' }]"
      />
      <!-- 通过 validator 返回错误提示 -->
      <van-field
        v-model="telephone"
        name="telephone"
        placeholder="请输入手机号"
        label="手机号"
        :rules="[{ validator, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 进行异步函数校验 -->
      <van-field
        v-model="email"
        name="email"
        placeholder="请输入邮箱地址"
        label="邮箱"
        :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)">注册</van-button>
    </div>
  </van-form>
  </div>
 
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';
import { getUser } from '../../axios/method';
import { useRouter } from 'vue-router';
const router=useRouter()
const username = ref('');
const password = ref('');
const telephone = ref('');
const email = ref('');
const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
const validator = (val) => /^((0?1[358]\d{9})|((0(10|2[1-3]|[3-9]\d{2}))?[1-9]\d{6,7}))$/.test(val);
  const asyncValidator = (val) =>
      new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val));
        }, 1000);
      });
const onSubmit = (values) => {
  if(username.value!=''&&password.value!=''&&telephone.value!=''&&email.value!=''){
       Toast.success('注册成功')
       getUser(username._value,password._value,telephone._value,email._value)
       router.push('/me')
  }

    };   

</script>

<style  scoped>
.login{
  margin-top: 20px;
}
</style>