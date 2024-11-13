<script setup lang="ts">

const router = useRoute()

const { data } = useAPI<HotelsListAPI.Root>('/hotels', {
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

      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  ">

        <div v-for="i in data || []" :key="i.id" class="flex flex-col bg-white border shadow-sm rounded-xl ">
          <div class="w-full h-40 rounded-t-xl relative overflow-hidden">

            <img class="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-out"
              :src="i.images[0].image">
          </div>
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 ">

              {{ i.name }}
            </h3>
            <div>

              <!-- stars -->
              <div class="text-yellow-500 text-lg my-2 flex gap-1">

                <!-- filled -->
                <svg v-for="fs in i.star" :key="fs" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                  viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd"
                    d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8z"
                    clip-rule="evenodd" />
                </svg>

              </div>
              <!-- end of stars -->

            </div>

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
