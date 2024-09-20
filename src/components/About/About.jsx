import Styles from './About.module.css'
import BanerActions from '../Banner/BannerAcrions/BanerActions'



export default function About(props) {
    return (
        <section className={Styles.About}>
            <h1>Про меня</h1>
            <div className={Styles.AboutText}>
                <h3 className={Styles.AboutHead}>Я начинающий Font-end разработчик из Приднестровья</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi eaque sit neque a repudiandae nesciunt veritatis, recusandae consectetur optio quisquam natus tenetur. Ab assumenda maiores vel dolor, impedit alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti illo eum ducimus officia beatae, repellat consectetur accusantium in nesciunt quibusdam? Provident quas excepturi placeat quibusdam reprehenderit a consequatur corporis nam?</p>
                {props.extended ? <BanerActions /> :
                    <a href="" className='Link' style={{ marginTop: '10px' }}>Больше обо мне</a>
                }
            </div>
        </section>
    )
}