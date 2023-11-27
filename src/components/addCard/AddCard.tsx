import style from "./AddCard.module.css"
import cardStyle from '../card/Card.module.css'
import buttStyle from '../button/Button.module.css'
import {ChangeEvent, FC} from "react"
import {useState} from 'react';
import priorityLow from '../../icons/priorityLow.svg'
import deadlineIcon from '../../icons/deadline.svg'
import addMember from '../../icons/addMember.svg'
import files from '../../icons/file.svg'
import { CardTypeType } from "../../state/state";


type AddCardPropsType = {
    isModalVisible: boolean
    from: CardTypeType
    onClose: (from: CardTypeType) => void
    addCard: (type: CardTypeType, title: string, description: string, deadline: string) => void
}

export const AddCard: FC<AddCardPropsType> = ({isModalVisible, onClose, addCard, from}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const current = new Date()
    const [date, setDate] = useState(`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`)


    const close = () => {
        setTitle('')
        setDescription('')
        setDate(`${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate() + 1}`)
        onClose("Upcoming")
    }

    const add = () => {
        const formatted = Intl.DateTimeFormat("en", {
            year: "numeric",
            day: "2-digit",
            month: "long",
          }).format(Date.parse(date));
        addCard(from, title, description, formatted)
        close()
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onChangeDescriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.currentTarget.value)
    }

    const onChangeDeadlineHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.currentTarget.value)
    }

    return(
        <div className={isModalVisible ? style.modal : style.none} onClick={close}>
            <div className={style.content} onClick={e => e.stopPropagation()}>
                <div className={style.header}>
                    <h3 className={style.title}>New task</h3>
                    <div className={style.crossContainer}>
                        <img src={addMember} className={style.cross} onClick={close}/>
                    </div>
                </div>
                <div className={`${style.body} ${cardStyle.container}`}>
                    <div className={cardStyle.headerContainer}>
                        <div className={style.priorityContainer}>
                            <img src={priorityLow}/> 
                            <select className={style.priority}>
                                <option className={style.option}>Low</option>
                                <option className={style.option}>Mid</option>
                                <option className={style.option}>High</option>
                            </select>
                        </div>
                        <input
                        type="text" 
                        value={title} 
                        placeholder="Title" 
                        className={`${cardStyle.name} ${style.titleInput}`} 
                        onChange={onChangeTitleHandler}/>
                        <div className={`${style.statusContainer} ${cardStyle.todo}`}>
                            <select className={style.status}>
                                <option>To Do</option>
                                <option>Ongoing</option>
                                <option>Done</option>
                            </select>
                        </div>
                    </div>
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
                            <div className={cardStyle.addItem}>
                                <img src={files}/>
                                <label className={style.addFile}>
                                    <input type="file" multiple/>
                                    <span>+</span>
                                </label>
                            </div>
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