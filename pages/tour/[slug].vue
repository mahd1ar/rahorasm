<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';

 interface Root {
  id: number
  airline: Airline
  origin_airport: OriginAirport
  destination_airport: DestinationAirport
  title: string
  description: string
  tour_type: string
  is_featured: boolean
  tour_duration: string
  needed_documents: string
  agency_service: string
  tour_guide: string
  start_date: string
  end_date: string
  least_price: string
  created_at: string
  edited_at: string
  package: number
}

 interface Airline {
  id: number
  name: string
  description: string
  image: any
  created_at: string
  edited_at: string
}

 interface OriginAirport {
  id: number
  city: City
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

 interface City {
  id: number
  country: Country
  name: string
  description: string
  created_at: string
  edited_at: string
}

 interface Country {
  id: number
  continent: Continent
  name: string
  description: string
  created_at: string
  edited_at: string
}

 interface Continent {
  id: number
  name: string
  description: string
  created_at: string
  edited_at: string
}

 interface DestinationAirport {
  id: number
  city: City2
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

 interface City2 {
  id: number
  country: Country2
  name: string
  description: string
  created_at: string
  edited_at: string
}

 interface Country2 {
  id: number
  continent: Continent2
  name: string
  description: string
  created_at: string
  edited_at: string
}

 interface Continent2 {
  id: number
  name: string
  description: string
  created_at: string
  edited_at: string
}



const priceRange = ref([5, 30])
const duration = ref([[2, 19], [3, 8], [6, 10]])
const airlines = ref([
  {
    name: "ایران ایرتور",
    count: 4
  }, {
    name: "قشم ایر",
    count: 17
  }, {
    name: "معراج",
    count: 11
  }
])
const route = useRoute()
const { data,status } = useAPI<Root[]>('/tour/tours/',{
  query: route.query
})

const sortItems = [
  '  پیشنهاد راه و رسم',
  'ارزان ترین',
  '    گران ترین',
  'کم ترین مدت',
  'بیشترین مدت',
  '  گران ترین'
]

const info =  [
      {
        "id": 57,
        "turn": "پنجشنبه 1403/05/06",
        "retunTime": "چهارشنبه 1403/05/10",
        "packagePrice": "14/800/000",
        "path": "/asia-tour-استانبول-1403-05-06-01"
      },
      {
        "id": 102,
        "turn": "پنجشنبه 1403/05/16",
        "retunTime": "چهارشنبه 1403/05/20",
        "packagePrice": "15/900/000",
        "path": "/asia-tour-استانبول-1403-05-16-02"
      },
      {
        "id": 38,
        "turn": "دوشنبه 1403/05/26",
        "retunTime": "چهارشنبه 1403/05/30",
        "packagePrice": "17/100/000",
        "path": "/asia-tour-استانبول-1403-05-06-01"
      }
    ]

</script>

<template>
  <main>

    <section id="main" class="container mx-auto flex gap-4 items-start my-6">



      <aside class="w-3/12 shrink-0 bg-white shadow-md border border-gray-300 rounded-md flex flex-col gap-4 p-3 py-4">


        <FilterCard title="توضیحات تور استانبول">
          <template #icon-pre>
            <!-- pin icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56">
              <path fill="currentColor"
                d="M14.254 35.969h11.695v12.047c0 3.562 1.477 6.562 2.063 6.562s2.062-3 2.062-6.562V35.969h11.672c1.617 0 2.79-1.032 2.79-2.602c0-.984-.306-1.687-.985-2.414l-7.172-7.781c-.492-.516-.797-.89-.68-1.852l1.196-8.554c.07-.492.117-.774.539-1.078l5.765-4.172c1.29-.938 1.852-2.086 1.852-3.141c0-1.57-1.266-2.953-3.07-2.953H14.02c-1.805 0-3.07 1.383-3.07 2.953c0 1.055.562 2.203 1.827 3.14l5.766 4.173c.445.304.492.585.562 1.078l1.196 8.554c.117.961-.188 1.336-.68 1.852l-7.172 7.781c-.68.727-.984 1.43-.984 2.414c0 1.57 1.172 2.602 2.789 2.602" />
            </svg>
          </template>
        </FilterCard>

        <FilterCard title="12 تور استانبول برای شما پیدا شد.">
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
            <div class="relative">
              <span>از <strong v-text="priceRange[0]" /> تا <strong v-text="priceRange[1]" /> تومان </span>
              <DualSlider v-model="priceRange" />
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
              <div v-for="(i, inx) in duration" :key="inx" class="flex justify-between ">
                <div class="text-gray-600 flex items-center gap-2">
                  <input name="group1" type="checkbox" id="reverse-checkbox-1" class="form-checkbox">
                  <label title="" for="reverse-checkbox-1" class="text-sm">{{ i[0] }} شب</label>
                </div>
                <button type="button" class="bg-primary w-10 rounded text-black">
                  {{ i[1] }}
                </button>
              </div>
            </div>
          </template>
        </FilterCard>

        <FilterCard title="مدت اقامت" expandable>
          <template #icon-pre>
            <!-- airline icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512">
              <path fill="currentColor"
                d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.6 65.6 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31c18.31-28.48 20.3-49.09 13.07-63.65c-7.21-14.57-24.74-25.27-58.25-27.45c-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99l-218.7-82.06a17.8 17.8 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1l-103.21 52.38l-72.35-36.47a17.8 17.8 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08z" />
            </svg>
          </template>
          <template #body>
            <div class="relative flex flex-col gap-1 pt-2">
              <div v-for="(i, inx) in airlines" :key="inx" class="flex justify-between ">
                <div class="text-gray-600 flex items-center gap-2">
                  <input name="group1" type="checkbox" id="reverse-checkbox-1" class="form-checkbox">
                  <label title="" for="reverse-checkbox-1" class="text-sm">{{ i.name }} شب</label>
                </div>
                <button type="button" class="bg-primary w-10 rounded text-black">
                  {{ i.count }}
                </button>
              </div>
            </div>
          </template>
        </FilterCard>

      </aside>


      <div class="w-9/12 flex flex-col gap-4">
        <div class="flex gap-4">
          <span class="inline-flex items-center gap-1 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="border border-gray-400 " width="1.2em" height="1.2em"
              viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z" />
            </svg>
            مرتب سازی بر اساس:
          </span>
          <div class="gap-2 flex  w-full shrink overflow-hidden relative">
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
              }"  aria-label="Sort items" class="w-full">
                <SplideSlide v-for="i in sortItems" class="w-auto" :key="i">
                  <button type="button" class=" flex-center py-2 btn whitespace-pre rounded-md block w-full">
                    {{ i }}
                  </button>
                </SplideSlide>
              </Splide>
            </ClientOnly>

          </div>
        </div>
        
        <LoadingIndicator v-if="status === 'pending'" />
        <TravelItemCard 
        v-for="d in data" :key="d.id"
        :id="d.id" :title="d.description"
         :duration="d.tour_duration" :data="d.start_date" :price="d.least_price ? Intl.NumberFormat('fa-ir',{}).format(+d.least_price).replaceAll('٬','/') : '0' " :airline="d.airline.name"
         :info="[...info]"
         />

         <div class="block text-center p-6" v-if="data && data.length === 0"  >
          هیچ ایتمی برای نمایش وجود ندارد
         </div>

      </div>
    </section>
  </main>
</template>


<style scoped>
main {
  background: url("/assets/images/tours/hero-bg.svg") no-repeat;
  background-size: contain;
}
</style>
