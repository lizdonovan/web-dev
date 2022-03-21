import React from "react";

const WhoToFollowListItem = (
    {
       who = {
           avatarIcon:'../../../images/nasa.jpg',
           userName:'NASA',
           handle:'NASA',
       }
    }) => {

    return(
        <>
            <li className={`list-group-item bg-light`}>
                <div className={`d-flex flex-row justify-content-between`}>
                    <img src={`{who.avatarIcon}" alt="avatar icon" width="50" className="rounded-circle `}/>
                        <p>
                            {who.userName} <br/>
                            @{who.handle}
                        </p>
                        <button className={`btn btn-primary btn-block rounded-pill w-25 h-25`}>Follow</button>
                </div>
            </li>
        </>
    );
}
export default WhoToFollowListItem;