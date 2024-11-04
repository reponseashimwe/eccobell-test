<template>
  <div class="max-w-lg mx-auto p-6 bg-white rounded-lg">
    <!-- Hotel Offering Rating -->
    <div class="mb-6">
      <label class="block text-gray-700 font-semibold mb-2"
        >Hotel Offering Rating</label
      >
      <div class="flex items-center space-x-2">
        <span
          v-for="star in 5"
          :key="'hotel-star-' + star"
          @click="hotelRating = star"
          :class="star <= hotelRating ? 'text-blue' : 'text-gray-300'"
          class="w-6 h-6 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.5l3.09 6.26L22 9.75l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.62 2 9.75l6.91-1.01L12 2.5z"
            />
          </svg>
        </span>
      </div>
    </div>

    <!-- Separator -->
    <hr class="my-4 border-gray-300" />

    <!-- Experience with EcoBell Rating -->
    <div class="mb-6">
      <label class="block text-gray-700 font-semibold mb-2"
        >Experience using EcoBell</label
      >
      <div class="flex items-center space-x-2">
        <span
          v-for="star in 5"
          :key="'eco-star-' + star"
          @click="ecoBellRating = star"
          :class="star <= ecoBellRating ? 'text-blue' : 'text-gray-300'"
          class="w-6 h-6 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.5l3.09 6.26L22 9.75l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.62 2 9.75l6.91-1.01L12 2.5z"
            />
          </svg>
        </span>
      </div>
    </div>

    <!-- Ease of Use Buttons -->
    <div class="mb-6">
      <label class="block text-gray-700 font-semibold mb-2">Ease of Use</label>
      <div class="flex space-x-4">
        <button
          @click="easeOfUse = 'easy'"
          :class="
            easeOfUse === 'easy'
              ? 'border border-blue bg-blue  bg-opacity-50 rounded-full'
              : 'border bg-gray-200 bg-opacity-50 rounded-full text-gray-700'
          "
          class="px-4 py-2 rounded-full bg-opacity-50 transition"
        >
          Easy to Use
        </button>
        <button
          @click="easeOfUse = 'not_easy'"
          :class="
            easeOfUse === 'not_easy'
              ? 'border border-blue bg-blue  bg-opacity-10 rounded-full'
              : 'border bg-gray-200 bg-opacity-50 rounded-full text-gray-700'
          "
          class="px-4 py-2 rounded-full bg-opacity-50 transition"
        >
          Not Easy
        </button>
      </div>
    </div>

    <!-- Comments Section -->
    <div class="mb-6">
      <label class="block text-gray-700 font-semibold mb-2" for="comments"
        >Comments</label
      >
      <textarea
        v-model="comments"
        id="comments"
        placeholder="Anything  you couldn’t find or feel like we can improve on?"
        class="w-full bg-grayBg font-inherit p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <div class="flex justify-end">
      <button
        @click="submitForm"
        class="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotelRating: 4, // Default rating 4/5
      ecoBellRating: 0,
      easeOfUse: '', // 'easy' or 'not_easy'
      comments: '',
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log({
        hotelRating: this.hotelRating,
        ecoBellRating: this.ecoBellRating,
        easeOfUse: this.easeOfUse,
        comments: this.comments,
      })
      alert('Form submitted successfully!')
    },
  },
}
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
