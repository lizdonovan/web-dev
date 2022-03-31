import React from "react";

import NavigationSidebar from "../navigationsidebar";
import PostSummaryList from "../postsummarylist/index";
import PostItem from "../postlist";
import WhoToFollowList from "../whotofollow";

import TuitList from "../tuit-list";
import WhatsHappening from "../whats-happening";
import {Outlet} from "react-router-dom";


const HomeScreen = () => {
    return(
        <div>

            <div>
                <h3>Home</h3>
                <WhatsHappening/>
                <TuitList/>
            </div>

        </div>

    );
};
export default HomeScreen;