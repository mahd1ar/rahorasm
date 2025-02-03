<script setup lang="ts">
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue';
// @ts-ignore
import { Splide, SplideSlide, } from '@splidejs/vue-splide';

const { $api } = useNuxtApp()

const order_by = useRouteQuery<string>('order_by', '')

const city = useRouteQuery('city', '')
const country = useRouteQuery('country', '')
const continent = useRouteQuery('continent', '')

const max_price = useRouteQuery('range_max', 0, { transform: Number })
const least_price = useRouteQuery('range_min', 0, { transform: Number })

const duration = useRouteQuery<string>('duration', '')
const airline = useRouteQuery<string>('airline', '')

const durationTmp = ref("")
const airlineTmp = ref("")
const least_priceTmp = ref(0)
const max_priceTmp = ref(0)

const route = useRoute()


const { data, status, error, refresh } = useAsyncData('tour_with_filters', () => {
  
  return $api<TourAPI.Root>('/tour/tours/', {
    query: { ...route.query },
    cache: 'no-cache'
  })
})


const splidejs = useTemplateRef('splidejs')

function next() {

  // @ts-ignore
  splidejs.value.go(
    (splidejs.value.index + 1) % splidejs.value.length)
}

function prev() {

  if (splidejs.value.index === 0)
    splidejs.value.go(splidejs.value.length)

  splidejs.value.go(splidejs.value.index - 1)
}

const sortItems = [
  { label: '  پیشنهاد راه و رسم', value: 'is_featured' },
  { label: 'بیشترین قیمت', value: 'max_price' },
  { label: 'کم ترین قیمت', value: 'least_price' },
  { label: 'کم ترین مدت', value: 'least_duration' },
  { label: 'بیشترین مدت', value: 'max_duration' }
]

const { data: filtersSchema, status: filtersStatus, refresh: filterRefresh } = useAPI<FiltersAPI.Root>('/tour/filters?city=استانبول', {
  lazy: true, server: false,
  query: { city: city.value },
  onResponse(ctx) {
    if (ctx.response.status === 200) {
      const p = (ctx.response._data as FiltersAPI.Root).prices
      console.log(p)

      if (!least_price.value)
        least_price.value = p.least_price || 0

      if (!max_price.value)
        max_price.value = p.max_price || 1

      if (!least_priceTmp.value)
        least_priceTmp.value = p.least_price || 0

      if (!max_priceTmp.value)
        max_priceTmp.value = p.max_price || 1

    }
  }
})

function sort(val: string) {
  order_by.value = val !== order_by.value ? val : ''
}


function checkBoxInput(e: Event, id: string, filterName: string, isTmp = false) {

  // @ts-ignore
  const checked = !!e?.target.checked

  if (filterName === 'duration') {
    const d = new Set(duration.value.split(',').filter(Boolean))

    if (!checked)
      d.delete(id)
    else
      d.add(id)

    if (isTmp)
      durationTmp.value = [...d].join(',')
    else
      duration.value = [...d].join(',')
  }

  if (filterName === 'airline') {
    const d = new Set(airline.value.split(',').filter(Boolean))

    if (!checked)
      d.delete(id)
    else
      d.add(id)

    if (isTmp)
      airlineTmp.value = [...d].join(',')
    else
      airline.value = [...d].join(',')

  }
}

function applyFilters() {
  duration.value = durationTmp.value
  airline.value = airlineTmp.value
  max_price.value = max_priceTmp.value
  least_price.value = least_priceTmp.value
  closeModal()
}

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

onMounted(() => {

  if (least_price.value)
    least_priceTmp.value = least_price.value
  if (max_price.value)
    max_priceTmp.value = max_price.value
})


watch(city, () => {
  filterRefresh()
  refresh()
}, { immediate: false })

watchDebounced([duration, airline, least_price, max_price], () => {


  filterRefresh()
  refresh()
}, { debounce: 500, immediate: false })

</script>

