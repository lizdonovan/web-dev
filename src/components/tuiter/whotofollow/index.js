import React from "react";

import WhoToFollowListItem from "./whotofollowlistitem";


const WhoToFollowList = (who) => {
    return (
        <>
            <ul className={`list-group`}>
                <li className={`list-group-item bg-light`}>Who to follow</li>

                {
                who.map(who => {
                    return (
                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
            </ul>
        </>

    ); }
export default WhoToFollowList;