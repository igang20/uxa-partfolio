import Styles from "./List.module.css"
import ProjectCard from "./Proect Card/ProjectCard"


export default function ProjectsList(props) {
    return (
        <section className={Styles.ProjectsList}>
            <div className={Styles.ListHeading}>
                <h1>Мои проекты</h1>
                <p>Вот некоторые из избранных проектов, демонстрирующих мою страсть к Front-end разработке.</p>
            </div>
            <ul className={Styles.List}>
                <ProjectCard />
            </ul>
        </section>
    )
}