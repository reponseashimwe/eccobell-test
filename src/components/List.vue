<template>
  <div
    :class="[
      'bg-white flex justify-between p-5 text-gray-900',
      first ? 'rounded-tl-xl rounded-tr-xl' : '',
      last ? 'rounded-bl-xl rounded-br-xl' : '',
    ]"
  >
    <div class="flex gap-7 items-center">
      <div class="w-4"><component :is="list.icon" /></div>
      <div class="text-gray-900 font-medium">{{ list.label }}</div>
    </div>
    <ArrowRightIcon class="w-6" />
  </div>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { defineProps } from 'vue'

const props = defineProps({
  list: Object,
  first: Boolean,
  last: Boolean,
  arrowType: String,
})
</script>
