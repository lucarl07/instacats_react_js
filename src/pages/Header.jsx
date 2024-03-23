import '../css/Header.css'
import instacatsIcon from '../assets/instacats-icon.png'

const Header = () => {
    return (
        <header>
            <nav className='navigation'>
                <img src={instacatsIcon} alt="Logotipo do site" />
                
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href="#">Login</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#">Registrar</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;