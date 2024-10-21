<script setup lang="ts">

const range = defineModel({
  type: Array as PropType<number[]>,
  default: () => [30,70]
})

const props = defineProps({
  min: {
    type: Number,
    default: () => 0
  },
  max: {
    type: Number,
    default: () => 100
  }
})

let minGap = 0;
let sliderTrack = useTemplateRef('sliderTrack')

function slideOne() {
  if (range.value[1] - range.value[0] <= minGap) {
    range.value[0] = range.value[1] - minGap;
  }

  fillColor();
}
function slideTwo() {
  if (range.value[1] - range.value[0] <= minGap) {
    range.value[1] = range.value[0] + minGap;
  }

  fillColor();
}
function fillColor() {
  const sliderMaxValue = props.max;

  if (!sliderMaxValue)
    return

  const percent1 = (range.value[0] / +sliderMaxValue) * 100;
  const percent2 = (range.value[1] / +sliderMaxValue) * 100;

  sliderTrack.value!.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;

}


onMounted(() => {
  slideOne();
  slideTwo();
})


</script>

<template>
  <div dir="ltr" class="wrapper">
    <div class="values">
      <span id="range1">
        0
      </span>
      <span> &dash; </span>
      <span id="range2">
        100
      </span>
    </div>
    <div class="container">
      <div class="slider-track" ref="sliderTrack"></div>
      <input type="range" :min :max v-model.number="range[0]" id="slider-1" @input="slideOne()">
      <input type="range" :min :max v-model.number="range[1]" id="slider-2" @input="slideTwo()">
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: 30px;
}

input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
}

.slider-track {
  width: 100%;
  height: 5px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 5px;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  height: 5px;
}

input[type="range"]::-moz-range-track {
  -moz-appearance: none;
  height: 5px;
}

input[type="range"]::-ms-track {
  appearance: none;
  height: 5px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 1.7em;
  width: 1.7em;
  background-color: #3264fe;
  cursor: pointer;
  margin-top: -9px;
  pointer-events: auto;
  border-radius: 50%;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 1.7em;
  width: 1.7em;
  cursor: pointer;
  border-radius: 50%;
  background-color: #3264fe;
  pointer-events: auto;
  border: none;
}

input[type="range"]::-ms-thumb {
  appearance: none;
  height: 1.7em;
  width: 1.7em;
  cursor: pointer;
  border-radius: 50%;
  background-color: #3264fe;
  pointer-events: auto;
}

input[type="range"]:active::-webkit-slider-thumb {
  background-color: #ffffff;
  border: 1px solid #3264fe;
}

.values {
  background-color: #3264fe;
  width: 32%;
  position: relative;
  margin: auto;
  padding: 10px 0;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;
}

.values:before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  border-top: 15px solid #3264fe;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  margin: auto;
  bottom: -14px;
  left: 0;
  right: 0;
}
</style>
