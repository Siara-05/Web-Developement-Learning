// Using React to create a simple component that displays a value and changes it on button click

// import React, { useState } from "react";

// const App = () => {
  
//   const [a, setA] = useState(10)  
  
//   const changeA = () => {
//     console.log("Button clicked");
//     setA(60);
//   }

//   return (
//     <div>
//      <h1>Value of a is {a}</h1>
//      <button onClick={changeA}>Chnage A</button>
//     </div>
//   )
// }

// export default App;


        //  Increaasing and Decreasing a number using React



import React, { useState } from 'react'



const App = () => {

const [num, setNum] = useState(0);

 const increatment = () => {
  setNum(num + 10);
};

 const decrement = () => {
  setNum(num - 10);
};

  return (
    <div>
      <h2 className='text-4xl bg-purple-500 text-yellow'> Number is {num} </h2>
      <button onClick={increatment}>Increatment</button>
      <button onClick= {decrement}>Decreatment</button>
    </div>
  );
};

export default App
