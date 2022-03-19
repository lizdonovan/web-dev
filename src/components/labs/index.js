import React from "react";
import {Link} from "react-router-dom";

import Classes from "./classes";

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

            <Classes/>

        </>
    )
};

export default Labs;