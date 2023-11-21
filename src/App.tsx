import style from './App.module.css';

import { Button } from './components/button/Button';
import { Card } from './components/card/Card';
import { Tab } from './components/tab/Tab';
import { TaskCategory } from './components/taskCategory/TaskCategory'
import { Tasks } from './components/tasks/Tasks';



export const App = () =>{

  

  return (
    <div className={style.app}>
      <div className={style.header}>
        <Button/>
        <div className={style.taskCategory}>
          <TaskCategory type='All' checked={true}/>
          <TaskCategory type='To Do' checked={false}/>
          <TaskCategory type='Ongoing' checked={true}/>
          <TaskCategory type='Done' checked={false}/>
        </div>
      </div>
      

      

      <div className={style.tasks}>
        <Tasks type="Today's tasks" num={5} checked={true}/>
        <Tasks type="Upcoming" num={3} checked={false}/>
        <Tasks type="Completed" num={2} checked={false}/>
      </div>
      

      


    </div>
  );
}


