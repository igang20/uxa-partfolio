import Styles from "./Baner.module.css"
import CustomButton from '../Button/Button'
import SocialLink from '../CustomLink/CustomLink';
import { socials } from '../../data/data'

export default function Baner() {
    return (
        <section className={Styles.Baner}>
            <article className={Styles.BanerLeft}>
                <span className={'biggerHeading'}>Привет, я<br />
                    Илья Иовва
                </span>
                <p className={Styles.BanerSubtext}>
                    Начинающий Front-end разработчик из Приднестровья
                </p>
                <div className={Styles.BanerActions}>
                    <CustomButton>Обратная связь</CustomButton>
                    <SocialLink img={'/img/socials/Github.svg'} src={socials.github} />
                    <SocialLink img={'/img/socials/Telegram.svg'} src={socials.telegram} />
                </div>
            </article>
            <div className={Styles.ImageSection}>
                <img src="./img/service/ilya.jpg" alt="" />
            </div>
        </section >
    )
}