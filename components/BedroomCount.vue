<script setup lang="ts">

const { $swal } = useNuxtApp()

const count = ref(0)

const emit = defineEmits<{
  update: [value: number]
}>()

const isSelecred = ref(false)


function countDown() {
  if (count.value > 1) count.value--
  else {
    count.value = 0
    isSelecred.value = false
  }

  emit('update', count.value)
}

function countUp() {
  if (count.value < 10) count.value++
  else
    $swal.error("حداکثر تعداد اتاق 10 است")
  emit('update', count.value)
}

function select() {
  isSelecred.value = true
  count.value = 1
  emit('update', count.value)
}

defineExpose({
  reset: () => {
    isSelecred.value = false
    count.value = 0
  }
})

</script>

<template>
  <div>
    <div v-if="isSelecred" class="bg-primary relative flex justify-between items-center  mt-4 rounded-lg">

      <button type="button" @click="countDown" class="p-2 m-1 bg-teal-100 rounded h-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" />
        </svg>
      </button>

      <span class="font-bold absolute text-lg left-1/2">

        <Transition mode="out-in">
          <span v-if="count > 0" class="relative inline-block" :key="count">
            {{ count }}
          </span>
        </Transition>

      </span>

      <button type="button" @click="countUp" class="p-2 m-1 bg-teal-100 rounded h-full">
        <!-- plus -->
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 19V5m7 7H5" />
        </svg>
      </button>
    </div>
    <button v-else @click="select"
      class="text-teal-500 border group hover:text-white hover:bg-primary transition-all w-full p-2 py-3 rounded-lg font-bold mt-4 flex items-center justify-center gap-1 text-xs sm:text-sm ">
      اضافه به سبد خرید

      <svg class="" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
        <path fill="currentColor" d="M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V9h4a1 1 0 0 0 0-2H9z" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from {

  opacity: 0;
  transform: translateY(10px);
}

.v-leave-to {

  opacity: 0;
  transform: translateY(-10px);
}
</style>
