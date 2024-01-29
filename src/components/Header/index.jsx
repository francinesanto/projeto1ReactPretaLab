import Menu from '../Menu'
import './styles.css'
const Header = () => {
    return (
        <>
           
            <header>
                <div className='logo'>
                    <img src="/logo.svg" alt="" />
                </div>  
                <Menu />
            </header>

           
        </>
    )
}

export default Header