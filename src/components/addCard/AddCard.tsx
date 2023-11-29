import style from "./AddCard.module.css"
import cardStyle from '../card/Card.module.css'
import buttStyle from '../button/Button.module.css'
import {ChangeEvent, FC} from "react"
import {useState} from 'react';
import priorityLow from '../../icons/priorityLow.svg'
import priorityMid from '../../icons/priorityMid.svg'
import priorityHigh from '../../icons/priorityHigh.svg'
import deadlineIcon from '../../icons/deadline.svg'
import addMember from '../../icons/addMember.svg'
import files from '../../icons/file.svg'
import { CardImportanceType, CardStatusType, CardTypeType } from "../../state/state";


type AddCardPropsType = {
    isModalVisible: boolean
    from: CardTypeType
    onClose: (from: CardTypeType) => void
    addCard: (type: CardTypeType, title: string, description: string, deadline: string, status: CardStatusType, priority:CardImportanceType, fileNumber: number) => void
}

export const AddCard: FC<AddCardPropsType> = ({isModalVisible, onClose, addCard, from}) => {
    const [priority, setPriority] = useState<CardImportanceType>('high')
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState<CardStatusType>('To Do')
    const [description, setDescription] = useState('')

    const current = new Date()
    const [date, setDate] = useState(`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`)
    const [fileNumber, setFileNumber] = useState(0)

    const [error, setError] = useState('')


    const close = () => {
        setPriority('high')
        setTitle('')
        setStatus('To Do')
        setDescription('')
        setDate(`${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate() + 1}`)
        setFileNumber(0)
        onClose("Upcoming")
        setError('')
    }

    const add = () => {
        const formatted = Intl.DateTimeFormat("en", {
            year: "numeric",
            day: "2-digit",
            month: "long",
          }).format(Date.parse(date));
        if (status === 'Done'){
            from = 'Completed'
        }
        if(title.trim() === '') {
            setError('Create task without title is impossible')
            return
        }
        addCard(from, title.trim(), description.trim(), formatted, status, priority, fileNumber)
        close()
    }

    const onChangePriorityHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        let prior: CardImportanceType = 'high'
        switch(e.currentTarget.value){
            case 'high':
                prior = 'high'
                break;
            case 'mid':
                prior = 'mid'
                break;
            case 'low':
                prior = 'low'
                break;                
        }
        setPriority(prior)
        }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError('')
    }

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

    const onChangeDescriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.currentTarget.value)

    const onChangeDeadlineHandler = (e: ChangeEvent<HTMLInputElement>) => setDate(e.currentTarget.value)

    const onChangeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length !== undefined){
            setFileNumber(e.currentTarget.files?.length)
        }
    }

    return(
        <div className={isModalVisible ? style.modal : style.none} onMouseDown={close}>
            <div className={style.content} onMouseDown={e => e.stopPropagation()}>
                <div className={style.header}>
                    <h3 className={style.title}>New task</h3>
                    <div className={style.crossContainer}>
                        <img src={addMember} className={style.cross} onClick={close}/>
                    </div>
                </div>
                <div className={`${style.body} ${cardStyle.container}`}>
                    <div className={cardStyle.headerContainer}>
                        <div className={style.priorityContainer}>
                            <img src={priority === 'high' ? priorityHigh : priority === 'mid' ? priorityMid : priorityLow}/> 
                            <select value={priority} className={style.priority} onChange={onChangePriorityHandler}>
                                <option value="high">High</option>
                                <option value="mid">Mid</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <input
                            type="text" 
                            value={title} 
                            placeholder="Title" 
                            className={`${cardStyle.name} ${style.titleInput} ${error ? style.error : ''}`} 
                            onChange={onChangeTitleHandler}/>
                        <div className={`${style.statusContainer} ${status === 'To Do' ? cardStyle.todo : status === 'Ongoing' ? cardStyle.ongoing : cardStyle.done}`}>
                            <select value={status} className={style.status} onChange={onChangeStatusHandler}>
                                <option value="To Do">To Do</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                    </div>
                    {error && <div className={style.errorMessage}>{error}</div>}
                    <textarea value={description} placeholder="Description" className={`${cardStyle.description} ${style.description}`} onChange={onChangeDescriptionHandler}/>
                    <div className={cardStyle.deadlineContainer}>
                        <img src={deadlineIcon}/>
                        <span className={cardStyle.deadlineText}>Deadline</span>: 
                        <input type="date" value={date} min={date} className={style.deadline} onChange={onChangeDeadlineHandler}/>
                    </div>
                    <div className={`${cardStyle.footerContainer} ${style.footerContainer}`}>
                        <div className={cardStyle.members}>
                            <div className={cardStyle.avatar}>
                                <img src={addMember}/>
                            </div>
                        </div>

                        <div className={cardStyle.add}>
                            <label className={`${cardStyle.addItem} ${style.addFile}`}>
                                <img src={files}/>
                                <input type="file" multiple onChange={onChangeFileHandler}/>
                                <span>+</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={style.footer}>
                    <button className={buttStyle.container} onClick={add}>Submit</button>
                </div>
            </div>
        </div>
    )
}