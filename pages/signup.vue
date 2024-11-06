<script setup lang="ts">
import { COOKIES } from '~/data/types';
import { timeout } from '~/utils';


export interface Root {
  refresh?: string
  access?: string
  message: string
}

const usernameInput = useTemplateRef('name_')

const { $api, $fetchUserData, $swal } = useNuxtApp()

const redirectTo = useRouteParams<string>('go','/')

const mode = ref<1 | 2>(1)
const username = ref("");
const name = ref("");
const password = ref('');
const confirmPassword = ref('');
const OTP = ref('');

const errorMessage = ref("");
const successMessage = ref("");
const isLoading = ref(false);

function convertToEnglishNumbers(input: string): string {
  const farsiToEnglish = {
    '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4', 
    '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9'
  };

  const arabicToEnglish = {
    '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4', 
    '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9'
  };
//@ts-ignore
return input.replace(/[۰-۹]/g, char => farsiToEnglish[char])
//@ts-ignore
              .replace(/[٠-٩]/g, char => arabicToEnglish[char]);
}

function validate() {

  if (mode.value === 1) {
const usernameValue = convertToEnglishNumbers(username.value)
    if (!usernameValue.startsWith('09')) {

      errorMessage.value = 'شماره موبایل باید با 09 شروع بشود'
      return false
    }

    if (usernameValue.trim().length !== 11) {

      errorMessage.value = 'شماره موبایل وارد شده معتبر نیست'
      return false
    }

    if (password.value.trim() !== confirmPassword.value.trim()) {

      errorMessage.value = 'رمز عبور و تکرار آن یکسان نیست'
      return false
    }

  }

  if (mode.value === 2) {

    if (OTP.value.trim().length !== 6) {

      errorMessage.value = 'رمز یکبار مصرف وارد شده معتبر نیست'
      return false
    }
  }

  errorMessage.value = ''

  return true

}


const handleSubmit2 = async () => {

  // Clear previous messages
  errorMessage.value = "";
  successMessage.value = "";
isLoading.value = (true);
  try {

    const userCredentials = {
      phone_number: username.value,
      otp: OTP.value
    };

    const data = await $api('/auth/signup/validate', {
      body: userCredentials,
      method: 'POST'
    })

    console.log(data)

    const  userData  = await $fetchUserData()
    if(userData){

      $swal.success('ثبت نام با موفقیت انجام شد')
      navigateTo(redirectTo.value)
    } else {

      $swal.error('خطا در گرفتن اطلاعات کاربر')
    }

  } catch (error) {
    $swal.error('خطا در ثبت نام')
  }

  // Set loading state to true before the fetch call
  isLoading.value = (false);

}

const handleSubmit1 = async () => {

  if (!validate())
    return false

  // Clear previous messages
  errorMessage.value = "";
  successMessage.value = "";

  const userCredentials = {
    phone_number: username.value,
    password: password.value,
    name: name.value
    // expiresInMins: 30, // Optional, defaults to 60
  };

  // Set loading state to true before the fetch call
  isLoading.value = (true);

  try {


    const response = await $api<Root>('/auth/signup/request', {
      method: 'POST',
      body: userCredentials,
    })

    successMessage.value = "رمز یکبار مصرف ارسال شد";

    mode.value = 2
  } catch (error) {
    // @ts-ignore
    errorMessage.value = (error?.data?.message || (error as Error).message);
  }

  isLoading.value = (false);

};

onMounted(() => {
  usernameInput.value?.focus()
})

</script>

<template>

  <main class="py-4">
    <ResponsiveDebugger />
    <div class="max-w-2xl mx-auto p-6 sm:p-0">
      <div class="flex justify-center flex-col sm:flex-row">
        <div
          class=" w-full sm:w-1/2 px-4 form-right rounded-xl rounded-b-none sm:rounded-r-xl sm:rounded-l-none flex flex-col">
          <h4 class="font-bold text-center py-12 text-2xl">ساخت حساب کاربری</h4>


          <div v-if="errorMessage" role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
            <strong class="block font-medium text-red-800"> خطا </strong>
            <p class="mt-2 text-sm text-red-700">
              {{ errorMessage }}
            </p>
          </div>

          <div v-if="successMessage" role="alert" class="rounded border-s-4 border-green-500 bg-green-50 p-4">
            <strong class="block font-medium text-green-800"> موفقیت </strong>
            <p class="mt-2 text-sm text-green-700">
              {{ successMessage }}
            </p>
          </div>

          <form v-if="mode === 1" @submit.prevent="handleSubmit1" class="">

            <div id="user-name" class="mb-3" controlId="validationCustom01">
              <label class="text-[#6c757d]" for="name">
                نام و نام خانوادگی

              </label>
              <input type="text" class='form-controls1' ref="name_" id="name" v-model="name" />

            </div>

            <div id="phone_number" class="mb-3" controlId="validationCustom01">
              <label class="text-[#6c757d]" for="mobile">
                شماره موبایل
              </label>
              <input type="text" class='form-controls1' v-model="username" id="mobile" />

            </div>

            <div id="passwd" class="mb-3" controlId="validationCustom01">
              <label class="text-[#6c757d]" for="password">
                گذرواژه
              </label>
              <input type="password" class='form-controls1' v-model="password" id="password" />

            </div>
            <div id="confirm_passwd" class="mb-3" controlId="validationCustom01">
              <label class="text-[#6c757d]" for="confirm_password">
                تکرار
                گذرواژه

              </label>
              <input type="password" class='form-controls1' v-model="confirmPassword" id="confirm_password" />

            </div>


            <button class="btn w-full p-2 rounded-lg retro-style mb-2 disabled:bg-gray-300 disabled:opacity-50 "
              type="submit" :disabled="isLoading">
              ثبت و ادامه
            </button>

          </form>

          <form v-else="mode===2" @submit.prevent="handleSubmit2" class="">

            <div id="user-name" class="mb-3" controlId="validationCustom01">
              <label class="text-[#6c757d]">
                شماره تماس خود

              </label>
              <input type="text" class='form-controls1' disabled v-model="username" />

            </div>

            <div class="mb-3" controlId="formBasicPassword">
              <label class="text-[#6c757d]" for="otp">رمز یکبار مصرف</label>
              <input class='form-controls1' type="password" id="otp" v-model="OTP" required />
            </div>
            <button class="btn w-full p-2 rounded-lg retro-style mb-2" type="submit" :disabled="isLoading">
              ثبت و ادامه
            </button>
            <NuxtLink to="/temporyLogin" class="text-center underline lh-lg">
              ورود با کد یکبار مصرف
            </NuxtLink>
          </form>

          <div class="flex justify-between my-3 mt-auto text-gray-800 ">
            <p>قبلا ثبت نام کرده اید؟</p>
            <NuxtLink class="underline" to="/login">
              وارد شوید
            </NuxtLink>
          </div>
        </div>
        <div class="form-left rounded-xl rounded-t-none sm:rounded-l-xl sm:rounded-r-none w-full sm:w-1/2">

          <img class="w-full h-full object-cover" src="/assets/images/login/photo-1471506480208-91b3a4cc78be.jpg"
            alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.form-controls1 {
  border: 1px solid rgb(198, 198, 198) !important;
}

.form-right {
  border: 1px solid rgb(215, 215, 215);


}

.form-left {
  border: 1px solid rgb(215, 215, 215);

  overflow: hidden;
}

input {
  @apply w-full bg-white border p-1.5 px-4 mt-2 rounded-lg focus:outline-none;
}
</style>
