import React, { useState, useEffect } from 'react'
import { writeToSessionStorage, getSessionStorage } from './service/session'

const Form = () => {
  const [name, setName] = useState('')

  useEffect(() => {
   getSessionStorage('name')
  }, [name])

  function handleOnChange(e){
    setName(e.target.value)
    writeToSessionStorage('name', name)
  }
  
  return (
    <form>
      <input type="text" value={name} onChange={handleOnChange}/>
    </form>
  )
}
export default Form