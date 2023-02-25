<template>
<van-config-provider :theme-vars="themeVars">
  <navbar></navbar>
  <div class="f">
    <div class="notebook">
      <van-cell-group inset>
        <van-field
          v-model="message"
          rows="30"
          autosize
          label="笔记"
          type="textarea"
          placeholder="请输入笔记"
          show-word-limit
        />
      </van-cell-group>
    </div>
  </div>
  </van-config-provider>
</template>

<script setup>
import navbar from '@/view/navbar/navbar.vue'
const themeVars = {
  navBarIconColor: '#707070'
}
</script>

<style  scoped>
.f {
  display: flex;
  justify-content: center;
  align-items: center;
}
.notebook {
  margin-top: 108px;
  width: 98%;
  height: 100vh;
}
input {
  background: none;
  outline: none;
  border: none;
}
input {
  width: 100%;
  height: 100%;
}
</style>