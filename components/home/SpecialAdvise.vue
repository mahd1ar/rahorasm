<script setup lang="ts">

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';


defineProps({
    items: {
        type: Array as PropType<{
            title: string,
            duration: string,
            airline: string,
            price: string,
            href: string,
            image: string
        }[]>
    }
})

</script>

<template>
    <!-- SpecialAdvise -->
    <section class="container mx-auto  ">
        <div class="bg-dark rounded-3xl overflow-hidden relative px-3 py-5 my-5">
            <div class="absolute w-1/3 bg-primary top-0 right-0 h-full"></div>
            <h4 class='font-bold p-4 my-3 text-dark relative'><span class='advise-title text-2xl inline-block'>پیشنهادات
                    ویژه</span></h4>
            <div>
                <Splide :extensions="{ AutoScroll }" :options="{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    direction: 'rtl',
                    perPage: 4,
                    autoScroll: {
                        speed: 0.75,
                    },
                    pagination: false,
                    arrows: false,
                    gap: '8px'
                    // rewind: true,
                }" aria-label="My Favorite Images">
                    <SplideSlide v-for="(i, index) in items" :key="index">
                        <div class="p-1">

                            <div class="w-full bg-white flex flex-col rounded-xl retro overflow-hidden ">
                                <img class="w-64" src="/assets/images/Cards/antalya2.webp" alt="">
                                <div class="p-4 flex flex-col">
                                    <div class="font-bold">
                                        {{ i.title }} </div>
                                    <div class="text-gray-600">

                                        <p class="my-0 flex items-center ">
                                            <span class="pe-2">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24" height="1em" width="1em"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                    <path
                                                        d="M9.5 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07 1.91-2.16 3.01-4.98 3.01-7.93s-1.1-5.77-3.01-7.93C8.82 4.02 9.16 4 9.5 4m0-2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z">
                                                    </path>
                                                </svg>
                                            </span><span class="font-cards">
                                                {{ i.duration }}
                                                شب

                                            </span>
                                        </p>
                                        <p class="my-0 flex items-center" v-if="i.airline">
                                            <span class="pe-2">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 16 16" height="1em" width="1em"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599">
                                                    </path>
                                                </svg></span><span class="font-cards"> {{ i.airline }} </span>
                                        </p>
                                        <p class="my-0 flex items-center">
                                            <span class="pe-2">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 512 512" height="1em" width="1em"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="32"
                                                        d="M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32z">
                                                    </path>
                                                    <path d="M352 144a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path>
                                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="32"
                                                        d="m230 480 262-262a13.81 13.81 0 0 0 4-10V80">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span class="font-cards">قیمت از:
                                                {{ i.price }}
                                                تومان</span>
                                        </p>

                                    </div>
                                </div>
                                <div class="bg-background p-2 border-t border-gray-400 flex-center">
                                    <button
                                        class="bg-primary rounded-3xl retro px-3 py-1 inline-block mb-1 font-normal hover:text-white">
                                        مشاهده تور
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </section>
    <!-- end of SpecialAdvise  -->
</template>

<style scoped></style>
