<script setup lang="ts">

const inputData = useTemplateRef("inputData")



const query = ref('')
const { data,error } = useAPI< { id: string, title: string }[] >('/visa/search')

const filtered = computed(() =>
  query.value === ''
    ? data.value
    : data.value?.filter((person) =>
      person.title
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.value.toLowerCase().replace(/\s+/g, ''))
    )
)
const isOpen = ref(false)

watch(isOpen, () => {
  setTimeout(() => {

    inputData.value?.focus()
  }, 1000);
})


</script>

<template>
  <div class="bg-background  retro rounded-lg">

    <form class="flex-center flex-col  ">

      <span class="font-bold text-black p-2 text-xl ">
        ویزا سفر
      </span>
      <div class="bg-white p-1 px-2 flex items-center gap-1 rounded-md w-full">
        <!-- pin icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 text-gray-500 flex-shrink-0" viewBox="0 0 1024 1024">
          <path fill="currentColor"
            d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544" />
          <path fill="currentColor"
            d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320" />
        </svg>
        <input @click="isOpen = true" type="text"
          class="w-full px-0 focus:ring-0  focus:outline-none border-none py-1 text-sm " placeholder="کشور مقصد">
      </div>
      <button class="bg-primary mt-4 mb-2 text-white  hover:text-black py-1 block retro w-full rounded">
        جستجو
      </button>

    </form>
    <DialogBox v-model="isOpen" elementId="visa-search">
      <template #header>
        <div>ویزا سفر</div>
      </template>
      <template #content>
        <div class=" min-h-56 w-full flex flex-col gap-2">
          <input ref="inputData" type="text" v-model="query"
            class="w-full  rounded text-black placeholder:text-gray-500 " placeholder="کشور مقصد">
          <div class="flex flex-col gap-1" >
            
            <div v-for="(i,inx) in filtered" :key="i.id" v-show="inx<7" @click="() => {$router.push('/visa/' + i.id )}"
            :class="inx === 0 ? 'bg-teal-600 text-white' : ''"
              class="hover:bg-teal-600 hover:text-white bg-gray-50 p-2 rounded text-gray-800 flex justify-between">
              <span>
                {{ i.title }}
              </span>

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="0.44em" height="1em" viewBox="0 0 7 16">
                  <path fill="currentColor"
                    d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0s.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" />
                </svg>
              </span>
            </div>
            <span v-if="filtered && filtered.length >= 7" class="px-2 text-sm pt-1" >
              و
              {{ filtered.length - 7 }}
              نتیجه دیگر
            </span>
          </div>
        </div>
      </template>
    </DialogBox>
  </div>
</template>

<style scoped></style>
