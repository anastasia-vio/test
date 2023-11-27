import addToTab from '../../icons/addToTab.svg'
import { CardTypeType } from '../../state/state'

import style from "./Tab.module.css"
import {FC} from "react"

type TabPropsType = {
    type: CardTypeType
    num: number
    checked: boolean,
    onOpen: (from: CardTypeType) => void
}

export const Tab: FC<TabPropsType> = ({type, num, checked, onOpen}) => {

    const open = () => {
        onOpen(type)
    }

    return(
        <label className={style.container}>
            <input className={style.input} type="radio" name="tab"></input>
            <div className={`${style.textContainer} ${style.div}`}>
                {type}
                <div className={style.numberContainer}>
                    {num}
                </div>
            </div>
            <div className={type !== 'Completed' ? style.add : style.indicator}>
                <img src={addToTab} onClick={open}/>
            </div>
            <div className={style.indicator}/>
        </label>
    );
}