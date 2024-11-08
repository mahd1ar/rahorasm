<script setup lang="ts">

defineProps({
  title: String,
  expandable: Boolean
})

const isOprn = ref(true)

</script>

<template>
  <div class="px-4 py-2 retro rounded-md bg-[#f8f9fa]">
    <div class="flex items-center gap-2">

      <slot name="icon-pre" />
      {{ title }}
      <button v-if="expandable" @click="isOprn = !isOprn" type="button" class="mr-auto hover:bg-gray-100 rounded-full w-6 h-6 flex-center">

        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
            d="M36 18L24 30L12 18" />
        </svg>
      </button>
    </div>
    <div v-if="$slots.body" v-show="isOprn" class="mt-2 text-gray-700">
      <slot name="body" />
    </div>
  </div>
</template>

<style scoped></style>
