import React from "react";
import who from "./who.json"
import WhoToFollowListItem from "./whotofollowlistitem";


const WhoToFollowList = () => {
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