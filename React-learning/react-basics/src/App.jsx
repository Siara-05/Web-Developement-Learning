

import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Form from './components/Form'
import Number from './components/Number'
import { Route, Routes } from 'react-router-dom'
import Card from './components/Card'
import Header from './components/Header'


const App = () => {
  return (
    <>
    
    <Header />

     <Routes>
      <Route path='/' element={<h1 className="mt-10 text-2xl text-center">Welcome to Siara</h1>} />
        <Route  path='/number' element={<Number />}/>
        <Route  path='/form' element={<Form />} />
        <Route  path='/footer' element={<Footer />} />
     </Routes>
    
    {/* <Navbar />
    <Form />
     {/* <Number />  
    <Footer/>*/}
    </>
  )
}

export default App



// import React from 'react';
// import Card from './components/Card';
// import './App.css'; 

// function App() {
//   const profiles = [
//     {
//       photo: 'https://randomuser.me/api/portraits/men/1.jpg',
//       name: 'John Doe',
//       profession: 'Web Developer',
//       age: 28,
//       city: 'New York',
//     },
//     {
//       photo: 'https://randomuser.me/api/portraits/women/2.jpg',
//       name: 'Jane Smith',
//       profession: 'UI Designer',
//       age: 25,
//       city: 'Los Angeles',
//     },
//     {
//       photo: 'https://randomuser.me/api/portraits/men/3.jpg',
//       name: 'Robert Johnson',
//       profession: 'Data Analyst',
//       age: 32,
//       city: 'Chicago',
//     },
//     {
//       photo: 'https://randomuser.me/api/portraits/women/4.jpg',
//       name: 'Emily Davis',
//       profession: 'Product Manager',
//       age: 30,
//       city: 'Seattle',
//     },
//     {
//       photo: 'https://randomuser.me/api/portraits/men/5.jpg',
//       name: 'Michael Brown',
//       profession: 'Software Engineer',
//       age: 29,
//       city: 'Austin',
//     },
//   ];

//   return (
//     <div className="card-container">
//       {profiles.map((profile, index) => (
//         <Card
//           key={index}
//           photo={profile.photo}
//           name={profile.name}
//           profession={profile.profession}
//           age={profile.age}
//           city={profile.city}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
