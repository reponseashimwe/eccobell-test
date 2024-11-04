<template>
  <div class="flex justify-between gap-5 items-center">
    <div>
      <img :src="logo" class="w-8 opacity-80 aspect-square" />
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
</script>
