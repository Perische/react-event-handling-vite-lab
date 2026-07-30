import React from 'react';

// Event Listener for password input field

function PasswordInput() {
    function handleChange(event) {
        console.log("Entering password...");
    }
    return (
        <input
            type="password"
            onChange={handleChange}
        />
        
    );
}


export default PasswordInput;