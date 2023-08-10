import { useContext, useEffect } from "react"
import style from  "./Notification.module.css"
import { NotifyContext } from "../../../contexts/notificationContext"


export const Notification = ({message}) => {

    const {setNotify} = useContext(NotifyContext)

    useEffect(() => {
       setTimeout(() => setNotify({opened: false, msg: ''}), 5000)
    }, [])

    return <div className={style.notification}>
        <h1>Error</h1>
        <p>{message}</p>
    </div> 
}