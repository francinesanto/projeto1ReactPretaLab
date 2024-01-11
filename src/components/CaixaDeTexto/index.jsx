import './style.css'
const CaixaDeTexto = ({ id, label, placeholder }) => {
    return (
        <div className="campoTexto">
            <label htmlFor="">{label}</label>
            <input id={id} type="text" placeholder={placeholder} />
        </div>
     )
}

export default CaixaDeTexto