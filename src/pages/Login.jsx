import React from 'react'

const login = () => {
    const [formData, setFormData] = React.useState({username: "", password: ""});
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
     const handleSubmit = (e) => {
        e.preventDefault();
        try {
            alert("user logged in successfully");
        } catch (error) {
            alert("Error logging in user")
        }
    }   
}

export default login;