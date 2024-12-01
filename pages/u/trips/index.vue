<script setup lang="ts">

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

type Root = Root2[]

interface Root2 {
  tour_name: string
  hotel_name: string
  flight: number
  two_bed_quantity: number
  one_bed_quantity: number
  child_with_bed_quantity: number
  child_no_bed_quantity: number
  final_price: string
  status: string
}


definePageMeta({
  layout: 'profile',
  pageTransition: { name: 'anime-blur', mode: 'out-in' },
})


const { data } = useAPI<Root>("/reserve/list")

const statuses = {
  Complete: 'text-green-700 bg-green-50 ring-green-600/20',
  'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}


</script>

<template>

  <main class="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">

    <div class="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          رزرو ها
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-500">
          سفر ها
          و تور های
          شما با راه رسم
        </p>

        <div class="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">



          <ul role="list" class="divide-y divide-gray-100">
            <li v-for="(d, index) in data" :key="index" class="flex items-center justify-between gap-x-6 py-5">
              <div class="min-w-0">
                <div class="flex items-start gap-x-3">
                  <p class="text-sm font-semibold leading-6 text-gray-900 max-w-xs">
                    {{ d.hotel_name }}
                    با
                    تور
                    {{ d.tour_name.replace('تور', '') }}

                  </p>
                  <p
                    :class="[statuses[d.status === 'complete' ? 'Complete' : 'Archived'], 'mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset']">
                    {{ d.status }}</p>
                </div>
                <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                  <p class="whitespace-nowrap">
                    هزینه نهایی: <strong>{{ d.final_price }}</strong>
                  </p>
                  <!-- <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                    <circle cx="1" cy="1" r="1" />
                  </svg> -->
                  <!-- <p class="truncate">Created by {{ d. }}</p> -->
                </div>
              </div>
              <div class="flex flex-none items-center gap-x-4">
                <NuxtLink :to="'/tour/details/' + d.flight"
                  class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
                  مشاهده تور
                </NuxtLink>
                <!-- <Menu as="div" class="relative flex-none">
                  <MenuButton class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                    <span class="sr-only">Open options</span>
                    <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
                  </MenuButton>
                  <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems
                      class="absolute left-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <MenuItem v-slot="{ active }">
                      <a href="#"
                        :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Edit<span
                          class="sr-only">, {{ project.name }}</span></a>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                      <a href="#"
                        :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Move<span
                          class="sr-only">, {{ project.name }}</span></a>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                      <a href="#"
                        :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Delete<span
                          class="sr-only">, {{ project.name }}</span></a>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu> -->
              </div>
            </li>

            <li v-if="data?.length === 0" class="flex-center w-full  p-6 text-gray-400" >
              <strong>
                هیچ رزروی انجام نشده
              </strong>
            </li>
          </ul>


        </div>
      </div>


    </div>
  </main>

</template>
