import Form from "../../components/Form"
import ListaDeEstudantes from "../../components/ListaDeEstudantes"
import { estudantes } from "../../data/estudantes"
import { useState, useEffect } from "react"


const FormPage = () => {
    const listaStorage = localStorage.getItem("estudantes");
    const [lista, setLista] = useState(JSON.parse(listaStorage) || estudantes);
  
 // onCreate
 useEffect(() => {
        if (listaStorage) {
            setLista(JSON.parse(listaStorage));
        }
    }, []);

 // onUpdate
 useEffect(() => {
     localStorage.setItem("estudantes", JSON.stringify(lista));
    }, [lista]);
    return (
        <>
            <Form lista = {lista} setLista = {setLista} />
            <ListaDeEstudantes lista = {lista}/>
        </> 
    )
}
export default FormPage
