<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'



const param = useRouteParams('id', 1, { transform: Number }) 

const { data: apiData,error } = useAPI<HotelDetailsAPI.Root>('/hotels/' + param.value)

const product = computed(() => {

  return{
   name: apiData.value?.name,
   price: '$140',
   rating: apiData.value?.star || 0,
   images: apiData.value?.images.map(i => ({src: i.image, alt: i.alt,id:i.id})),
   colors: [
     { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
     { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
     { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
   ],
   description: apiData.value?.description,
   details: [
    
     {
       name: 'امکانات هتل',
       items: apiData.value?.hotel_facilities.map(i => i.name)
     },
     {
       name: 'امکانات اتاق',
       items: apiData.value?.room_facilities.map(i => i.name),
     },
     {
       name: 'امکانات تفریحی',
       items: apiData.value?.recreational_facilities.map(i => i.name),
     },
     {
       name: 'امکانات ورزشی',
       items: apiData.value?.sport_facilities.map(i => i.name),
     },
     // More sections...
   ],
 }
})

// const selectedColor = ref(product.colors[0])
</script>


<template>
  {{ error }}
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <!-- Image selector -->
          <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <TabList class="grid grid-cols-4 gap-6">
              <Tab v-for="image in product.images" :key="image.id" class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4" v-slot="{ selected }">
                <span class="sr-only">{{ image.name }}</span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img :src="image.src" alt="" class="h-full w-full object-cover object-center" />
                </span>
                <span :class="[selected ? 'ring-indigo-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']" aria-hidden="true" />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="aspect-h-1 aspect-w-1 w-full">
            <TabPanel v-for="image in product.images" :key="image.id">
              <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover object-center sm:rounded-lg" />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.name }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">hotel information</h2>
            <!-- <p class="text-3xl tracking-tight text-gray-900">{{ product.price }}</p> -->
          </div>

          <!-- Reviews -->
          <div class="mt-3">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-Secondary' : 'text-gray-300', 'h-6 w-6 flex-shrink-0']" aria-hidden="true" />
              </div>
              <p class="sr-only">{{ product.rating }} out of 5 stars</p>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base text-gray-700" v-html="product.description" />
          </div>

          <form class="mt-6">
  
            <div class="mt-10 flex" v-if="false" >
              <button type="submit" class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">Add to bag</button>

              <button type="button" class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>

          <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="divide-y divide-gray-200 border-t">
              <Disclosure as="div" 
              v-for="(detail,inx) in product.details" 
              :key="detail.name" 
              v-slot="{ open }"
              :defaultOpen="inx === 0"
              >
                <h3>
                  <DisclosureButton class="group relative flex w-full items-center justify-between py-6 text-left">
                    <span :class="[open ? 'text-primary' : 'text-gray-900', 'text-sm font-medium']">{{ detail.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      <MinusIcon v-else class="block h-6 w-6 text-primary group-hover:text-primary" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                  <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
    <DisclosurePanel as="div" class="prose prose-sm pb-6">
      <ul role="list">
        <li v-for="item in detail.items" :key="item">{{ item }}</li>
      </ul>
    </DisclosurePanel>
  </transition>
              </Disclosure>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

