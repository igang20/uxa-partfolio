import Style from './Button.module.css'

export default function CustomButton(props) {
    console.log(props)
    return <button onClick={() => {
        props.onClick ? props.onClick() : console.log("Unbinded");
    }} className={Style.CustomButton}>
        {props.children}
    </button>

}