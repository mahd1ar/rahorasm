<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { COOKIES, type Reservation } from "~/data/types";

const param = useRouteParams("slug", 1, { transform: Number });
const reservation = useCookie<Reservation>(COOKIES.Reservation);
const router = useRouter()
const appState = useAppState()
const { $swal } = useNuxtApp()
const flightsListId = ref(0)
const { data: apiData, status } = useAPI<TourDetailsAPI.Root>(
  "/tour/flight/" + param.value
);

const { data: fligthsData, error, execute } = useAPI<{
  departure: string
  return_departure: string
  id: number
}[]>(
  () => "/tour/flights/" + flightsListId.value, {
  server: false,
  lazy: true,
  immediate: false
}
);

const loading = computed(() => status.value === 'pending')

function durationFormatter(time: `${string}:${string}:${string}`) {

  if (!time) return ""

  const [h, m] = time.split(':')

  if (!h || !m) return ""

  let hf = ''
  let mf = ''

  if (Boolean(+h)) {
    hf = `${Intl.NumberFormat('fa-IR').format(+h)} ساعت`
  }

  if (Boolean(+m)) {
    mf = `${Intl.NumberFormat('fa-IR').format(+m)} دقیقه`
  }


  return `${hf} ${mf}`
}

function isRichText(text: string) {
  return text.indexOf('</p>') !== -1
}

const data = computed(() => {
  console.log(apiData.value)
  if (!apiData.value) {
    return null;
  }
  flightsListId.value = apiData.value.tour.id || 0
  execute()
  return {
    title: apiData.value?.tour.title,
    travel: [...apiData.value.flight_Legs.map(fl => {
      return {
        stop_time: fl.stop_time,
        type: fl.leg_type.toLowerCase() as 'departure' | 'arrival' | 'decontinueparture' | 'continuearrival',
        title: new Date(fl.departure).toLocaleDateString("fa-ir", {
          dateStyle: "full",
        }).split(' ').reverse().join(' ').replace(',', ' ')
          +
          " | " +
          fl.departure_airport.city.name
        ,
        srcAirport: {
          code: fl.departure_airport.short_name || "",
          title: fl.departure_airport.name || "",
          time: new Date(fl.departure) //Intl.DateTimeFormat('fa-IR').format( )
        },
        destAirport: {
          code: fl.arrival_airport.short_name || "",
          title: fl.arrival_airport.name || "",
          time: new Date(fl.arrival) //Intl.DateTimeFormat('fa-IR').format( )
        },
        airline: {
          name: fl.airline.name,
          logo: fl.airline.logo,
        },
        time: durationFormatter(fl.flight_length),
        epoch: new Date(fl.departure).getTime(),
      }
    })
    ].sort((a, b) => a.epoch - b.epoch),
    tour: [
      {
        label: " توضیحات",
        value: apiData.value?.tour.description_editor,
      },
      {
        label: "نوع سفر",
        value: apiData.value?.tour.tour_type,
      },
      {
        label: "مدارک لازم",
        value: apiData.value?.tour.needed_documents,
      },
      {
        label: " خدمات آژانس",
        value: apiData.value?.tour.agency_service,
      },
      {
        label: "مسئولین تور",
        value: apiData.value?.tour.tour_guide,
      },
    ],
    accommodations: apiData.value?.tour.flight_times.filter(j => j.id === param.value).map(j => {
      return j.hotel_price.map(i => {
        return {
          hotelPriceId: i.id,
          flightTimesId: j.id,
          hotel: i.hotels.map(h => ({
            id: h.id,
            name: h?.name,
            enName: h.english_name,
            rating: h?.star || 0,
            city: h?.city.name,
            duration: apiData.value?.tour.tour_duration,
            image: h?.images.at(0)?.image || "",
          })),
          prices: [
            {
              title: "2 تخته (هرنفر)",
              priceIRR: i.two_bed_price,
              priceOther: i.two_bed_price_other_currency,
              other_currency: i.other_currency,
              formattedPrice: i.two_bed_price ? Intl.NumberFormat("fa-IR").format(parseInt(i.two_bed_price)) : "",
              id: i.id,
            },
            {
              title: "1 تخته (هرنفر)",
              priceIRR: i.one_bed_price,
              priceOther: i.one_bed_price_other_currency,
              formattedPrice: i.one_bed_price ? Intl.NumberFormat("fa-IR").format(parseInt(i.one_bed_price)) : "",
              id: i.id,
              other_currency: i.other_currency,
            },
            {
              title: "کودک با تخت (هرنفر)",
              priceIRR: i.child_with_bed_price,
              priceOther: i.child_with_bed_price_other_currency,
              formattedPrice: i.child_with_bed_price ? Intl.NumberFormat("fa-IR").format(parseInt(i.child_with_bed_price)) : "",
              id: i.id,
              other_currency: i.other_currency,
            },
            {
              title: "کودک بدون تخت (هرنفر)",
              priceIRR: i.child_no_bed_price,
              priceOther: i.child_no_bed_price_other_currency,
              formattedPrice: i.child_no_bed_price ? Intl.NumberFormat("fa-IR").format(parseInt(i.child_no_bed_price)) : "",
              id: i.id,
              other_currency: i.other_currency,
            },
            {
              title: "نوزاد",
              priceIRR: i.baby_price,
              priceOther: i.baby_price_other_currency,
              formattedPrice: i.baby_price ? Intl.NumberFormat("fa-IR").format(parseInt(i.baby_price)) : "",
              id: i.id,
              other_currency: i.other_currency,
            },
          ].filter(i => parseInt(i.priceIRR)),
        }
      })

    }).flat()

  };
});

