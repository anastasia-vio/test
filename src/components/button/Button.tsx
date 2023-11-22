import addTask from '../../icons/addTask.svg'

import style from "./Button.module.css"

export const Button = () =>{
    return (
        <div className={style.container}>
            <img src={addTask}/>   
            <span className={style.text}>
                New
            </span>
        </div>
    );
  }