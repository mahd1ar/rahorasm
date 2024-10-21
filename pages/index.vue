<script setup lang="ts">
// import bghero from "../../assets/images/home/intro.webp";
// import bghero from "../public/assets/";

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';
const { $swal } = useNuxtApp()


const sampleData = [
  {
    "id": "63",
    "name": "تور آسیا",
    "children": [
      {
        "id": 188,
        "name": "ترکیه",
        "children": [
          {
            "id": 145,
            "name": "استانبول",
            "path": "/asia-tour-استانبول"
          },
          {
            "id": 223,
            "name": "آنتالیا",
            "path": "asia-tour-آنتالیا"
          },
          {
            "id": 356,
            "name": "مارماریس",
            "path": "asia-tour-مارماریس"
          },
          {
            "id": 44,
            "name": "فتحیه",
            "path": "asia-tour-فتحیه"
          },
          {
            "id": 566,
            "name": "کوشی آداسی",
            "path": "asia-tour-کوشی-آداسی"
          },
          {
            "id": 916,
            "name": "بدروم",
            "path": "asia-tour-بدروم"
          }
        ]
      },
      {
        "id": 2874,
        "name": "امارات",
        "children": [
          {
            "id": 161,
            "name": "دبی",
            "path": "asia-rour-دبی"
          }
        ]
      },
      {
        "id": 3679,
        "name": "روسیه",
        "children": [
          {
            "id": 1779,
            "name": "سوچی",
            "path": "asia-rour-سوچی"
          },
          {
            "id": 2098,
            "name": "ی ترکیبی روسیه",
            "path": "asia-rour-ترکیبی-روسیه"
          }
        ]
      },
      {
        "id": 4056,
        "name": "گرجستان",
        "children": [
          {
            "id": 1567,
            "name": "تفلیس",
            "path": "asia-rour-تفلیس"
          },
          {
            "id": 7802,
            "name": "باتومی",
            "path": "asia-rour-باتومی"
          },
          {
            "id": 3246,
            "name": "ی ترکیبی",
            "path": "asia-rour-ترکیبی"
          }
        ]
      },
      {
        "id": 5234,
        "name": "تایلند",
        "children": [
          {
            "id": 8961,
            "name": "پوکت",
            "path": "asia-rour-پوکت"
          },
          {
            "id": 23456,
            "name": "پاتایا",
            "path": "asia-rour-پاتایا"
          },
          {
            "id": 36678,
            "name": "بانکوک",
            "path": "asia-rour-بانکوک"
          }
        ]
      },
      {
        "id": 6873,
        "name": "مالزی",
        "children": [
          {
            "id": 891,
            "name": "کوالالامپور",
            "path": "asia-rour-کوالالامپور"
          }
        ]
      },
      {
        "id": 7985,
        "name": "یونان",
        "path": "asia-rour-یونان"
      }
    ]
  },
  {
    "id": "409",
    "name": "تور اروپا",
    "children": [
      {
        "id": 141,
        "name": "تور اسپانیا"
      },
      {
        "id": 261,
        "name": "تور فرانسه"
      },
      {
        "id": 301,
        "name": "تور یونان"
      },
      {
        "id": 481,
        "name": "تور ایتالیا"
      },
      {
        "id": 551,
        "name": "تور سوئیس"
      },
      {
        "id": 641,
        "name": "تور هلند"
      },
      {
        "id": 781,
        "name": "تور اتریش"
      }
    ]
  },
  {
    "id": "78",
    "name": "ویزا",
    "children": [
      {
        "id": 11,
        "name": "امارات",
        "path": "/visa"
      },
      {
        "id": 21,
        "name": "ترکیه",
        "path": "/visa"
      },
      {
        "id": 31,
        "name": "روسیه",
        "path": "/visa"
      },
      {
        "id": 41,
        "name": "گرجستان",
        "path": "/visa"
      },
      {
        "id": 51,
        "name": "اسپانیا",
        "path": "/visa"
      },
      {
        "id": 61,
        "name": "فرانسه",
        "path": "/visa"
      },
      {
        "id": 71,
        "name": "یونان",
        "path": "/visa"
      }
    ]
  },
  {
    "id": "63cd",
    "name": "هتل ها",
    "children": [
      {
        "id": 1887,
        "name": "هتل های آسیایی",
        "children": [
          {
            "id": 22333,
            "name": "ترکیه",
            "path": "hotels"
          },
          {
            "id": 14533,
            "name": "امارات",
            "path": "hotels"
          },
          {
            "id": 35336,
            "name": "گرجستان",
            "path": "hotels"
          },
          {
            "id": 4334,
            "name": "چین",
            "path": "hotels"
          },
          {
            "id": 91336,
            "name": "مالزی",
            "path": "hotels"
          }
        ]
      },
      {
        "id": 2874888,
        "name": "هتل های اروپایی",
        "children": [
          {
            "id": 1677771,
            "name": "اسپانیا",
            "path": "asia-rour-اسپانیا"
          },
          {
            "id": 16887881,
            "name": "فرانسه",
            "path": "asia-rour-اسپانیا"
          },
          {
            "id": 168881,
            "name": "آلمان",
            "path": "asia-rour-آلمان"
          },
          {
            "id": 1619787,
            "name": "ایتالیا",
            "path": "asia-rour-ایتالیا"
          }
        ]
      },
      {
        "id": 3644479,
        "name": "هتل های داخلی",
        "children": [
          {
            "id": 17666679,
            "name": "مشهد",
            "path": "asia-rour-مشهد"
          },
          {
            "id": 20777798,
            "name": "کیش",
            "path": "asia-rour-کیش"
          }
        ]
      }
    ]
  },
  {
    "id": "200",
    "name": "گردشگری",
    "children": [
      {
        "id": 363,
        "name": "جاذبه های گردشگری",
        "children": [
          {
            "id": 67,
            "name": "جاذبه های ترکیه",
            "path": "/جاذبه-های-ترکیه",
            "children": [
              {
                "id": 761,
                "name": "جاذبه های استانبول",
                "path": "/جاذبه-های-استانبول"
              },
              {
                "id": 781,
                "name": "جاذبه های آنکارا",
                "path": "/جاذبه-های-آنکارا"
              },
              {
                "id": 741,
                "name": "جاذبه های آنتالیا",
                "path": "/جاذبه-های-آنتالیا"
              },
              {
                "id": 7121,
                "name": "جاذبه های کوشی آداسی",
                "path": "/جاذبه-های-کوشی-آداسی"
              },
              {
                "id": 7071,
                "name": "جاذبه های مارماریس",
                "path": "/جاذبه-های-مارماریس"
              }
            ]
          },
          {
            "id": 83,
            "name": "جاذبه های داخلی",
            "path": "/جاذبه-های-داخلی"
          },
          {
            "id": 921,
            "name": "جاذبه های هند",
            "path": "/جاذبه-های-هند"
          },
          {
            "id": 452,
            "name": "جاذبه های ارمنستان",
            "path": "/جاذبه-های-ارمنستان"
          },
          {
            "id": 532,
            "name": "جاذبه های اروپا",
            "path": "/جاذبه-های-اروپا"
          },
          {
            "id": 813,
            "name": "جاذبه های سنگاپور",
            "path": "/جاذبه-های-سنگاپور"
          },
          {
            "id": 901,
            "name": "جاذبه های صربستان",
            "path": "/جاذبه-های-صربستان"
          },
          {
            "id": 402,
            "name": "جاذبه های ویتنام",
            "path": "/جاذبه-های-ارمنستان"
          }
        ]
      },
      {
        "id": 373,
        "name": "مقالات",
        "children": [
          {
            "id": 617,
            "name": "ایرانگردی",
            "path": "/blogs"
          },
          {
            "id": 843,
            "name": "جهانگردی",
            "path": "/blogs"
          },
          {
            "id": 9821,
            "name": "راهنمای سفر",
            "path": "/راهنمای-سفر"
          },
          {
            "id": 4852,
            "name": "بهترین زمان سفر",
            "path": "/بهترین-زمان-سفر"
          },
          {
            "id": 5832,
            "name": "معروف ترین غذاها",
            "path": "/معروف-ترین-غذاها"
          },
          {
            "id": 8813,
            "name": "معروف ترین مراکز خرید",
            "path": "/معروفترین-مراکز-خرید"
          },
          {
            "id": 9801,
            "name": "معروف ترین رستوران ها",
            "path": "/معروف-ترین-رستوران-ها"
          },
          {
            "id": 4802,
            "name": "اخبار گردشگری",
            "path": "/اخبار-گردشگری"
          }
        ]
      }
    ]
  },
  {
    "id": "184",
    "name": "درباره ما",
    "path": "/about"
  },
  {
    "id": "780",
    "name": "تماس با ما",
    "path": "/contact"
  }
]



