import Styles from './BanerActions.module.css'
import CustomButton from '../../Button/Button'
import SocialLink from '../../CustomLink/CustomLink'
import { socials } from '../../../data/data'

export default function BanerActions() {
    return (
        <div className={Styles.BanerActions}>
            <CustomButton>Обратная связь</CustomButton>
            <SocialLink img={'/img/socials/Github.svg'} src={socials.github} />
            <SocialLink img={'/img/socials/Telegram.svg'} src={socials.telegram} />
        </div>
    )
}