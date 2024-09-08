import Styles from '../Proect Card/ProjectCard.module.css'

export default function ProjectPropsList(props) {
    return (
        <ul className={Styles.AboutProperties}>
            <hr />
            <li><p className={Styles.Property}>Год</p>  <p className={Styles.Value}>2024</p></li>
            <hr />
            <li><p className={Styles.Property}>Компания</p> <p>15-17</p></li>
            <hr />
            <li><p className={Styles.Property}>Роль</p> <p>Front-end</p></li>
            <hr />
        </ul>
    )
}