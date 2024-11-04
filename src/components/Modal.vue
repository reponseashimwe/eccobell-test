<template>
  <transition name="slide-up">
    <div
      v-if="activeTab"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center"
    >
      <div
        class="bg-grayBg rounded-t-3xl w-full max-w-md h-[calc(90vh)] flex flex-col overflow-y-auto"
      >
        <div class="flex-col flex gap-3 bg-white p-5">
          <!-- Modal Header -->
          <div class="flex bg-white items-center justify-between">
            <div class="flex gap-4">
              <button @click="goBack" class="text-gray-900">
                <ChevronLeftIcon class="w-5" />
              </button>
            </div>
            <button @click="$emit('close')" class="text-gray-500">
              <XMarkIcon class="w-5" />
            </button>
          </div>

          <!-- Title -->
          <div class="font-medium text-gray-900 text-lg">
            <span>{{ activeTab.title }}</span>
          </div>

          <div class="text-gray-500 text-base">
            {{ activeTab.desc }}
          </div>
        </div>

        <!-- Tab Navigation -->
        <div class="mb-4">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="setActiveTab(tab)"
            :class="{ 'font-bold': activeTab === tab }"
            class="mr-4"
          >
            {{ tab.title }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="flex-grow bg-grayBg rounded-lg p-4 px-8">
          <component
            :is="activeTab.component"
            v-bind="activeTab.props"
            class="w-full h-full"
          />
        </div>

        <div v-if="activeTab.hasButton" class="bg-white p-6">
          <button
            @click="handleButtonClick"
            class="w-full bg-blue text-white py-2 rounded-lg"
          >
            {{ activeTab.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { XMarkIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  activeTab: Object,
  tabs: Array,
})

const emit = defineEmits(['close'])
const setActiveTab = tab => (props.activeTab = tab)

const goBack = () => {
  // Placeholder function for 'Back' button functionality
  emit('back')
}
</script>

<style scoped>
/* Modal slide-up animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from {
  transform: translateY(100%);
}
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
