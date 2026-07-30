import React from 'react';

//Event handler for the submit button

function SubmitButton (){
    function handleEnter(){
        console.log("Mouse Entering");
    }

    function handleLeave() {
        console.log("Mouse Exiting");
    }

    return(
        <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        >
            Submit Password
        </button>
    )
}

export default SubmitButton;