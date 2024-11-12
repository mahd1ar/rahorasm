<script setup >
import  '@majidh1/jalalidatepicker'

const v = defineModel({
  type: String
})

onMounted(()=>{
  jalaliDatepicker.startWatch();
})

</script>

<template>
  <input data-jdp v-model="v" >
</template>