import {useState} from 'react';
import {v1} from 'uuid'
import style from './App.module.css';
import { Button } from './components/button/Button'
import { TaskCategory } from './components/taskCategory/TaskCategory'
import { Tasks } from './components/tasks/Tasks';
import { CardType, CardTypeType, FilterValuesType, TaskType, allTasks, taskType } from './state/state';
import { AddCard } from './components/addCard/AddCard';

export const App = () =>{

  const [tasks, setTasks] = useState<Array<CardType>>(allTasks)

  let filteredTasks: Array<CardType> = []
    
  const [filter, setFilter] = useState<FilterValuesType>("All")

  switch(filter){
    case "To Do":
      filteredTasks = tasks.filter(t => t.status === "To Do");
      break;
    case "Ongoing":
      filteredTasks = tasks.filter(t => t.status === "Ongoing");
      break;
    case "Done":
      filteredTasks = tasks.filter(t => t.status === "Done");
      break;
    default:
      filteredTasks = tasks;
  }

  const [isModalVisible, setModalVisiblity] = useState(false)
  const [newCardFrom, setNewCardFrom] = useState<CardTypeType>("Upcoming")

  function changeModalState(from: CardTypeType){
    setModalVisiblity(!isModalVisible)
    setNewCardFrom(from)
  }

  function addCard(type: CardTypeType, title: string, description: string, deadline: string){
    const newCard: CardType = {
      id: v1(),
      name: title,
      description: description,
      importance: "high",
      status: "Ongoing",
      type: type,
      deadline: deadline,
      file: 0,
      message: 0
    }
    const newTasks = [newCard, ...filteredTasks]
    setTasks(newTasks);
  }

  return (
    <div className={style.app}>
      <AddCard isModalVisible={isModalVisible} from={newCardFrom} onClose={changeModalState} addCard={addCard}/>
      <div className={style.header}>
        <Button onOpen={changeModalState}/>
        <TaskCategory setFilter={setFilter} filter={filter}/>
      </div>
      <div className={style.tasks}>
        {taskType.map((tt: TaskType, index) => {
            const tasks = filteredTasks.filter(t => t.type === tt.filterParameter)
            return (
              <Tasks key={index}
              type={tt.type}
              checked={tt.checked}
              tasks={tasks}
              onOpen={changeModalState}
            />
            )})}
      </div>
    </div>
  );
}


