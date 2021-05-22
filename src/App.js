import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';


const App = () => {
  const [firstName, setFirstName] = useState('');   
  const [email, setEmail] = useState('');
  return (
    <div className="">
      <Form handleEmail={setEmail} handleFirstName={setFirstName}/>
    </div>
  );
}

export default App;
