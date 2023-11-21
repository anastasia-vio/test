import style from "./TaskCategory.module.css"
import {FC} from "react"

type TaskPropsType = {
    type: string
    checked: boolean
}

export const TaskCategory: FC<TaskPropsType> = ({type, checked}) => {
    return(
        <label className={style.container}>
            <input className={style.input} type="radio" name="task"/>
            <div className={style.indicator}/>
            <span className={style.text}>{type}</span>
        </label>
    );
}