# Eccobell Hotel SPA

This project is a single-page application (SPA) developed as a test for Eccobell. The application is built using Vue.js, Vite, and Tailwind CSS, and it integrates Heroicons and SVG icons designed in Figma for an intuitive user experience.

## Technologies Used

- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Vite**: A build tool that provides a fast and efficient development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Heroicons**: A set of free, open-source SVG icons designed to work seamlessly with Tailwind CSS.
- **Figma**: A collaborative design tool used to create and export SVG icons and other design elements.

## Project Overview

The Eccobell Hotel SPA features a clean and user-friendly interface that provides information about hotels, local attractions, and allows users to submit reviews. The design emphasizes code reusability, utilizing a single `List.vue` component across various sections of the app. It also employs a tabbed interface within the `Modal.vue` to separate different views logically.

## Components

### 1. **App.vue**

The main entry point of the application.

- **Features**:
  - Manages global state.
  - Handles modal visibility and active tab selection.
  - `tabs` (Array): Contains objects representing each tab, including the title, description, and the component to render.

### 2. **Modal.vue**

Displays content in a modal format with tab navigation.

- **Props**:
  - `activeTab` (Object): Represents the currently active tab, which includes its title and description.
  
- **Features**:
  - Supports switching between different tabs.
  - Emits events to manage modal visibility.

### 3. **List.vue**

A reusable component that displays a list of items, such as attractions or hotel amenities.

- **Props**:
  - `items` (Array): The list of items to be displayed.
  - `iconType` (String): Specifies the type of icon to use (e.g., "image" for displaying images).
  - `hasButton` (Boolean): Determines whether to show a button at the end of the list.
- **Features**:
  - Renders each item with an optional button for interaction.
  - Uses props to control the display of icons and buttons, promoting code reusability.

### 4. **SubmitReview.vue**

A form component for submitting hotel reviews and ratings.

- **Features**:
  - Contains fields for rating and review text.

### 5. **HotelPhone.vue**

Displays hotel contact information with iconography.
The hotel's phone stations to be called displayed using `List`.
- **Features**:
  - Integrates Chevron icons for navigation or additional actions.

### 6. **HotelInfo.vue**

Provides detailed information about the hotel, including amenities and services.

- **Props**:
  - `hotelDetails` (Object): Contains information about the hotel, such as name, description, and amenities.
- **Features**:
  - Integrate with the `List` component to display hotel amenities in a user-friendly manner.

### 7. **FoodDelivery.vue**

Allows users to explore food delivery options available at the hotel.

  - `deliveryOptions` (Array): A list of food delivery services and options.
- **Features**:
  - Integrates the `List` component to showcase various food delivery options.
  - Enables users to select and order food easily through the interface.

### 8. **ThingsToDo.vue**

Shows a list of local attractions for hotel guests.

- **Props**:
  - `openModal` (Function): A function to open the modal when an item is clicked.
- **Features**:
  - Uses the `List` component to display attractions.
  - Triggers modal opening to provide more information about selected activities.

### How to Use the `List` Component

The `List` component allows for versatile usage across the application. When utilizing this component, you can specify the following props:

- **`iconType`**: Determines the visual representation of the items. For example, setting `iconType="image"` will render images from the provided item data.
- **`hasButton`**: When set to `true`, it will render a button at the bottom of the list, which can be used for actions like submitting a review or accessing more details.

### Conclusion

This SPA demonstrates the effective use of Vue.js components and modern web technologies to create an interactive and visually appealing hotel information application. By focusing on code reusability and modular design, the project provides a solid foundation for future enhancements and features.
