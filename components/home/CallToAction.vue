<script setup lang="ts">

defineProps({
    url:String
})

</script>

<template>
      <!-- call to action -->
        <section>
            <div class="py-14 container mx-auto">
                <div class="flex items-center flex-col">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"
                        data-aos-delay="650" data-aos-once='true'>
                        <h3 class="font-bold text-2xl mb-2">شما را به یک سفر زیبا دعوت می کنیم</h3>
                        <div class="mb-1 text-lg leading-7">با ما همراه شوید و تجربه ی یک سفر بی نظیر را به یاد ماندنی
                            کنید.
                            برای کسب اطلاعات بیشتر و رزرو تورها با ما تماس بگیرید.</div>
                        <a :href="url" download target="_blank"
                            class="retro inline-block rounded bg-primary hover:text-white p-1 px-4 card-style mt-2">جهت
                            دانلود پکیج تورهای اروپا کلیک کنید</a>
                    </div>
                    <div class="call-bg w-full md:w-5/12 shrink-0" data-aos="zoom-out-right" data-aos-duration="1500"
                        data-aos-delay="700" data-aos-once='true'>
                        <img src="/assets/images/home/locations.webp" />
                    </div>
                </div>
            </div>
        </section>
        <!-- end of call to action -->
</template>

<style scoped>

.call-bg {
    background: url("../../assets/images/home/home-bg.webp")no-repeat;
    background-size: contain;
}
</style>
