import React, {useState} from "react"
import LoginForm from "./components/LoginForm/LoginForm"
import "./App.css"
import SignupForm from "./components/SignupForm/SignupForm";

function App() {
    const [user, setUser] = useState(null);
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [isSignupVisible, setIsSignupVisible] = useState(false);

    function handleLogin(loggedInUser) {
        setUser(loggedInUser)
        setIsLoginVisible(false) // close the login form after login
    }

    function handleSignup(newUser) {
        setUser(newUser)
        setIsSignupVisible(false) // Close the signup form after signup
    }

    function toggleLoginForm() {
        setIsLoginVisible(!isLoginVisible);
    }

    function toggleSignupForm() {
        setIsSignupVisible(!isSignupVisible)
    }

  

    return (
        <div className="app">
            {user ? (
                <div id="message">Welcome, {user.name}!</div>
            ) : (
                <div>
              <button onClick={toggleLoginForm}>Login</button>
              <button onClick={toggleSignupForm}>Sign Up</button>
              </div>
            )}
           {isLoginVisible && (
            <div className="overlay">
                <div className="modal">
                    <button className="close-button" onClick={toggleLoginForm}>x</button>
                    <LoginForm onLogin={handleLogin} />
                </div>
            </div>
           )}
           {isSignupVisible && (
            <div className="overlay">
                <div className="modal">
                    <button className="close-button" onClick={toggleSignupForm}>x</button>
                    <SignupForm onSignup={handleSignup}/>
                </div>
            </div>
           )}
        </div>
    )
}

export default App
