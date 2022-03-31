import React from "react";

import {useSelector} from "react-redux";
import WhoToFollowListItem from "../whotofollow/whotofollowlistitem";
import ProfileComponent from "./profile-component";

const Profile = () => {
    const profile = useSelector(state => state.profile);
    return(
        <>
            {
                profile.map(profile => {
                    return (
                        <ProfileComponent profile={profile}/>
                    );
                })
            }
        </>
    );
};
export default Profile;