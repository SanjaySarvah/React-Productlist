# React-Productlist
This project is a simple e-commerce cart application built with React and Tailwind CSS, fetching product data from the [Fake Store API (https://fakestoreapi.com/)].
## Features

- **Fetch Products**: Products are fetched from the Fake Store API and displayed on the main page with relevant details (image, title, price, etc.).
- **Add to Cart**: Users can add products to the cart by clicking the "Add to Cart" button. If a product is already in the cart, an alert notifies the user.
- **Cart Management**: 
  - The number of items in the cart is displayed in the Navbar.
  - A modal shows the cart contents when the "Cart" button is clicked.
  - Products can be removed from the cart using a "Remove from Cart" button within the modal.
- **Responsive Design**: The app is fully responsive and works across different screen sizes (desktop and mobile).
- **Clean State Management**: Product details and cart state are passed down as props to child components, ensuring efficient data flow and updates.

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Fake Store API**: A free API that provides dummy e-commerce product data.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone (https://github.com/SanjaySarvah/React-Productlist.git)

   install npm packages
