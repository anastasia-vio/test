import style from './Tasks.module.css'
import {FC} from "react"

import {Tab} from '../tab/Tab'
import { Card } from '../card/Card'
import { CardType } from '../../state/state'

type TasksPropsType = {
    type: string
    checked: boolean
    tasks: Array<CardType>
}



export const Tasks: FC<TasksPropsType> = ({type, checked, tasks}) => {

    return(
        <div className={style.container}>
            <Tab type={type} num={tasks.length} checked={checked}/>
            {tasks.map((card: CardType) => 
            <Card key={card.id}
                name={card.name} 
                description={card.description}
                importance={card.importance}
                status={card.status}
                type={card.type}
                deadline={card.deadline}
                file={card.file}
                message={card.message}
            />)}
        </div>
    );
}