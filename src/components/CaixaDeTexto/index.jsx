import './style.css'
const CaixaDeTexto = ({ label, placeholder, handleChange, value }) => {
    return (
        <div className="campoTexto">
            <label htmlFor="">{label}</label>
            <input value={value} type="text" placeholder={placeholder} onChange={handleChange} />
        </div>
     )
}

export default CaixaDeTexto