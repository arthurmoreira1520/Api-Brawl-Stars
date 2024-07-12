
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
               
            </Link>
            <nav>
                <Link to="/">Personagens</Link>
                <Link to="/sobre">Mapa</Link>
                <Link to="/projetos">Creadores</Link>
                
            </nav>
        </header>
    )    
}

export default Header