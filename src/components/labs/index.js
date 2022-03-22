import React from "react";
import {Link} from "react-router-dom";

import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todoitem";
import TodoList from "./todo/todolist";

const Labs = () => {
    return(
        <>
            <h1>Labs!</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>

            <h2>To Do List</h2>
            <TodoList/>
            <h2>Testing To Do Item</h2>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>

        </>
    )
};

export default Labs;