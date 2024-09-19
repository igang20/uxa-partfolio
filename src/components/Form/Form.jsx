import CustomButton from '../Button/Button'
import Styles from './Form.module.css'
import { TextField } from '@mui/material'

export default function Form() {
    return (
        <form action="" className={Styles.Form}>
            <TextField variant='outlined' label="Имя" />
            <TextField variant='outlined' label='Почта' />
            <TextField variant='outlined' label="Тема" />
            <TextField variant='outlined' label="Сообщение" />
            <CustomButton >Отправить</CustomButton>
        </form>
    )
}