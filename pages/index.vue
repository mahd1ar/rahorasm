<script setup lang="ts">
// import bghero from "../../assets/images/home/intro.webp";
// import bghero from "../public/assets/";

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide'

</script>


<template>
    <main>

        <section class="py-3 container px-4">
            <div class="flex align-items-center homeImg">
                <div class="hidden lg:block lg:w-4/12 relative" data-aos="fade-left" data-aos-duration="1500">
                    <img src="/assets/images/home/intro.webp" class="w-full " />
                </div>
                <div class="home-form-bg lg:w-8/12" data-aos="fade-up" data-aos-duration="1500">
                    <h1 class="font-bold text-4xl pt-3" data-aos="zoom-in" data-aos-duration="1500"
                        data-aos-delay="100">کشف
                        دنیای نو با</h1>
                    <h1 class="font-bold text-4xl pb-4" data-aos="zoom-in" data-aos-duration="1500"
                        data-aos-delay="100">
                        آژانس مسافرتی <span>راه و رسم سفر</span></h1>
                    <HomeFormTripForm />
                </div>
            </div>
        </section>
        <!-- SpecialAdvise -->
        <section class="container mx-auto  ">
            <div class="bg-dark rounded-lg overflow-hidden relative px-3 py-5 my-5">
                <div class="absolute w-1/3 bg-primary top-0 right-0 h-full"></div>
                <h4 class='font-bold p-3 my-3 text-dark relative'><span class='advise-title '>پیشنهادات ویژه</span></h4>
                <div>
<Splide
        :extensions="{ AutoScroll }"
        :options="{
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
          gap:'8px'
          // rewind: true,
        }"
        aria-label="My Favorite Images"
      >
        <SplideSlide
          v-for="i in 7"
          :key="i"
        >
        <div class="w-full bg-white" >
            <img class="w-64"  src="/assets/images/Cards/antalya2.webp" alt="">
        </div>
    </SplideSlide>
      </Splide>
                </div>
            </div>
        </section>
        <!-- end of SpecialAdvise  -->
    </main>

</template>

<style>
.homeImg {
    position: sticky;
    top: 30px;
    transition: all 0.4s;
}

.home-form-bg {
    background: url("/assets/images/home/home-form-bg.webp") no-repeat;
    background-size: contain;
}

.advise-title {
    background: url('/assets/images/home/advise-title.webp') no-repeat;
    background-size: 100% 75px;
    background-position: center;
    background-origin: border-box;
    padding: 20px;

}
</style>
