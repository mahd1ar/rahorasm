<script setup lang="ts"></script>

<template>
  <div class="h-14 inline-flex justify-center items-center" >
    <span class="loader inline-block  "></span>
  </div>
</template>

<style scoped>

.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #be5454;
  box-shadow: 32px 0 #be5454, -32px 0 #be5454;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #be545422;
    box-shadow: 32px 0 #be545422 , -32px 0 #be5454;
  }
  50% {
    background-color: #be5454;
    box-shadow: 32px 0 #be545422 , -32px 0 #be545422;
  }
  100% {
    background-color: #be545422;
    box-shadow: 32px 0 #be5454, -32px 0 #be545422;
  }
}
      
</style>
