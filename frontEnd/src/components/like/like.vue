<template>
<van-config-provider :theme-vars="themeVars">
  <navbar></navbar>
  <div class="like">
    <div v-for=" item in data">
      <van-image
        width="125"
        height="125"
        fit="cover"
        :src="item"
      />
    </div>
  </div>
  </van-config-provider>
</template>

<script setup>
import navbar from '@/view/navbar/navbar.vue'
import { reactive } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const data = reactive(store.state.likeInfo)
const themeVars = {
  navBarIconColor: '#707070'
}

</script>

<style  scoped>
.like {
  margin-top: 98px;
  display: flex;
  flex-wrap: wrap;
}
</style>
