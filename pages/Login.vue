<script setup lang="ts">
import { COOKIES } from '~/data/types';
import { timeout } from '~/utils';


export interface Root {
  refresh?: string
  access?: string
  message: string
}

const usernameInput = useTemplateRef('username-input')

const { $api, $fetchUserData, $swal } = useNuxtApp()
const appState = useAppState()
const accessTocken = useCookie(COOKIES.Access)
const refreshTocken = useCookie(COOKIES.Refresh)

const go = useRouteQuery<string>('go', '/')

const username = ref(import.meta.dev ? '09129740477' : "");
const password = ref(import.meta.dev ? '09129740477' : '');
const errorMessage = ref("");
const successMessage = ref("");
const isLoading = ref(false);
const errorOnValidateUsername = ref("")


function validate() {
  if (!username.value.startsWith('09')) {

    errorOnValidateUsername.value = 'شماره موبایل باید با 09 شروع بشود'
    return false
  }

  if (username.value.trim().length !== 11) {

    errorOnValidateUsername.value = 'شماره موبایل وارد شده معتبر نیست'
    return false
  }

  return true

}


const handleSubmit = async () => {

  if (!validate())
    return false

  // Clear previous messages
  errorMessage.value = "";
  successMessage.value = "";

  const userCredentials = {
    password: password.value,
    phone_number: username.value
    // expiresInMins: 30, // Optional, defaults to 60
  };

  // Set loading state to true before the fetch call
  isLoading.value = (true);

  try {


    const response = await $api<Root>('/auth/login', {
      method: 'POST',
      body: userCredentials,
    })

    if (response.access && response.refresh) {

      successMessage.value = (response.message || "ورود موفقیت آمیز بود!") +
        "\n" +
        "در حال گرفتن اطلاعات کاربر..."

      accessTocken.value = response.access;
      refreshTocken.value = response.refresh;

      await timeout(400)

      const data = await $fetchUserData()
      
      if (data){

        navigateTo(go.value);
      
        $swal.success({ title: ' خوش آمدید  ' + appState.user.name , 'message' : '' , confirmButtonText : 'بستن'} )

      }
      else {

        successMessage.value = ''
        errorMessage.value = 'خطا'
      }

    } else {
      errorMessage.value = response.message
    }

  } catch (error) {
    // @ts-ignore
    errorMessage.value = (error?.data?.message || (error as Error).message);
    isLoading.value = (false);
  }

};

onMounted(() => {
  usernameInput.value?.focus()
})

</script>

<template>


  <main class="py-4">
    <div class="max-w-2xl mx-auto p-6 sm:p-0">
      <div class="flex justify-center flex-col sm:flex-row">
        <div
          class=" w-full sm:w-1/2 px-4 form-right rounded-xl rounded-b-none sm:rounded-r-xl sm:rounded-l-none flex flex-col">
          <h4 class="font-bold text-center py-12 text-2xl">ورود به حساب کاربری</h4>


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

          <form @submit.prevent="handleSubmit" class="">

            <div id="user-name" class="mb-3" controlId="validationCustom01">
              <label class="text-[#6c757d]">
                شماره تماس خود را وارد نمایید
              </label>
              <input type="text" class='form-controls1' ref="username-input" v-model="username" />
              <div v-if="errorOnValidateUsername" class="text-red-500 text-sm">
                {{ errorOnValidateUsername }}
              </div>
            </div>

            <div class="mb-3" controlId="formBasicPassword">
              <label class="text-[#6c757d]">رمز عبور</label>
              <input class='form-controls1' type="password" v-model="password" required />
            </div>
            <button class="btn w-full p-2 rounded-lg retro mb-2" type="submit" :disabled="isLoading">
              ثبت و ادامه
            </button>
            <!-- <NuxtLink to="/temporyLogin" class="text-center underline lh-lg">
              ورود با کد یکبار مصرف
            </NuxtLink> -->
          </form>

          <div class="flex justify-between my-3 mt-auto text-gray-800 ">
            <p>قبلا ثبت نام نکرده اید؟</p>
            <NuxtLink class="underline" to="/signup">
              ثبت نام کنید
            </NuxtLink>
          </div>
        </div>
        <div class="form-left rounded-xl rounded-t-none sm:rounded-l-xl sm:rounded-r-none w-full sm:w-1/2">

          <img class="w-full h-full" src="/assets/images/login/beautiful-collage-travel-concept.jpg" alt="">
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
