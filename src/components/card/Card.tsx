import avatar1 from '../../res/man.png'
import avatar2 from '../../res/woman.png'
import priorityHigh from '../../icons/priorityHigh.svg'
import priorityMid from '../../icons/priorityMid.svg'
import priorityLow from '../../icons/priorityLow.svg'
import deadlineIcon from '../../icons/deadline.svg'
import addMember from '../../icons/addMember.svg'
import files from '../../icons/file.svg'
import messages from '../../icons/message.svg'

import style from "./Card.module.css"
import { ChangeEvent, useState, FC } from "react"
import { CardStatusType, CardType, CardTypeType } from '../../state/state'

type CardPropsType = {
    cardObj: CardType
    onComplete: (type: CardTypeType) => void
    onSelect: (newStatus: CardStatusType) => void
}

export const Card: FC<CardPropsType> = ({cardObj, onComplete, onSelect}) => {

    const {name, description, importance, status, deadline, file, message} = cardObj
    const [stat, setStatus] = useState<CardStatusType>(status)

    const onChangeStatusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        let status: CardStatusType = 'To Do'
        switch(e.currentTarget.value){
            case 'To Do':
                status = 'To Do'
                break;
            case 'Ongoing':
                status = 'Ongoing'
                break;
            case 'Done':
                status = 'Done'
                onComplete('Completed')
                break;                
        }
        setStatus(status)
        onSelect(status)
    }

    return(
        <div className={style.container}>
            <div className={style.headerContainer}>
                <img src={importance === 'high' ? priorityHigh : importance === 'mid' ? priorityMid : priorityLow}/>
                <span className={style.name}>{name}</span>
                <div className={`${style.statusContainer} ${stat === 'To Do' ? style.todo : stat === 'Ongoing' ? style.ongoing : style.done}`}>
                            <select className={style.status} onChange={onChangeStatusHandler} disabled={stat === 'Done'}>
                                <option value="To Do" selected={stat === 'To Do'} className={style.option}>To Do</option>
                                <option value="Ongoing" selected={stat === 'Ongoing'} className={style.option}>Ongoing</option>
                                <option value="Done" selected={stat === 'Done'} className={style.option}>Done</option>
                            </select>
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