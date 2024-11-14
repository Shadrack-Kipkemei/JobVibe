import React, { useState, useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';
import SignupForm from './components/SignupForm/SignupForm';  
import LoginForm from './components/LoginForm/LoginForm'; 
import Jobs from './components/Jobs';  // Import the Jobs component

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);  // Users data
  const [jobs, setJobs] = useState([]);    // Jobs data
  const [showJobs, setShowJobs] = useState(false);  // Manage Jobs section visibility

  // Fetch jobs and users data from an API or local storage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsResponse = await fetch('http://localhost:3000/jobs');
        const jobsData = await jobsResponse.json();
        setJobs(jobsData);

        const usersResponse = await fetch('http://localhost:3000/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching jobs or users data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignupForm(false); // Close signup form if login is toggled
  };

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
    setShowLoginForm(false); // Close login form if signup is toggled
  };

  const handleLogin = (user) => {
    setLoggedInUser(user);
    setShowLoginForm(false);  // Close login form after successful login
    console.log('User logged in:', user);
  };

  const handleSignup = (newUser) => {
    setLoggedInUser(newUser); 
    setShowSignupForm(false); // Close signup form after successful signup
    console.log('New user signed up:', newUser);
  };

  const toggleJobs = () => {
    setShowJobs(!showJobs);  // Toggle visibility of jobs section
  };

  return (
    <div className="App">
      <h1>Welcome to JobVibe</h1>
      <Navbar 
        onLoginClick={toggleLoginForm} 
        onSignupClick={toggleSignupForm} 
        onJobsClick={toggleJobs}  // Pass toggleJobs function to Navbar
      />
       <Home />
       <About />
      
      {/* Conditionally render Login or Signup form */}
      {showLoginForm && <LoginForm onLogin={handleLogin} />}
      {showSignupForm && <SignupForm onSignup={handleSignup} />}
      
      {/* Conditionally render Jobs section */}
      {showJobs && <Jobs 
        loggedInUser={loggedInUser} 
        users={users} 
        jobs={jobs} 
        setUsers={setUsers} 
        setJobs={setJobs} 
      />}
      
      {/* Render other sections */}
     
      
      <Contact />
    </div>
  );
}

export default App;
