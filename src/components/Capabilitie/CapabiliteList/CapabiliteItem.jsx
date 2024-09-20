import Styles from './CapabiliteList.module.css'
import ButtonBase from '../../Button/Button.module.css'

export default function CapabiliteItem(props) {
    return (
        <li className={`${Styles.CapabiliteItem} ${ButtonBase.CustomButton} `}>
            {props.text}
        </li>
    )
}