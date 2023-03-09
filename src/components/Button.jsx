const Button = ({color, text}) => {
    const onClick = _ => {
        console.log('click');
    }
    return (
        <button style={{backgroundColor: color}} className='btn' onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

export default Button;