<script setup lang="ts">
</script>

<template>
  <div dir="rtl" class="min-h-screen  grid" >
    <div class="h-full flex-col flex" >

      <NavbarSectionCop class="" />
      <div class=" w-full h-full " >
  
        <slot />
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<style scoped></style>
