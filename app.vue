<script lang="ts" setup>
import '@splidejs/vue-splide/css'
import 'sweetalert2/dist/sweetalert2.min.css';

</script>

<template>
  <div>
    <NuxtLoadingIndicator :color="'cyan'" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
