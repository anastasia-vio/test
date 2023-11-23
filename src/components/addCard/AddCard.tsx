import style from "./AddCard.module.css"
import {FC} from "react"

type AddPropsType = {
    isModalVisible: boolean
    onClose: () => void
}

export const AddCard: FC<AddPropsType> = ({isModalVisible, onClose}) => {

    if(!isModalVisible){
        return null
    }

    return(
        <div className={style.modal} onClick={onClose}>
            <div className={style.content} onClick={e => e.stopPropagation()}>
                <div className={style.header}>
                    <h4 className={style.title}>Head</h4>
                </div>
                <div className={style.body}>
                    Content
                </div>
                <div className={style.footer}>
                    <button className={style.button} onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}