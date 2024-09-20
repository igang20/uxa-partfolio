import Styles from './CapabiliteList.module.css'
import CapabiliteItem from './CapabiliteItem'

export default function CapabiliteList() {
    return (
        <ul className={Styles.CapabiliteList}>
            <CapabiliteItem text={'HTML'} />
            <CapabiliteItem text={'CSS'} />
            <CapabiliteItem text={'javascript'} />
            <CapabiliteItem text={'react'} />
            <CapabiliteItem text={'adaptive'} />
            <CapabiliteItem text={'Figma'} />
            <CapabiliteItem text={'next.js'} />
        </ul>
    )
}