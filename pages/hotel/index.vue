<script setup lang="ts">

const router = useRoute()

const { data } = useAPI<HotelsListAPI.Root>('/hotels',{
  query: {
    ...router.query
  },
  // server: false,lazy:true
})


</script>

<template>
  <main class="bg-gray-50 h-full">

    <div class="container mx-auto flex flex-col mb-10 pt-6  h-full items-start">

      <div class="container mx-auto flex flex-col items-start gap-4 ">
        <span class="hidden h-1 w-10 rounded bg-teal-500 lg:block"
          data-v-inspector="components/FooterSection.vue:59:13"></span>
        <h1 class="text-3xl ">
          هتل های
          <strong>

            {{ $route.query.city || $route.query.country }}
          </strong>
        </h1>
        <br>
      </div>

      <div class="w-full grid grid-cols-4 gap-4 ">

        <div v-for="i in data || []" :key="i.id" class="flex flex-col bg-white border shadow-sm rounded-xl ">
          <div class="w-full h-40 rounded-t-xl relative overflow-hidden">

            <img class="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-out" :src="i.images[0].image"
              >
          </div>
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 ">

              {{ i.name }}
            </h3>
            <div> {{ i.star }} stars </div>

            <NuxtLink :to="'/hotel/' + i.id"
              class="mt-2 py-2 px-3 btn text-dark  inline-flex justify-center items-center gap-x-2 text-sm rounded-lg  focus:outline-none  disabled:opacity-50 disabled:pointer-events-none">
              اطلاعات بیشتر
            </NuxtLink>
          </div>
        </div>

      </div>

    </div>
  </main>
</template>

<style scoped></style>
