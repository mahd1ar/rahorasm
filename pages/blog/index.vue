<script setup lang="ts">
import { HtmlToExcerpt } from '~/utils';

type Root = Root2[]

interface Root2 {
  id: number
  category: Category[]
  author: Author
  meta_title: string
  meta_description: string
  title: string
  image: string
  content: string
  created_at: string
  edited_at: string
  published: boolean
}

interface Category {
  id: number
  title: string
}

interface Author {
  id: number
  name: string
}

const route = useRoute()

const { data, status } = useAPI<Root>(() => {
  let queryString = new URLSearchParams(route.query as Record<string, string>).toString()
  if (queryString) queryString = '?' + queryString
  return '/blog/posts' + queryString
})


</script>

<template>
  <div class="my-12">

    <!-- component -->
    <!-- follow me on twitter @asad_codes -->
    <!-- place-items-center -->
    <div class="container mx-auto flex flex-col items-start gap-4 ">
      <span class="hidden h-1 w-10 rounded bg-teal-500 lg:block"
        data-v-inspector="components/FooterSection.vue:59:13"></span>
      <h1 class="text-3xl ">بلاگ و خبر ها</h1>
      <br>
    </div>
    <LoadingIndicator class="w-full" v-if="status === 'pending'" />
    <div v-else class="flex flex-wrap container mx-auto gap-4">
      <!-- card -->
      <div v-for="i in data" :key="i.id"
        class=" overflow-hidden retro transition duration-500 w-full ease-in-out transform hover:-translate-y-5  rounded-lg h-90 lg:w-60 md:w-80 cursor-pointer ">
        <NuxtLink :to="'/blog/' + i.id" class="w-full block h-full fade-in-bck">
          <img v-if="i.image" alt="blog photo" :src="i.image" class="max-h-40 w-full object-cover" />
          <div v-else
            class="h-40 w-full object-cover text-gray-400 text-3xl bg-gray-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
              <path fill="currentColor"
                d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v107.57l-29.47-29.47a14 14 0 0 0-19.8 0l-21.42 21.42l-45.41-45.42a14 14 0 0 0-19.8 0L38 154.2V56a2 2 0 0 1 2-2m-2 146v-28.83l52.58-52.58a2 2 0 0 1 2.84 0L176.83 202H40a2 2 0 0 1-2-2m178 2h-22.2l-38-38l21.41-21.42a2 2 0 0 1 2.83 0l38 38V200a2 2 0 0 1-2.04 2m-70-102a10 10 0 1 1 10 10a10 10 0 0 1-10-10" />
            </svg>
          </div>
          <div class="bg-white w-full ">

            <div class="p-4 pb-0">
              <p class="text-dark text-xl font-medium">
                {{ i.title }}
              </p>

              <p class="text-gray-600 font-light text-sm mt-2">
                {{ HtmlToExcerpt(i.content || '') }}
                <a class="inline-flex text-primary" href="#">
                  ...
                  ادامه
                </a>
              </p>
              <div class="flex flex-wrap justify-starts items-center py-3 text-xs text-white font-medium">

                <span v-for="c in i.category" :key="c.id" class="m-1 px-2 py-1 rounded bg-Secondary">
                  #{{ c.title }}
                </span>
              </div>

            </div>
            <div class="flex items-center  mt-2 bg-background p-4 py-2">
              <img v-if="i.author.image" class='w-10 h-10 relative object-cover rounded-full'
                :alt='i.author.name + " avatar"'
                src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'>
              <div v-else
                class='w-10 h-10 relative object-cover rounded-full font-bold text-xl bg-white text-gray-400 flex items-center justify-center '>
                <span class="relative top-0.5">R</span>
              </div>

              <div class="pr-3">
                <div class="font-medium">
                  {{ i.author.name }}
                </div>
                <!-- <div class="text-gray-600 text-sm">
                            CTO of Supercars
                        </div> -->
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

    </div>




  </div>
</template>

<style scoped>
.fade-in-bck {
  position: relative;
  display: inline-block;
  animation: fade-in-bck 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}


@keyframes fade-in-bck {
  0% {
    transform: translateZ(80px);
    opacity: 0;
  }

  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>
