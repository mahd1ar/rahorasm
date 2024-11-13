<script setup lang="ts">

// import AOS from 'aos';

// onMounted(() => {
//   AOS.init(); // TODO probebly delete this
// })

const destination = ref("");
const days = ref("");
const budget = ref("");
const response = ref<any>([]);
const isLoading = ref(false);

const { $swal, $router } = useNuxtApp()

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  isLoading.value = (true);
  const baseURL = "https://kelaasor.ir/other/ai.php?days=";
  const sourceURL = `${baseURL}${days}&destination=${destination}&budget=${budget}`;
  const source = new EventSource(sourceURL);

  source.onmessage = (event) => {
    try {
      const resp = JSON.parse(event.data);

      const newContent = resp.choices[0].delta.content;

      if (response.value.length === 0) {

        response.value.push(newContent);
      } else {
        const concatenatedContent = response.value[0] + newContent;
        response.value = [concatenatedContent];
      }

    } catch {
      source.close();
    } finally {
      isLoading.value = (false);
      budget.value = ('');
      days.value = ('');
      destination.value = ('');
    }
  };
};

function search() {

  if (destination.value === '' || days.value === '' || budget.value === '') {
    $swal.about('لطفا تمامی فیلد ها را پر کنید');
    return;
  }

  $router.push({
    path: '/tour/tours',
    query: {
      city: destination.value,
      duration: days.value,
      range_min: budget.value
    }
  })

}

</script>

<template>




  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-message d-flex flex-column justify-content-center align-items-center">
      در حال برنامه ریزی سفر
      <BtnLoader />
    </div>
  </div>

  <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">


    <form @submit.prevent="search" class="test-form rounded px-5 py-3 retro bg-background">
      <h5 class="py-2">
        <span class="pe-1">
          <Icon name="ic:sharp-airplanemode-active" size="24px" class="rotate-45" style="color: gray" />

        </span>
        <span class="text-2xl">سفرت رو با ما برنامه ریزی کن</span>
      </h5>
      <div class="mt-3">
        <div class="flex flex-col lg:flex-row gap-3 content-between items-center w-full">
          <div class="w-full lg:w-3/12">
            <div class="flex bg-white p-1 items-center rounded gap-2">
              <div class="shrink-0 w-5 bg flex-center ">
                <Icon name="ic:outline-location-on" style="color: gray" />

              </div>
              <input placeholder="شهر مقصد" autocomplete="off" type="text" id="destination"
                class="w-full focus:outline-none border-none focus:border-none focus:ring-gray-200"
                v-model="destination" />
            </div>
          </div>
          <div class="w-full lg:w-3/12">
            <div class="flex bg-white p-1 items-center  rounded gap-2">
              <div class="shrink-0 w-5 bg flex-center ">

                <Icon name="hugeicons:moon-02" style="color: gray" />
              </div>
              <select placeholder="تعداد شب" autocomplete="off" id="days"
                class="w-full focus:outline-none border-none focus:border-none focus:ring-gray-200"
                v-model.number="days">
                <option class="" value="" disabled selected> تعداد شب</option>
                <option v-for="i in 10" :value="i">{{ i }} شب</option>
              </select>
            </div>
          </div>
          <div class="w-full lg:w-3/12 ">
            <div class="flex bg-white p-1 items-center rounded gap-2">
              <span class="shrink-0 w-5 bg flex-center ">
                <Icon name="material-symbols:filter-alt-outline-sharp" style="color: gray" />
              </span>

              <select placeholder="قیمت از" autocomplete="off" type="number" id="budget"
                class="w-full focus:outline-none border-none focus:border-none focus:ring-gray-200"
                v-model.number="budget">
                <option class="" value="" disabled selected> قیمت از</option>
                <option v-for="i in [1, 2, 4, 8, 10]" :value="i * 10_000_00">
                  میلیون
                  {{ i * 10_000_000 }} </option>
              </select>
            </div>
          </div>

          <button type="submit" class="p-1.5 rounded-lg bg-primary w-full lg:w-2/12 retro">جستجو</button>
        </div>

      </div>
    </form>

  </div>


</template>

<style scoped>
[type=number] {
  direction: rtl;
}




#response {
  padding-top: 30px;
  max-height: 300px;
  overflow-y: auto;
  background-color: aliceblue;
}
</style>
