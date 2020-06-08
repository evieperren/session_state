import React, { useState, useEffect } from 'react'
import { writeToSessionStorage, getSessionStorage } from './service/session'

const Form = () => {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
   getSessionStorage('name')
  }, [name])

  function handleOnChange(e){
    setName(e.target.value)
    writeToSessionStorage('name', name)
  }
  function handleBio (e) {
    setBio(e.target.value)
    writeToSessionStorage('bio', bio)
    console.log(getSessionStorage('bio')) // undefined
  }
  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input name="name" type="text" value={name} onChange={handleOnChange}/>

      <label htmlFor="bio">Bio: </label>
      <input name="bio" type="text" value={bio} onChange={handleBio}/>
    </form>
  )
}
export default Form