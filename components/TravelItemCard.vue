<script setup lang="ts">

interface Info {
  id: number
  turn: string
  retunTime: string
  packagePrice: string
  path: string
  airline: String,
}

defineProps({
  id: Number,
  title: String,
  duration: Number,
  airline: String,
  date: String,
  price: String,
  isFeatured: Boolean,
  occasion:String,
  info: {
    type: Array as PropType<Info[]>,
    default: () => []
  }
})

const expanded = ref(false)
</script>

<template>
  <div>

    <div
      class="bg-[#fcfcfd] divide-x-2 divide-x-reverse lg:flex lg:gap-0 relative gap-2 grid col-span-2 lg:h-20 border border-gray-300 rounded-md">
      <div class="col-span-2 lg:w-3/12 flex-center bg-gray-50">
        <div v-if="occasion" v-text="occasion" class="text-xs bg-Secondary rounded text-white px-2 p-0.5 absolute right-0 top-0 -translate-y-1/2" />
        
        <strong 
        class="p-3 text-center " >
            <svg v-show="isFeatured" class="text-yellow-500 w-4 h-4 flex-shrink-0 inline-block" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1200 1200"><path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m3.955 209.912l94.556 295.239l309.889 6.958l-251.588 181.055l89.136 296.924l-249.976-183.325l-254.81 176.587l97.119-294.434l-246.68-187.793l310.034 1.392z"/></svg>
            {{ title }}
          </strong>
        
        
      </div>

      <div class="  lg:w-3/12 divide-y-2  flex flex-col text-gray-800">
        <div class="h-1/2 flex gap-2 items-center p-2">
          <!-- moon icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="0.95em" height="0.95em" viewBox="0 0 32 32">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M14 2C9 2 3 7 3 15s6 14 14 14s13-6 13-11C19 25 7 13 14 2" />
          </svg>
          <span> {{ duration }} شب </span>
        </div>

        <div class="h-1/2 flex gap-2 items-center p-2">
          <!-- cale icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36">
            <path fill="currentColor"
              d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6"
              class="clr-i-outline clr-i-outline-path-1" />
            <path fill="currentColor" d="M8 14h2v2H8z" class="clr-i-outline clr-i-outline-path-2" />
            <path fill="currentColor" d="M14 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-3" />
            <path fill="currentColor" d="M20 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-4" />
            <path fill="currentColor" d="M26 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-5" />
            <path fill="currentColor" d="M8 19h2v2H8z" class="clr-i-outline clr-i-outline-path-6" />
            <path fill="currentColor" d="M14 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-7" />
            <path fill="currentColor" d="M20 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-8" />
            <path fill="currentColor" d="M26 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-9" />
            <path fill="currentColor" d="M8 24h2v2H8z" class="clr-i-outline clr-i-outline-path-10" />
            <path fill="currentColor" d="M14 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-11" />
            <path fill="currentColor" d="M20 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-12" />
            <path fill="currentColor" d="M26 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-13" />
            <path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
              class="clr-i-outline clr-i-outline-path-14" />
            <path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
              class="clr-i-outline clr-i-outline-path-15" />
            <path fill="currentColor" d="M13 6h10v2H13z" class="clr-i-outline clr-i-outline-path-16" />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
          <span> {{ date && ' شروع از ' + new Date(date).toLocaleDateString('fa-IR') }} </span>
        </div>
      </div>

      <div class=" lg:w-4/12 divide-y-2  flex flex-col text-gray-800">
        <div class="h-1/2 flex gap-2 items-center p-2">
          <!-- plane icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M20.56 3.91c.59.59.59 1.54 0 2.12l-3.89 3.89l2.12 9.19l-1.41 1.42l-3.88-7.43L9.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.19-1.77L5 14.5l2.5.37L11.37 11L3.94 7.09l1.42-1.41l9.19 2.12l3.89-3.89c.56-.58 1.56-.58 2.12 0" />
          </svg>
          <span>
            {{ airline }}
          </span>
        </div>

        <div class="h-1/2 flex gap-2 items-center p-2">
          <!-- price icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path d="m7.25 14.25l-5.5-5.5l7-7h5.5v5.5z" />
              <circle cx="11" cy="5" r=".5" fill="currentColor" />
            </g>
          </svg>
          <span>
            قیمت از:
            <b class="text-Secondary mx-1">

              {{ price }}
              ت
            </b>
          </span>
        </div>
      </div>

      <div class="col-span-2 lg:w-2/12 divide-y-2  flex flex-col flex-center text-gray-800">
        <button @click="expanded = !expanded" type="button"
          class="btn p-2 px-4 rounded flex-center flex-col text-sm tracking-wide w-full lg:w-auto">
          تاریخ های تور
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m6 9l6 6l6-6" />
            </svg>
          </span>
        </button>
      </div>

    </div>
    <Transition>
      <div v-if="expanded" :style="{ '--items-count': info.length }"
        class="bg-[#fcfcfd] divide-y-2 divide-gray-100 border border-gray-50 shadow-lg rounded-md mt-2">

        <div v-for="inf in info" :key="inf.id" class="flex p-4">

          <div class="lg:w-2/12 flex-center">

            <img class="w-16" src="/assets/images/tours/dateTravel.webp" alt="">
          </div>
          <div class="lg:w-1/12 flex-center">
            <div class="w-10 h-10 p-2 rounded-full bg-primary ">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m11 16l-3 3m0 0l-3-3m3 3V5m5 3l3-3m0 0l3 3m-3-3v14" />
              </svg>
            </div>
          </div>
          <div class="lg:w-4/12 flex-center flex flex-col items-start gap-4 pr-4">
            <div>
              <span class="block font-normal text-gray-600"> تاریخ رفت </span>

              <strong> {{ inf.retunTime ? new Date(inf.retunTime).toLocaleDateString('fa') : '' }} </strong>
            </div>
            <div>
              <span class="block font-normal text-gray-600">  تاریخ
                برگشت
              </span>

              <strong>  {{ inf.turn ? new Date(inf.turn).toLocaleDateString('fa') : '' }} </strong>
            </div>
          </div>
          <div class="lg:w-3/12  flex flex-col  justify-center">
            <div class="text-gray-600">
              قیمت
              از
            </div>
            <strong class="text-dark text-lg">
              {{ inf.packagePrice && Intl.NumberFormat('fa-ir', {}).format(+inf.packagePrice) }}
              ت
            </strong>
          </div>
          <div class="lg:w-2/12 flex-center ">
            <NuxtLink :to="inf.path" class="text-sm border border-dark rounded-md px-3 p-1 flex-center gap-1">
              جزِییات
              <svg xmlns="http://www.w3.org/2000/svg" class="text-primary" width="0.44em" height="1em"
                viewBox="0 0 7 16">
                <path fill="currentColor"
                  d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0s.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" />
              </svg>
            </NuxtLink>
          </div>

        </div>
      </div>
    </Transition>


  </div>
</template>

<style scoped>
/* Animation keyframes for sliding up */
@keyframes slideUp {
  from {
    opacity: 1;
    /* Start invisible */
    max-height: 0px;
  }

  to {
    opacity: 1;
    /* End fully visible */
    max-height: calc(var(--items-count) * 145px);
  }
}

/* Class to trigger the animation */
.slide-up {
  overflow: hidden;
  animation: slideUp 0.5s forwards;
  /* Apply the animation */
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
  max-height: calc(var(--items-count) * 145px);
  /* max-height: calc( 3 * 145px ); */
  overflow: hidden;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>
