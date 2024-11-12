<script setup lang="ts">
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid'
const h1 = "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const firstInput = useTemplateRef('firstInput')

const isOpen = ref(false)
const selectedItemIndex = ref<number>(0)
const selectedRoomIndex = ref<number>(0)

const reservation = reactive([
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc: h1,
    count: 3,
    users: [
      {
        name: 'omom',
        ssn: '',
        passportNumber: '',
        birthday: '',
        isValid: true
      }
    ],
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc: h1,
    count: 3,
    users: [
      {
        name: '',
        ssn: '',
        passportNumber: '',
        birthday: '',
        isValid: false
      }
    ],
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc: h1,
    count: 3,
    users: [
      {
        name: '',
        ssn: '',
        passportNumber: '',
        birthday: '',
        isValid: false
      }
    ],
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
])

const nth = ['اول', 'دوم', 'سوم', 'چهارم', 'پنجم', 'ششم', 'هفتم', 'هشتم', 'نهم'] as const

watchDeep(reservation, (nval) => {

  nval.forEach(i => {
    if (i.count !== i.users.length) {

      if (i.count > i.users.length) {
        for (let j = 0; j < i.count - i.users.length; j++) {
          i.users.push({
            name: '',
            ssn: '',
            passportNumber: '',
            birthday: '',
            isValid: false
          })
        }
      } else
        i.users = i.users.slice(0, i.count)

    }

  })


})

function openUser(itemIndex: number, roomIndex: number) {
  
  isOpen.value = true
  selectedItemIndex.value = itemIndex
  selectedRoomIndex.value = roomIndex
}

function cancelEditing() {
  isOpen.value = false
  reservation[selectedItemIndex.value].users[selectedRoomIndex.value].isValid = false
}

onMounted(() => {
  firstInput.value?.focus()
})

</script>

<template>
  <div class="bg-white">
    <DialogBox v-model="isOpen" element-id="xx" @close="cancelEditing">
      <template #header>
        <div>ویرایش اطلاعات مسافر</div>
      </template>

      <template #content>
        <div>
          <form >

            <fieldset class="text-gray-900 flex flex-col gap-2 mt-4" >
              <legend class="sr-only">مسافران</legend>
              <div class="flex justify-between">
                <label for="name"> نام و نام خانوادگی </label>
                <input ref="firstInput" type="text" id="name"  v-model="reservation[selectedItemIndex].users[selectedRoomIndex].name">
              </div>
  
              <div class="flex justify-between">
                <label for="ssn"> شماره ملی </label>
                <input type="text" id="ssn"  v-model="reservation[selectedItemIndex].users[selectedRoomIndex].ssn">
              </div>

              <div class="flex justify-between">
                <label for="passport"> شماره پاسپورت </label>
                <input type="text" id="passport"  v-model="reservation[selectedItemIndex].users[selectedRoomIndex].passportNumber">
              </div>

              <div class="flex justify-between">
                <label for="birthday"> تاریخ تولد </label>
                <input type="datetime-local" id="birthday"  v-model="reservation[selectedItemIndex].users[selectedRoomIndex].birthday">
              </div>
            </fieldset>

          </form>
        </div>
      </template>
    </DialogBox>

    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
      <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

          <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
            <li v-for="(item, itemIdx) in reservation" :key="item.id" class="flex py-6 sm:py-10">
              <div class="flex-shrink-0">
                <img :src="item.imageSrc" :alt="item.imageAlt"
                  class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48" />
              </div>

              <div class="mr-4 flex flex-1 flex-col justify-between sm:mr-6">
                <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div class="flex justify-between">
                      <h3 class="">
                        <a :href="item.href" class="font-medium text-gray-700 hover:text-gray-800">{{ item.name
                          }}</a>
                      </h3>
                    </div>
                    <div class="mt-1 flex text-sm">
                      <p class="text-gray-500">{{ item.color }}</p>
                      <p v-if="item.size" class="mr-4 border-r border-gray-200 pr-4 text-gray-500">{{ item.size }}
                      </p>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">{{ item.price }}</p>
                  </div>

                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <label :for="`quantity-${itemIdx}`" class="sr-only">Quantity, {{ item.name }}</label>
                    <select :id="`quantity-${itemIdx}`" :name="`quantity-${itemIdx}`" v-model.number="item.count"
                      class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>

                    <div class="absolute left-0 top-0">
                      <button type="button" class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Remove</span>
                        <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-2">

                  <div v-for="(i, index) in item.users" :key="index" @click="openUser(itemIdx, index)"
                    class="p-2 border rounded  text-sm shadow flex items-center gap-2" :class="[
                      i.isValid ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                        index === 0 || item.users.at(index-1)?.isValid ? 'border-yellow-500 bg-yellow-50 text-yellow-700' :
                          'border-gray-500 bg-gray-50 text-gray-700 opacity-75'
                    ]">
                    <Icon size="28px" name="material-symbols-light:person-alert-rounded" class=" flex-shrink-0" :class="[
                      i.isValid ? 'text-emerald-500' :
                        index === 0 ? 'text-yellow-500'
                          : 'text-gray-500'
                    ]" />
                    <div v-if="i.isValid" class="w-full">
                      <strong>{{ i.name }} </strong>
                    </div>
                    <div v-else>
                      اطلاعات نفر
                      <strong>

                        {{ nth[index] }}
                      </strong>
                      را وارد کنید

                    </div>
                    <button type="button"
                      class="bg-white p-0.5 mr-auto flex-center shrink-0 rounded hover:bg-yellow-500 hover:text-yellow-50 text-yellow-500">

                      <Icon size="28px" name="material-symbols-light:ads-click-rounded" class="  flex-shrink-0 " />
                    </button>
                  </div>
                </div>

       

                <p class="mt-4 flex gap-2 items-center text-sm text-gray-700">
                  <CheckIcon v-if="item.inStock" class="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                  <ClockIcon v-else class="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                  <span>{{ item.inStock ? 'In stock' : `Ships in ${item.leadTime}` }}</span>
                </p>
              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section aria-labelledby="summary-heading"
          class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-600">Subtotal</dt>
              <dd class="text-sm font-medium text-gray-900">$99.00</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="flex items-center text-sm text-gray-600">
                <span>Shipping estimate</span>
                <a href="#" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Learn more about how shipping is calculated</span>
                  <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">$5.00</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="flex text-sm text-gray-600">
                <span>Tax estimate</span>
                <a href="#" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Learn more about how tax is calculated</span>
                  <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">$8.32</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="text-base font-medium text-gray-900">Order total</dt>
              <dd class="text-base font-medium text-gray-900">$112.32</dd>
            </div>
          </dl>

          <div class="mt-6">
            <button type="submit"
              class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>
