<script lang="ts" setup>
const showDevBox = ref(true)
</script>

<template>
  <DevOnly>
    <div
      v-if="showDevBox"
      class="text-black"
      :style="`
          position: fixed;
          top: 200px;
          left: 20px;
          width : 164px;
          background: white;
          direction: ltr;
          z-index : 200;
          opacity: 0.8;
          `"
    >
      <div @click="showDevBox = false">
        x close
      </div>

      <div style="background-color: red" class="text-xs text-black">
        this will not show in production
      </div>

      <br>
      <div
        class="left-10 top-10 z-50 opacity-50 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-yellow-500"
      >
        <span class="sm">sm</span>
        <span class="md">md</span>
        <span class="lg">lg</span>
        <span class="xl">xl</span>
        <span class="txl">2xl</span>
      </div>
    </div>
  </DevOnly>
</template>

<style lang="scss" scoped>
.sm {
  @apply hidden sm:block md:hidden;
}

.md {
  @apply hidden md:block lg:hidden;
}

.lg {
  @apply hidden lg:block xl:hidden;
}
.xl {
  @apply hidden xl:block 2xl:hidden;
}
.txl {
  @apply hidden 2xl:block;
}
</style>