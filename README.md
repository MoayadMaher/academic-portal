# Academic Portal Application

## Overview

This Academic Portal is designed to facilitate educational interactions between students and instructors. It allows for course management, including registration, updates, and access to course materials, all within a modern web interface.

## Local Deployment Guide

Follow these steps to deploy the application locally. This guide assumes you have Node.js and npm installed on your system.

### Environment Setup

Before running the application, you need to set up environment variables for both the frontend and backend.

#### Backend Environment Variables

1. Navigate to the backend directory:

   ```sh
   cd backend
   ```

2. Create a .env file in the root of the backend directory and add the following variables:
   ```.
   DATABASE_URL=your_database_connection_string //use MySQL database
   JWT_SECRET=your_jwt_secret_key
   ```
   Replace your_database_connection_string with your actual database connection URL and your_jwt_secret_key with a secret key for JWT.
3. Frontend Environment Variables
   Navigate to the frontend directory:

   ```sh
   cd frontend
   ```

   Create a .env file in the root of the frontend directory and add the following variable:

   ```
   VITE_API_URL=http://localhost:3000
   ```

   This should point to the URL where your backend server is running, which is typically http://localhost:3000 for local development.

4. Installation
   You need to install the dependencies for both the frontend and the backend.
   Install backend dependencies:
   ```sh
   npm install
   ```
   Install frontend dependencies:
   ````sh
   cd ../frontend  # Assuming you are in the backend directory
   npm install
               ```
   ````

### Running the Application

Once the setup and installation are complete, you can run both the frontend and the backend using npm.
Run the backend server:

```sh
npm run dev
```

Open a new terminal, navigate to the frontend directory, and run the frontend development server:

```sh
npm run dev
```

The frontend should now be able to communicate with the backend, and you can access the application through the web browser at the address provided by the frontend server.

This document provides the instructions for setting up the application locally, ensuring users of varying technical levels can get the application running smoothly. If you need this content in a downloadable format or any other assistance, let me know!
