<script setup lang="ts">

defineProps({
  color: {
    type: String as PropType<'primary' | 'dark'>,
    default: () => 'dark'
  }
})

</script>

<template>
  <span class="flex text-xl items-center gap-1 font-poppins">
    <span :class="color === 'dark' ? 'text-dark' : 'text-primary'"
      class="self-center  font-semibold whitespace-nowrap">ahorasm</span>
    <div :class="color === 'dark' ? 'bg-dark' : 'bg-primary'"
      class=" text-white  rounded-full flex-center font-normal w-8 h-8">R</div>

  </span>
</template>

<style scoped></style>
