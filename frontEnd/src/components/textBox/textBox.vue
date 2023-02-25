<template>
  <div>
    <div class="textBox">
         <div class="title"><slot></slot></div>
      </div>
      <div class="tri"></div>
  </div>
</template>

<script setup>

</script>

<style  scoped>
.tri {
  width: 0px;
  height: 0px;
  border: 20px solid transparent;
  border-top: 20px solid #84faafef;
  margin-left: 15px;
  margin-top: -5px;
  
}
.textBox{
  width: 100%;
  height: 60px;
  border-radius: 20px;
  background-image: linear-gradient(to right, #24fa1d83 0%, #f5efefa1 100%);
  display: flex;
  align-items: center;
}
.title {
  font-family: PingFangBlack;
  font-size: 40px;
  margin-left: 10px;
  
}
</style>