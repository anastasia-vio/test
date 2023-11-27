import addTask from '../../icons/addTask.svg'
import {FC} from "react"

import style from "./Button.module.css"
import { CardTypeType } from '../../state/state'

type ButtPropsType = {
    onOpen: (from: CardTypeType) => void
}

export const Button: FC<ButtPropsType> = ({onOpen}) =>{

    const open = () => {
        onOpen("Upcoming")
    }

    return (
        <div className={style.container} onClick={open}>
            <img src={addTask}/>
            New
        </div>
    );
  }