<template>


  <main class="py-6 mb-4">

    <section id="main" class="container mx-auto flex flex-col lg:flex-row gap-4 items-start">

      <aside
        class=" w-full lg:w-3/12 shrink-0 bg-white hidden border border-gray-300 rounded-md lg:flex flex-col gap-4 p-3 py-4">


        <FilterCard :title="
        ' توضیحات تور ' + (route.query.city || route.query.country || route.query.continent)">
          <template #icon-pre>
            <!-- pin icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56">
              <path fill="currentColor"
                d="M14.254 35.969h11.695v12.047c0 3.562 1.477 6.562 2.063 6.562s2.062-3 2.062-6.562V35.969h11.672c1.617 0 2.79-1.032 2.79-2.602c0-.984-.306-1.687-.985-2.414l-7.172-7.781c-.492-.516-.797-.89-.68-1.852l1.196-8.554c.07-.492.117-.774.539-1.078l5.765-4.172c1.29-.938 1.852-2.086 1.852-3.141c0-1.57-1.266-2.953-3.07-2.953H14.02c-1.805 0-3.07 1.383-3.07 2.953c0 1.055.562 2.203 1.827 3.14l5.766 4.173c.445.304.492.585.562 1.078l1.196 8.554c.117.961-.188 1.336-.68 1.852l-7.172 7.781c-.68.727-.984 1.43-.984 2.414c0 1.57 1.172 2.602 2.789 2.602" />
            </svg>
          </template>
        </FilterCard>

        <FilterCard v-if="data?.length" :title="data?.length + ` تور ${route.query.city || route.query.country || route.query.continent } برای شما پیدا شد.`">
          <template #icon-pre>
            <!-- check icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd"
                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                clip-rule="evenodd" />
            </svg>
          </template>
        </FilterCard>

        <FilterCard title="بازه ی قیمت">
          <template #icon-pre>
            <!-- tag icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42" />
            </svg>
          </template>
          <template #body>
            <div v-if="filtersSchema?.prices.max_price && filtersSchema?.prices.least_price" class="relative">
              <span>از <strong v-text="least_price && Intl.NumberFormat('fa-ir', {}).format(least_price)" />
                تا <strong v-text="max_price && Intl.NumberFormat('fa-ir', {}).format(+max_price)" /> تومان </span>


              <DualSlider :min="filtersSchema.prices.least_price" :max="filtersSchema.prices.max_price"
                v-model:vmax="max_price" v-model:vmin="least_price" />

            </div>
          </template>
        </FilterCard>

        <FilterCard title="مدت اقامت" expandable>
          <template #icon-pre>
            <!-- moon icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M9.272 2.406a1 1 0 0 0-1.23-1.355C6.59 1.535 5.432 2.488 4.37 3.55a11.4 11.4 0 0 0 0 16.182c4.518 4.519 11.51 4.261 15.976-.205c1.062-1.062 2.014-2.22 2.498-3.673A1 1 0 0 0 21.55 14.6c-3.59 1.322-7.675.734-10.433-2.025C8.35 9.808 7.788 5.744 9.272 2.406" />
            </svg>
          </template>
          <template #body>
            <div class="relative flex flex-col gap-1 pt-2">
              <div v-for="(i, inx) in filtersSchema?.durations || []" :key="inx" class="flex justify-between ">
                <div class="text-gray-600 flex items-center gap-2">
                  <input @input="(e) => checkBoxInput(e, String(i.duration), 'duration')" name="group1" type="checkbox"
                    id="reverse-checkbox-1" class="form-checkbox">
                  <label title="" for="reverse-checkbox-1" class="text-sm">{{ i.duration }} شب</label>
                </div>
                <button type="button" class="bg-primary w-10 rounded text-black">
                  {{ i.tours_quantity }}
                </button>
              </div>
            </div>
          </template>
        </FilterCard>

        <FilterCard title="ایرلاین" expandable>
          <template #icon-pre>
            <!-- airline icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512">
              <path fill="currentColor"
                d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.6 65.6 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31c18.31-28.48 20.3-49.09 13.07-63.65c-7.21-14.57-24.74-25.27-58.25-27.45c-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99l-218.7-82.06a17.8 17.8 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1l-103.21 52.38l-72.35-36.47a17.8 17.8 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08z" />
            </svg>
          </template>
          <template #body>
            <div class="relative flex flex-col gap-1 pt-2">
              <div v-for="(i, inx) in filtersSchema?.airlines || []" :key="inx" class="flex justify-between ">
                <div class="text-gray-600 flex items-center gap-2">
                  <input @input="(e) => checkBoxInput(e, String( i.id), 'airline')" name="group1" type="checkbox"
                    id="reverse-checkbox-1" class="form-checkbox">
                  <label title="" for="reverse-checkbox-1" class="text-sm">{{ i.name }} </label>
                </div>
                <button type="button" class="bg-primary w-10 rounded text-black">
                  {{ i.tours_quantity }}
                </button>
              </div>
            </div>
          </template>
        </FilterCard>

      </aside>



      <div class=" w-full lg:w-9/12 flex flex-col gap-4">
      
        <div class="flex lg:flex-row flex-col gap-4">
          <button @click="openModal" type="button"
            class="retro bg-white flex lg:hidden justify-center items-center gap-2 p-2 font-bold  hover:text-teal-600 ">
            <span class="text-xl">
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6"></path>
              </svg>
            </span>
            فیلتر
            ها

          </button>
          <span class="inline-flex items-center gap-1 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="border border-gray-400 " width="1.2em" height="1.2em"
              viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z" />
            </svg>
            مرتب سازی بر اساس:
          </span>
          <div class="gap-2 flex items-center w-full shrink  relative">
            <div class="w-12 absolute top-0 left-0 h-full z-1 bg-gradient-to-r from-white to-transparent" />
            <ClientOnly>

              <Splide :options="{
                drag: 'free',
                direction: 'rtl',
                pagination: false,
                arrows: false,
                rewind: true,
                perPage: 5,
                gap: '0.7rem',
                breakpoints: {
                  1023: {
                    perPage: 3,
                    gap: '.7rem',
                    height: '6rem',
                  },
                  480: {
                    perPage: 1,
                    gap: '.7rem',
                    height: '6rem',
                  },
                },
              }" aria-label="Sort items" class="w-full" ref="splidejs">



                <SplideSlide v-for="i in sortItems" class="w-auto" :key="i">
                  <button type="button" @click="sort(i.value)"
                    class=" flex-center py-2 btn whitespace-pre rounded-md block w-full"
                    :class="{ 'bg-red-400 text-white': i.value === order_by }">
                    {{ i.label }}
                  </button>
                </SplideSlide>
              </Splide>
            </ClientOnly>
            <span class=" absolute left-0 w-8 h-8 flex-center rounded-full border -translate-x-1/2 bg-white/75">
              <!-- next -->
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z" />
              </svg>
            </span>
            <span class=" absolute right-0 w-8 h-8 flex-center rounded-full border translate-x-1/2 bg-white/75">
              <!-- prv -->
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="rotate-180">
                <path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z" />
              </svg>
            </span>

          </div>
        </div>



        <LoadingIndicator v-if="status === 'pending'" />
        <template v-else >

          <TravelItemCard v-for="d in data || []" :key="d.id" :id="d.id" :title="d.title" :duration="d.tour_duration"
            :airline="d.flight_times.at(0)?.flight_Legs.at(0)?.airline.name"
             :date="d.start_date"
            :price="d.least_price ? Intl.NumberFormat('fa-ir', {}).format(+d.least_price).replaceAll('٬', '/') : '0'"
            :occasion="d.occasion"
            :is-featured="d.is_featured"
            :info="d.flight_times.map(f => ({
              id: f.id,
              turn: f.departure_date,
              retunTime: f.arrival_date,
              packagePrice: f.least_price,
              path: '/tour/details/' + f.id,
              airline: '1111',
            }))" />
        </template>

        <div>
          {{ error }}
        </div>

        <div class="block text-center p-6" v-if="data && data.length === 0">
          هیچ ایتمی برای نمایش وجود ندارد
        </div>

      </div>
    </section>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto overflow-hidden">
          <div class="flex min-h-full items-center justify-end p-0 text-center ">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 translate-x-full"
              enter-to="opacity-100 translate-x-0" leave="duration-200 ease-in" leave-from="opacity-100 translate-x-0"
              leave-to="opacity-0 translate-x-full">
              <DialogPanel
                class="w-full max-w-md transform rounded-2xl rounded-r-none bg-[#fff3cd] p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3"
                  class="text-lg flex justify-between text-right font-medium leading-6 text-gray-900">
                  <button @click="closeModal" type="button" class="hover:text-gray-500 text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 16">
                      <path fill="currentColor"
                        d="M10 12.5a.47.47 0 0 1-.35-.15l-8-8c-.2-.2-.2-.51 0-.71s.51-.2.71 0l7.99 8.01c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" />
                      <path fill="currentColor"
                        d="M2 12.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l8-7.99c.2-.2.51-.2.71 0s.2.51 0 .71l-8.01 7.99c-.1.1-.23.15-.35.15" />
                    </svg>
                  </button>
                  فیلترها

                </DialogTitle>
                <div class="mt-2">

                  <div dir="rtl"
                    class=" w-full  shrink-0 bg-white border border-gray-300 rounded-md flex flex-col gap-4 p-3 py-4">


                    <FilterCard title="توضیحات تور استانبول">
                      <template #icon-pre>
                        <!-- pin icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56">
                          <path fill="currentColor"
                            d="M14.254 35.969h11.695v12.047c0 3.562 1.477 6.562 2.063 6.562s2.062-3 2.062-6.562V35.969h11.672c1.617 0 2.79-1.032 2.79-2.602c0-.984-.306-1.687-.985-2.414l-7.172-7.781c-.492-.516-.797-.89-.68-1.852l1.196-8.554c.07-.492.117-.774.539-1.078l5.765-4.172c1.29-.938 1.852-2.086 1.852-3.141c0-1.57-1.266-2.953-3.07-2.953H14.02c-1.805 0-3.07 1.383-3.07 2.953c0 1.055.562 2.203 1.827 3.14l5.766 4.173c.445.304.492.585.562 1.078l1.196 8.554c.117.961-.188 1.336-.68 1.852l-7.172 7.781c-.68.727-.984 1.43-.984 2.414c0 1.57 1.172 2.602 2.789 2.602" />
                        </svg>
                      </template>
                    </FilterCard>

                    <FilterCard v-if="data?.length"
                      :title="data?.length + ` تور ${route.query.city} برای شما پیدا شد.`">
                      <template #icon-pre>
                        <!-- check icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                          <path fill="currentColor" fill-rule="evenodd"
                            d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                            clip-rule="evenodd" />
                        </svg>
                      </template>
                    </FilterCard>

                    <FilterCard title="بازه ی قیمت">
                      <template #icon-pre>
                        <!-- tag icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42" />
                        </svg>
                      </template>
                      <template #body>
                        <div v-if="filtersSchema?.prices.max_price && filtersSchema?.prices.least_price"
                          class="relative">
                          <span>از <strong
                              v-text="least_priceTmp && Intl.NumberFormat('fa-ir', {}).format(least_priceTmp)" />
                            تا <strong v-text="max_priceTmp && Intl.NumberFormat('fa-ir', {}).format(+max_priceTmp)" />
                            تومان
                          </span>


                          <DualSlider :min="filtersSchema.prices.least_price" :max="filtersSchema.prices.max_price"
                            v-model:vmax="max_priceTmp" v-model:vmin="least_priceTmp" />

                        </div>
                      </template>
                    </FilterCard>

                    <FilterCard title="مدت اقامت" expandable>
                      <template #icon-pre>
                        <!-- moon icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M9.272 2.406a1 1 0 0 0-1.23-1.355C6.59 1.535 5.432 2.488 4.37 3.55a11.4 11.4 0 0 0 0 16.182c4.518 4.519 11.51 4.261 15.976-.205c1.062-1.062 2.014-2.22 2.498-3.673A1 1 0 0 0 21.55 14.6c-3.59 1.322-7.675.734-10.433-2.025C8.35 9.808 7.788 5.744 9.272 2.406" />
                        </svg>
                      </template>
                      <template #body>
                        <div class="relative flex flex-col gap-1 pt-2">
                          <div v-for="(i, inx) in filtersSchema?.durations || []" :key="inx"
                            class="flex justify-between ">
                            <div class="text-gray-600 flex items-center gap-2">
                              <input @input="(e) => checkBoxInput(e, String(i.duration), 'duration', true)"
                                name="group1" type="checkbox" id="reverse-checkbox-1" class="form-checkbox">
                              <label title="" for="reverse-checkbox-1" class="text-sm">{{ i.duration }} شب</label>
                            </div>
                            <button type="button" class="bg-primary w-10 rounded text-black">
                              {{ i.tours_quantity }}
                            </button>
                          </div>
                        </div>
                      </template>
                    </FilterCard>

                    <FilterCard title="ایرلاین" expandable>
                      <template #icon-pre>
                        <!-- airline icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512">
                          <path fill="currentColor"
                            d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.6 65.6 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31c18.31-28.48 20.3-49.09 13.07-63.65c-7.21-14.57-24.74-25.27-58.25-27.45c-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99l-218.7-82.06a17.8 17.8 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1l-103.21 52.38l-72.35-36.47a17.8 17.8 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08z" />
                        </svg>
                      </template>
                      <template #body>
                        <div class="relative flex flex-col gap-1 pt-2">
                          <div v-for="(i, inx) in filtersSchema?.airlines || []" :key="inx"
                            class="flex justify-between ">
                            <div class="text-gray-600 flex items-center gap-2">
                              <input @input="(e) => checkBoxInput(e, String( i.id), 'airline', true)" name="group1"
                                type="checkbox" id="reverse-checkbox-1" class="form-checkbox">
                              <label title="" for="reverse-checkbox-1" class="text-sm">{{ i.name }} </label>
                            </div>
                            <button type="button" class="bg-primary w-10 rounded text-black">
                              {{ i.tours_quantity }}
                            </button>
                          </div>
                        </div>
                      </template>
                    </FilterCard>

                  </div>

                </div>

                <div class="mt-4 sticky bottom-0 ">
                  <button type="button"
                    class="btn flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium "
                    @click="applyFilters()">
                    اعمال فیلتر
                  </button>
                  <button type="button"
                    class="text-Secondary hover:bg-gray-100 flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium "
                    @click="closeModal">
                    بستن
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>


  </main>


</template>


<style scoped>
main {
  background: url("/assets/images/tours/hero-bg.svg") no-repeat;
  background-position: right top;
  background-size: contain;
}
</style>
