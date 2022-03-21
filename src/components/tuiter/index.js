import React from "react";
import {Link} from "react-router-dom";

import Explorescreen from "./explore-screen/explorescreen";

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter!</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>

            <Explorescreen/>

        </>

    )
};

export default Tuiter;