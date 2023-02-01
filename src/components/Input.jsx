import React from 'react'
import '../assets/components.css'

const Input = ({ value, type, placeholder, onChange }) => {
    return (
        <input 
        type={type} 
        className="form-control" 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} />
    )
}

export default Input