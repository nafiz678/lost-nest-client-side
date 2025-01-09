<h2>NPM Packages Used</h2>
<ul>
    <li>@lottiefiles/react-lottie-player</li>
    <li>@radix-ui/react-dropdown-menu</li>
    <li>@radix-ui/react-slot</li>
    <li>@shadcn/ui</li>
    <li>axios</li>
    <li>class-variance-authority</li>
    <li>clsx</li>
    <li>date-fns</li>
    <li>firebase</li>
    <li>framer-motion</li>
    <li>localforage</li>
    <li>lucide-react</li>
    <li>match-sorter</li>
    <li>react</li>
    <li>react-datepicker</li>
    <li>react-day-picker</li>
    <li>react-dom</li>
    <li>react-hot-toast</li>
    <li>react-icons</li>
    <li>react-router-dom</li>
    <li>shadcn-ui</li>
    <li>sort-by</li>
    <li>styled-components</li>
    <li>swiper</li>
    <li>tailwind-merge</li>
    <li>tailwindcss-animate</li>
</ul>


<a href="https://lost-nest.web.app/"><h1>Lost Nest</h1></a>

## Purpose 🤝
<p>Lost Nest is a Lost and Found web application designed to help users report lost or found items and connect with others to recover their belongings. The platform aims to bridge the gap between individuals who have lost items and those who may have found them.</p>

<h2>Live URL:<a href="https://lost-nest.web.app/"><h3>https://lost-nest.web.app/</h3></a></h2>

<h3>Key Features </h3>
<ol>
    <li><p>User-Friendly Lost/Found item Creation</p></li>
    <li><p>User authentication and secure login system
    </p></li>
    <li><p>Search for lost or found items</p></li>
    <li><p>Responsive Design: <br/>
    Fully responsive and mobile-friendly design for optimal user experience across all devices, powered by Tailwind CSS.
    </p></li>
    <li><p>Real-time animations using Framer Motion</p></li>
    <li><p>Support for dark mode toggle</p></li>
</ol>

## 🛠️ Technologies Used  

### Frontend:  
- **React**: Dynamic UI rendering.  
- **Tailwind CSS**: Responsive and modern styling.  
- **JavaScript**: For front and and backend.  

### Backend:  
- **Node.js** and **Express.js**: Backend framework for API creation.  
- **MongoDB**: NoSQL database for data storage.  
- **Express Js**: For database interaction.  

### Others:  
- **Axios**: For HTTP requests. 
- **Firebase**: For user authentication and hosting.  
- **JWT**: For user authentication and authorization.  

---

## ✨ Main Features
- **Lost Item Reporting**: Users can report lost items by providing details such as item name, description, location, and images.  
- **Found Item Reporting**: Users can report found items, helping others recover their lost belongings.  
- **Search and Filter**: Advanced search functionality to find lost items based on categories, location, and other criteria.  
- **User Authentication**: Secure login and sign-up functionality with Firebase, enabling users to track their reported items.  
- **Responsive Design**: Optimized for both desktop and mobile devices, ensuring ease of use for all users.  

---


## 📦 Dependencies

- **axios**: Promise-based HTTP client for making API requests.  
- **firebase**: For user authentication, hosting, and other Firebase services.  
- **framer-motion**: High-performance animation library for web applications.  
- **localforage**: Offline storage utility for managing data locally.  
- **lucide-react**: Icon library for React.  
- **react**: JavaScript library for building user interfaces.  
- **react-datepicker**: Date picker component for React.  
- **react-day-picker**: Flexible date range picker for React.  
- **react-dom**: React library for DOM rendering.  
- **react-hot-toast**: For creating toast notifications in React.  
- **react-icons**: Collection of popular SVG icons for React.  
- **react-router-dom**: Declarative routing for React.  
- **swiper**: Modern touch slider library.  
- **tailwind-merge**: Tailwind CSS utility to merge classes.  
- **tailwindcss-animate**: Tailwind CSS plugin for animations.  
- **styled-components**: Library for styling React components using tagged template literals.

To see the full list of dependencies, check the [package.json](./package.json) file. 


## 🚀 How to Run Locally  

Follow these steps to run the project on your local machine:  

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/nafiz678/lost-nest-client-side.git
   cd lost-nest-client-side


2. Install Dependencies:
- Frontend
    ```bash
    cd client
    npm install


3. Set Up Environment Variables:
    ```bash
    env
    Copy code
    # Server  
    MONGO_URI=your_mongodb_connection_string
    # Client  
    VITE_FIREBASE_API_KEY=your_firebase_api_key

4. Run the Development Servers:

- Start the frontend:
    ```bash
    cd client
    npm run dev

5. Access the Application: </br>
Open your browser and navigate to YOUR_LOCAL_SIDE(e.g. localhost:5173).