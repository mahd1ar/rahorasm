<script setup lang="ts">

const data = ref({
  travel: [
    {
      type: 'start',
      title: 'تهران | جمعه 23 شهریور',
      srcAirport: {
        code: "IKA",
        title: 'فرودگاه بین المللی امام خمینی'
      },
      destAirport: {
        code: "IKA",
        title: 'فرودگاه بین المللی امام خمینی'
      }
    },
    {
      type: 'residence',
      title: 'استانبول |4 شب',
      srcAirport: {
        code: "IKA",
        title: 'فرودگاه بین المللی امام خمینی'
      },
      destAirport: {
        code: "IKA",
        title: 'فرودگاه بین المللی امام خمینی'
      }
    },
    {
      type: 'end',
      title: 'تهران | سه شنبه 28 شهریور',
    },
  ]


})


const hotels = ref([
  {
    title: '2 تخته (هرنفر)',
    price: '16/600/000'
  },
  {
    title: '1 تخته (هرنفر)',
    price: '16/600/000'
  },
  {
    title: 'کودک با تخت (هرنفر)',
    price: '16/600/000'
  },
  {
    title: 'کودک بدون تخت (هرنفر)',
    price: '16/600/000'
  },
])

</script>

<template>

  <main class="bg-gray-50 h-full">

    <div class="container mx-auto flex gap-4 my-6  h-full items-start">

      <aside class="w-3/12 shrink-0  p-6 rounded-md border bg-white">
        <h3 class="text-xl">
          تاریخ تور ها
        </h3>
        <div class="flex flex-col gap-2 mt-2 relative ">
          <div v-for="i in 4" :key="i" :class="i === 1 ? 'border-primary shadow bg-white ' : 'cursor-pointer'"
            class="border p-2 rounded-lg flex justify-between items-center">
            <div class="text-sm flex flex-col gap-1 py-2 text-right">
              <div>دوشنبه</div>
              <div class="text-Secondary font-bold">19 شهریور </div>
              <div class="text-gray-700">ساعت 07:30</div>
            </div>
            <div class="flex-center text-xl  w-10 h-10 shrink-0">
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
            <div class="text-sm flex flex-col gap-1 py-2 text-left">
              <div>دوشنبه</div>
              <div class="text-Secondary font-bold">19 شهریور </div>
              <div class="text-gray-700">ساعت 07:30</div>
            </div>
          </div>
          <div
            class="w-full h-20 absolute bottom-0 bg-gradient-to-t from-white via-white to-transparent flex flex-col justify-end text-center ">
            <NuxtLink to="#" class="flex justify-end items-center gap-2 ">

              مشاهده تمام تور ها
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m5 12l6-6m-6 6l6 6m-6-6h14" />
              </svg>
            </NuxtLink>
          </div>
        </div>
        <hr class="my-6">
        <EasyShoppingWithConsultant />

      </aside>
      <div class="w-9/12  ">
        <section class="p-6 rounded-md border bg-white flex flex-col gap-6 ">
          <div v-for="(i, inx) in data.travel" :key="inx" class="flex flex-col gap-3 ">

            <div class="flex">

              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 shrink-0" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z" />
              </svg>

              <div class="flex mr-10 gap-6">
                <strong v-if="i.type === 'start'" class="text-primary">شروع سفر:</strong>
                <strong v-if="i.type === 'residence'" class="text-primary">محل اقامت:</strong>
                <strong v-if="i.type === 'end'" class="text-primary">پایان سفر :</strong>
                <div>
                  {{ i.title }}
                </div>
              </div>

            </div>
            <div v-if="i.destAirport && i.srcAirport" lass="">
              <div class="mr-14 flex gap-1 divide-x-2  divide-x-reverse">
                <div class="w-7/12 shrink-0 flex justify-between">
                  <div class="w-16 shrink-0">
                    <strong class=" block">{{ i.srcAirport.code }}</strong>
                    <p class="text-sm leading-6">
                      {{ i.srcAirport.title }}</p>
                  </div>
                  <div class=" w-full flex items-center p-4 justify-center relative">
                    <div class="w-full border-t-4 border-dotted border-gray-400 h-1" />
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 absolute" style="transform: rotate(225deg);"
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
                  <div class="w-16 shrink-0">
                    <strong class=" block">{{ i.destAirport.code }}</strong>
                    <p class="text-sm leading-6">
                      {{ i.srcAirport.title }}
                    </p>
                  </div>
                </div>
                <div class="w-2/12">
                  <div class="w-full flex-center flex-col gap-3">
                    <strong class="">ایران ایر</strong>
                    <div>
                      <img src="https://last-cdn.com//cdn/static/airlines/iranair--40x40xwt.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="w-3/12">
                  <div class="w-full flex-center flex-col gap-3">
                    <strong class="">ساعت پرواز</strong>
                    <div class="text-gray-700">
                      06:30
                    </div>
                  </div>
                </div>
              </div>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z"/></svg> -->
            </div>
          </div>
        </section>

        <h2 class="text-2xl mt-6 mb-4 font-bold">
          لیست هتل ها و قیمت ها
        </h2>
        <section class="p-6 rounded-md border bg-white flex flex-col gap-6 relative">


          <div class="relative">
            <div class="flex items-start gap-4">
              <img class="h-36 w-72 object-cover rounded-lg"
                src="https://last-cdn.com/2023/01/04/6TgjIy1BpnxY32a2PjKdiUqQjlHkQUGelr7x3oIx.jpg" alt="">
              <div>
                <h4 class="text-2xl flex flex-col gap-3">
                  Emmy Hotel Taksim
                  <!-- stars -->
                  <div class="text-yellow-500 text-2xl flex gap-1">
                    <!-- filled -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd"
                        d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8z"
                        clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd"
                        d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8z"
                        clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd"
                        d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8z"
                        clip-rule="evenodd" />
                    </svg>
                    <!-- outlined -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <g fill="none">
                        <path fill="currentColor"
                          d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873z"
                          opacity="0.16" />
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                          d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873z" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <g fill="none">
                        <path fill="currentColor"
                          d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873z"
                          opacity="0.16" />
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                          d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873z" />
                      </g>
                    </svg>
                  </div>
                  <!-- end of stars -->
                </h4>
                <div class="mt-2 text-gray-600">
                  <span> استانبول</span>
                  <span> BB</span>
                </div>
                <div class="mt-2 text-primary">
                  <span> 3
                    شب
                  </span>

                </div>

              </div>
            </div>
            <div class="w-full grid grid-cols-4 mt-4 gap-1 text-center">
              <div v-for="(h, inx) in hotels" :key="inx">
                <div class="bg-background p-2 rounded-lg mb-2">

                  {{ h.title }}
                </div>
                <div class="text-gray-700 font-bold ">

                  {{ h.price }}
                  تومان
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
