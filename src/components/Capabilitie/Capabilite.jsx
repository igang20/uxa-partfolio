import Styles from './Capabilite.module.css'
import CapabiliteList from './CapabiliteList/CapabiliteList'

export default function Capabilite() {
    return (
        <section >
            <h1>МОИ ЗНАНИЯ</h1>
            <div className={`SectionText`}>
                <p>I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
                <CapabiliteList />
            </div>
        </section>
    )
}