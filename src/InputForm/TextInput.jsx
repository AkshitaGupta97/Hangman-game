import React from 'react'
import Button from '../Button/Button'

function TextInput({ typeText, handleShowHideButton, submitEvent, onChangeHandler, value }) {
    return (
        <>
            <form onSubmit={submitEvent} >
                <label htmlFor="">Enter the word...</label>
                <input type={typeText} placeholder='Type your word'
                    onChange={onChangeHandler} value={value}
                />
            </form>

                <Button 
                    styleType={typeText === "password" ? "show" : "hide"}
                    text={typeText === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideButton}
                />
                
            
        </>
    )
}

export default TextInput

