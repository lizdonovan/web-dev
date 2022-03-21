import React from "react";
import {Link} from "react-router-dom";

import NavigationSidebar from "./navigationsidebar";
import WhoToFollowList from "./whotofollow";

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

            <NavigationSidebar active="home"/>
            <WhoToFollowList/>

        </>

    )
};

export default Tuiter;