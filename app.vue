<script lang="ts" setup>
import '@splidejs/vue-splide/css'
import 'sweetalert2/dist/sweetalert2.min.css';
import { COOKIES } from './data/types';

const { $api } = useNuxtApp()
const appState = useAppState()
const refreshToken = useCookie(COOKIES.Refresh)
const accessToken = useCookie(COOKIES.Access)

useIntervalFn(async () => {
if(appState.isLoading)
{
  // call for refresh token
  try {
    const data = await $api<{access: string,refresh: string}>('/token/refresh/',{method:'POST',body:{refresh:refreshToken.value}})
    
    if('access' in data) {
      accessToken.value = data.access
    }

    if('refresh' in data) {
      refreshToken.value = data.refresh
    }
    
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