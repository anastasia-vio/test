import { useState, FC, ChangeEvent } from "react"
import { FieldType } from "../../state/state"

import styleCard from "../card/Card.module.css"
import style from "./EditableSpan.module.css"

type EditableSpanProps = {
    oldText: string
    field: FieldType
    onChange: (newText: string, field: FieldType) => void
}

export const EditableSpan: FC<EditableSpanProps> = ({oldText, field, onChange}) => {

    const [editMode, setEditMode] = useState(false)
    const [text, setText] = useState('')

    const activateEditMode = () => {
        setEditMode(true)
        setText(oldText)
    }

    const activateViewMode = () => {
        setEditMode(false)
        onChange(text, field)
    }

    const onChangeTextHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setText(e.currentTarget.value)

    return editMode ?
            field === 'name' ?
                <input type="text" value={text} 
                    className={`${styleCard.name} ${style.name}`}  
                    onChange={onChangeTextHandler} 
                    onBlur={activateViewMode} autoFocus/> :
                <textarea value={text} rows={5}
                    className={`${styleCard.description} ${style.description}`}
                    onChange={onChangeTextHandler} 
                    onBlur={activateViewMode} autoFocus/> :
        <span 
            className={`${field === 'name' ? styleCard.name : styleCard.description}`} 
            onDoubleClick={activateEditMode}>
            {oldText}
        </span>
}