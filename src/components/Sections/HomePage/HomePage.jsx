import Styles from './HomePage.module.css'
import Baner from '../../Banner/Baner'
import ProjectsList from '../../ProjectsList/List'
import About from '../../About/About'
import Contact from '../../Contact/Contact'



export default function HomePage() {
    return (
        <main className={Styles.HomePage}>
            <div className='Content'>
                <Baner />
                <ProjectsList />
                <About />
                <Contact />
            </div>
        </main>
    )
}