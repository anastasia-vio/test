import avatar1 from '../../res/man.png'
import avatar2 from '../../res/woman.png'
import priorityHigh from '../../icons/priorityHigh.svg'
import priorityMid from '../../icons/priorityMid.svg'
import priorityLow from '../../icons/priorityLow.svg'
import statusList from '../../icons/status.svg'
import deadlineIcon from '../../icons/deadline.svg'
import addMember from '../../icons/addMember.svg'
import files from '../../icons/file.svg'
import messages from '../../icons/message.svg'

import style from "./Card.module.css"
import {ChangeEvent, useState, FC} from "react"
import { CardImportanceType, CardStatusType, CardTypeType } from '../../state/state'

type CardPropsType = {
    name: string
    description: string
    importance: CardImportanceType
    stat: CardStatusType
    type: CardTypeType
    deadline: string
    file: number
    message: number
}

export const Card: FC<CardPropsType> = ({name, description, importance, stat, deadline, file, message}) => {

    const [status, setStatus] = useState<CardStatusType>(stat)

    const onChangeStatusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        let stat: CardStatusType = 'To Do'
        switch(e.currentTarget.value){
            case 'To Do':
                stat = 'To Do'
                break;
            case 'Ongoing':
                stat = 'Ongoing'
                break;
            case 'Done':
                stat = 'Done'
                break;                
        }
        setStatus(stat)
    }

    return(
        <div className={style.container}>
            <div className={style.headerContainer}>
                <img src={importance === 'high' ? priorityHigh : importance === 'mid' ? priorityMid : priorityLow}/>
                <span className={style.name}>{name}</span>
                <div className={`${style.statusContainer} ${status === 'To Do' ? style.todo : status === 'Ongoing' ? style.ongoing : style.done}`}>
                            <select className={style.status} onChange={onChangeStatusHandler}>
                                <option value="To Do" selected={status === 'To Do'} className={style.option}>To Do</option>
                                <option value="Ongoing" selected={status === 'Ongoing'} className={style.option}>Ongoing</option>
                                <option value="Done" selected={status === 'Done'} className={style.option}>Done</option>
                            </select>
                        </div>
                {/* <div className={`${style.status} ${status === 'To Do' ? style.todo : status === 'Ongoing' ? style.ongoing : style.done} `}>
                    <span>{status}</span>
                    <img src={statusList}/>
                </div> */}
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