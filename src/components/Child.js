import React, { useRef } from "react";

const Child = ({todos, handleComplete}) => {
    let btns = []

    for(let i=0; i<todos.length; i++){
        let btn = useRef(null)
        btns.push(btn)
    }

    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map((todo, ind) => {
                    return <li key={ind} style={{marginBottom: "10px"}}>{todo}&nbsp;<button ref={btns[ind]} onClick={() => handleComplete(btns[ind])}>Complete</button></li>
                })}
            </ul>
        </div>
    )
}

export default Child

