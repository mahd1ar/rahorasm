<script setup lang="ts">
interface Root {
  id: string
  place: string
  children: Children[]
}

interface Children {
  id: number
  country: string
  children: Children2[]
}

interface Children2 {
  id: number
  city: string
  image: string
  hotels: Hotel[]
}

interface Hotel {
  id: number
  hotelImg: string
  name: string
  star: number
}

const {data} = useAPI<Root[]>('/hotels')


</script>

<template>
    <main class="bg-gray-50 h-full">

<div class="container mx-auto flex gap-4 pt-6  h-full items-start">


  <div class="w-full grid grid-cols-4 gap-4 ">
  
    <div v-for="i in data?.at(0)?.children.at(0)?.children || []" :key="i.id" class="flex flex-col bg-white border shadow-sm rounded-xl ">
  <div class="w-full h-40 rounded-t-xl relative overflow-hidden" >

    <img class="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-out" :src="i.image" :alt="i.city">
  </div>
  <div class="p-4 md:p-5">
    <h3 class="text-lg font-bold text-gray-800 ">
      هتل های
      {{ i.city }}
    </h3>
    <p class="mt-1 text-gray-500 ">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <NuxtLink to="#" class="mt-2 py-2 px-3 btn text-dark  inline-flex justify-center items-center gap-x-2 text-sm  rounded-lg  focus:outline-none  disabled:opacity-50 disabled:pointer-events-none" >
      اطلاعات بیشتر
    </NuxtLink>
  </div>
</div>

  </div>
</div>
</main>
</template>

<style scoped></style>
