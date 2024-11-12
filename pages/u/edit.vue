<script setup lang="ts">

definePageMeta({
  layout: 'profile',
  pageTransition: { name: 'anime-blur', mode: 'out-in' },
})

 interface Root {
  payload: Payload
}

 interface Payload {
  id: number
  name: string
  phone_number: string
  email: any
  is_staff: boolean
}


const { $swal,$api } = useNuxtApp()

const appState = useAppState()

const {data , error,refresh} = await useAPI<Root>('/auth/user-profile')
const name = ref( data.value?.payload.name || '')
const phone = ref( data.value?.payload.phone_number || '')
const email = ref( data.value?.payload.email || '')  

if(!error.value){
   name.value = ( data.value?.payload.name || '')
   phone.value = ( data.value?.payload.phone_number || '')
   email.value = ( data.value?.payload.email || '')  

} 


const firstInput = useTemplateRef('firstInput')


onMounted(() => {
  firstInput.value?.focus()
})

function validate(){

  if(!name.value.trim().length ) {

    $swal.error("نام و نام خانوادگی را وارد کنید")

    return false
  }

  // validate email using regex
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(email.value)){
    $swal.error("ایمیل را به درستی وارد کنید")
    return false
  }
  return true
}

function changeProfileData() {
  if(!validate()) return

  $api('/auth/user-profile',{
    method:'PUT',
    body: {
      name:name.value,
      email:email.value,
    }
    }).then(() => {
      $swal.success("اطلاعات کاربری با موفقیت تغییر کرد")
      refresh()
    }).catch((err) => {
      $swal.error({
        message: err.message,
        title: "خطایی رخ داده است"
      })
    })

  
}

</script>

<template>
 
    <main class="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
    <div class="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">

      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">
ویرایش اطلاعات
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-500">
          اطلاعات ناحیه کاربری خود را به روز کنید
        </p>

        <div class="mt-6  border-t border-gray-200" >

          <form @submit.prevent="changeProfileData" class="max-w-sm">
  
            <ul role="list" class=" text-sm leading-6">
              <li class="flex flex-col justify-between gap-x-6 py-6">
                <label class="font-medium text-gray-900"> نام و نام خانوادگی </label>
                <input ref="firstInput" v-model="name" class="form-input" type="text" name="" id="">
              </li>
              <li class="flex flex-col justify-between gap-x-6 py-6 ">
                <label class="font-medium text-gray-900"> شماره موبایل</label>
                <input v-model="phone" class="form-input " type="text" name="" id="" disabled >
              <span class="text-xs text-gray-500 mr-1" >
                امکان ویرایش شماره موبایل وجود ندارد لطفا از طریق پشتیبانی راه و رسم اقدام کنید  
              </span>
              </li>

              <li class="flex flex-col justify-between gap-x-6 py-6 ">
                <label class="font-medium text-gray-900"> آدرس ایمیل </label>
                <input v-model="email" class="form-input " type="text" name="" id=""  >
              </li>
            </ul>
    
            <div class="flex justify-end pt-6 ">
              <button type="submit" class="text-sm font-semibold leading-6 text-white p-2 rounded bg-Secondary ">
                تغییر 
                اطلاعات کاربری  
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped>

input {
  @apply mt-1 block w-full disabled:text-gray-300 disabled:bg-gray-50 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0;
}
</style>
