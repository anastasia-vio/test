import style from "./AddCard.module.css"
import cardStyle from '../card/Card.module.css'
import buttStyle from '../button/Button.module.css'
import {FC} from "react"
import {useState} from 'react';

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

type AddPropsType = {
    isModalVisible: boolean
    onClose: () => void
    addCard: (title: string) => void
}

export const AddCard: FC<AddPropsType> = ({isModalVisible, onClose, addCard}) => {

    const [title, setTitle] = useState('')

    const close = () => {
        setTitle('')
        onClose()
    }

    const add = () => {
        addCard(title)
        close()
    }

    return(
        <div  className={isModalVisible ? style.modal : style.none} onClick={close}>
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
                        <input type="text" value={title} placeholder="Title" className={`${cardStyle.name} ${style.titleInput}`} onChange={(e) => {
                                
                                setTitle(e.currentTarget.value)
                            }} />
                        <div className={`${style.statusContainer} ${cardStyle.todo}`}>
                            <select className={style.status}>
                                <option>To Do</option>
                                <option>Ongoing</option>
                                <option>Done</option>
                            </select>
                        </div>
                    </div>
                    <textarea placeholder="Description" className={`${cardStyle.description} ${style.description}`}/>

                    <div className={cardStyle.deadlineContainer}>
                        <img src={deadlineIcon}/>
                        <span className={cardStyle.deadlineText}>Deadline</span>: 
                        <input type="date" className={style.deadline}/>
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