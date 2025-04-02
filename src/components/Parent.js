import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [todos, setTodos] = useState(["Learn Javascript", "Learn React", "Build a React App", "Deploy the React App"])
    
    function handleComplete(btn){
        btn.current.style.display = "none"
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <Child todos={todos} handleComplete={handleComplete} />
        </div>
    )
}

export default Parent