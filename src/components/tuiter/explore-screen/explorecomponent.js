import React from "react";

import PostSummaryList from "../postsummarylist";

const ExploreComponent = () => {
    return(
        <>
            <div className={`d-flex `}>
                <span><i className={`fa-solid fa-magnifying-glass`}/></span>
                <input  id="search" type="text" placeholder="Search Tuiter" className="w-75 border-right-0 mb-2 wd-border-radius" />
                <i className="fa-solid fa-gear m-2"></i>
            </div>


            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item"><a className="nav-link bg-transparent active" href="">For you</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="">Trending</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="">News</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="">Sports</a></li>
                <li className="nav-item d-sm-none d-md-block"><a className="nav-link d-sm-none d-md-block text-white" href="">Entertainment</a></li>
            </ul>

            <ul>
                {PostSummaryList()}
            </ul>

        </>

    );
}
export default ExploreComponent;