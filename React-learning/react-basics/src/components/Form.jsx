import React, { useState } from 'react'

// Functional component named Form
const Form = () => {

  // useState hook to store and manage input value
  const [username, setusername] = useState("")

  // Function that runs when form is submitted
  const submithandler = (e) => {
    e.preventDefault(); // Stops the page from refreshing on form submit

    console.log(username); // Logs the entered username in the console

    setusername(""); // Clears the input field after submission
  }

  return (
    <div>
      {/* Form element with onSubmit event handler */}
      <form onSubmit={(e) => {
        submithandler(e); // Calls the submit handler and passes the event object
      }}>

        {/* Controlled input field */}
        <input
          value={username} // input value is tied to state (makes it a controlled component)
          onChange={(e) => {
            setusername(e.target.value); // Updates state on every keystroke
          }}
          type="text"
          placeholder='Enter your name'
          className='px-0.5 py-0.5 m-10 text-xl rounded text-black mx-80' // Tailwind classes for styling
        />

        {/* Submit button */}
        <button
          type="submit" // Always good practice to specify type explicitly
          className='m-1 font-semibold rounded bg-emerald-500'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form;
