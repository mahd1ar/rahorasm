<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const disclosureData = ref(
     [
      {
        "id": 1,
        "accTitle": "ویزای توریستی امارات",
        "accDesc": "اگر هدفتان از سفر به امارات، گذران اوقات فراغت، خرید و لذت از ساحل و طبیعت است، باید برای ویزای توریستی دبی اقدام کنید که یکی از پرتقاضاترین انواع ویزاهای امارات هم محسوب می‌شود. در این صورت باید بر اساس زمانی که قصد اقامت دارید، ویزای متفاوتی بگیرید."
      },
      {
        "id": 2,
        "accTitle": "نحوه اقدام ویزای امارات",
        "accDesc": "دریافت ویزای دبی در ایران تنها توسط آژانس‌های گردشگری و شرکت‌ های ارائه‌ دهنده خدمات سفر امکان‌ پذیر می باشد."
      },
      {
        "id": 3,
        "accTitle": "انواع ویزای امارات",
        "accDesc": "ویزای 14 روزه توریستی 1 بار ورود: با اخذ این نوع ویزا، شما می‌توانید فقط 1 بار ورود کنید به کشور امارات و از 1 تا 14 روز در دبی اقامت داشته باشید."
      },
      {
        "id": 4,
        "accTitle": "مدارک لازم برای اخذ ویزای امارات",
        "accDesc": "-اسکن پاسپورت حداقل 7 ماه اعتبار"
      },
      {
        "id": 5,
        "accTitle": "هزینه اخذ ویزا امارات",
        "accDesc": "ویزای 14 روزه توریستی یکبار ورود: 310 درهم"
      },
      {
        "id": 6,
        "accTitle": "مدت زمان اعتبار و صدور ویزای امارات",
        "accDesc": "مدت زمان جوابدهی به درخواست ویزای فوری دبی 1 روز کاری و مدت زمان جوابدهی به درخواست ویزای عادی امارات، 2 الی 7 روز کاری می ‌باشد.هرکدام از ویزاهای امارات از لحظه صدور 59 روز اعتبار ورود دارد.پس از ورود به کشور امارات اعتبار ویزا بر اساس درخواست اولیه و نوع ویزا خواهد بود."
      }
])


</script>

<template>
  <div class="w-full" >
    <div class="my-6 container mx-auto flex items-start gap-6">

      <div class="w-7/12">

        <div class="h-auto relative py-20" >
          <img class="absolute top-0 right-0"  src="/assets/images/visa/composition-toy-jet-with-airline-passport-bus.png" alt="">
          <div class="visa-bg p-6 py-10 flex flex-col gap-4 shadow-lg rounded-lg relative">
            
            <h1 class="font-bold text-2xl" >مدارک مورد نیاز ویزای</h1>
            <p>
              امارات به طور قطع یکی از مقاصد اصلی گردشگران از سرتاسر دنیا به حساب می ‌آید. هر ساله شهر دبی پذیرای چندین
              میلیون گردشگر خارجی می ‌باشد. آمار نشان می ‌دهد که دبی همواره در صدر شهرهای توریستی دنیا بوده است.هم‌
              وطنان ما برای ورود به کشور امارات نیازمند ویزا می‌ باشند، که این فرآیند دریافت ویزای امارات، آسان و کوتاه‌
              مدت است. برای آگاهی از هزینه، مدارک و مدت زمان صدور ویزای دبی با آژانس راه و رسم سفر همراه باشید.
            </p>


          </div>
        </div>

          <div class="w-full ">
            <div class="   bg-white  retro-style ">

              <Disclosure ref="dis" v-slot="{ open }" v-for="(i,inx) in disclosureData" :key="inx">
                <DisclosureButton 
                  class="flex w-full justify-between p-4 text-left font-medium"
                  :class="open ? 'bg-primary' : 'bg-[#F2F2F5] hover:bg-gray-200' "
                  >
                  <h3 class="text-lg font-bold" >{{ i.accTitle }} </h3>
                  <Icon name="material-symbols-light:chevron-left-rounded" :class="open ? 'rotate-90 transform' : '-rotate-90'"
                    class="h-8 w-8 text-black" />
                </DisclosureButton>
                <transition 
                enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
                  >
                  <DisclosurePanel >
                    <p class="p-5" style="color:#212529" >

                     {{ i.accDesc }}
                    </p>
                  </DisclosurePanel>
                </transition>
              </Disclosure>
            </div>
          </div>

      

      </div>
      <div class="w-5/12 flex flex-col gap-6">

        <img class="max-w-sm m-auto" src="/assets/images/visa/visa-intro.webp" alt="">

<TravelVisaCard class="py-4 px-12" /> 

<EasyShoppingWithConsultant />
      </div>
    </div>
  </div>
</template>

<style scoped>


.visa-bg{
    background-color: #f2f2f5bd;
}


</style>
