<script setup lang="ts">
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import { COOKIES, type Reservation } from '~/data/types';
import { isValidNationalCode } from '~/utils';

const { $swal, $api, $router } = useNuxtApp()
const firstInput = useTemplateRef('firstInput')

const isOpen = ref(false)
const selectedItemIndex = ref<number>(0)
const selectedRoomIndex = ref<number>(0)
const tempPassengerInput = reactive({
  name: '',
  en_name: '',
  ssn: '',
  passportNumber: '',
  birthday: '',
})

const reservationData = useCookie<Reservation>(COOKIES.Reservation);
  const { data, status } = useAPI<TourDetailsAPI.Root>(
  "/tour/flight/" + reservationData.value.flight_id
);

const nth = ['اول', 'دوم', 'سوم', 'چهارم', 'پنجم', 'ششم', 'هفتم', 'هشتم', 'نهم'] as const

watchDeep(reservationData,async (nval) => {

  // const res = await $api<TourDetailsAPI.Root>("/tour/flight/" + nval.flight_id);

  nval.count.forEach(i => {
    if (i.count !== i.users.length) {

      if (i.count > i.users.length) {
        for (let j = 0; j < i.count - i.users.length; j++) {
          i.users.push({
            name: '',
            ssn: '',
            passportNumber: '',
            birthday: '',
            en_name: ''
          })
        }
      } else
        i.users = i.users.slice(0, i.count)

    }

  })


}, {
  immediate: true
})


const hotelPrices = computed(() => {
  return data.value?.tour.flight_times.find(i => i.id === reservationData.value.flight_time_id )?.hotel_price.find(hp => hp.id === reservationData.value.hotel_price_id)
})

function openUser(itemIndex: number, roomIndex: number) {

  isOpen.value = true
  selectedItemIndex.value = itemIndex
  selectedRoomIndex.value = roomIndex
}

function validatePassenger() {
  if (!tempPassengerInput.name) {
    $swal.error('نام و نام خانوادگی را وارد کنید')
    return false
  }

  if (!tempPassengerInput.ssn) {
    $swal.error('کد ملی را وارد کنید')
    return false
  }

  if (!tempPassengerInput.passportNumber) {
    $swal.error('شماره پاسپورت را وارد کنید')
    return false
  }

  if (!tempPassengerInput.birthday) {
    $swal.error('تاریخ تولد را وارد کنید')
    return false
  }

  if (!isValidNationalCode(tempPassengerInput.ssn)) {
    $swal.error('کد ملی وارد شده صحیح نمی باشد')
    return false
  }

  return true
}

function cancelEditing() {
  isOpen.value = false
  tempPassengerInput.name = ""
  tempPassengerInput.en_name = ""
  tempPassengerInput.ssn = ""
  tempPassengerInput.passportNumber = ""
  tempPassengerInput.birthday = ""
}


function saveEditing() {

  if (!validatePassenger())
    return

  reservationData.value.count[selectedItemIndex.value].users[selectedRoomIndex.value].name = tempPassengerInput.name
  reservationData.value.count[selectedItemIndex.value].users[selectedRoomIndex.value].en_name = tempPassengerInput.en_name
  reservationData.value.count[selectedItemIndex.value].users[selectedRoomIndex.value].ssn = tempPassengerInput.ssn
  reservationData.value.count[selectedItemIndex.value].users[selectedRoomIndex.value].passportNumber = tempPassengerInput.passportNumber
  reservationData.value.count[selectedItemIndex.value].users[selectedRoomIndex.value].birthday = tempPassengerInput.birthday
  isOpen.value = false
}

function deleteFromReservation(i: number) {
  if (window.confirm("آیا از حذف این مورد اطمینان دارید؟")) {
    reservationData.value.count[i].count = 0
    reservationData.value.count[i].users.splice(0, reservationData.value.count[i].users.length)
  }
  if (reservationData.value.count.every(i => i.count === 0))
    $router.push('/')
}


watch(isOpen, (nval) => {
  if (nval)
    setTimeout(() => {
      Object.assign(tempPassengerInput, reservationData.value.count[selectedItemIndex.value].users[selectedRoomIndex.value])
      firstInput.value?.focus()
    }, 300);
})


