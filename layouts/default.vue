<script setup lang="ts">
</script>

<template>
  <div dir="rtl" class="min-h-screen grid grid-cols-1 w-full">
    <div class="h-full flex-col flex w-full">
      <NavbarSectionCop class="" />
      <div class=" w-full h-full ">
        <slot />
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<style scoped></style>