const counter = useTemplateRefsList()

const lastBedroomId = ref<number | null>(null);
let hotelIndex: null | number = null;
const counts = ref([0, 0, 0, 0, 0])
function checkId(id: number, count: number, inxed: number, hIndex: number) {

  if (!lastBedroomId.value)
    lastBedroomId.value = id

  if (lastBedroomId.value === id) {

    counts.value[inxed] = count
  } else {
    counter.value.forEach(i => {
      // @ts-ignore
      i.reset()
    })
    counts.value[0] = 0
    counts.value[1] = 0
    counts.value[2] = 0
    counts.value[3] = 0
    counts.value[4] = 0
    lastBedroomId.value = id
  }
  hotelIndex = hIndex
}

const modelIsOpen = ref(false);

function openModal(v: boolean) {

  modelIsOpen.value = true
}


function storeReserve() {

  const x: Reservation = {
    count: [
      {
        identitication: 'two_bed_price',
        count: counts.value[0],
        users: []
      },
      {
        count: counts.value[1],
        identitication: 'one_bed_price',
        users: []
      },
      {
        count: counts.value[2],
        identitication: 'child_with_bed_price',
        users: []
      },
      {
        count: counts.value[3],
        users: [],
        identitication: 'child_no_bed_price',
      },
      {
        count: counts.value[4],
        users: [],
        identitication: 'baby_price',
      },
    ],
    flight_id: param.value,
    flight_time_id: data.value!.accommodations[hotelIndex!].flightTimesId,
    hotel_price_id: data.value!.accommodations[hotelIndex!].hotelPriceId
  }

  reservation.value = x

  if (appState.isAuth)
    router.push('/checkout')
  else {

    $swal.about({
      title: 'توجه',
      message: 'برای ادامه رزرو باید وارد شوید'
    })

    router.push({
      path: '/login',
      query: {
        go: '/checkout'
      }
    })
  }

}

</script>

