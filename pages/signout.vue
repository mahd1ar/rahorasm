<script setup lang="ts">
import { COOKIES } from '~/data/types';
const go = useRouteQuery<string>('go', '/')

useCookie(COOKIES.Access).value = null
useCookie(COOKIES.Refresh).value = null
useAppState().deleteUser()
navigateTo(go.value)
</script>

<template>
  <div>
     siging out ...
  </div>
</template>

<style scoped></style>
