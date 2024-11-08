<script setup lang="ts">

export type Root = Root2[]

export interface Root2 {
  id: number
  icon: string
  title: string
  desc: string
}

const { $api, $swal } = useNuxtApp()
const { data } = await useAPI<Root>('/api/contactus')

const isLoading = ref(false);

function setFormData() {
  Object.assign(formData, {
    name: "",
    phone: "",
    email: "",
    subject: "",
    description: "",
  })
}

const formData = reactive({
  name: "",
  phone: "",
  email: "",
  subject: "",
  description: "",
});

const errors = ref('');

const nameRef = useTemplateRef('nameRef');

onMounted(() => {
  nameRef.value?.focus();
});


async function handleSubmit(e: Event) {
  e.preventDefault();

  isLoading.value = true

  // Validation
  const phoneRegex = /((0?9)|(\+?989))\d{9}/g;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!phoneRegex.test(formData.phone)) {
    errors.value = "لطفا شماره همراه معتبر وارد نمایید";

    return
  }

  if (!emailRegex.test(formData.email)) {
    errors.value = "آدرس ایمیل معتبر نمی باشد";

    return
  }

  try {
    let isValid = true;

    const response = await $api<any>("/travelForm", {
      method: 'POST',
      body: formData,
    });

    $swal.success({
      message: "پیام شما با موفقیت ارسال شد",
      confirmButtonText: "باشه",
    });

    console.log("Contact Form Submitted Successfully:", response.data);
    // Optionally, you can handle success feedback to the user here (e.g., displaying a message)
  } catch (error) {
    console.error("Error submitting contact form:", error);
    // Optionally, you can handle error feedback to the user here
  }

  isLoading.value = (false);
};




</script>

<template>

  <div class="pt-5 container mx-auto">
    <div class="align-center flex items-center">
      <div class="lg:w-1/2 w-full">
        <form @submit="handleSubmit" class=" flex flex-col border-2 border-black rounded-lg p-4"
          style="background-color: #ededf1d4 !important;">
          <h5 class="py-2 flex text-lg font-bold">

            تماس با ما
          </h5>


          <div>
            <div class="flex flex-col gap-2 justify-between align-center">
              <div class="flex gap-4">
                <span class="p-1 pt-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M304 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96zM112 224v-64H80v64H16v32h64v64h32v-64h64v-32h-64z">
                    </path>
                  </svg></span>
                <input id="name" v-model="formData.name" ref="nameRef" placeholder="نام و نام خانوادگی"
                  autocomplete="off" name="name" required type="text" class="no-border form-control">
              </div>
              <div class="flex gap-4">
                <span class="p-1 pt-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z">
                    </path>
                  </svg>
                </span>
                <input placeholder="شماره تماس" autocomplete="off" name="phone" required type="text"
                  class="form-control" value="">
              </div>
              <div class="flex gap-4">
                <span class="p-1 pt-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z">
                    </path>
                  </svg>
                </span>
                <input placeholder="آدرس ایمیل" autocomplete="off" name="email" required type="text"
                  class="form-control" value="">
              </div>
              <div class="flex gap-4">
                <span class="p-1 pt-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
                      d="M160 144h288M160 256h288M160 368h288"></path>
                    <circle cx="80" cy="144" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="32"></circle>
                    <circle cx="80" cy="256" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="32"></circle>
                    <circle cx="80" cy="368" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="32"></circle>
                  </svg></span><select name="subject" class="form-control ">
                  <option value="">انتخاب موضوع</option>
                  <option value="تورهای لحظه آخری">ثبت نام تورهای لحظه آخری</option>
                  <option value="پیشنهادات">پیشنهادات</option>
                  <option value="انتقادات">انتقادات</option>
                </select>
              </div>
              <div class="flex gap-4">
                <span class="p-1 pt-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z">
                    </path>
                    <path
                      d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z">
                    </path>
                  </svg>
                </span>
                <textarea rows="4" placeholder="پیام خود را وارد کنید" autocomplete="off" name="description"
                  class="form-control w-full"></textarea>
              </div>

              <button class=" btn retro w-full rounded py-2 text-lg">ثبت</button>

            </div>
          </div>
        </form>
      </div>
      <div class="lg:w-1/2 w-full">
        <img src="../public/assets/images/contact/contact-hero.webp" alt="Contact" class="">
      </div>
    </div>

    <div class="my-5 flex gap-4">
      <div v-for="i in data || []" :key="i.id" class="lg:w-3/13 w-full border border-gray-200 rounded"
        style="background: rgb(248, 249, 250);">
        <div class="mb-2 card-style py-3 min-height animation card bg-light text-dark">
          <div class="text-center animation-text card-body">
            <p class="card-text">
              <Icon :name="i.icon" size="32px" />
            </p>
            <div class="fs-5 fw-bold card-title text-lg font-bold">
              {{ i.title }}
            </div>
            <p class="fs-6 py-2 card-text">
              {{ i.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>
.form-control {
  @apply block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50;
}
</style>
