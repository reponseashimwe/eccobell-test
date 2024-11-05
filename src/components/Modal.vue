<template>
  <transition name="slide-up">
    <div
      v-if="activeTab"
      class="fixed md:relative lg:left-0 inset-0 bg-black bg-opacity-50 flex items-end justify-center bottom-0"
    >
      <div
        class="bg-grayBg rounded-t-3xl w-full max-w-md md:max-w-full h-[calc(80vh)] md:h-[75vh !important] flex flex-col overflow-y-auto"
        :style="{ height: modalHeight + 'px' }"
      >
        <div class="flex-col flex gap-3 bg-white p-5 sticky top-0 shadow">
          <!-- Modal Header -->
          <div class="flex bg-white items-center justify-between">
            <div class="flex gap-4">
              <button @click="goBack" class="text-gray-900">
                <ChevronLeftIcon class="w-5" />
              </button>
            </div>
            <button
              @click="$emit('close')"
              v-if="activeTab.back"
              class="text-gray-500"
            >
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
        <div class="flex-grow bg-grayBg rounded-lg p-5">
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
import { defineProps, defineEmits, onMounted, computed, onUnmounted } from 'vue'
import { XMarkIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  activeTab: Object,
  tabs: Array,
  open,
})

const emit = defineEmits(['close', 'openModal'])
const setActiveTab = tab => (props.activeTab = tab)

const goBack = () => {
  // Placeholder function for 'Back' button functionality
  if (props.activeTab.back) emit('openModal', props.activeTab.back)
  else {
    emit('close')
  }
}
// Reactive property to hold the calculated modal height
const modalHeight = computed(() => {
  const viewportHeight = window.innerHeight // Get the viewport height
  if (viewportHeight < 768) {
    return viewportHeight * 0.9 // 80% of viewport height for small screens
  }
  return viewportHeight * 0.75 // 75% of viewport height for medium screens and up
})

// Set modal height when the component mounts
onMounted(() => {
  window.addEventListener('resize', () => {
    // Trigger a reactivity update on resize
    modalHeight.value // Access the computed property to trigger update
  })
})

// Clean up the resize event listener
onUnmounted(() => {
  window.removeEventListener('resize', () => {})
})
</script>

<style scoped>
/* Modal slide-up animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    transform 0.9s ease,
    opacity 0.9s ease;
}
.slide-up-enter {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-up-leave {
  transform: translateY(0);
  opacity: 1;
}
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