<template>

  <main class="bg-gray-50 h-full">

    <DialogBox element-id="modal" v-model="modelIsOpen" @closeModal="openModal">
      <template #header>
        <h3 class="text-xl">تاریخ تور ها</h3>
      </template>

      <template #content>
        <aside class="w-full shrink-0 p-6 rounded-md border ">

          <div class="flex flex-col gap-2 mt-2 relative">
            <NuxtLink :to="'/tour/details/' + i.id" v-for="(i, inx) in fligthsData" :key="inx" :class="i.id === param ? 'border-Secondary border-2 shadow bg-white ' : 'cursor-pointer'
              " class="border p-2 rounded-lg flex justify-between items-center bg-white">
              <div v-if="i.departure" class="text-sm flex flex-col gap-1 py-2 text-right">
                <div>{{ i.departure && new Date(i.departure).toLocaleDateString("fa-ir", { weekday: "long" }) }}</div>
                <div class="text-Secondary font-bold">{{ new Date(i.departure).toLocaleDateString("fa-ir", {
                  day:
                    "numeric", month: "long"
                }) }}</div>
                <div class="text-gray-700">

                  ساعت
                  {{ new Date(i.departure).toLocaleTimeString("fa-ir", { hour: "numeric", minute: "numeric" }) }}
                </div>
              </div>
              <div class="flex-center text-xl w-10 h-10 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12h-17.5">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0" />
                    </path>
                    <path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12l7 7M3 12l7 -7">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0" />
                    </path>
                  </g>
                </svg>
              </div>
              <div v-if="i.return_departure" class="text-sm flex flex-col gap-1 py-2 text-left">
                <div>{{ new Date(i.return_departure).toLocaleDateString("fa-ir", { weekday: "long" }) }}</div>
                <div class="text-Secondary font-bold">{{ new Date(i.return_departure).toLocaleDateString("fa-ir", {
                  day:
                    "numeric", month: "long"
                }) }}</div>
                <div class="text-gray-700">
                  ساعت
                  {{ new Date(i.return_departure).toLocaleTimeString("fa-ir", { hour: "numeric", minute: "numeric" }) }}

                </div>
              </div>
            </NuxtLink>

          </div>

        </aside>
      </template>
    </DialogBox>

    <div class="container mx-auto flex gap-4 my-6 h-full items-start">
      <aside class="hidden lg:block w-3/12 shrink-0 p-6 rounded-md border bg-white">
        <h3 class="text-xl">تاریخ تور ها</h3>
        <div class="flex flex-col gap-2 mt-2 relative">
          <NuxtLink :to="'/tour/details/' + i.id" v-for="(i, inx) in fligthsData" :key="inx" :class="i.id === param ? 'border-Secondary shadow bg-white ' : 'cursor-pointer'
            " class="border p-2 rounded-lg flex justify-between items-center">
            <div v-if="i.departure" class="text-sm flex flex-col gap-1 py-2 text-right">
              <div>{{ i.departure && new Date(i.departure).toLocaleDateString("fa-ir", { weekday: "long" }) }}</div>
              <div class="text-Secondary font-bold">{{ new Date(i.departure).toLocaleDateString("fa-ir", {
                day:
                  "numeric",
                month: "long"
              }) }}</div>
              <div class="text-gray-700">

                ساعت
                {{ new Date(i.departure).toLocaleTimeString("fa-ir", { hour: "numeric", minute: "numeric" }) }}
              </div>
            </div>
            <div class="flex-center text-xl w-10 h-10 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12h-17.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0" />
                  </path>
                  <path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12l7 7M3 12l7 -7">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0" />
                  </path>
                </g>
              </svg>
            </div>
            <div v-if="i.return_departure" class="text-sm flex flex-col gap-1 py-2 text-left">
              <div>{{ new Date(i.return_departure).toLocaleDateString("fa-ir", { weekday: "long" }) }}</div>
              <div class="text-Secondary font-bold">{{ new Date(i.return_departure).toLocaleDateString("fa-ir", {
                day:
                  "numeric", month: "long"
              }) }}</div>
              <div class="text-gray-700">
                ساعت
                {{ new Date(i.return_departure).toLocaleTimeString("fa-ir", { hour: "numeric", minute: "numeric" }) }}

              </div>
            </div>
          </NuxtLink>
          <div v-if="fligthsData && fligthsData.length >= 4"
            class="w-full h-20  absolute bottom-0 bg-gradient-to-t from-white via-white to-transparent flex flex-col justify-end text-center">
            <button type="button" @click="openModal(true)" class="group flex justify-end items-center text-sm gap-2">

              مشاهده تمام تور ها

              <span class="group-hover:-translate-x-1 inline-block transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="m5 12l6-6m-6 6l6 6m-6-6h14" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <hr class="my-6" />
        <EasyShoppingWithConsultant />
        <hr class="my-6" />

        <a download="" target="_blank" :href="'https://rahorasm.msdcorporation.top/tour/pdf/' + param + '/'" class="w-full flex-center gap-2 text-center py-4 bg-Secondary hover:bg-rose-500 text-white rounded">

          دانلود پکیج

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20"
                d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5">
                <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1" />
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0" />
              </path>
              <path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0" />
              </path>
            </g>
          </svg>


        </a>
      </aside>
      <pre v-if="error" v-text="error" />
      <div v-if="loading" class="w-full lg:w-9/12 flex-center">
        <LoadingIndicator />
      </div>
      <div v-else class="w-full lg:w-9/12">
        <h1 class="text-2xl font-bold mb-6">{{ data?.title }}</h1>
        <section class="p-4 lg:p-6 rounded-md border bg-white flex flex-col gap-6">
          <div v-for="(i, inx) in data?.travel || []" :key="inx" class="flex flex-col gap-3">
            <div v-if="i.stop_time" class="relative flex flex-col items-center py-2 border-dashed px-2 justify-center">

              <hr class="w-52 border absolute border-dashed" />
              <div
                class="text-center relative bg-gray-100 p-2 rounded-full text-gray-500 inline-flex gap-1 justify-center items-center text-sm">

                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0-14 0m9.5-2.5L12 13m5-5l1-1m-4-4h-4" />
                </svg>

                {{ durationFormatter(i.stop_time) }}

              </div>
            </div>
            <div class="flex">
              <svg v-if="i.type.search('continue') >= 0" xmlns="http://www.w3.org/2000/svg" class="w-5 shrink-0"
                viewBox="0 0 24 24">
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                  <path
                    d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z" />
                </g>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 shrink-0" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z" />
              </svg>


              <div class="flex mr-4 sm:mr-10 gap-2 sm:gap-6 sm:text-base text-sm">
                <strong v-if="i.type === 'departure'" class="text-primary"> شروع سفر </strong>
                <strong v-if="i.type === 'arrival'" class="text-primary">سفر بازگشت </strong>
                <!-- <strong v-if="i.type === 'continuearrival'" class="text-primary">محل اقامت:</strong> -->
                <div>
                  {{ i.title }}
                </div>
              </div>
            </div>
            <div v-if="i.destAirport && i.srcAirport" lass="">
              <div class="mr-6 sm:mr-14 flex gap-1 flex-wrap lg:flex-nowrap ">
                <div class="w-full lg:w-7/12 shrink-0 flex justify-between">
                  <div class="w-16 shrink-0">
                    <strong class="block">{{ i.srcAirport.code }}</strong>
                    <p class="text-sm leading-6">
                      {{ i.srcAirport.title }}
                    </p>
                    <div class="flex flex-col w-full leading-3 font-mono">
                      <span class="text-xs  text-gray-500">{{
                        Intl.DateTimeFormat('fa-IR', { dateStyle: 'short' }).format(i.srcAirport.time) }}</span>
                      <span class="text-xs  text-gray-500">{{
                        Intl.DateTimeFormat('fa-IR', { timeStyle: 'short' }).format(i.srcAirport.time) }}</span>
                    </div>
                  </div>
                  <div class="w-full flex items-center p-4 justify-center relative">
                    <div class="w-full border-t-4 border-dotted border-gray-400 h-1" />
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 sm:w-10 absolute"
                      :style="{ transform: i.type.search('arrival') >= 0 ? 'rotate(45deg)' : 'rotate(225deg)' }"
                      viewBox="0 0 64 64">
                      <path fill="#acb8bf"
                        d="m7.212 12.752l8.132-8.132l1.98 1.98l-8.132 8.132zm14.209 2.045l8.133-8.13l1.98 1.98l-8.133 8.13zM49.31 54.854l8.134-8.13l1.98 1.981l-8.134 8.13zm-2.031-14.297l8.134-8.13l1.98 1.981l-8.135 8.13z" />
                      <path fill="#42ade2"
                        d="m56.4 60.7l-4.7-42.1l-6.3-6.3L3.3 7.6c-2-.2-1.6 4.8.7 5.9l31.7 14.8L50.5 60c1.1 2.3 6.1 2.7 5.9.7" />
                      <path fill="#dae3ea"
                        d="M61.3 8.1c2.2-4.3-1.1-7.6-5.4-5.4c-5.5 2.8-13.6 9.1-21.8 17.2c-12.8 12.8-21 25.5-18.3 28.3c2.7 2.7 15.5-5.5 28.3-18.3c8.1-8.1 14.4-16.3 17.2-21.8" />
                      <path fill="#42ade2"
                        d="m22.4 60.2l-1.6-14.8l-2.2-2.2l-14.8-1.6c-.7-.1-.6 1.7.2 2.1l11.1 5.2L20.3 60c.4.8 2.2.9 2.1.2" />
                      <path fill="#acb8bf"
                        d="M20.2 46.2c-4.5 4.5-8.6 7.6-9.2 6.9c-.6-.6 2.5-4.8 6.9-9.3c4.5-4.5 8.6-7.6 9.3-6.9c.5.6-2.6 4.8-7 9.3" />
                      <path fill="#3e4347"
                        d="M59.8 9.7c.5-1.8.3-3.5-.8-4.7c-1.1-1.1-2.9-1.4-4.6-.8L51 6.3c1.7-.6 4.2.3 5.3 1.4c1.2 1.2 2 3.6 1.4 5.3z" />
                      <path fill="#dae3ea" d="m53.664 9.695l5.654-5.659l.637.636l-5.655 5.66z" />
                    </svg>
                    <!-- dot icons -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 absolute left-0" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 absolute right-0" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" />
                    </svg>
                  </div>
                  <div class="w-16 shrink-0 text-left lg:text-right">
                    <strong class="block">{{ i.destAirport.code }}</strong>
                    <p class="text-sm leading-6">
                      {{ i.destAirport.title }}
                    </p>
                    <div class="flex flex-col w-full leading-3 font-mono">
                      <span class="text-xs  text-gray-500">{{
                        Intl.DateTimeFormat('fa-IR', { dateStyle: 'short' }).format(i.destAirport.time) }}</span>
                      <span class="text-xs  text-gray-500">{{
                        Intl.DateTimeFormat('fa-IR', { timeStyle: 'short' }).format(i.destAirport.time) }}</span>
                    </div>
                  </div>
                </div>

                <div class="w-full grid grid-cols-4 lg:grid-cols-5 lg:w-5/12">

                  <div class="col-span-2 lg:border-r-2 ">
                    <div class="w-full flex-center flex-col gap-3">
                      <strong class="">
                        {{ i.airline.name }}
                      </strong>
                      <div>
                        <img class="w-12" :src="i.airline.logo" alt="" />
                      </div>
                    </div>
                  </div>

                  <div class="col-span-2 lg:col-span-3 border-r-2">
                    <div class="w-full justify-center items-center flex flex-col gap-4 sm:gap-3">
                      <strong class="">مدت پرواز</strong>
                      <div class="text-gray-700">
                        {{ i.time }}
                      </div>
                    </div>
                  </div>

                </div>


              </div>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z"/></svg> -->
            </div>

          </div>
        </section>

        <h2 class="text-2xl mt-6 mb-4 font-bold">لیست هتل ها و قیمت ها</h2>
        <section class="space-y-2 ">

          <div v-for="(i, inxx) in data?.accommodations || []" :key="inxx"
            class="p-6 rounded-md border bg-white gap-6 relative ">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <NuxtLink :to="'/hotel/' + hotel.id" v-for="(hotel, index) in i.hotel" :key="index"
                class="p-2 rounded-lg hover:bg-slate-100">

                <div class="flex flex-col sm:flex-row items-start gap-4">
                  <img v-if="hotel.image" class="size-36 object-cover rounded-lg" :src="hotel.image" alt="" />
                  <div>
                    <h4 class=" flex flex-col gap-3">
                      <div>
                        <div class="text-xl"> {{ hotel.name }}</div>
                        <div class=" text-gray-600"> {{ hotel.enName }}</div>
                      </div>

                      <HotelRating :stars="hotel.rating || 0" />

                    </h4>
                    <div class="mt-2 text-gray-600 space-x-2">
                      <span class="inline-block"> {{ hotel.city }} </span>
                      .
                      <span class="text-primary inline-block"> 3 شب </span>
                    </div>

                  </div>
                </div>
              </NuxtLink>
            </div>
            <div class="relative">
              <div class="w-full grid grid-cols-2 md:grid-cols-4 mt-4 gap-6 md:gap-1 text-center">
                <div v-for="(h, inx) in i.prices" :key="inx" class="h-full flex flex-col">
                  <div class="bg-background p-2 rounded-lg mb-2">
                    {{ h.title }}
                  </div>

                  <div v-if="h.other_currency" class="text-gray-700 font-bold">
                    {{ parseInt(h.priceOther) }}
                    {{ h.other_currency.replace('USD', 'دلار').replace('EUR', 'یورو') }}
                    <div>
                      +
                    </div>
                  </div>
                  <div class="text-gray-700 font-bold">
                    {{ h.formattedPrice }}
                    تومان
                  </div>
                  <BedroomCount ref="counter" class="mt-auto" @update="$d => { checkId(h.id, $d, inx, inxx) }" />
                </div>
              </div>
              <div v-show="lastBedroomId === i.prices[0].id" v-if="counts.reduce((a, b) => b += a, 0) !== 0"
                class="w-full flex justify-end mt-2">
                <button type="button" @click="storeReserve"
                  class="bg-Secondary px-8 text-pink-50 py-4 rounded  mr-auto w-full md:w-auto flex gap-4">
                  نهایی کردن رزرو
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16">
                    <path fill="none" stroke="currentColor" d="M9.5 4.5L6 8l3.5 3.5" />
                  </svg>

                </button>
              </div>
            </div>
          </div>
        </section>

        <h2 class="text-2xl mt-6 mb-4 font-bold">اطلاعات تور</h2>

        <div v-if="data" class="w-full">
          <TabGroup>
            <TabList class="flex space-x-1 rounded-xl bg-background text-black p-1">
              <Tab v-for="(tab, inx) in data.tour || []" as="template" :key="inx" v-slot="{ selected }">
                <button :class="[
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'focus:outline-none focus:ring-0',
                  selected
                    ? 'bg-primary text-black shadow'
                    : 'hover:text-primary',
                ]">
                  {{ tab.label }}
                </button>
              </Tab>
            </TabList>

            <TabPanels class="mt-2">
              <TabPanel v-for="(posts, idx) in data.tour || []" :key="idx" :class="[
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              ]">
                <p class="whitespace-pre-wrap" v-if="!isRichText(posts.value)">
                  {{ posts.value }}
                </p>
                <div v-else class="ck ck-content whitespace-pre-wrap">

                  <div v-html="posts.value" class="text-sm p-4 leading-6"></div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped></style>
