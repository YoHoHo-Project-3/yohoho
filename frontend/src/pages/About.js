import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function About() {
  const [message, setMessage] = useState('Heya!');
  
  useEffect(() => {
    console.log('useEffect')
    return () => {
      console.log('useEffect cleanUp')
    }
  }, [message])

  const myClickHandler = () => {
     setMessage('HEyo!') 
    }

  return (
    <div>
      {message}
      <button onClick={ myClickHandler }>Button</button>
      <Link to="/">Home</Link>
    </div>
  )
}