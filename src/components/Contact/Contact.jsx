import SocialLink from '../CustomLink/CustomLink'
import Styles from './Contact.module.css'
import { socials } from '../../data/data'
import Form from '../Form/Form'


export default function Contact() {
    return (
        <section className={Styles.Contact}>
            <aside>
                <h1>Связь со мной</h1>
                <div>
                    <p>Напишите сюда <a href="" className='Link'>ilichzavr@gmail.com</a></p>
                    <p>Узнайте подробнее в <a href="" className='Link'>резюме</a></p>
                </div>
                <div className={Styles.SocialList}>
                    <SocialLink img={'/img/socials/Github.svg'} src={socials.github} />
                    <SocialLink img={'/img/socials/Telegram.svg'} src={socials.telegram} />
                    <SocialLink img={'/img/socials/Telegram.svg'} />
                    <SocialLink img={'/img/socials/Github.svg'} />
                </div>
            </aside>
            <Form />
        </section>
    )
}