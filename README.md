# Neo Studio MERN Stack Project

Welcome to the Neo Studio MERN Stack project! This guide will help you set up the project on your local machine step by step.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [Troubleshooting](#troubleshooting)
6. [Contact](#contact)

## Introduction

This project is a migration of the Neo Studio website from Webflow to a MERN stack (MongoDB, Express.js, React, Node.js). Follow the steps below to set up and run the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your computer:

- [Node.js](https://nodejs.org/) (includes npm)
- [GitHub Desktop](https://desktop.github.com/)
- [MongoDB](https://www.mongodb.com/) (either local installation or MongoDB Atlas)

## Installation

### Step 1: Clone the Repository Using GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/).
2. Open GitHub Desktop and sign in to your GitHub account.
3. Click on `File` > `Clone repository`.
4. In the `URL` tab, paste the following repository URL:
   ```sh
   https://github.com/TechieDeol/neo-studio
5. Choose a local path to clone the repository to and click Clone.

### Step 2: Set Up the Backend

1. Open the cloned repository in your file explorer and navigate to the backend directory.

2. Open a terminal in this directory:

    - Windows: Shift + right-click in the folder and select "Open PowerShell window here" or "Open Command window here".
    - Mac: Right-click in the folder and select "New Terminal at Folder".
3. Install the backend dependencies:
    npm install
4. Create a .env file in the backend directory with the following content:
    touch .env

    - Open the .env file and add:
        ```
        MONGO_URI=your_mongo_connection_string
        PORT=5000
        ```

    Replace your_mongo_connection_string with your MongoDB connection string. For example, for a local MongoDB setup:
        MONGO_URI=mongodb://localhost:27017/neostudio
        PORT=5000

### Step 3: Set Up the Frontend

1. Navigate to the frontend directory within the cloned repository.
2. Open a terminal in this directory:
    - Windows: Shift + right-click in the folder and select "Open PowerShell window here" or "Open Command window here".
    - Mac: Right-click in the folder and select "New Terminal at Folder".
3. Install the frontend dependencies:
    npm install

## Running the Project

### Step 1: Start the Backend Server

1. Open a terminal and navigate to the backend directory:
    cd backend
2. Start the server:
    npm start
3. You should see a message saying Server running on port 5000 and MongoDB connected.

### Step 2: Start the Frontend Development Server
1. Open a new terminal window/tab.
2. Navigate to the frontend directory:
    cd frontend
3. Start the React development server:
    npm start
4. Your default web browser should open automatically with the React app running at http://localhost:3000.

## Troubleshooting

- MongoDB Connection Issues:

    . Ensure MongoDB is running if using a local instance.
    . Double-check the MongoDB connection string in the .env file.

- Port Conflicts:

    . Make sure no other application is using ports 5000 (backend) and 3000 (frontend).

- Dependency Issues:

    . If you encounter issues with installing dependencies, try deleting the node_modules folder and package-lock.json file, then run npm install again.

## Contact
If you encounter any issues or have questions, feel free to reach out:

Sumandeep Kaur Deol
Email: sumandeol.dev@gmail.com
GitHub: TechieDeol
Happy coding!


