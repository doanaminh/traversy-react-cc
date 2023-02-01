const Button = ({color, text, onAdd}) => {
    return (
        <button style={{backgroundColor: color}} className='btn' onClick={onAdd}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

export default Button;