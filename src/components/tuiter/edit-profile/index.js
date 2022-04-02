import React from "react";
import {Link} from "react-router-dom";

import {useSelector} from "react-redux";
import EditProfileComponent from "./edit-profile-component";


const EditProfile = () => {

    const profile = useSelector(state => state.profile);

    return(
        <>
            {
                profile.map(profile => {
                    return (
                        <EditProfileComponent profile={profile}/>
                    );
                })
            }
        </>
    );
};
export default EditProfile;