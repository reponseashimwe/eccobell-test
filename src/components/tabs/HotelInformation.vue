<template>
  <div class="flex flex-col gap-1 max-w-md w-full">
    <List
      :items="list"
      @openModal="openModal"
      arrow-type="chevron"
      icon-type="bgrounded"
    />
  </div>
</template>

<script setup>
import List from '../List.vue'
import { defineProps } from 'vue'

import {
  AmenitiesIcon,
  FoodDrinkIcon,
  HotelMapIcon,
  KeyCheckInIcon,
  ReviewIcon,
  RoomInfoIcon,
} from '@/assets/icons'

// Define the list data with SVG icon components
const list = [
  { label: 'Room Information', icon: RoomInfoIcon },
  { label: 'Amenities', icon: AmenitiesIcon },
  { label: 'Food and drink', icon: FoodDrinkIcon },
  { label: 'Hotel Map', icon: HotelMapIcon },
  { label: 'Check in / out', icon: KeyCheckInIcon },
  { label: 'Leave a review', icon: ReviewIcon },
]

const props = defineProps({
  openModal: Function, // Define the prop type
})
</script>
