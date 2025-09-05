import React, { useReducer } from 'react';
import './App.css';

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASS':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

function Form() {
  const initialState = { email: '', password: '' };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with\nEmail: ${state.email}\nPassword: ${state.password}`);
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back 👋</h2>
        <p>Please login to continue</p>

        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter your email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password"
            value={state.password}
            onChange={(e) => dispatch({ type: 'SET_PASS', payload: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Form;
