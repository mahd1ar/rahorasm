<script setup lang="ts">
const { isHydrating } = useNuxtApp()


</script>


<template>
    <main :style="isHydrating && 'transform: scale(0.9);transform-origin: top;opacity: 0.7;'">
        <ResponsiveDebugger />

        <section class="py-3 container px-4 mx-auto">
            <div class="flex items-center homeImg">
                <div class="hidden lg:block lg:w-4/12 relative" data-aos="fade-left" data-aos-duration="1500">
                    <img src="/assets/images/home/intro.webp" class="w-full " />
                </div>
                <div class="home-form-bg lg:w-8/12" data-aos="fade-up" data-aos-duration="1500">
                    <h1 class="font-bold text-4xl pt-16 lg:pt-3" data-aos="zoom-in" data-aos-duration="1500"
                        data-aos-delay="100">کشف
                        دنیای نو با</h1>
                    <h1 class="font-bold text-4xl pb-4" data-aos="zoom-in" data-aos-duration="1500"
                        data-aos-delay="100">
                        آژانس مسافرتی <span>راه و رسم سفر</span></h1>
                    <HomeFormTripForm />
                </div>
            </div>
        </section>

 <HomeSpecialAdvise />

        <HomeCallToAction />

        <HomeFourCellGrid />

        <HomeSpecialHotels /> 
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



.asia-title {
    background: url("../../../assets/images/home/advise-title.webp") no-repeat;
    background-size: 105% 92px;
    background-position: top;
    background-origin: border-box;
    padding: 20px;
}

.moveBox {
    animation: move 2s infinite alternate linear;
}

@keyframes move {
    0% {
        transform: translateY(-10px) rotate(-90deg);
    }

    100% {
        transform: translateY(10px) rotate(-90deg);
    }
}

.anime-blur-enter-active,
.anime-blur-leave-active {
  transition: all 0.4s;
}
.anime-blur-enter-from,
.anime-blur-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
