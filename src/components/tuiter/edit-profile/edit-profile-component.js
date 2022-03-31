import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const EditProfileComponent = ({profile}) => {
    const dispatch = useDispatch();

    const saveProfile = () => {
        dispatch({type: 'save-profile', profile});
    };
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

                    <img className="card-img-top" src={profile.bannerPicture}/>

                    <div className=" row col-3">
                        <img className="img-thumbnail rounded-circle float-start" src={profile.profilePicture} alt="profile pic" width="80"/>
                    </div>



                    <div className="row mb-4">
                        <label htmlFor="first">First Name</label>
                        <input type="text" id="name" placeholder={profile.firstName} onChange={(event => ({...profile, firstName: event.target.value}))}/>
                    </div>

                    <div className="row mb-4">
                        <label htmlFor="last">Last Name</label>
                        <input type="text" id="last" placeholder={profile.lastName} onChange={(event => ({...profile, lastName: event.target.value}))}/>
                    </div>

                    <div className="row mb-4">
                        <label htmlFor="bio">Bio</label>
                        <textarea id="bio"
                        placeholder={profile.bio}
                                  onChange={(event => ({...profile, bio: event.target.value}))}>
                        </textarea>
                    </div>

                    <div className="row mb-4">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" placeholder={profile.location}
                               onChange={(event => ({...profile, location: event.target.value}))}/>
                    </div>

                    <div className="row mb-4">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="text" id="dob" placeholder={profile.dateOfBirth}
                               onChange={(event => ({...profile, dateOfBirth: event.target.value}))}/>
                    </div>

                </div>

            </div>
        </>
    );
};
export default EditProfileComponent;


