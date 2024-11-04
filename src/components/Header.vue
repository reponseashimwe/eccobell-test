<template>
  <div class="flex justify-between gap-5 items-center">
    <div class="flex gap-5 items-center">
      <img :src="logo" class="w-8 opacity-80 aspect-square" />

      <div
        v-if="isModalOpen"
        class="text-gray-300 md:hidden font-bold text-2xl"
      >
        {{ roomNo }}
      </div>
    </div>
    <div class="text-gray-500 flex items-center gap-2 md:gap-5">
      <div class="uppercase">en</div>
      <GlobeAltIcon class="w-6" />
    </div>
  </div>
</template>

<script setup>
import { GlobeAltIcon } from '@heroicons/vue/24/outline'
import logo from '../assets/logo-svg.svg'
import { defineProps } from 'vue'

const props = defineProps({
  roomNo: String,
  isModalOpen: Boolean,
})
</script>
