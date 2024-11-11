# Mast-final-POE

I. Introduction

In this project, I made several improvements and updates to an existing React Native application. The app focuses on displaying a restaurant's menu, allowing users to explore different dishes, view dish details, and even add new dishes to the menu. My changes primarily focus on enhancing user navigation, improving form handling, integrating dynamic dish management features, and ensuring type safety through TypeScript. These modifications were made to improve the app’s usability, functionality, and code maintainability. Below, I will discuss in detail the specific changes I made to the application and their impact.

---

II. Refactoring the Screen Management: Dynamic Navigation

One of the key updates I made to the application was to improve the screen management system. Initially, the app used a series of static screens such as "Start," "Second," and "Third" for different sections of the app. However, this structure became cumbersome and made navigation between screens harder to manage.

To address this issue, I refactored the app’s state management to simplify the flow between screens. I consolidated the screens into two primary views: `Home` (the main screen displaying the dish list) and `AddDish` (the screen for adding new dishes). This change made the navigation much simpler and more intuitive. Users can now easily toggle between the dish list and the form to add new dishes, improving the overall user experience.

Key Changes:
- Unified Screen Management: Instead of having multiple intermediate states like "Start," "Second," and "Third," I simplified the navigation to two primary screens: `Home` and `AddDish`.
- Cleaner Navigation Flo*: Users can seamlessly switch between the home page, where dishes are listed, and the form to add new dishes. This simplification improves the app's usability and reduces navigation clutter.

---
 III. Introduction of Dish Management Features

In addition to improving navigation, I introduced new features to allow users to manage the dishes in the app. This included adding the ability to add new dishes and calculate average prices for each course category (Starters, Mains, Desserts).

The Add Dish feature allows users to input details for a new dish, including the dish's name, description, price, and course (e.g., Starters, Mains, or Desserts). Once a dish is added, the app updates the list dynamically, making the menu more interactive and customizable.

Moreover, I implemented a feature to calculate and display the average price of dishes in each category. This was a useful feature that provided users with an immediate overview of the pricing structure across different courses, helping them make informed decisions. The average prices update dynamically as dishes are filtered by course or as new dishes are added.

 Key Changes:
- Add Dish Functionality: I added a form where users can input a dish’s name, description, price, and course, which are then added to the menu list.
- Average Price Calculation: I introduced a method to calculate and display the average price of dishes within each course category, providing valuable insights into the menu’s pricing.
- Dish Deletion (Intended): Although not fully implemented, the UI was designed to support deleting dishes from the menu. This feature was intended to give users control over the dishes displayed.

---

 IV.Filter by Course Functionality

One of the most important features I implemented was the ability to filter dishes by course (Starters, Mains, Desserts). Originally, the app displayed all dishes in a single list, which made it difficult for users to quickly find dishes from specific categories. By adding the filter by course functionality, I enabled users to narrow down the dish list based on the course they are interested in.

The filter is implemented using a Picker component that allows users to select from three options: "All", "Starters", "Mains", and "Desserts." Based on the user's selection, the app dynamically filters the dishes displayed in the list. If "All" is selected, all dishes are shown. If a specific course is selected, only the dishes from that category are displayed.

This feature not only makes the app more user-friendly but also enhances the app's interactivity by providing a tailored view of the menu based on the user's preferences.

 Key Changes:
- Picker for Course Filtering: I integrated a `Picker` component that allows users to filter dishes by course (Starters, Mains, Desserts).
- Dynamic Filtering: The dish list updates dynamically based on the selected course, improving the user's ability to explore the menu by category.
- All Dishes Option**: The "All" filter option allows users to view the entire menu without any filtering, providing flexibility in browsing.


 V. Enhanced Form Handling and Validation

The ability to add new dishes is a crucial feature of this application, so I focused on improving the form handling logic. I used TextInput components to allow users to enter the name, description, and price of the dish, and a Picker component to select the course. This setup provides a structured and easy-to-use interface for adding data.

In addition, I implemented basic form validation to ensure that all required fields (name, description, course, and price) are filled out correctly before a dish can be added. This validation prevents users from submitting incomplete or incorrect data, ensuring that the app remains functional and the data remains consistent. After a successful addition, the form resets itself, ready for the next entry.

Key Changes:
- Text Input Handling: I used `TextInput` components for name, description, and price fields, which makes the form easy to use and understand.
- Picker Integration: I added a `Picker` component to allow users to select a course category for the dish (Starters, Mains, Desserts).
- Validation: The form now checks if all fields are filled out before submitting the dish, ensuring data integrity.


VI. State Management and TypeScript Enhancements

A significant technical enhancement I made to the application was integrating TypeScript for better type safety. This allowed me to define interfaces like `MenuItem`, which enforce the structure of the data used in the app.

For example, I defined the `MenuItem` interface to specify that each dish must have the following properties:
- `id`: A unique string identifier for the dish.
- `name`: The name of the dish.
- `description`: A text description of the dish.
- `course`: The course category (e.g., Starters, Mains, Desserts).
- `price`: The price of the dish, represented as a number.

By using TypeScript, I was able to catch errors early in the development process, making the code more maintainable and less error-prone. This also improved the predictability of the app, as all components that handle dishes (e.g., adding, deleting, filtering) can rely on a consistent structure for each dish.

 Key Changes:
- TypeScript Interface: I introduced the `MenuItem` interface to ensure consistent data structures for dishes across the app.
- Typed State Variables: I made use of TypeScript's type safety by defining the state for dishes (`MenuItem[]`) and new dishes (`newDish`).
- Explicit Typing: I used explicit typing in event handlers (e.g., `itemValue` in the `Picker` components) to ensure that the data passed into functions is always of the expected type.

 VII. User Interface and Interaction Enhancements

Finally, I made several updates to the **user interface (UI)** to improve the overall user experience (UX). The app now features clearer buttons and labels, intuitive navigation, and dynamic interactions that guide users through the app.

- User Feedback: I added clear and descriptive button labels such as “Add Dish” and “Back to Home,” making it easy for users to understand what action they need to take next.
- **Visual Design: I enhanced the app’s visual design by using images for background and headers, and by styling the `TextInput` and `Button` components in a way that makes them easy to read and click.
- Interactive Components: The `TextInput` and `Picker` components make the form interactive, allowing users to add and edit dish information.

 Key Changes:
- Improved UI: I used clear buttons, labels, and visually appealing design elements to enhance the user experience.
- Interactive and Dynamic: The app’s interactivity was enhanced with dynamic price calculations and dish filtering, which provide immediate feedback to users.

---
 VIII. Conclusion

In conclusion, the changes I made to the application significantly improved its functionality, usability, and code maintainability. By simplifying the screen management, introducing dynamic dish management features, enhancing form handling, and ensuring type safety with TypeScript, I was able to create a more robust, user-friendly, and interactive application. The app now allows users to easily explore the menu, add new dishes, and get insights into the average price of dishes across different courses. Additionally, the ability to filter dishes by course makes it easier for users to navigate the menu based on their preferences. These changes have transformed the app into a more comprehensive and engaging tool, and the improvements in code structure and design make it easier to maintain and extend in the future.
