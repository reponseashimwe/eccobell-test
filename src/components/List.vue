<template>
  <ul class="space-y-1">
    <li
      v-for="(item, index) in items"
      :key="index"
      @click="handleClick(item.label)"
      :class="[
        'flex items-center p-4 bg-white cursor-pointer hover:bg-gray-50 gap-5 flex justify-between',
        index === 0 ? 'rounded-t-lg' : '',
        index === items.length - 1 ? 'rounded-b-lg' : '',
        index !== 0 && index !== items.length - 1 ? 'rounded-none' : '',
      ]"
    >
      <div class="flex gap-2">
        <div
          v-if="iconType === 'bgrounded'"
          class="bg-gray-200 p-2 rounded-full"
        >
          <component :is="item.icon" class="w-4 h-4" />
        </div>

        <!-- If iconType is 'image', display the icon without additional styling -->
        <img
          v-else-if="iconType === 'image'"
          :src="item.icon"
          class="w-10 h-10 mr-2 rounded-full"
          alt=""
        />

        <!-- Default case if iconType is something else or undefined -->
        <component v-else :is="item.icon" class="w-5 h-5 mr-2" />

        <div>
          <span>{{ item.label }}</span>

          <div v-html="item.body" class="-mt-1 text-sm"></div>
          <!-- Render the body content -->
        </div>
      </div>

      <div>
        <ChevronRightIcon v-if="arrowType == 'chevron'" class="w-4 stroke-2" />
        <ArrowRightIcon v-else class="w-6" />
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  items: Array,
  iconType: String,
  arrowType: String,
})

const emit = defineEmits(['openModal'])

function handleClick(index) {
  emit('openModal', index)
}
</script>

<style>
.text-muted {
  color: #999;
}

.text-primary {
  color: #197594;
}
</style>
