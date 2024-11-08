<script setup lang="ts">

const isOpen = ref(false)

 import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]
  const selectedPerson = ref(people[0])

</script>

<template>
    <div class="bg-background  retro rounded-lg">
        <form class="flex-center flex-col  ">

            <span class="font-bold text-black p-2 text-xl ">
                ویزا سفر
            </span>
            <div class="bg-white p-1 px-2 flex items-center gap-1 rounded-md w-full">
                <!-- pin icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 text-gray-500 flex-shrink-0" viewBox="0 0 1024 1024">
                    <path fill="currentColor"
                        d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544" />
                    <path fill="currentColor"
                        d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320" />
                </svg>
                <input @click="isOpen = true" type="text" class="w-full px-0 focus:ring-0  focus:outline-none border-none py-1 text-sm "
                    placeholder="کشور مقصد">
            </div>
            <button class="bg-primary mt-4 mb-2 text-white  hover:text-black py-1 block retro w-full rounded">
                جستجو
            </button>

        </form>
        <DialogBox v-model="isOpen" elementId="visa-search" >
            <template #header >
                <div>ویزا سفر</div>
            </template>
            <template #content >
  <Listbox v-model="selectedPerson">
    <ListboxButton>{{ selectedPerson.name }}</ListboxButton>
    <ListboxOptions>
      <ListboxOption
        v-for="person in people"
        :key="person.id"
        :value="person"
        :disabled="person.unavailable"
      >
        {{ person.name }}
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
            </template>
        </DialogBox>
    </div>
</template>

<style scoped></style>
