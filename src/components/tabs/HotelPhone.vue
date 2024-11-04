<template>
  <div class="flex flex-col gap-1 max-w-md w-full">
    <List
      :items="list"
      @openModal="openModal"
      icon-type="bgrounded"
      arrow-type="no-arrow"
    />
  </div>
</template>

<script setup>
import List from '../List.vue'
import {
  HouseKeepingIcon,
  InRoomDiningIcon,
  ReceiptionIcon,
} from '@/assets/icons'

// Define the list data with SVG icon components
const list = [
  { label: 'Reception', icon: ReceiptionIcon },
  { label: 'Housekeeping', icon: HouseKeepingIcon },
  { label: 'In room dining', icon: InRoomDiningIcon },
]
</script>
