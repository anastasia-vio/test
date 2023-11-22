import style from './Tasks.module.css'
import {FC} from "react"

import {Tab} from '../tab/Tab'
import { Card, CardPropsType } from '../card/Card'
import { CardImportanceType, CardStatusType, CardTypeType } from '../../App'

type TasksPropsType = {
    type: string
    num: number
    checked: boolean
    tasks: Array<CardPropsType>
}



export const Tasks: FC<TasksPropsType> = ({type, num, checked, tasks}) => {


    return(
        <div className={style.container}>
            <Tab type={type} num={num} checked={checked}/>
            {tasks.map((card: CardPropsType) =>  <Card name={card.name} 
                                              description={card.description}
                                              importance={card.importance}
                                              status={card.status}
                                              type={card.type}
                                              deadline={card.deadline}
                                              file={card.file}
                                              message={card.message}/>)}
        </div>
    );
}