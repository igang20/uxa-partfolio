import Styles from './Header.module.css'



export default function Header() {
    return (
        <header className={Styles.Header}>
            <span >ИЛЬЯ ИОВВА</span>
            <nav>
                <a href="#">Work</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}