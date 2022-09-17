import React,{ useState } from 'react'
import Home from './components/Home.js'
import './App.css';

// import Button from 'react-bootstrap/Button'

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [inputVal,setInputVal] = useState("");
  const [userName,setUser] = useState("")

  return (
    <div className="App">
    
      {isLoggedIn === true ? 
        <div className = "landing_container">
          <Home user_name = {userName}/>

        </div>
        :
        <>
          <div className = "login_container">
            <input maxLength = "12" placeholder = "Username..." id = "login_input" type = "text" className = "login_input" value = {inputVal} onKeyPress = {(event) => {if(event.key === "Enter" && event.target.value !== ""){setIsLoggedIn(true);setUser(inputVal)}}} onChange = {(e) => setInputVal(e.target.value)} />
    
          </div>

          <div className = "side_text">
            <h3 className = "side_text_header">
              Car Showroom | Sign Up
            </h3>
            <pre className = "side_pre_text">

              App created with ReactJS<br/>
              <a title = "Okei Oliseh" id = "author_link" href = "https://github.com/okeioliseh">See My Author </a>
            </pre>
          </div>
        </>
      }  
    
    </div>
  );
}

export default App;
