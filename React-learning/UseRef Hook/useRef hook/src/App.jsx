import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const val = useRef(0);

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val:", val.current);
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-purple-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        React Counter with useRef
      </h1>

      <button
        onClick={handleIncrement}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300"
      >
        Increment
      </button>

      <div className="mt-6 text-xl text-gray-700">
        <p>🔢 Count (State): <span className="font-semibold">{count}</span></p>
        <p>🧠 Ref Value: <span className="font-semibold">{val.current}</span></p>
      </div>
    </div>
  );
}

export default App;
