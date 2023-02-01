import '../assets/components.css'

export const Button = ({ label, func }) => {
    return (
        <div className='button-container'>
            <button className='element-button' onClick={() => func()} >{label}</button>
        </div>
    )
}