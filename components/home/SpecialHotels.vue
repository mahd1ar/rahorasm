<script setup lang="ts">

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';

defineProps({
  items: {
    type: Array as PropType<{
      title: string,
      stars: number,
      city: string,
      href: "#"
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
              <!-- <img class="w-full " src="/assets/images/Cards/antalya2.webp" alt=""> -->
              <div class="p-4 flex flex-col">
                <div class="font-bold">
                  {{ i.title }}
                </div>
                <div class="text-gray-600">

                  <p class="my-0 flex items-center">
                    <span class="pe-2">

                    </span>
                    <span class="font-cards">
                      <!-- stars -->
                      <div class="text-yellow-500 text-lg my-2 flex gap-1">

                        <!-- filled -->
                        <svg v-for="fs in i.stars" :key="fs" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                          viewBox="0 0 24 24">
                          <path fill="currentColor" fill-rule="evenodd"
                            d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8z"
                            clip-rule="evenodd" />
                        </svg>
                        <span v-if="i.stars === 0">
                          هتل آپارتمان
                        </span>

                      </div>
                      <!-- end of stars -->
                    </span>
                  </p>

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
