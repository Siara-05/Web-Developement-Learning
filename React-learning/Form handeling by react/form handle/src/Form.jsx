import React, { useReducer } from 'react'
import './App.css';

function Form() {
    const initialState = { email: ',password:'}
    const [state, dispatch] = useReducer(useReducer,initialState)
  return (
    <div>
        <form >
            <input type="email" onChange={(e)=>{
                dispatch({type: 'Email',payload: e.target.value})
            }} />

        </form>

    </div>
  )
}

export default Form