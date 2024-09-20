import Styles from "./Baner.module.css"
import BanerActions from "./BannerAcrions/BanerActions"

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
                <BanerActions />
            </article>
            <div className={Styles.ImageSection}>
                <img src="./img/service/ilya.jpg" alt="" />
            </div>
        </section >
    )
}