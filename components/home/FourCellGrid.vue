<script setup lang="ts">

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';

defineProps({
    asia_items: {
        type: Array as PropType<{
            title: string,
            duration: string,
            airline: any,
            price: string,
            href: string,
            image: string,
            isFeatured?: boolean,
            occasion?: string
        }[]>
    },
    europe_items: {
        type: Array as PropType<{
            title: string,
            duration: string,
            airline: any,
            price: string,
            href: string,
            image: string
            isFeatured?: boolean,
            occasion?: string
        }[]>
    }
})

const appstate = useAppState()

</script>

<template>

    <!-- four cell grid section -->
    <section class="container mx-auto">

        <div class=" rounded-3xl min-h-60 bg-dark grid grid-cols-1 lg:grid-cols-2 text-white overflow-hidden">
            <div class="bg-primary p-6 sm:p-12 flex flex-col">

                <h2 class="text-dark text-2xl relative font-bold asia-title inline-block h-24">
                    تازه ترین تورهای آسیا
                </h2>

                <Splide :extensions="{ AutoScroll }" :options="{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    direction: 'rtl',
                    perPage: 2,
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
                }" aria-label="My Favorite Images">
                    <SplideSlide v-for="(i, index) in asia_items || []" :key="index">
                        <div class="p-1">
                            <div class="w-full bg-white flex flex-col rounded-lg retro overflow-hidden text-sm ">
                                <div class="h-40 relative">
                                    <div v-if="i.occasion" v-text="i.occasion"
                                        class="border-2 border-l-0 text-sm font-bold border-black absolute left-0 px-2 top-3 h-8 flex  justify-center items-center  text-white  bg-Secondary">

                                    </div>
                                    <div v-if="i.isFeatured"
                                        class="absolute right-2 bottom-2 w-8 h-8 flex justify-center items-center text-lg text-yellow-600 rounded-full bg-yellow-100  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="m12 8.5l2.116 5.088l5.493.44l-4.185 3.585l1.278 5.36L12 20.1l-4.702 2.872l1.278-5.36l-4.184-3.584l5.492-.44zM8 2v9H6V2zm10 0v9h-2V2zm-5 0v5h-2V2z" />
                                        </svg>
                                    </div>
                                    <img class="h-full object-cover w-full" :src="i.image" alt="">
                                </div>
                                <div class="p-4 flex flex-col">
                                    <div class="font-bold text-dark text-base">
                                        {{ i.title }}
                                    </div>
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
                                                </svg></span>
                                            <span class="font-cards">
                                                {{ i.airline }}
                                            </span>
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
                                                </span>
                                        </p>

                                    </div>
                                </div>
                                <div class="bg-background  p-2 border-t border-gray-400 flex-center">
                                    <NuxtLink :to="i.href"
                                        class="bg-primary rounded-3xl retro px-3 py-1 inline-block mb-1 font-normal hover:text-black">
                                        مشاهده تور
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>

                <div class="mt-auto text-dark">
                    <NuxtLink to="/tour/tours?continent=آسیا" class="flex-center gap-4 font-bold text-xl">
                        مشاهده بیشتر
                        <Icon name="material-symbols:arrow-left-alt" size="24px" />

                    </NuxtLink>
                </div>
            </div>
            <div class="p-6 sm:p-12">

                <h2 class=" text-3xl relative font-bold mt-4 h-24">
                    تازه ترین تورهای اروپا

                </h2>
                <div class="flex flex-col h-96 overflow-auto scrollbar-none">
                    <div v-for="(i, index) in europe_items" :key="index" class="p-1">

                        <div class="w-full bg-white flex flex-col rounded-lg retro overflow-hidden ">

                            <div class="p-4 flex flex-col">
                                <div class="font-bold text-dark">
                                    {{ i.title }}
                                </div>
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
                                    <p v-if="i.airline" class="my-0 flex items-center">
                                        <span class="pe-2">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 16 16" height="1em" width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599">
                                                </path>
                                            </svg></span>
                                        <span class="font-cards">
                                            {{ i.airline }}

                                        </span>
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
                                                    stroke-width="32" d="m230 480 262-262a13.81 13.81 0 0 0 4-10V80">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="font-cards">قیمت از:
                                            {{ i.price }}
                                            </span>
                                    </p>

                                </div>
                            </div>
                            <div class="bg-background p-2 border-t border-gray-400 flex items-center justify-end">
                                <NuxtLink :to="i.href"
                                    class="bg-primary rounded-3xl retro px-3 py-1 inline-block mb-1 font-normal text-black hover:text-white">
                                    مشاهده تور
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <NuxtLink to="/tour/tours?continent=%D8%A7%D8%B1%D9%88%D9%BE%D8%A7" class="flex-center gap-4 font-bold text-xl">
                        مشاهده بیشتر
                        <Icon name="material-symbols:arrow-left-alt" size="24px" />

                    </NuxtLink>
                </div>
            </div>
            <div class="flex flex-col">

                <div class="flex flex-col sm:flex-row h-full">
                    <div class="p-6 py-12 w-full sm:w-1/2 flex flex-col bg-[#e9ecef] text-black">
                        <div class=" px-4 leading-7 text-justify mb-10">
                            در صورت عدم مشاهده پکیج مورد نظرتان در وب سایت، با توجه به تنوع هتل ها و پروازها، جهت
                            بررسی
                            تور مد نظر با کارشناسان آژانس راه و رسم سفر تماس حاصل نمایید.
                        </div>
                        <div class="text-black flex-center flex-col ">
                            <a href="tel:02145246" class="bg-primary w-14 h-14 rounded-full flex-center retro ">
                                <Icon name="material-symbols:call-sharp" size="24px" />
                            </a>
                            <div class="mt-14">

                                <img class="moveBox w-24" src="/assets/images/home/arrow.webp" alt="">
                            </div>
                        </div>

                    </div>
                    <div class="p-6 py-12 w-full sm:w-1/2 bg-white text-black">
                        <img class="px-4" src="/assets/images/home/europe-map.webp" alt="">
                        <p class="text-justify my-8">

                            برای اطمینان از سفری بی دردسر، جهت دریافت اطلاعات و مدارک مورد نیاز برای اخذ ویزا کافی
                            است
                            کشور مد نظر خود را انتخاب کنید
                        </p>
                        <TravelVisaCard class="py-4 px-8" />

                    </div>
                </div>
                <div class="bg-black h-24 shrink-0 text-white mt-0 flex items-center px-6">
                    <div class="text-lg font-bold">

                        ما را در شبکه های اجتماعی دنبال کنید
                    </div>
                    <!-- Social Networks -->
                    <div class="mr-auto flex gap-4 items-center">
                        <NuxtLink :to="appstate.contact.instagram">
                            
                            <!-- insta -->
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-8 hover:text-Secondary hover:scale-125 transition-all cursor-pointer"
                                viewBox="0 0 16 16">
                                <path fill="currentColor"
                                    d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67M15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89m-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59m3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z" />
                            </svg>
                        </NuxtLink>
                        <!-- telegram -->
                        <NuxtLink :to="appstate.contact.telegram">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-8 hover:text-Secondary hover:scale-125 transition-all cursor-pointer"
                                viewBox="0 0 32 32">
                                <path fill="currentColor"
                                    d="M16 .5C7.437.5.5 7.438.5 16S7.438 31.5 16 31.5S31.5 24.562 31.5 16S24.562.5 16 .5m7.613 10.619l-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856l-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944l7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587l-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z" />
                            </svg>
                        </NuxtLink>
                        <!-- whatsapp -->
                        <NuxtLink :to="appstate.contact.whatsapp">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-10 hover:text-Secondary hover:scale-125 transition-all cursor-pointer"
                                viewBox="0 0 24 24">
                                <g fill="none">
                                    <g clip-path="url(#mageWhatsappFilled0)">
                                        <path fill="currentColor"
                                            d="m13.79 2.64l-.57-.08a9.13 9.13 0 0 0-8.92 4a9.1 9.1 0 0 0-.71 9.66a1.3 1.3 0 0 1 .1 1c-.41 1.41-.79 2.83-1.19 4.32l.5-.15c1.35-.36 2.7-.72 4.05-1.05a1.45 1.45 0 0 1 .85.08a9.45 9.45 0 1 0 5.89-17.78m2.52 13.12a2.76 2.76 0 0 1-2.72.56a9.2 9.2 0 0 1-5.13-3.71a8.5 8.5 0 0 1-1.11-2.08a2.49 2.49 0 0 1 .55-2.52a1.23 1.23 0 0 1 1.32-.42c.2.05.34.34.52.56q.22.62.51 1.21a.94.94 0 0 1-.2 1.31c-.45.4-.38.73-.06 1.18a6.7 6.7 0 0 0 2.82 2.32c.32.14.56.17.77-.16c.09-.13.21-.24.31-.36c.58-.73.4-.72 1.32-.32q.44.185.85.43c.27.16.68.33.74.57a1.45 1.45 0 0 1-.49 1.43" />
                                    </g>
                                    <defs>
                                        <clipPath id="mageWhatsappFilled0">
                                            <path fill="#fff" d="M2.5 2.5h19v19h-19z" />
                                        </clipPath>
                                    </defs>
                                </g>
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="bg-[#2e3033] p-12">
                <img class="" src="/assets/images/home/—Pngtree—airplane travel tourism supplies_6374202.png" alt="">
                <div class="mt-10">
                    <NuxtLink to="/blog" class="flex-center gap-4 font-bold text-xl">
                        جدیدترین اخبار و مقالات گردشگری
                        <Icon name="material-symbols:arrow-left-alt" size="24px" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <!-- four cell grid section -->

</template>

<style scoped></style>
