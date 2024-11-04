<template>
  <div class="flex flex-col gap-1 max-w-md w-full">
    <List
      :items="list"
      @openModal="openModal"
      icon-type="image"
      arrow-type="chevron"
    />
  </div>
</template>

<script setup>
import List from '../List.vue'
import { defineProps } from 'vue'

const props = defineProps({
  openModal: Function, // Define the prop type
})

// Define the list data with image icons and HTML body content
const list = [
  {
    label: 'London Shuffle Club',
    icon: '/images/london.png',
    body: '<div class="inner-list"><p class="text-muted">Free drink</p><p class="text-primary">0.1km</p></div>',
  },
  {
    label: 'Old Spitalfields Market',
    icon: '/images/market.jfif',
    body: '<div class="inner-list"><p class="text-muted">Free</p><p class="text-primary">0.4km</p></div>',
  },
  {
    label: 'London Street Art Tour',
    icon: '/images/art.png',
    body: '<div class="inner-list"><p class="text-muted">30%</p><p class="text-primary">0.5km</p></div>',
  },
  {
    label: 'Bounce Ping Pong',
    icon: '/images/bounce.jfif',
    body: '<div class="inner-list"><p class="text-muted">241 Drinks</p><p class="text-primary">0.8km</p></div>',
  },
]
</script>
