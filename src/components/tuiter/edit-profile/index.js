import React from "react";

import {useSelector} from "react-redux";
import EditProfileComponent from "./edit-component";

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