
function getButton(styleType) {
  if(styleType === 'show') return 'button-show';
  else if(styleType === 'hide') return 'button-hide';
  else return 'mainBtn'
}

function Button({text, onClickHandler, styleType='hide', type='button' }) {
  return (
    <button type={type} onClick={onClickHandler} className={`${getButton(styleType)}`}>
        {text}
    </button>
  )
}

export default Button