import React from "react";

import NavigationSidebar from "../navigationsidebar";
import PostSummaryList from "../postsummarylist/index";
import PostList from "../postlist";

const HomeScreen = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>

                </div>

                <div className="col-10 col-md-6">
                    <PostList/>

                </div>

                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList/>
                </div>
            </div>
        </>

    );
};
export default HomeScreen;