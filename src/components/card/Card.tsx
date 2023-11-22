import avatar1 from '../../res/man.png'
import avatar2 from '../../res/woman.png'
import priorityHigh from '../../icons/priorityHigh.svg'
import statusList from '../../icons/status.svg'
import deadlineIcon from '../../icons/deadline.svg'
import addMember from '../../icons/addMember.svg'
import files from '../../icons/file.svg'
import messages from '../../icons/message.svg'

import style from "./Card.module.css"
import {FC} from "react"
import { CardImportanceType, CardStatusType, CardTypeType } from '../../App'

export type CardPropsType = {
    name: string
    description: string
    importance: CardImportanceType
    status: CardStatusType
    type: CardTypeType
    deadline: string
    file: number
    message: number
}

export const Card: FC<CardPropsType> = ({name, description, importance, status, deadline, file, message}) => {
    return(
        <div className={style.container}>
            <div className={style.headerContainer}>
                <img src={priorityHigh}/>
                <span className={style.name}>{name}</span>
                <div className={style.status}>
                    {status}
                    <img src={statusList}/>
                </div>
            </div>

            <p className={style.description}>{description}</p>

            <div className={style.deadlineContainer}>
                <img src={deadlineIcon}/>
                <span className={style.deadlineText}>Deadline</span>: {deadline}
            </div>

            <div className={style.footerContainer}>
                <div className={style.members}>
                    <div className={style.avatar}>
                        <img className={style.photo} src={avatar1}></img>
                    </div>
                    <div className={style.avatar}>
                        <img className={style.photo} src={avatar2}></img>
                    </div>
                    <div className={style.avatar}>
                        <img className={style.photo} src={avatar2}></img>
                    </div>
                    <div className={style.avatar}>
                        <span className={style.more}>+1</span>
                    </div>
                    <div className={style.avatar}>
                        <img src={addMember}/>
                    </div>
                </div>

                <div className={style.add}>
                    <div className={style.addItem}>
                        <img src={files}/>
                        <span className={style.text}>{file}</span>
                    </div>
                    <div className={style.addItem}>
                        <img src={messages}/>
                        <span className={style.text}>{message}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}