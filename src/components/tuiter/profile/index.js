import React from "react";

import {useSelector} from "react-redux";

const Profile = () => {
    const profile = useSelector(state => state.profile);
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">profile.firstName</h3>
                    <h4 className="card-subtitle">23423 Tuits</h4>

                    <p className="card-text">Some quick example text to build
                        on the card title and make up the bulk of the card's content
                    </p>

                </div>
            </div>
        </>
    );
};
export default Profile;