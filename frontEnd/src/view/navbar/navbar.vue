<template>
 <van-nav-bar title="𝓕𝒊𝒏𝓭" left-arrow @click-left="onClickLeft" class="nav" fixed>
      <template #right>
        <van-icon name="ellipsis" size="18" @click="share" />
      </template>
    </van-nav-bar>
    
</template>

<script setup>


function onClickLeft() {
  history.back()
}

</script>

<style  scoped>

</style>