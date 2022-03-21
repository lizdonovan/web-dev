import React from "react";
import {Link} from "react-router-dom";

import NavigationSidebar from "./navigationsidebar";
import WhoToFollowList from "./whotofollow";
import PostSummaryList from "./postsummarylist";

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
            <PostSummaryList/>

        </>

    )
};

export default Tuiter;