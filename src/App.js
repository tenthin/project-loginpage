import React, { useState } from 'react';
import LoginForm from './components/LoginForm';


function App() {
  const adminUser = {
    email:"admin@admin.com",
    password:"admin123"
  }

  const [user,setUser] = useState({name:"", email:""})
  const[error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () =>{
    console.log("Logout");
  }

  return (
    <div className="App">
        {(user.email != "") ? (
          <div className="welcome">
            <h12>Welcome,<span>{user.name}</span></h12>
            <button>Logout</button>
          </div>
        ): (
          <LoginForm/>
        )}
    </div>
  );
}

export default App;
