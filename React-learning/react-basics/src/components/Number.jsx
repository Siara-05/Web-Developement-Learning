
import React, { useState } from 'react'
import Form from './Form';


const App = () => {

const [num, setNum] = useState(0);

 const increatment = () => {
  setNum(num + 10);
};

 const decrement = () => {
  setNum(num - 10);
};

  return (
    <div className='flex flex-col items-center justify-center'>
      <Form />
      <h2 className='text-4xl bg-emerald-900 text-yellow'> Number is {num} </h2>
      <button onClick={increatment}>Increatment</button>
      <button onClick= {decrement}>Decreatment</button>
    </div>
  );
};

export default App
