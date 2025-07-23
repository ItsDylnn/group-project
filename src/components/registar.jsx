import React from 'react'

const registar = () => {
  const [formData, setFormData] = React.useState({username: "", email: "", password: ""});
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    try {
        alert("user registered successfully");
    } catch (error) {
        alert("Error registering user")
    }
    }
};
return (
  <form onsubmit={handleSubmit}>
    <h2>Register</h2>
    <input name = "Username" placeholder ="Username" onChange= "handleChange"/>
    <input name ="email" placeHolder="Email" onChange={handleChange} />
    <input type= "password" name="password" placeholder='password'/>
    <button type="submit">Sign up</button>
  </form>
);

export default registar