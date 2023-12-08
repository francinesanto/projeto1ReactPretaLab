const CaixaDeTexto = ({ label, placeholder }) => {
    return (
        
        
        <div className="campotexto">
            <label htmlFor="">{label}</label>
            <input type="text" placeholder={placeholder} />
        </div>
       
        
     )
}

export default CaixaDeTexto