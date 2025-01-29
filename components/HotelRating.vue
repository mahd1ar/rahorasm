<script setup lang="ts">


defineProps({
  stars: {
    type: Number,
    required: true
  }
})


</script>

<template>
  <!-- stars -->
  <div>

    <div v-if="stars > 0" class="text-yellow-500 flex gap-2">

      <div v-if="stars === 6" style="font-size: 0.9rem;" class="font-bold">TOP</div>
      <div class="flex gap-1">

        <!-- filled -->
        <svg v-for="fs in stars" :key="fs" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
          viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd"
            d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8z"
            clip-rule="evenodd" />
        </svg>


        <!-- outlined -->
        <svg v-if="stars < 5" v-for="o in (5 - stars)" :key="o" xmlns="http://www.w3.org/2000/svg" width="1em"
          height="1em" viewBox="0 0 24 24">
          <g fill="none">
            <path fill="currentColor"
              d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873z"
              opacity="0.16" />
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
              d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873z" />
          </g>
        </svg>

      </div>
    </div >
    <div v-else class="text-yellow-600">
      هتل آپارتمان
    </div>
  </div>
  <!-- end of stars -->
</template>

<style scoped></style>
