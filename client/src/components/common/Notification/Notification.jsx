import { useContext, useEffect } from "react"
import style from  "./Notification.module.css"
import { NotifyContext } from "../../../contexts/notificationContext"


export const Notification = ({message}) => {

    const {setNotify} = useContext(NotifyContext)

    useEffect(() => {
       setTimeout(() => setNotify({opened: false, msg: ''}), 5000)
    }, [])

    return (
    <div className={style.notification}>
            {message.split('\n').map(m => <p key={Math.random(999)}>{m}</p>)}
    </div> 
    )
}