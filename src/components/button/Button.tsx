import addTask from '../../icons/addTask.svg'
import {FC} from "react"

import style from "./Button.module.css"

type ButtPropsType = {
    onOpen: () => void
}

export const Button: FC<ButtPropsType> = ({onOpen}) =>{
    return (
        <div className={style.container} onClick={onOpen}>
            <img src={addTask}/>
            New
        </div>
    );
  }