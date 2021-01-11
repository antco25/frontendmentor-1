import { ChangeEvent, useState } from 'react'
import './Input.scss';
import iconError from './icon-error.svg'

type InputType = "text" | "submit";

type InputProps = {
    id?: number,
    type?: InputType,
    value?: string,
    isError?: boolean,
    errorMessage?: string,
    onChange?: (e : ChangeEvent<HTMLInputElement>, id: number) => any
}

const Input = ({ id, type, value, isError, errorMessage, onChange}: InputProps) => {

    const [focused, setFocused] = useState(false)

    const onFocus = () => {
        setFocused(true)
    }

    const onBlur = () => {
        setFocused(false)
    }

    if (type === "submit")
        return (
            <div className="input">
                <input type="submit" value={value} />
            </div>
        )

    const wrapperClass = "input-wrapper" + (focused ? " input-focus" : "") + (isError ? " input-error" : "")
    const _onChange = ((onChange != undefined && id != undefined) ? (e : ChangeEvent<HTMLInputElement>) => onChange(e, id) : undefined)

    return (
        <div className="input">
            <div className={wrapperClass}>
                <input type="text" placeholder={value} onFocus={onFocus} onBlur={onBlur} onChange={_onChange} />
                {isError ? <img src={iconError} /> : null}
            </div>
            {isError && errorMessage ? <p>{errorMessage}</p> : null}
        </div>
    )
}

export default Input;