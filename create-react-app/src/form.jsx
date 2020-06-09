import React, { useState, useEffect } from 'react'
import { writeToSessionStorage, getSessionStorage, ensureString } from './service/session'

const Form = () => {
  const [name, setName] = useState('')
  const [bio, setBio] = useState(ensureString(getSessionStorage('bio')))
  
  useEffect(() => {
    console.log('writing to bio')
    writeToSessionStorage('bio', bio)
  }, [bio])

  function handleOnChange(e){
    setName(e.target.value)
  }
  function handleBio (e) {
    setBio(e.target.value)
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