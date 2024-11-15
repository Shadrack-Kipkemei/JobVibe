## JobVibe Website

JobVibe is a simple authentication system built using React, designed for managing user sign-ups, logins, and job applications for a job board platform. It allows job seekers to create accounts, log in, manage their profiles, and apply for jobs. This project includes sign-up, login, and job application functionalities, as well as mock API integration using JSON Server to simulate backend operations.

## Table of Contents

* Overview
* Features
* Technologies Used
* Setup and Installation
* Usage
* API Endpoints
* Folder Structure
* Live Version
* Contributing
* License

## Overview

JobVibe is designed as a job board where users (job seekers) can sign up, log in, view job listings, and apply for jobs.

This project features:
* User Authentication: Handles user sign-up and login    using email and password.
* Mock Backend: Uses JSON Server to simulate API requests for storing and retrieving user data.
* User Profile: Once logged in, users can view a welcome message with their name.
* Apply for Jobs: Logged-in users can apply for jobs, which will be tracked in their profile.
* Error Handling: Provides user-friendly error messages for incorrect credentials, duplicate email addresses, or failed job applications.

## Use Case

JobVibe is ideal for job boards or platforms that require user registration, authentication, and job applications. This system allows users to create accounts, log in, apply for jobs, helping them in their job search journey.

## Features

* Sign Up: Users can create a new account by providing their name, email, and password.
* Login: Existing users can log in using their email and password.
* User Profiles: Each user has a basic profile that includes their name and email.
* Apply for Jobs: After logging in, users can apply for jobs and have those applications tracked in their profile.
* Responsive Forms: Mobile-first approach for both sign-up and login forms.
* Error Handling: If the email is already in use, the credentials are incorrect, or the job application fails, users will see an error message.

## Technlogies Used

* React: JavaScript library for building user interfaces.
* JSON Server: A fake REST API used to simulate a backend for storing user data and job listings.
* CSS Modules: Scoped CSS for better maintainability and separation of concerns.
* React Hooks: Using useState and useEffect for managing application state.

## Setup and Installation

To run this project locally, follow these steps:
# Prerequisites
* Node.js installed on your machine.

1. Clone the repository
git clone https://github.com/Shadrack-Kipkemei/JobVibe
cd jobvibe

2. Install dependencies
npm install

3. Set up JSON Server 
JobVibe uses JSON Server to simulate the backend for user authentication and job applications. You will need to install JSON Server if you don't have it.

To install it globally, run:
npm install -g json-server

4. Start JSON Server (in a separate terminal)
json-server --watch db.json

5. Start the React App
Finally, run the React development server:
npm start

## Usage
Once the project is up and running, you can interact with it as follows:
1. Sign Up: Click the "Sign Up" button and enter your name, email, and password to create a new account. If the email is already taken, you'll see an error message.

2. Login: After signing up, or from the main screen, click the "Login" button. Enter your registered email and password to log in. If the credentials are correct, you'll see a welcome message with your name.

3. Apply for Jobs: Once logged in, you can view a list of available jobs and apply for them. 

4. Error Messages: If an incorrect email/password combination is entered, or the email is already in use, appropriate error messages will be displayed. Similarly, if there’s an issue with the job application process, users will be notified.

## API Endpoints
JobVibe uses a mock API (JSON Server) to simulate backend functionality. The following endpoints are available:
* GET /users: Fetches the list of all users.

* POST /users: Creates a new user. The request body should contain the user's name, email, and password.

* GET /users/{id}: Retrieves a specific user by ID.

* PUT /users/{id}: Updates a user's information.

* GET /jobs: Fetches the list of available jobs.

* POST /applications: Allows users to apply for jobs. The request body should contain the job ID and user ID.

## Folder Structure

jobvibe/
│
├── public/
│   ├── index.html           # HTML template
│   └── favicon.ico          # Favicon
│
├── src/
│   ├── components/          # React components for authentication
│   │   ├── Auth/            # Auth component with login/signup toggle
│   │   ├── LoginForm/       # Login form component
│   │   ├── SignupForm/      # Signup form component
│   │   ├── JobList/         # Job list and application component
│   │   └── ...
│   ├── App.js               # Main React component
│   ├── index.js             # Entry point for React app
│   ├── styles/              # CSS Modules for styling
│   │   ├── Auth.module.css
│   │   ├── LoginForm.module.css
│   │   ├── SignupForm.module.css
│   │   ├── JobList.module.css
│   │   └── ...
│   └── ...
│
├── db.json                  # Mock data for JSON Server
├── package.json             # NPM dependencies and scripts
└── README.md                # Project documentation (this file)

## Live Version

You can view the live version of the JobVibe application at:
[JobVibe Live](https://job-vibe-shadracks-projects-1e08af63.vercel.app/)


## Contributing

We welcome contributions! If you'd like to improve or extend JobVibe, feel free to fork the repository, create a new branch, and submit a pull request.

# Steps to Contribute
1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Make your changes.
4. Commit your changes (git commit -m 'Add feature').
5. Push to your branch (git push origin feature-name).
6. Submit a pull request.

## License
The content of this project is licensed under the MIT license Copyright (c) 2024.

