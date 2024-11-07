<script setup>
definePageMeta({
  layout: 'profile',
  pageTransition: { name: 'anime-blur', mode: 'out-in' },
})
const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]
</script>

<template>

  <main class="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
    <div class="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          پرداخت
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-500">
          سابقه پرداخت های شما
        </p>

        <div class="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">



          <div class="">

            <div class="mt-8 flow-root">
              <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col"
                            class="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">شناسه</th>
                          <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">عنوان</th>
                          <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">مبلغ</th>
                          <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Role</th>
                          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span class="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="person in people" :key="person.email">
                          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{
                            person.name }}</td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.title }}</td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.email }}</td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.role }}</td>
                          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a href="#" class="text-Secondary">Edit<span class="sr-only">, {{ person.name }}</span></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>


    </div>
  </main>



</template>