</script>


<template>
    <main>
        <ResponsiveDebugger />
   
        <!-- <NavbarSection :items="sampleData" /> -->
            <NavbarSectionCop :items="sampleData" />
        
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
            <div class="bg-dark rounded-3xl overflow-hidden relative px-3 py-5 my-5">
                <div class="absolute w-1/3 bg-primary top-0 right-0 h-full"></div>
                <h4 class='font-bold p-4 my-3 text-dark relative'><span
                        class='advise-title text-2xl inline-block'>پیشنهادات
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
                        <SplideSlide v-for="i in 7" :key="i">
                            <div class="p-1">

                                <div class="w-full bg-white flex flex-col rounded-xl retro-style overflow-hidden ">
                                    <img class="w-64" src="/assets/images/Cards/antalya2.webp" alt="">
                                    <div class="p-4 flex flex-col">
                                        <div class="font-bold">
                                            تور آنتالیا 3 شب (ویژه تیر)
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
                                                </span><span class="font-cards">3 شب و 4 روز</span>
                                            </p>
                                            <p class="my-0 flex items-center">
                                                <span class="pe-2">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                        viewBox="0 0 16 16" height="1em" width="1em"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599">
                                                        </path>
                                                    </svg></span><span class="font-cards">قشم ایر</span>
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
                                                <span class="font-cards">قیمت از: 14/000/000 تومان</span>
                                            </p>

                                        </div>
                                    </div>
                                    <div class="bg-background p-2 border-t border-gray-400 flex-center">
                                        <button
                                            class="bg-primary rounded-3xl retro-style px-3 py-1 inline-block mb-1 font-normal hover:text-white">
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

        <!-- call to action -->
        <section>
            <div class="py-14 container mx-auto">
                <div class="flex items-center">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"
                        data-aos-delay="650" data-aos-once='true'>
                        <h3 class="font-bold text-2xl mb-2">شما را به یک سفر زیبا دعوت می کنیم</h3>
                        <div class="mb-1 text-lg leading-7">با ما همراه شوید و تجربه ی یک سفر بی نظیر را به یاد ماندنی
                            کنید.
                            برای کسب اطلاعات بیشتر و رزرو تورها با ما تماس بگیرید.</div>
                        <button
                            class="retro-style inline-block rounded bg-primary hover:text-white p-1 px-4 card-style mt-2">جهت
                            دانلود پکیج تورهای اروپا کلیک کنید</button>
                    </div>
                    <div class="call-bg w-5/12 shrink-0" data-aos="zoom-out-right" data-aos-duration="1500"
                        data-aos-delay="700" data-aos-once='true'>
                        <img src="/assets/images/home/locations.webp" />
                    </div>
                </div>
            </div>
        </section>
        <!-- end of call to action -->

        <!-- home section -->
        <div class="container mx-auto rounded-3xl min-h-60 bg-dark grid grid-cols-2 text-white overflow-hidden">
            <div class="bg-primary p-12">

                <h2 class="text-dark text-2xl relative font-bold asia-title inline-block h-24">


                    تازه ترین تورهای آسیا


                </h2>
                <Splide :extensions="{ AutoScroll }" :options="{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    direction: 'rtl',
                    perPage: 2,
                    autoScroll: {
                        speed: 0.75,
                    },
                    pagination: false,
                    arrows: false,
                    gap: '8px'
                    // rewind: true,
                }" aria-label="My Favorite Images">
                    <SplideSlide v-for="i in 7" :key="i">
                        <div class="p-1">

                            <div class="w-full bg-white flex flex-col rounded-lg retro-style overflow-hidden ">
                                <img class="w-64" src="/assets/images/Cards/antalya2.webp" alt="">
                                <div class="p-4 flex flex-col">
                                    <div class="font-bold text-dark">
                                        تور آنتالیا 3 شب (ویژه تیر)
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
                                            </span><span class="font-cards">3 شب و 4 روز</span>
                                        </p>
                                        <p class="my-0 flex items-center">
                                            <span class="pe-2">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 16 16" height="1em" width="1em"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599">
                                                    </path>
                                                </svg></span><span class="font-cards">قشم ایر</span>
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
                                            <span class="font-cards">قیمت از: 14/000/000 تومان</span>
                                        </p>

                                    </div>
                                </div>
                                <div class="bg-background p-2 border-t border-gray-400 flex-center">
                                    <button
                                        class="bg-primary rounded-3xl retro-style px-3 py-1 inline-block mb-1 font-normal hover:text-white">
                                        مشاهده تور
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
                <div class="mt-10 text-dark">
                    <div class="flex-center gap-4 font-bold text-xl">
                        مشاهده بیشتر
                        <Icon name="material-symbols:arrow-left-alt" size="24px" />

                    </div>
                </div>
            </div>
            <div class="p-12">

                <h2 class=" text-3xl relative font-bold mt-4 h-24">
                    تازه ترین تورهای اروپا

                </h2>
                <div class="flex flex-col h-96 overflow-auto scrollbar-none">
                    <div v-for="i in 4" :key="i" class="p-1">

                        <div class="w-full bg-white flex flex-col rounded-lg retro-style overflow-hidden ">

                            <div class="p-4 flex flex-col">
                                <div class="font-bold text-dark">
                                    تور آنتالیا 3 شب (ویژه تیر)
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
                                        </span><span class="font-cards">3 شب و 4 روز</span>
                                    </p>
                                    <p class="my-0 flex items-center">
                                        <span class="pe-2">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 16 16" height="1em" width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599">
                                                </path>
                                            </svg></span><span class="font-cards">قشم ایر</span>
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
                                        <span class="font-cards">قیمت از: 14/000/000 تومان</span>
                                    </p>

                                </div>
                            </div>
                            <div class="bg-background p-2 border-t border-gray-400 flex items-center justify-end">
                                <button
                                    class="bg-primary rounded-3xl retro-style px-3 py-1 inline-block mb-1 font-normal text-black hover:text-white">
                                    مشاهده تور
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <div class="flex-center gap-4 font-bold text-xl">
                        مشاهده بیشتر
                        <Icon name="material-symbols:arrow-left-alt" size="24px" />

                    </div>
                </div>
            </div>
            <div class="flex flex-col">

                <div class="flex h-full">
                    <div class="p-6 py-12 w-1/2 flex flex-col bg-[#e9ecef] text-black">
                        <div class=" px-4 leading-7 text-justify mb-10">
                            در صورت عدم مشاهده پکیج مورد نظرتان در وب سایت، با توجه به تنوع هتل ها و پروازها، جهت بررسی
                            تور مد نظر با کارشناسان آژانس راه و رسم سفر تماس حاصل نمایید.
                        </div>
                        <div class="text-black flex-center flex-col ">
                            <div class="bg-primary w-14 h-14 rounded-full flex-center retro-style ">
                                <Icon name="material-symbols:call-sharp" size="24px" />
                            </div>
                            <div class="mt-14">

                                <img class="moveBox w-24" src="/assets/images/home/arrow.webp" alt="">
                            </div>
                        </div>

                    </div>
                    <div class="p-6 py-12 w-1/2 bg-white text-black">
                        <img class="px-4" src="/assets/images/home/europe-map.webp" alt="">
                        <p class="text-justify my-8">

                            برای اطمینان از سفری بی دردسر، جهت دریافت اطلاعات و مدارک مورد نیاز برای اخذ ویزا کافی است
                            کشور مد نظر خود را انتخاب کنید
                        </p>
                        <div class="bg-background p-2 retro-style rounded-lg">
                            <form class="flex-center flex-col px-10 ">

                                <span class="font-bold text-black p-2 text-xl ">
                                    ویزا سفر
                                </span>
                                <div class="bg-white p-1 px-2 flex items-center gap-1 rounded-md">
                                    <!-- pin icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 text-gray-500 flex-shrink-0"
                                        viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                            d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544" />
                                        <path fill="currentColor"
                                            d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320" />
                                    </svg>
                                    <input type="text" class="w-full focus:outline-none py-1 text-sm"
                                        placeholder="کشور مقصد">
                                </div>
                                <button
                                    class="bg-primary mt-4 mb-2 text-white hover:text-black py-1 block retro-style w-full rounded">
                                    جستجو
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
                <div class="bg-black h-24 shrink-0 text-white mt-0 flex items-center px-6">
                    <div class="text-lg font-bold">

                        ما را در شبکه های اجتماعی دنبال کنید
                    </div>
                    <div class="mr-auto flex gap-4">
                        <!-- insta -->
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-8 hover:text-Secondary hover:scale-125 transition-all cursor-pointer"
                            viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67M15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89m-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59m3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z" />
                        </svg>
                        <!-- telegram -->
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-8 hover:text-Secondary hover:scale-125 transition-all cursor-pointer"
                            viewBox="0 0 32 32">
                            <path fill="currentColor"
                                d="M16 .5C7.437.5.5 7.438.5 16S7.438 31.5 16 31.5S31.5 24.562 31.5 16S24.562.5 16 .5m7.613 10.619l-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856l-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944l7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587l-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z" />
                        </svg>
                        <!-- whatsapp -->
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
                    </div>
                </div>
            </div>
            <div class="bg-[#2e3033] p-12">
                <img class="" src="/assets/images/home/—Pngtree—airplane travel tourism supplies_6374202.png" alt="">
                <div class="mt-10">
                    <div class="flex-center gap-4 font-bold text-xl">
                        جدیدترین اخبار و مقالات گردشگری
                        <Icon name="material-symbols:arrow-left-alt" size="24px" />
                    </div>
                </div>
            </div>
        </div>
        <!-- end of home section -->

                <!-- Special Hotels -->
                <section class="container mx-auto  ">
            <div class="rounded-3xl overflow-hidden relative px-3 py-5 my-5">
                <div class="absolute w-1/3 top-0 right-0 h-full"></div>
                <h4 class='font-bold p-4 my-3 text-dark relative'><span
                        class='advise-title text-2xl inline-block'>هتل های
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
                        <SplideSlide v-for="i in 7" :key="i">
                            <div class="p-1">

                                <div class="w-full bg-white flex flex-col rounded-xl retro-style overflow-hidden ">
                                    <img class="w-64" src="/assets/images/Cards/antalya2.webp" alt="">
                                    <div class="p-4 flex flex-col">
                                        <div class="font-bold">
                                            تور آنتالیا 3 شب (ویژه تیر)
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
                                                </span><span class="font-cards">3 شب و 4 روز</span>
                                            </p>
                                            <p class="my-0 flex items-center">
                                                <span class="pe-2">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                        viewBox="0 0 16 16" height="1em" width="1em"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599">
                                                        </path>
                                                    </svg></span><span class="font-cards">قشم ایر</span>
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
                                                <span class="font-cards">قیمت از: 14/000/000 تومان</span>
                                            </p>

                                        </div>
                                    </div>
                                    <div class="bg-background p-2 border-t border-gray-400 flex-center">
                                        <button
                                            class="bg-primary rounded-3xl retro-style px-3 py-1 inline-block mb-1 font-normal hover:text-white">
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
        <!-- end of Special Hotels  -->
         <FooterSection />
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

.call-bg {
    background: url("../../../assets/images/home/home-bg.webp")no-repeat;
    background-size: contain;
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
</style>
