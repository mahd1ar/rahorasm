<script setup lang="ts">
 interface Root {
  id: number
  icon: string
  title: string
  desc: string
}

const {data,error} = useAPI<Root[]>('/api/aboutus/')

// iconname like : 'material-symbols-light:10k-outline-rounded'

</script>

<template>
  <div class="" >
  
    <div class="container mx-auto mt-6" >
      <section class="bg-primary  rounded-xl relative flex overflow-hidden" >
        <div class="bg-dark absolute left-0 top-0 w-5/12 h-full" aria-hidden="true" />
        <div class="w-7/12 relative p-6" >
          <h1 class="text-2xl advise-title p-4 inline-block" >
            چرا راه و رسم سفر؟
          </h1>
          <p class="mt-4 max-w-xl mx-auto " >
            آژانس هواپیمایی راه و رسم سفر با اخذ مجوزهای لازم از سازمان میراث فرهنگی و گردشگری در عرصه سفر و گردشگری گام موثری برداشته و در این سال ها همیشه رضایت کامل مسافران را مهمترین هدف خود قرار داده است. مدیریت و کادر اجرایی راه و رسم سفر با بهره گیری از سالها تجربه در عرصه گردشگری همواره در ارائه خدمات نوین پیش قدم بوده است. کارشناسان ما راهنمای شما در دریافت خدمات و امکانات گسترده در سراسر دنیا می باشند.
          </p>
          <div>
            <div class="bg-[#f8f9fa] p-6 flex flex-col gap-4 max-w-md mx-auto retro rounded-lg mt-6 text-center" >
              <h4 class="text-xl font-bold " >
                با مشاوره تلفنی آسان بخرید.
              </h4>
              <p>
                شنبه تا چهارشنبه 09:30 الی 17:30
                <br>
                پنج شنبه ها 09:30 الی 14:00
              </p>
              <button type="button" class="btn p-2 rounded retro flex gap-2 justify-center" >
                مشاوره رایگان
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24"><path fill="currentColor" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"/></svg>

              </button>
            </div>
          </div>
        </div>
        <div class="w-5/12 relative p-6 flex-center" >
          <div class="max-w-sm" >
            <img class="w-full" src="/assets/images/about/about-bg.webp" alt="">
          </div>
        </div>

      </section>
      <section class="mt-4 grid grid-cols-3 gap-4 ">
        <div v-for="i in data || []" :key="i.id"class="retro rounded-md p-6 flex-col flex gap-4 text-center ">
          <div class="flex-center text-Secondary" >

            <Icon :name="i.icon" size="32px" />
          </div>
          <h3 class="font-bold text-xl" >{{ i.title }}</h3>
          <p>{{ i.desc }}</p>
        </div>
      </section>
    </div>
    
  </div>
</template>

<style scoped></style>
