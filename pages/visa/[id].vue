<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const id = useRouteParams("id", 1, { transform: Number })

interface Root {
  id: number
  title: string
  description: string
  questions: Question[]
}

interface Question {
  id: number
  question_text: string
  answer_text: string
}


const { data } = useAPI<Root>('/visa/' + id.value)


</script>

<template>
  <div class="w-full">

    <div class="my-6 container mx-auto flex flex-col md:flex-row items-start gap-6">

      <div class="md:w-7/12 w-full">

        <div class="h-auto relative py-20">
          <img class="absolute top-0 right-0"
            src="/assets/images/visa/composition-toy-jet-with-airline-passport-bus.png" alt="">
          <div class="visa-bg p-6 py-10 flex flex-col gap-4 shadow-lg rounded-lg relative">

            <h1 class="font-bold text-2xl">
              مدارک مورد نیاز ویزای
              {{ data?.title }}

            </h1>
            <p class="whitespace-break-spaces" >
              {{ data?.description }}
            </p>


          </div>
        </div>

        <div class="w-full ">
          <div class="   bg-white  retro ">

            <Disclosure ref="dis" v-slot="{ open }" v-for="(i, inx) in data?.questions" :key="inx">
              <DisclosureButton class="flex w-full justify-between p-4 text-left font-medium"
                :class="open ? 'bg-primary' : 'bg-[#F2F2F5] hover:bg-gray-200'">
                <h3 class="text-lg font-bold">{{ i.question_text }} </h3>
                <Icon name="material-symbols-light:chevron-left-rounded"
                  :class="open ? 'rotate-90 transform' : '-rotate-90'" class="h-8 w-8 text-black" />
              </DisclosureButton>
              <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <DisclosurePanel>
                  <p class="p-5" style="color:#212529">

                    {{ i.answer_text }}
                  </p>
                </DisclosurePanel>
              </transition>
            </Disclosure>
          </div>
        </div>



      </div>
      <div class="md:w-5/12 w-full flex flex-col gap-6">

        <img class="max-w-sm m-auto" src="/assets/images/visa/visa-intro.webp" alt="">

        <TravelVisaCard class="py-4 px-12" />

        <EasyShoppingWithConsultant />
      </div>
    </div>
  </div>
</template>

<style scoped>
.visa-bg {
  background-color: #f2f2f5bd;
}
</style>
