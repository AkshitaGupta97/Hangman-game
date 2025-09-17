import React, { useState } from 'react'
import TextInput from './TextInput'
import { useNavigate } from 'react-router-dom';

function TextInputContainer() {
    const [value, setValue] = useState("")
    const [typeText, setTypeText] = useState('password');
    const navigate = useNavigate();

    function handleShowHideButton(){
        if(typeText==='password'){
            setTypeText('text')
        }
        else {
            setTypeText('password')
        }
    }
    function submitEvent(e){
        e.preventDefault();
        console.log('submit value', value);
        navigate('/start')

    }
    function handleTextInput(event){
        setValue(event.target.value);
    }

  return (
    <TextInput
        value={value}
        typeText={typeText}
        submitEvent={submitEvent}
        onChangeHandler={handleTextInput}
        handleShowHideButton={handleShowHideButton}
     />
  )
}

export default TextInputContainer