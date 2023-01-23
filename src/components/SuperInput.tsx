import React, {ChangeEvent} from "react";

type PropsType = {
    setNewTitle: (newTitle: string) => void
    newTitle: string
}


export const SuperInput = (props: PropsType) => {


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input value={props.newTitle} onChange={onChangeHandler}/>
        </div>
    )
}