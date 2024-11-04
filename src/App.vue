<template>
  <div class="md:content-row bg-dark min-h-screen flex justify-center w-full">
    <div class="md:content-div flex flex-col gap-5 pt-6 h-full">
      <div class="px-6 pb-6">
        <Header />
      </div>
      <div
        class="flex-grow sm:flex-grow-0 flex flex-col md:flex-row gap-12 lg:gap-24 md:min-h-[calc(100vh-7rem)] items-center md:justify-center"
      >
        <div class="px-6 flex flex-col md:flex-row gap-12 w-full md:max-w-md">
          <div class="flex justify-center">
            <Welcome />
          </div>
        </div>
        <div
          class="flex justify-center md:max-w-md bg-grayBg p-6 lg:p-12 rounded-tl-3xl rounded-tr-3xl md:rounded-3xl w-full"
        >
          <div class="flex flex-col gap-1 max-w-md w-full">
            <List
              v-for="(item, index) in list"
              :key="index"
              :list="item"
              :first="index === 0"
              :last="index === list.length - 1"
              arrowType="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Welcome from './components/Welcome.vue'
import List from './components/List.vue'

import {
  ThingsToDoIcon,
  AmenitiesIcon,
  ChatBubbleIcon,
  PhoneIcon,
  HotelInfoIcon,
  InRoomDiningIcon,
  SpaBookingIcon,
  TaxiIcon,
  FoodDeliveryIcon,
} from './assets/icons/index'

// Define the list data with SVG icon components
const list = [
  { label: 'Hotel phone', icon: PhoneIcon },
  { label: 'View hotel information', icon: HotelInfoIcon },
  { label: 'In room dining', icon: InRoomDiningIcon },
  { label: 'Spa bookings', icon: SpaBookingIcon },
  { label: 'Book a taxi', icon: TaxiIcon },
  { label: 'Food delivery', icon: FoodDeliveryIcon },
  { label: 'Things to do', icon: ThingsToDoIcon },
]
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>
