import React, { useState, useContext } from 'react';
import { FormContext } from './service/context'
import Form from './form'
import './App.css';
import { writeToSessionStorage } from './service/session';

function App() {
  const FormState = useContext(FormContext)
  const [formState, setFormState] = useState('null')
  // const [counter, setCounter] = useState(
  //   parseInt(sessionStorage.getItem('counter' || 0))
  // )
  const [counter, setCounter] = useState(0)

  // sessionStorage.setItem('name', name)
  
  function incrementCounter(){
    setCounter(counter + 1)
    writeToSessionStorage('counter', counter)
  }

  return (
    <main>
      <h1>Session state</h1>
      <button onClick={incrementCounter}>Clicked: {counter}</button>
      {/* <FormState.Provider value={{formState, setFormState}}> */}
        <Form></Form>
        <p>Text</p>
      {/* </FormState.Provider> */}
    </main>
  );
}

export default App;
