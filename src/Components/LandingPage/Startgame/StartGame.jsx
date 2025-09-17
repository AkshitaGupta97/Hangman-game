import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextInputContainer from '../../../InputForm/TextInputContainer'

function StartGame() {
  const navigate = useNavigate();

  function handleSubmit(value){   // this value is from onSubmit in textinputformcontainer
    console.log(value);
    
    navigate('/start', {state : {wordSelected: value}}); // navigate takes two argument.
  }
  return (
    <>
      <TextInputContainer onSubmit={handleSubmit} />

    </>
  )
}

export default StartGame