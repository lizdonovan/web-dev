import React from "react";

const ProfileComponent = ({profile}) => {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{profile.firstName} {profile.lastName}</h5>
                    <h6 className="card-subtitle">23423 Tuits</h6>

                    <img className="card-img-top" src={profile.bannerPicture}/>

                    <div className="row col-3">
                        <img className="img-thumbnail rounded-circle float-start" src={profile.profilePicture} alt="profile pic" width="80"/>
                    </div>

                    <p>
                        {profile.firstName} {profile.lastName} |
                        @{profile.handle}
                    </p>

                    <p className="card-text">
                        {profile.bio}
                    </p>

                    <div className="row">
                        <div className="col">
                            <span className="pr-4">
                                <i className="fa-solid fa-location-dot p-1"/>
                                {profile.location}
                            </span>

                            <span className="pr-4">
                                <i className="fa-solid fa-cake-candles p-1"/>
                                {profile.dateOfBirth}
                            </span>

                            <span className="pr-4">
                                <i className="fa-solid fa-calendar-days p-1"/>
                                Joined {profile.dateJoined}
                            </span>

                        </div>

                    </div>

                    <p className="m-2">
                        <span className="mr-2"><b>{profile.followingCount}</b> Following</span>
                        <span><b>{profile.followersCount}</b> Followers</span>
                    </p>

                </div>
            </div>
        </>
    );
};
export default ProfileComponent;


