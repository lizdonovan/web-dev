import React from "react";
import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";


const EditProfile = () => {

    const profile = useSelector(state => state.profile);

    const dispatch = useDispatch();

    const saveProfile = () => {
        dispatch({type: 'save-profile',
        profile: profile});
    }

    return(
        <>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <span className="float-start col">
                            <Link to="/tuiter/profile">
                                <i className="fa-solid fa-xmark"/>
                            </Link>
                        </span>

                        <h5 className="col">Edit Profile</h5>

                        <button className="col-2 float-end btn btn-outline-dark" onClick={saveProfile}>Save</button>
                    </div>
                </div>

            </div>
        </>
    );
};
export default EditProfile;