<script setup lang="ts">

import { vOnClickOutside } from '@vueuse/components'

const appState = useAppState()

const l1 = ref('')
const l2 = ref('')
const l3 = ref('')

const navIsOpen = ref(false)

function selectSubmenu(level: 1 | 2 | 3, id: string) {
  console.log('selectSubmenu')
  if (level === 1){
    l1.value = (l1.value === id ? '' : id)
  }
  else if (level === 2)
    l2.value = l2.value === id ? '' : id
  else
    l3.value = l3.value === id ? '' : id

}

function closeSubmenu() {
  
   
    console.log('closeSubmenu')
    l1.value = ''
    l2.value = ''
    l3.value = ''
 
}

</script>

<template>

  <nav class="bg-[f8f9fa] border-gray-200 shadow-xl text-dark ">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="  ">
      <LogoComponent />
      </NuxtLink>
      <button data-collapse-toggle="navbar-multi-level" type="button" @click="navIsOpen = !navIsOpen"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <div class=" ml-auto w-full md:block md:w-auto  px-6" :class="navIsOpen ? 'block' : 'hidden'"
        id="navbar-multi-level">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  text-dark ">
          <li v-for="i in appState.navbar" :key="i.id">

            <template v-if="(i.children?.length || 0) > 0">

              <button :id="'dropdown-' + i.name" data-dropdown-toggle="dropdownNavbar" @click="selectSubmenu(1, i.name)"
                class="js-dropdown flex items-center justify-between w-full py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-Secondary md:p-0 md:w-auto  ">
                {{ i.name }}
                <svg class="w-2.5 h-2.5 ms-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg></button>
              <!-- Dropdown menu -->
              <div :id="'dropdown' + i.name" :class="!!l1 && i.name === l1 ? 'md:absolute relative' : 'hidden'"
                v-on-click-outside="() => l1 === i.name && closeSubmenu()"
                 :style="{'--max-items' : i.children?.length }" class=" slide-up z-10 font-normal bg-gray-50 md:bg-white text-dark border border-gray-300 divide-y divide-gray-100 rounded-lg w-full md:w-44 ">
                <ul class="py-2 text-sm " aria-labelledby="dropdownLargeButton">
                  <template v-for="ii in i.children" :key="ii.name">
                    <li :key="ii.id + '02'" v-if="(ii.children?.length || 0) > 0" aria-labelledby="dropdownNavbarLink">
                      <button @click="selectSubmenu(2, ii.name)" data-dropdown-placement="right-start" type="button"
                        class="flex items-center justify-between w-full px-4 py-2 hover:bg-white  ">
                        {{ ii.name }} 
                        <svg class="w-2.5 h-2.5 ms-2.5 md:rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div :class="l2 && ii.name === l2 ? 'md:absolute relative' : 'hidden'"
                        :style="{'--max-items' : ii.children?.length || 0 }" class="slide-up z-10 bg-gray-200 md:bg-white border border-gray-300 divide-y divide-gray-300 rounded-lg  w-full md:w-44 left-0  lg:-translate-x-full lg:-translate-y-10 ">
                        <ul class="py-2 text-sm "
                          aria-labelledby="doubleDropdownButton">

                          <template v-for="iii in ii.children" :key="iii.id">
                            <li :key="iii.id + '02'" v-if="iii.children?.length && iii.children?.length > 0"
                              aria-labelledby="dropdownNavbarLink">
                              <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown"
                                @click="selectSubmenu(3, iii.name)" data-dropdown-placement="right-start" type="button"
                                class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 ">
                                {{ iii.name }}
                                <svg class="w-2.5 h-2.5 ms-2.5 md:rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                  fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                              </button>
                              <div id="doubleDropdown" :class="l3 && iii.name === l3 ? 'md:absolute relative' : 'hidden'"
                                class="z-10 divide-y bg-gray-300 md:bg-white border border-gray-300 divide-gray-100 rounded-lg  w-full md:w-44 left-0  lg:-translate-x-full lg:-translate-y-10 ">
                                <ul class="py-2 text-sm  " aria-labelledby="doubleDropdownButton">
                                  <li @click="closeSubmenu" v-for="iiii in iii.children" :key="iiii.id">
                                    <NuxtLink :to="iiii.path ||'#'" class="block px-4 py-2 hover:bg-white ">{{ iiii.name }}</NuxtLink>
                                  </li>

                                </ul>
                              </div>
                            </li>
                            <li @click="closeSubmenu" :key="i.id + '01'" v-else>
                              <NuxtLink  :to=" iii.path || '#'" class="block px-4 py-2 hover:bg-white ">
                                {{ iii.name }}
                              </NuxtLinK>
                            </li>
                          </template>
                        </ul>


                      </div>
                    </li>
                    <li @click="closeSubmenu" :key="ii.id + '01'" v-else>
                      <NuxtLink :to=" ii.path || '#'" class="block px-4 py-2 hover:bg-gray-100 ">
                        {{ ii.name }}
                      </NuxtLink>
                    </li>
                  </template>

                </ul>

              </div>
            </template>

            <NuxtLink :to="i.path " v-else class="block py-2 px-3 text-dark  rounded md:bg-transparent  md:p-0 "
              aria-current="page">{{ i.name }}</NuxtLink>


          </li>

        </ul>
      </div>

      <div class="text-gray-600 flex gap-1 items-center " >
        
        <div v-if="appState.isAuth" class="flex-center gap-2" to="/signup"  >
            {{ appState.user.name || 'null' }}
            <div class="w-6 h-6 p-1 bg-gray-200 rounded-full" >

              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803c2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.844 0M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"/></svg>
            </div>
          </div>
        <template v-else >

          <NuxtLink class="" to="/login">
  
            ورود
          </NuxtLink>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17V7"/></svg>
          </div>
          <NuxtLink class="flex-center gap-2" to="/signup"  >
            ثبت نام
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803c2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.844 0M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"/></svg>
          </NuxtLink>
        </template>
      
      </div>

    </div>
  </nav>


</template>

<style scoped>

a {
  @apply hover:text-Secondary;
}

/* Animation keyframes for sliding up */
@keyframes slideUp {
    from {
        opacity: 0; /* Start invisible */
        scale: 0.88;
        /* max-height: 0; Start slightly below */
      }
      to {
        opacity: 1; /* End fully visible */
        scale: 1;
        /* max-height: calc(36px * var(--max-items) + 8px ); End at original position */
    }
}

/* Class to trigger the animation */
.slide-up {
  /* overflow: hidden; */
    animation: slideUp 0.5s forwards; /* Apply the animation */
}
</style>
