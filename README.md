# Project Name

## Description

A brief description of your project, including its purpose and functionality. This project is designed to [insert main functionality or goals here].

## Technologies Used

- **Vue.js:** The JavaScript framework used for building the user interface.
- **Tailwind CSS:** Utility-first CSS framework for styling the components.
- **Axios:** For making API requests.
- **[Other technologies/libraries as needed]**

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Steps to Install

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Navigate into the project directory:
   ```bash
   cd [project-directory]
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

## Features

- List out key features of your project here.
- Describe the functionality provided by different components, such as the `List` component which displays items with icons and bodies, and the modal for displaying information.

## Components

### `CustomSVG.vue`

- This component renders a simple SVG with a rectangular background.
- **Props:** None (can be extended for future customization).
- **Usage:**
  ```vue
  <CustomSVG />
  ```

### `List.vue`

- This component takes a list of items and renders them.
- **Props:**
  - `items`: Array of items to be displayed.
  - `iconType`: String that determines the type of icon to render (e.g., 'image').
- **Events:**
  - `openModal`: Emits when an item is clicked to open a modal.

### `ThingsToDo.vue`

- This component displays a list of attractions with images and descriptions.
- **Props:**
  - `openModal`: Function to handle opening a modal.
- **List Structure:**
  ```javascript
  const list = [
    {
      label: 'London Shuffle Club',
      icon: '/london.png', // path to the image
      body: '<div class="inner-list"><p class="text-gray-500">Free drink</p><p class="text-primary">0.1km</p></div>',
    },
    // More items...
  ]
  ```

## Contribution

Feel free to submit issues or pull requests if you have suggestions or enhancements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
