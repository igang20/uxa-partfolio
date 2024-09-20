import Styles from './Header.module.css'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header className={Styles.Header}>
            <span><Link to="/">ИЛЬЯ ИОВВА</Link></span>
            <nav>
                <a href="#work">Work</a>
                <Link to="/about">About</Link>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}