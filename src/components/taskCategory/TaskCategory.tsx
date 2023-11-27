import { FilterValuesType } from "../../state/state"
import style from "./TaskCategory.module.css"
import {FC} from "react"

type TaskPropsType = {
    setFilter: (value: FilterValuesType) => void
    filter: FilterValuesType
}

export const TaskCategory: FC<TaskPropsType> = ({ filter, setFilter}) => {
    const allTaskHandler = () => setFilter("All")
    const toDoTaskHandler = () => setFilter("To Do")
    const onGoingTaskHandler = () => setFilter("Ongoing")
    const doneTaskHandler = () => setFilter("Done")

    return( 
        <div className={style.taskCategory}>
            <div className={style.container} onClick={allTaskHandler}>
                <input className={style.input} type="radio" checked={filter === "All"} />
                <div className={style.indicator}/>
                <span className={style.text}>All</span>
            </div>
            <div className={style.container} onClick={toDoTaskHandler}>
                <input className={style.input} type="radio" checked={filter === "To Do"} />
                <div className={style.indicator}/>
                <span className={style.text}>To Do</span>
            </div>
                <div className={style.container} onClick={onGoingTaskHandler}>
                <input className={style.input} type="radio" checked={filter === "Ongoing"} />
                <div className={style.indicator}/>
                <span className={style.text}>Ongoing</span>
            </div>
            <div className={style.container} onClick={doneTaskHandler}>
                <input className={style.input} type="radio" checked={filter === "Done"} />
                <div className={style.indicator}/>
                <span className={style.text}>Done</span>
            </div>
        </div>
    );
}


