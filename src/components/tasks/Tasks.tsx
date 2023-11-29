import style from './Tasks.module.css'
import {FC} from "react"

import {Tab} from '../tab/Tab'
import { Card } from '../card/Card'
import { CardStatusType, CardType, CardTypeType } from '../../state/state'

type TasksPropsType = {
    type: CardTypeType
    checked: boolean
    tasks: Array<CardType>,
    onOpen: (from: CardTypeType) => void
    onComplete: (tid: string, newType: CardTypeType) => void
}

export const Tasks: FC<TasksPropsType> = ({type, checked, tasks, onOpen, onComplete}) => {

    const open = () => {
        onOpen(type)
    }

    return(
        <div className={style.container}>
            <Tab type={type} num={tasks.length} checked={checked} onOpen={open}/>
            {tasks.map((card: CardType) => {
                const onCompleteHandler = (newType: CardTypeType) => onComplete(card.id, newType)
                const onChangeSelectHandler = (newStatus: CardStatusType) => {
                    card.status = newStatus
                }

                return <Card key={card.id}
                    cardObj={card}
                    onComplete={onCompleteHandler}
                    onSelect={onChangeSelectHandler}
            />})}
        </div>
    );
}