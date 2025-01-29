<script lang="ts" setup>
// import { useRouteQuery } from '@vueuse/router'

 interface Root {
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

const param = useRouteParams('slug', 1, { transform: Number })

const { data } = useAPI<Root>('/blog/posts/' + param.value)

</script>

<template>
  <div class="p-2 ">
    
      <article
        class="max-w-2xl  px-6 py-16 my-8  mx-auto space-y-12  text-gray-800 "
      >
      <img
          :src="data?.image"
          class=" object-cover w-full max-h-96 rounded-lg"
        >
        <div class="w-full mx-auto space-y-4 text-center">
          <div class="flex justify-center items-center gap-4">
            <!-- <p
              v-for="tag in result?.post?.[lang].tags || []"
              :key="tag.id"
              class="text-xs font-semibold tracking-wider uppercase"
            >
              #{{ tag.name }}
            </p> -->
          </div>
          <h1 class="text-4xl font-bold leading-tight md:text-5xl">
            {{ data?.title }}
          </h1>
          <p class="text-sm text-gray-400">
            <!-- by -->
            <!-- <a
            rel="noopener noreferrer"
            href="#"
            target="_blank"
            class="underline text-violet-400"
          > -->
            <!-- <span itemprop="name">Leroy Jenkins</span> </a -->
            <!-- > -->
            <time
              v-if="data?.created_at"
              :datetime="new Date(data?.created_at).toISOString()"
            >
              {{
                new Date(data.created_at).toLocaleString("fa-IR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </time>
          </p>
        </div>
        
        <div class="text-gray-800 ck ck-content">
          
          <div v-html="data?.content" ></div>
        </div>
      </article>
    
    <div class="gap" />
  </div>
</template>

<style scoped></style>