<script setup>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

definePageMeta({
  // FIXME define auth middleware
  layout: 'profile',
  pageTransition: { name: 'anime-blur', mode: 'out-in' },
})

const appState = useAppState()

const automaticTimezoneEnabled = ref(true)

const name = ref('Tom Cook')
const email = ref('jHb5M@example.com')
const phone_number = ref('+1 (555) 123-4567')



</script>

<template>

  <main class="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
    <div class="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          اطلاعات کاربری
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-500">
          اين اطلاعات به صورت عمومي نمايش داده مي شود پس مراقب آنچه را به اشتراک مي گذاريد باشيد.

        </p>

        <dl class="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          <div class="pt-6 sm:flex">
            <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"> نام و نام خانوادگی</dt>
            <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div class="text-gray-900">{{ appState.user.name }}</div>
              <button type="button" class="font-semibold text-Secondary hover:text-indigo-500">Update</button>
            </dd>
          </div>
          <div class="pt-6 sm:flex">
            <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"> آدرس ایمیل </dt>
            <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div class="text-gray-900">{{ '-' }}</div>
              <button type="button" class="font-semibold text-Secondary hover:text-indigo-500">Update</button>
            </dd>
          </div>
          <div class="pt-6 sm:flex">
            <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">تلفن همراه</dt>
            <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div class="text-gray-900">{{ appState.user.phone }}</div>
              <button type="button" class="font-semibold text-Secondary hover:text-indigo-500">Update</button>
            </dd>
          </div>
        </dl>
      </div>

      <div class="hidden">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Bank accounts</h2>
        <p class="mt-1 text-sm leading-6 text-gray-500">Connect bank accounts to your account.</p>

        <ul role="list" class="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          <li class="flex justify-between gap-x-6 py-6">
            <div class="font-medium text-gray-900">TD Canada Trust</div>
            <button type="button" class="font-semibold text-Secondary hover:text-indigo-500">Update</button>
          </li>
          <li class="flex justify-between gap-x-6 py-6">
            <div class="font-medium text-gray-900">Royal Bank of Canada</div>
            <button type="button" class="font-semibold text-Secondary hover:text-indigo-500">Update</button>
          </li>
        </ul>

        <div class="flex border-t border-gray-100 pt-6">
          <button type="button" class="text-sm font-semibold leading-6 text-Secondary hover:text-indigo-500"><span
              aria-hidden="true">+</span> Add another bank</button>
        </div>
      </div>

      <div class="hidden">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Integrations</h2>
        <p class="mt-1 text-sm leading-6 text-gray-500">Connect applications to your account.</p>

        <ul role="list" class="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          <li class="flex justify-between gap-x-6 py-6">
            <div class="font-medium text-gray-900">QuickBooks</div>
            <button type="button" class="font-semibold text-Secondary hover:text-indigo-500">Update</button>
          </li>
        </ul>

        <div class="flex border-t border-gray-100 pt-6">
          <button type="button" class="text-sm font-semibold leading-6 text-Secondary hover:text-indigo-500"><span
              aria-hidden="true">+</span> Add another application</button>
        </div>
      </div>

      <div class="hidden">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Language and dates</h2>
        <p class="mt-1 text-sm leading-6 text-gray-500">Choose what language and date format to use throughout your
          account.</p>

        <dl class="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          <div class="pt-6 sm:flex">
            <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Language</dt>
            <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div class="text-gray-900">English</div>
              <button type="button" class="font-semibold text-Secondary hover:text-indigo-500">Update</button>
            </dd>
          </div>
          <div class="pt-6 sm:flex">
            <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Date format</dt>
            <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div class="text-gray-900">DD-MM-YYYY</div>
              <button type="button" class="font-semibold text-Secondary hover:text-indigo-500">Update</button>
            </dd>
          </div>
          <SwitchGroup as="div" class="flex pt-6">
            <SwitchLabel as="dt" class="flex-none pr-6 font-medium text-gray-900 sm:w-64" passive>Automatic timezone
            </SwitchLabel>
            <dd class="flex flex-auto items-center justify-end">
              <Switch v-model="automaticTimezoneEnabled"
                :class="[automaticTimezoneEnabled ? 'bg-sectext-Secondary' : 'bg-gray-200', 'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sectext-Secondary']">
                <span aria-hidden="true"
                  :class="[automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
              </Switch>
            </dd>
          </SwitchGroup>
        </dl>
      </div>
    </div>
  </main>
</template>
