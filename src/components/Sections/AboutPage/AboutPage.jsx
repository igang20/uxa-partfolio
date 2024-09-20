import Styles from './About.module.css'
import About from '../../About/About'
import Capabilite from '../../Capabilitie/Capabilite'

export default function AboutPage() {
    return (
        <main className={Styles.AboutPage}>
            <div className="Content">
                <About extended={true} />
                <Capabilite />
            </div>
        </main>
    )
}