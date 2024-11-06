<script lang="ts" setup>
import '@splidejs/vue-splide/css'
import 'sweetalert2/dist/sweetalert2.min.css';

const { $api } = useNuxtApp()
const appState = useAppState()

useIntervalFn(async () => {
if(appState.isLoading)
{
  // call for refresh token
  try {
    const x = await $api<any>('/auth/refresh',{method:'POST'})
    
  } catch (error) {
    console.error(error)
  }
}
},1000 * 60)

</script>

<template>
  <div>
    <NuxtLoadingIndicator :color="'cyan'" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style></style>