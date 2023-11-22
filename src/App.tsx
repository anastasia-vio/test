import {useState} from 'react';

import style from './App.module.css';

import { Button } from './components/button/Button';
import { TaskCategory } from './components/taskCategory/TaskCategory'
import { Tasks } from './components/tasks/Tasks';
import { CardPropsType } from './components/card/Card';



export type FilterValuesType = "All" | "To Do" | "Ongoing" | "Done"

export type CardImportanceType = "high" | "mid" | "low"
export type CardStatusType = "To Do" | "Ongoing" | "Done"
export type CardTypeType = "today" | "upcoming" | "completed"


export const App = () =>{

  let allTasks: CardPropsType[] = [{
    name: "Project X dashboard UI design",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "high",
    status: "Ongoing",
    type: "today",
    deadline: "11th - 15th Aug, 2023",
    file: 2,
    message: 3
  },
  
  {
    name: "Project X dashboard UI prototype",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "mid",
    status: "To Do",
    type: "today",
    deadline: "11th - 15th Aug, 2023",
    file: 2,
    message: 3
  },

  {
    name: "Project X product  documentation",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "high",
    status: "Ongoing",
    type: "today",
    deadline: "11th - 15th Aug, 2023",
    file: 2,
    message: 3
  },

  {
    name: "Project X dashboard UI prototype",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "mid",
    status: "To Do",
    type: "upcoming",
    deadline: "11th - 15th Aug, 2023",
    file: 2,
    message: 3
  },

  {
    name: "Project X dashboard UI prototype",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "mid",
    status: "To Do",
    type: "upcoming",
    deadline: "11th - 15th Aug, 2023",
    file: 2,
    message: 3
  },
  
  {
    name: "Project X product research",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "low",
    status: "Done",
    type: "completed",
    deadline: "11th - 15th Aug, 2023",
    file: 2,
    message: 3
  },

  {
    name: "Project X product research",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "low",
    status: "Done",
    type: "completed",
    deadline: "11th - 15th Aug, 2023",
    file: 2,
    message: 3
  },

  {
    name: "Project X product research",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "low",
    status: "Done",
    type: "completed",
    deadline: "11th - 15th Aug, 2023",
    file: 2,
    message: 3
  },

  {
    name: "Project X product research",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "low",
    status: "Done",
    type: "completed",
    deadline: "11th - 15th Aug, 2023",
    file: 2,
    message: 3
  }
]


let tasks = [];
  
let [filter, setFilter] = useState<FilterValuesType>("All")

switch(filter){
  case "To Do":
    tasks = allTasks.filter(t => t.status === "To Do");
    break;
  case "Ongoing":
    tasks = allTasks.filter(t => t.status === "Ongoing");
    break;
  case "Done":
    tasks = allTasks.filter(t => t.status === "Done");
    break;
  default:
    tasks = allTasks;
}

function filterTasks(value: FilterValuesType){
  setFilter(value);
}

  return (
    <div className={style.app}>
      <div className={style.header}>
        <Button/>
        <div className={style.taskCategory}>
          <TaskCategory filter='All' filterTasks={filterTasks} checked={filter === 'All'}/>
          <TaskCategory filter='To Do' filterTasks={filterTasks} checked={filter === 'To Do'}/>
          <TaskCategory filter='Ongoing' filterTasks={filterTasks} checked={filter === 'Ongoing'}/>
          <TaskCategory filter='Done'filterTasks={filterTasks} checked={filter === 'Done'}/>
        </div>
      </div>
      

      

      <div className={style.tasks}>
        <Tasks type="Today's tasks" num={tasks.filter(t => t.type === "today").length} checked={true} tasks={tasks.filter(t => t.type === "today")}/>
        <Tasks type="Upcoming" num={tasks.filter(t => t.type === "upcoming").length} checked={false} tasks={tasks.filter(t => t.type === "upcoming")}/>
        <Tasks type="Completed" num={tasks.filter(t => t.type === "completed").length} checked={false} tasks={tasks.filter(t => t.type === "completed")}/>
      </div>
      

      


    </div>
  );
}


