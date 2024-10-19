<script lang="ts" setup>
import '@splidejs/vue-splide/css'
</script>

<template>
  <div>
    <NuxtLoadingIndicator :color="'cyan'" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
