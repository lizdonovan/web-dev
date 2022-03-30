import React from "react";

import NavigationSidebar from "../navigationsidebar";
import PostSummaryList from "../postsummarylist/index";
import PostItem from "../postlist";
import WhoToFollowList from "../whotofollow";

import TuitList from "../tuit-list";
import WhatsHappening from "../whats-happening";


const HomeScreen = () => {
    return(
        <div>
            <h2>Home</h2>
            <WhatsHappening/>
            <TuitList/>
        </div>

    );
};
export default HomeScreen;