<template>
  <div class="md:content-row bg-dark min-h-screen flex justify-center w-full">
    <div class="md:content-div flex flex-col gap-5 pt-6 w-full h-full">
      <div class="px-6 pb-6">
        <Header :roomNo="roomNo" :isModalOpen="isModalOpen" />
      </div>
      <div
        class="flex-grow flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:justify-center md:min-h-[calc(100vh-7rem)] w-full"
      >
        <div class="px-6 flex flex-col md:flex-row gap-12 w-full md:max-w-md">
          <div class="flex justify-center">
            <Welcome :roomNo="roomNo" />
          </div>
        </div>
        <div
          :class="[
            'flex flex-stretch justify-center  max-w-md bg-grayBg rounded-tl-3xl pb-20 md:pb-0  rounded-tr-3xl md:rounded-3xl w-full h-full overflow-hidden',
            isModalOpen ? 'lg:p-0' : 'p-6 lg:h-[70vh]',
          ]"
        >
          <div
            class="flex flex-col gap-1 w-full justify-center relative h-full"
          >
            <div
              class="md:hidden flex flex-col gap-1 w-full justify-center items-center"
            >
              <List
                :items="list"
                @openModal="openModal"
                class="max-w-md w-full"
              />
            </div>
            <List
              v-if="!isModalOpen"
              :items="list"
              @openModal="openModal"
              class="max-w-md hidden md:block"
            />

            <Modal
              v-if="isModalOpen"
              :activeTab="activeTab"
              @close="closeModal"
              @openModal="openModal"
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
import Modal from './components/Modal.vue'
import { ref } from 'vue'

import {
  ThingsToDoIcon,
  PhoneIcon,
  HotelInfoIcon,
  InRoomDiningIcon,
  SpaBookingIcon,
  TaxiIcon,
  FoodDeliveryIcon,
} from './assets/icons/index'
import HotelInformation from './components/tabs/HotelInformation.vue'
import ThingsToDo from './components/tabs/ThingsToDo.vue'
import FoodDelivery from './components/tabs/FoodDelivery.vue'
import HotelPhone from './components/tabs/HotelPhone.vue'
import SessionReview from './components/tabs/SessionReview.vue'
import Filler from './components/tabs/Filler.vue'

const roomNo = 'Room 301'

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

const isModalOpen = ref(false)
const activeTab = ref(null)

const openModal = index => {
  const tab = tabs.find(t => t.title.toLowerCase() == index.toLowerCase())
  console.log(index, tab)

  if (tab) {
    activeTab.value = tab
    isModalOpen.value = true
  } else {
    activeTab.value = {
      title: index,
      desc: `Here is descriprion for this ${index} tab`,
      component: Filler,
    }
    isModalOpen.value = true
  }
}

const tabs = [
  {
    title: 'View Hotel Information',
    desc: 'Discover everything you need to know about the hotel to make the most of your stay',
    component: HotelInformation,
    props: {
      openModal,
    },
  },

  {
    title: 'Things to do',
    desc: 'Browse local attractions in your area',
    component: ThingsToDo,
  },

  {
    title: 'Food delivery',
    desc: 'Browse local vendors and restaurants ready to deliver to you',
    component: FoodDelivery,
  },

  {
    title: 'Hotel Phone',
    desc: 'Please select a department to call. Turn on video to show a staff member your issue if needed.',
    component: HotelPhone,
    hasButton: true,
    buttonText: 'Call',
  },

  {
    title: 'Leave a review',
    desc: 'How was your experience?',
    component: SessionReview,
    hasButton: true,
    buttonText: 'Submit',
    back: 'View Hotel Information',
  },
]

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>
