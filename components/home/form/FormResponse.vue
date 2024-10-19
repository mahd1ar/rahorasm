<script setup lang="ts">


const props = defineProps({
  response: {
    type: Array,
    default: [],
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});


          

</script>

<template>


        <div
            id="response"
            dir="ltr"
            className="my-3 bg-light-subtle border rounded"
            >
            <h5 className="d-flex mx-4  align-items-center">
                <span className="px-2 align-baseline">
                <!-- <MdEditCalendar fontSize="1.6rem" /> -->
                </span>
                <span className="planer-title align-bottom">
                Travel Planner
                </span>
            </h5>
            // todo
            {{ response }}
            </div> 
 


</template>

<style scoped></style>
