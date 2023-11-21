import style from './Tasks.module.css'
import {FC} from "react"

import {Tab} from '../tab/Tab'
import { Card } from '../card/Card'

type TasksPropsType = {
    type: string
    num: number
    checked: boolean
}

type CardType = {
    name: string
    description: string
    importance: string
    status: string
    deadline: string
    file: number
    message: number
  }

export const Tasks: FC<TasksPropsType> = ({type, num, checked}) => {

    const cards = [{
        name: "ProjectX dashboard UI design",
        description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
        importance: "high",
        status: "To Do",
        deadline: "11th - 15th Aug, 2023",
        file: 2,
        message: 3
    },
    {
      name: "ProjectX dashboard UI design",
      description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
      importance: "high",
      status: "To Do",
      deadline: "11th - 15th Aug, 2023",
      file: 2,
      message: 3
  },
  {
    name: "ProjectX dashboard UI design",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "high",
    status: "To Do",
    deadline: "11th - 15th Aug, 2023",
    file: 2,
    message: 3
  }]

    return(
        <div className={style.container}>
            <Tab type={type} num={num} checked={checked}/>
            {cards.map((card: CardType) =>  <Card name={card.name} 
                                            description={card.description}
                                            importance={card.importance}
                                            status={card.status}
                                            deadline={card.deadline}
                                            file={card.file}
                                            message={card.message}/>)}
        </div>
    );
}