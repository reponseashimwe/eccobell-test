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
    label: 'Deliveroo',
    icon: '/images/deliveroo.png',
    body: '<div class="inner-list"><p class="text-muted">10% off</p></div>',
  },
  {
    label: 'Gorillas',
    icon: '/images/gorillos.png',
    body: '<div class="inner-list"><p class="text-muted">Free Delivery</p></div>',
  },
  {
    label: 'Taj Mahal Curry House',
    icon: '/images/bounce.jfif',
    body: '<div class="inner-list"><p class="text-muted">£5 off £30 spend</p></div>',
  },
]
</script>
