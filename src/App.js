import React, {useState} from "react"
import LoginForm from "./components/LoginForm/LoginForm"
import "./App.css"

function App() {
    const [user, setUser] = useState(null);
    const [isLoginVisible, setIsLoginVisible] = useState(false);

    function handleLogin(loggedInUser) {
        setUser(loggedInUser)
        setIsLoginVisible(false) // close the login form after login
    }

    function toggleLoginForm() {
        setIsLoginVisible(!isLoginVisible);
    }

  

    return (
        <div className="app">
            {user ? (
                <div>Welcome, {user.name}!</div>
            ) : (
              <button onClick={toggleLoginForm}>Login</button>
            )}
           {isLoginVisible && (
            <div className="login-overlay">
                <div className="login-modal">
                    <button className="close-button" onClick={toggleLoginForm}>x</button>
                    <LoginForm onLogin={handleLogin} />
                </div>
            </div>
           )}
        </div>
    )
}

export default App
