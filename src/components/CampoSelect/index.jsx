import './style.css'
const CampoSelect = ({label, opcoes}) => {
    return (
        <div className='campoSelect'>
            <label htmlFor="">{label}</label>
            <select name="" id="">
                {opcoes.map((elemento, index) => (
                    <option key={index} value="">{elemento}</option>
                ))}
            </select>   
        </div>
    )
}

export default CampoSelect