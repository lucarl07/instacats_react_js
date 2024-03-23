/** Instacats - Main Page - Cabeçalho:
 * Feito por lucarl07
 * Criado em: 23/03/2024
 */

// Importando a folha de estilo:
import '../css/Header.css'

// Logo do site:
import instacatsIcon from '../assets/icons/instacats-icon.png'

// Declarando o cabeçalho do site:
const Header = () => {
    return (
        <header className='header'>
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

// Exportando o cabeçalho:
export default Header;
