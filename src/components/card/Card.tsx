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
import { CardImportanceType, CardStatusType, CardType, CardTypeType, FieldType } from '../../state/state'
import { EditableSpan } from '../editableSpan/EditableSpan'

type CardPropsType = {
    cardObj: CardType
    onComplete: (type: CardTypeType) => void
}

export const Card: FC<CardPropsType> = ({cardObj, onComplete}) => {

    const {name, description, importance, status, deadline, file, message} = cardObj

    const [stat, setStatus] = useState<CardStatusType>(status)
    const [priority, setPriority] = useState<CardImportanceType>(importance)
    const [card, setCard] = useState<CardType>(cardObj)

    const onChangeStatusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        let status: CardStatusType = 'To Do'
        switch(e.currentTarget.value){
            case 'To Do':
                status = 'To Do'
                break
            case 'Ongoing':
                status = 'Ongoing'
                break
            case 'Done':
                status = 'Done'
                onComplete('Completed')
                break             
        }
        setStatus(status)
        cardObj.status = status
    }

    const onChangeImportanceHandler = () => {
        if (stat === 'Done'){
            return
        }
        let importance: CardImportanceType = 'low'
        switch(priority){
            case 'low':
                importance = 'mid'
                break
            case 'mid':
                importance = 'high'
                break
            case 'high':
                importance = 'low'
                break
        }
        setPriority(importance)
        cardObj.importance = importance
    }

    const onChangeHandler = (newText: string, field: FieldType) => {
        switch (field) {
            case 'name':
                cardObj.name = newText
                break;
            case 'description':
                cardObj.description = newText
                break;
        }
        setCard({...cardObj})
    }

    return(
        <div className={style.container}>
            <div className={style.headerContainer}>
                <img src={importance === 'high' ? priorityHigh : importance === 'mid' ? priorityMid : priorityLow} onClick={onChangeImportanceHandler}/>
                <EditableSpan oldText={name} field='name' onChange={onChangeHandler}/>
                <div className={`${style.statusContainer} ${stat === 'To Do' ? style.todo : stat === 'Ongoing' ? style.ongoing : style.done}`}>
                            <select className={style.status} onChange={onChangeStatusHandler} disabled={stat === 'Done'}>
                                <option value="To Do" selected={stat === 'To Do'} className={style.option}>To Do</option>
                                <option value="Ongoing" selected={stat === 'Ongoing'} className={style.option}>Ongoing</option>
                                <option value="Done" selected={stat === 'Done'} className={style.option}>Done</option>
                            </select>
                        </div>
            </div>

            <EditableSpan oldText={description} field='description' onChange={onChangeHandler}/>

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