function handelSubmit() {

  $api('/reserve/new/', { method: "POST", body: reservationData.value })
    .then(async res => {

      $swal.success("رزرو شما با موفقیت ثبت شد")
      await $router.push('/')
      reservationData.value = null
    })
    .catch(() => $swal.error("خطا در ثبت رزرو"))
}


</script>

<template>
  <div class="bg-white">
    <DialogBox v-model="isOpen" element-id="xx" @canceled="cancelEditing">
      <template #header>
        <div>ویرایش اطلاعات مسافر</div>
      </template>

      <template #content>
        <div class="">
          <form>

            <fieldset class="text-gray-900 flex flex-col gap-2 mt-4 ">
              <legend class="sr-only">مسافران</legend>
              <div class="flex justify-between">
                <label for="name"> نام و نام خانوادگی </label>
                <input ref="firstInput" type="text" id="name" v-model="tempPassengerInput.name">
              </div>

              <div class="flex justify-between">
                <label for="en_name"> نام و نام خانوادگی به انگلیسی </label>
                <input ref="secInput" type="text" id="en_name" v-model="tempPassengerInput.en_name">
              </div>

              <div class="flex justify-between">
                <label for="birthday"> تاریخ تولد </label>
                <!-- <input type="datetime-local" id="birthday" v-model="tempPassengerInput.birthday"> -->

                <FarsiDate v-model="tempPassengerInput.birthday" />
              </div>

              <div class="flex justify-between">
                <label for="ssn"> شماره ملی </label>
                <input type="text" id="ssn" v-model="tempPassengerInput.ssn">
              </div>

              <div class="flex justify-between">
                <label for="passport"> شماره پاسپورت </label>
                <input type="text" id="passport" v-model="tempPassengerInput.passportNumber">
              </div>

            </fieldset>

          </form>
        </div>
      </template>

      <template #buttons>
        <button type="button" class=" w-full bg-primary rounded-3xl text-white py-2 disabled:grayscale"
          :disabled="Object.entries(tempPassengerInput).map(i => i[1]).filter(Boolean).length < 4" @click="saveEditing">
          ذخیره کردن اطلاعات مسافر
        </button>
      </template>
    </DialogBox>



    <div v-if="data && reservationData" class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        رزرو


        {{ data?.tour.title }}
      </h1>
      <form @submit.prevent="handelSubmit" class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

          <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
            <li v-for="(item, itemIdx) in reservationData.count" :key="itemIdx" class="flex py-6 sm:py-10"
              v-show="item.count > 0">
              <div class="flex-shrink-0">
                
                <img v-if="data.tour.image" :src="data.tour.image" 
                  class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48" />
              </div>

              <div class="mr-4 flex flex-1 flex-col justify-between sm:mr-6">
                <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div class="flex justify-between">
                      <div>

                        <h3 class="font-medium text-gray-700 hover:text-gray-800">
                          {{ item.identitication }}
                        </h3>
                        <div class="text-xs text-gray-500 " >
                    

                            {{ hotelPrices?.hotels.map(ii => ii.name).join(", ") }}

                        </div>
                      </div>
                    </div>
                    <div class="mt-1 flex text-sm">
                      <!-- <p class="text-gray-500">{{ item.color }}</p>
                      <p v-if="item.size" class="mr-4 border-r border-gray-200 pr-4 text-gray-500">{{ item.size }}
                      </p> -->
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">{{
                      Intl.NumberFormat('fa-ir').format(+hotelPrices[item.identitication]) }}
                      تومان
                    </p>
                    <p v-if="hotelPrices?.other_currency" >
                      <div>
                        +
                      </div>
                      {{ hotelPrices[ item.identitication + '_other_currency'] }}
                    {{ hotelPrices?.other_currency }}
                    </p>
                  </div>

                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <label :for="`quantity-${itemIdx}`" class="sr-only">Quantity, {{ item.count }}</label>
                    <select :id="`quantity-${itemIdx}`" :name="`quantity-${itemIdx}`" v-model.number="item.count"
                      class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm">
                      <option v-for="i in 10" :value="i">{{ i }}</option>
                    </select>

                    <div class="absolute left-0 top-0">
                      <button @click="deleteFromReservation(itemIdx)" type="button"
                        class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Remove</span>
                        <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-2 mt-4">

                  <button type="button" v-for="(i, index) in item.users" :key="index" @click="openUser(itemIdx, index)"
                    class="p-2 border rounded  text-sm shadow flex items-center gap-2 h-12 group" :class="[
                      i.name ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                        index === 0 || item.users.at(index - 1)?.name ? 'border-gray-500 bg-gray-50 text-gray-700' :
                          'border-gray-500 bg-gray-50 text-gray-700 opacity-70 pointer-events-none'
                    ]">
                    <Icon size="28px" :name="i.name ? 'material-symbols-light:person-check-rounded' :
                      'material-symbols-light:person-alert-rounded'" class=" flex-shrink-0" :class="[
                        i.name ? 'text-emerald-500' : 'text-gray-500'
                      ]" />
                    <div class="w-full text-right">
                      <strong v-if="i.name">{{ i.name }} </strong>
                      <div v-else>
                        اطلاعات نفر
                        <strong>

                          {{ nth[index] }}
                        </strong>
                        را وارد کنید

                      </div>
                    </div>
                    <div class="bg-white p-0.5 mr-auto flex-center shrink-0 rounded " :class="[
                      i.name ? 'group-hover:bg-emerald-500 group-hover:text-emerald-50 text-emerald-500' : 'group-hover:bg-gray-500 group-hover:text-gray-50 text-gray-500'
                    ]" v-if="i.name || index === 0 || item.users.at(index - 1)?.name">

                      <Icon size="28px" :name="i.name ? 'material-symbols-light:person-edit' :
                        'material-symbols-light:ads-click-rounded'" class="  flex-shrink-0 " />
                    </div>
                  </button>
                </div>



                <!-- <p class="mt-4 flex gap-2 items-center text-sm text-gray-700">
                  <CheckIcon class="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                  <ClockIcon class="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                  <span>{{ item. ? 'In stock' : `Ships in ${item.leadTime}` }}</span>
                </p> -->
              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section aria-labelledby="summary-heading"
          class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
            خلاصه سفارش
          </h2>

          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-600">
                تعداد مسافر
              </dt>
              <dd class="text-sm font-medium text-gray-900">{{ reservationData.count.reduce((a, b) => a + b.count, 0)
                }}
              </dd>
            </div>

            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="text-sm text-gray-600">
                تعداد اتاق ها
              </dt>
              <dd class="text-sm font-medium text-gray-900">{{ reservationData.count.filter(a => a.count).length }}
              </dd>
            </div>

            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="flex text-sm text-gray-600">
                <span>
                  مالیات
                </span>
                <a href="#" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Learn more about how tax is calculated</span>
                  <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">-</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="text-base font-medium text-gray-900">
                هزینه ی کل
              </dt>
              <dd class="text-base font-medium text-gray-900">
                {{ 
                Intl.NumberFormat('fa-ir').format(reservationData.count.reduce((a, b) => a + (b.count * + hotelPrices[ b.identitication]),0))
              }}
                تومان
                <br>
                <span v-if="hotelPrices?.other_currency" >
                  {{ 
                  Intl.NumberFormat('fa-ir').format(reservationData.count.reduce((a, b) => a + (b.count * + hotelPrices[ b.identitication + '_other_currency']),0))
                     }}
{{ hotelPrices?.other_currency }}
                </span>
              </dd>
            </div>
          </dl>

          <div class="mt-6">
            <button type="submit"
              class="w-full rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50">
              نهایی کردن
              رزرو تور

            </button>
          </div>
        </section>
      </form>
    </div>
    <div class="mx-auto font-sm text-gray-500 p-10 w-full flex flex-col justify-center items-center text-center" v-else>
      <strong>رزروی وجود ندارد</strong>

      <NuxtLink class="btn rounded-full w-auto p-1 px-4 mt-4" to="/">بازگشت به صفحه اصلی</NuxtLink>
    </div>
  </div>
</template>
