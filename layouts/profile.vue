<script setup lang="ts">
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  DocumentCurrencyDollarIcon,
  TicketIcon,
  PencilIcon
} from '@heroicons/vue/24/outline'


const secondaryNavigation = [
  { name: 'عمومی', href: '/u', icon: UserCircleIcon, },
  { name: 'سفر ها', href: '/u/trips', icon: TicketIcon, },
  { name: 'پرداخت ها', href: '/u/invoice', icon: DocumentCurrencyDollarIcon, },
  { name: 'ویرایش اطلاعات', href: '/u/edit', icon: PencilIcon, },
  { name: 'امنیت', href: '/u/passwd', icon: FingerPrintIcon, },
  // { name: 'Plan', href: '/', icon: CubeIcon, },
  // { name: 'Team members', href: '/', icon: UsersIcon, },
]

</script>

<template>
  <div dir="rtl" class="min-h-screen grid grid-cols-1 w-full">
    <NuxtLoadingIndicator />
    <div class="h-full flex-col flex w-full">
      <NavbarSectionCop class="" />
      <div class=" w-full h-full ">

        <div class="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
          <h1 class="sr-only">General Settings</h1>

          <aside
            class="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
            <nav class="flex-none px-4 sm:px-6 lg:px-0">
              <ul role="list" class="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
                <li v-for="item in secondaryNavigation" :key="item.name">
                  <NuxtLink :href="item.href"
                    :class="['text-gray-700 hover:bg-gray-50 hover:text-teal-500', 'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6']">
                    <component :is="item.icon" :class="[' group-hover:text-teal-500', 'h-6 w-6 shrink-0']"
                      aria-hidden="true" />
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </aside>

          <slot />
        </div>


      </div>
    </div>
    <FooterSection />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-gray-50 text-teal-500;
}
</style>
