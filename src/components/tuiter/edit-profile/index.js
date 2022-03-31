import React from "react";
import {Link} from "react-router-dom";


const EditProfile = () => {
    return(
        <>
            <div className="card">
                <div className="card-body row">
                    <span className="float-start">
                        <Link to="/tuiter/profile">
                            <i className="fa-solid fa-xmark"/>
                        </Link>
                    </span>
                </div>

            </div>
        </>
    );
};
export default EditProfile;