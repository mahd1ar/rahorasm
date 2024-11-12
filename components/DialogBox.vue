<script lang="ts" setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue'

defineProps({
  isNull: {
    type: Boolean,
    default: false
  },
  elementId: {
    type: String,
    required: true
  },
  closeLabel: {
    type: String as PropType<'close' | 'cancel'>,
    default: () => 'cancel'
  },
  border: {
    type: Boolean as PropType<boolean | undefined>,
    default: () => false
  }
})

const isOpen = defineModel({
  type: Boolean,
  default: () => false
})

const emit = defineEmits<{
  (e: 'canceled'): void;
  (e: 'closed'): void;
  (e: 'confirmed'): void;
  (e: 'revealed'): void;
}>()

function closeModal () {
  isOpen.value = false
}

watchDebounced(isOpen, (value) => {
  if (value) { emit('revealed') } else { emit('closed') }
}, {
  debounce: 100
})

</script>

<template>
  <button v-show="$slots.default" type="button" @click="isOpen = true">
    <slot :is-open="isOpen" />
  </button>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog :id="elementId" as="div" class="relative z-40" dir="rtl" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel

              class="w-full max-w-md transform overflow-hidden rounded-2xl border bg-gray-200  text-right align-middle shadow-xl transition-all "
              :class="[!isNull && 'p-6' ,
                       border ? 'border-gray-500' : 'border-gray-600/20']"
            >
              <button v-if="isOpen" type="submit" class="absolute top-4 left-4 bg-white/50 text-Secondary p-2 rounded-lg anime-pop opacity-0" @click="closeModal">
                <svg width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10 8.586L2.929 1.515L1.515 2.929L8.586 10l-7.071 7.071l1.414 1.414L10 11.414l7.071 7.071l1.414-1.414L11.414 10l7.071-7.071l-1.414-1.414L10 8.586z" /></svg>
              </button>
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-black"
              >
                <slot :is-open="isOpen" :close="closeModal" name="header" />
              </DialogTitle>
              <div class="mt-2">
                <div class="text-sm text-gray-400">
                  <slot :is-open="isOpen" :close="closeModal" name="content" />
                </div>
              </div>

              <div class="mt-4">
                <slot :is-open="isOpen" :close="closeModal" name="buttons" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style lang="scss" scoped>
.anime-pop {
  animation: pop 0.3s;
  animation-delay: 1000ms;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
animation-fill-mode: forwards;
}

@keyframes pop {
  0% {
    scale: 0.2;
    transform: rotate(45deg);
  }
  100% {
    scale: 1;
    opacity: 1;
  }
}
</style>