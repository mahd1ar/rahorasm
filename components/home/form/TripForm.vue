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

</script>

<template>




  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-message d-flex flex-column justify-content-center align-items-center">
      در حال برنامه ریزی سفر
      <BtnLoader />
    </div>
  </div>

  <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">
    <form class="test-form rounded px-5 py-3 retro-style bg-background">
      <h5 class="py-2">
        <span class="pe-1">
          <Icon name="ic:sharp-airplanemode-active" size="24px" class="rotate-45" style="color: gray" />

        </span>
        <span class="text-2xl">سفرت رو با ما برنامه ریزی کن</span>
      </h5>
      <div class="mt-3" >
        <div class="flex gap-3 content-between items-center w-full">
          <div class="lg:w-3/12">
            <div class="flex bg-white p-1 items-center rounded gap-2">
              <div class="shrink-0">
                <Icon name="ic:outline-location-on" style="color: gray" />

              </div>
              <input placeholder="شهر مقصد" autocomplete="off" type="text" id="destination" class="w-full focus:outline-none"
                value="" />
            </div>
          </div>
          <div class="lg:w-3/12">
            <div class="flex bg-white p-1 items-center  rounded gap-2">
              <div  class="shrink-0">

                <Icon name="hugeicons:moon-02" style="color: gray" />
              </div>
              <input placeholder="تعداد شب" autocomplete="off" type="number" id="days" class="w-full focus:outline-none"
                v-model="days" />
            </div>
          </div>
          <div class="lg:w-3/12 ">
            <div class="flex bg-white p-1 items-center rounded gap-2">
              <span>
                <Icon name="material-symbols:filter-alt-outline-sharp" style="color: gray" />
              </span>

              <input placeholder="قیمت از" autocomplete="off" type="number" id="budget" class="w-full focus:outline-none"
                v-model="budget" />
            </div>
          </div>

              <button type="submit" class="p-1.5 rounded-lg bg-primary w-full lg:w-2/12 retro-style">جستجو</button>
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
