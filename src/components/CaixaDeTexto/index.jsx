import './style.css'
const CaixaDeTexto = ({ label, placeholder }) => {
    return (
        <div className="campoTexto">
            <label htmlFor="">{label}</label>
            <input type="text" placeholder={placeholder} />
        </div>
     )
}

export default CaixaDeTexto