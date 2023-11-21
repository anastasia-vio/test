import style from "./Tab.module.css"
import {FC} from "react"

type TabPropsType = {
    type: string
    num: number
    checked: boolean
}

export const Tab: FC<TabPropsType> = ({type, num, checked}) => {
    return(
        <label className={style.container}>
            <input className={style.input} type="radio" name="tab"></input>
            <div className={`${style.textContainer} ${style.div}`}>
                {type}
                <div className={style.numberContainer}>
                    {num}
                </div>
            </div>
            <div className={style.add}>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M16.5003 2.6665C9.14033 2.6665 3.16699 8.63984 3.16699 15.9998C3.16699 23.3598 9.14033 29.3332 16.5003 29.3332C23.8603 29.3332 29.8337 23.3598 29.8337 15.9998C29.8337 8.63984 23.8603 2.6665 16.5003 2.6665ZM23.167 17.3332H17.8337V22.6665H15.167V17.3332H9.83366V14.6665H15.167V9.33317H17.8337V14.6665H23.167V17.3332Z" fill="#00B894"/>
                </svg>
            </div>
            <div className={style.indicator}/>
        </label>
    );
}