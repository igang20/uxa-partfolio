import Styles from './ProjectCard.module.css'
import ProjectPropsList from '../ProjectPropsList/ProjectPropslList'


export default function ProjectCard(props) {
    return (
        <article className={Styles.ProjectCard}>
            <aside className={Styles.ImgSection}>
                <img src="./img/service/1517-screenshot.png" alt="" />
            </aside>
            <div className={Styles.CardData}>
                <h3 className={Styles.CardHead}>Адаптация сервиса заказа такси для мобильных устройств</h3>
                <p className={Styles.CardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit atque libero nostrum accusantium quo consequuntur, dignissimos perferendis animi architecto totam aspernatur. Deleniti necessitatibus, magni iure dolores animi tenetur assumenda?</p>
                <div className={Styles.ProjectInfo}>
                    <h4>ИНФОРМАЦИЯ О ПРОЕКТЕ</h4>
                    <ProjectPropsList />
                </div>
                <div className={Styles.LinksSection}>
                    <a href="#" className='Link'>LIVE PREVIEW</a>
                    <a href="#" className='Link'>LIVE PREVIEW</a>
                </div>
            </div>
        </article >
    )

}