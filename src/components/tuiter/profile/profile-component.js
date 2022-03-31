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
                            <i className="fa-solid fa-location-dot"/>
                            {profile.location}
                        </div>

                        <div className="col">
                            <i className="fa-solid fa-cake-candles"/>
                            {profile.dateOfBirth}
                        </div>

                        <div className="col">
                            <i className="fa-solid fa-calendar-days"/>
                            Joined {profile.dateJoined}
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};
export default ProfileComponent;


