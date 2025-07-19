import React from 'react'

const Form = () => {

    const submitHandler = (e) => {
        e.preventDefault()

        console.log("Form submitted");
    }

  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input type="text" placeholder='Enter your name'  className='px-0.5 py-0.5 m-10 text-xl rounded'/>
            <button className='font-semibold bg-emerald-500 rounded'> Submit </button>
        </form>
    </div>
  )
}

export default Form