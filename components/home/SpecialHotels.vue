<script setup lang="ts">

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import HotelRating from '../HotelRating.vue';

defineProps({
  items: {
    type: Array as PropType<{
      title: string,
      stars: number,
      city: string,
      href: string,
      image: string
    }[]>
  }
})

</script>

<template>
  <!-- Special Hotels -->
  <section class="container mx-auto  ">
    <div class="rounded-3xl overflow-hidden relative px-3 py-5 my-5">
      <h4 class='font-bold p-4 my-3 text-dark relative'><span class='advise-title text-2xl inline-block'>هتل
          های
          ویژه</span></h4>
      <div class="relative w-full">
        <Splide :extensions="{ AutoScroll }" :options="{
          type: 'loop',
          drag: 'free',
          focus: 'center',
          direction: 'rtl',
          perPage: 4,
          breakpoints: {
            mediaQuery: 'min',
            768: {
              perPage: 2,
            },
            430: {
              perPage: 1,
            },
          },
          autoScroll: {
            speed: 0.75,
          },
          pagination: false,
          arrows: false,
          gap: '8px'
          // rewind: true,
        }" aria-label="Special hotels">
          <SplideSlide v-for="(i, index) in items" :key="index" class="p-1">
            <div class="w-full bg-white flex flex-col rounded-xl retro overflow-hidden ">
              <img class="w-full h-48 object-cover " :src="i.image" v-if="i.image" alt="">
              <div class="p-4 flex flex-col">
                <div class="font-bold">
                  
                  {{ i.title }}
                  
                </div>
                <div class="text-gray-600 space-y-1">

                     <HotelRating :stars="i.stars" />
                  

                  <p class="my-0 flex items-center">
                    <span class="pe-2">

                    </span>
                    <span class="font-cards">
                      {{ i.city }}
                    </span>
                  </p>

                </div>
              </div>
              <div class="bg-background p-2 border-t border-gray-400 flex-center">
                <NuxtLink :to="i.href || '#'" 
                  class="bg-primary rounded-3xl retro px-3 py-1 inline-block mb-1 font-normal hover:text-white">
                  مشاهده هتل
                </NuxtLink>
              </div>
            </div>

          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
  <!-- end of Special Hotels  -->
</template>

<style scoped></style>
