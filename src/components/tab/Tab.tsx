import addToTab from '../../icons/addToTab.svg'

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
                <img src={addToTab}/>
            </div>
            <div className={style.indicator}/>
        </label>
    );
}