<script setup lang="ts">

definePageMeta({
  layout: 'profile',
  pageTransition: { name: 'anime-blur', mode: 'out-in' },
})
const { $swal,$api } = useNuxtApp()
const password = ref("")
const confirmPassword = ref("")

function validate(){

  if(!password.value.trim().length ) {

    $swal.error("رمز عبور را وارد کنید")

    return false
  }

  if(password.value.trim() !== confirmPassword.value.trim()) {

    $swal.error("رمز عبور و تکرار آن یکسان نیست")

    return false
  }
  else
  return true
}

function changePassword() {
  if(!validate()) return

  $api('/auth/password/',{
    method:'POST',
    body: {
      password:password.value,confirm_password:confirmPassword.value
    }
    }).then(() => {
      $swal.success("رمز عبور با موفقیت تغییر کرد")
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
          تغییر رمز عبور
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-500">پسورد جدید خود را وارد کنید</p>

        <div class="mt-6  border-t border-gray-200" >

          <form @submit.prevent="changePassword" class="max-w-sm">
  
            <ul role="list" class=" text-sm leading-6">
              <li class="flex flex-col justify-between gap-x-6 py-6">
                <label class="font-medium text-gray-900"> پسورد جدید</label>
                <input v-model="password" class="form-input" type="text" name="" id="">
              </li>
              <li class="flex flex-col justify-between gap-x-6 py-6">
                <label class="font-medium text-gray-900">تکرار پسورد</label>
                <input v-model="confirmPassword" class="form-input" type="text" name="" id="">
              </li>
            </ul>
    
            <div class="flex justify-end pt-6 ">
              <button type="submit" class="text-sm font-semibold leading-6 text-white p-2 rounded bg-Secondary ">
                تغییر رمز عبور  
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
  @apply mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0;
}
</style>
