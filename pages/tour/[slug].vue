<script setup lang="ts">

const priceRange = ref([5,30])
</script>

<template>
  <main>

    <section class="container mx-auto flex gap-4 ">
      


        <aside class="w-3/12 bg-white shadow-md border border-gray-300 rounded-md flex flex-col gap-4 p-3 py-8">
          <span class="" >

            {{ priceRange[0] }}
            <br>
            {{ priceRange[1] }}
          </span>

          <FilterCard title="توضیحات تور استانبول">
            <template #icon-pre>
              <!-- pin icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56">
                <path fill="currentColor"
                  d="M14.254 35.969h11.695v12.047c0 3.562 1.477 6.562 2.063 6.562s2.062-3 2.062-6.562V35.969h11.672c1.617 0 2.79-1.032 2.79-2.602c0-.984-.306-1.687-.985-2.414l-7.172-7.781c-.492-.516-.797-.89-.68-1.852l1.196-8.554c.07-.492.117-.774.539-1.078l5.765-4.172c1.29-.938 1.852-2.086 1.852-3.141c0-1.57-1.266-2.953-3.07-2.953H14.02c-1.805 0-3.07 1.383-3.07 2.953c0 1.055.562 2.203 1.827 3.14l5.766 4.173c.445.304.492.585.562 1.078l1.196 8.554c.117.961-.188 1.336-.68 1.852l-7.172 7.781c-.68.727-.984 1.43-.984 2.414c0 1.57 1.172 2.602 2.789 2.602" />
              </svg>
            </template>
          </FilterCard>
  
          <FilterCard title="12 تور استانبول برای شما پیدا شد.">
            <template #icon-pre>
              <!-- check icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clip-rule="evenodd"/></svg>
            </template>
          </FilterCard>
  
          <FilterCard title="بازه ی قیمت">
            <template #icon-pre>
              <!-- tag icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42"/></svg>
            </template>
            <template #body >
<div class="relative" >
  <DualSlider v-model="priceRange" />


</div>
            </template>
          </FilterCard>
 
        </aside>


      <div class="w-9/12 bg-red-400">asd2

asd
      </div>
    </section>
  </main>
</template>

<style scoped></style>
