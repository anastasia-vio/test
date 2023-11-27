import style from './Tasks.module.css'
import {FC} from "react"

import {Tab} from '../tab/Tab'
import { Card } from '../card/Card'
import { CardType, CardTypeType } from '../../state/state'

type TasksPropsType = {
    type: CardTypeType
    checked: boolean
    tasks: Array<CardType>,
    onOpen: (from: CardTypeType) => void
}

export const Tasks: FC<TasksPropsType> = ({type, checked, tasks, onOpen}) => {

    const open = () => {
        onOpen(type)
    }

    return(
        <div className={style.container}>
            <Tab type={type} num={tasks.length} checked={checked} onOpen={open}/>
            {tasks.map((card: CardType) => 
            <Card key={card.id}
                name={card.name} 
                description={card.description}
                importance={card.importance}
                stat={card.status}
                type={card.type}
                deadline={card.deadline}
                file={card.file}
                message={card.message}
            />)}
        </div>
    );
}