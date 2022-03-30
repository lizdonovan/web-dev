import React from "react";
import {useDispatch} from "react-redux";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
      dispatch({type: 'delete-tuit', tuit})
    };
    return(

        <>
            <li>
                <div className="card bg-light border-white">
                    <div className="card-body">
                        <i onClick={() =>
                        deleteTuit(tuit)}
                        className="fas fa-remove fa-2x fa-pull-right"/>
                        <img src={tuit.avatarIcon} alt="image avatar" width="50" className="rounded-circle"/>

                        <p><b>{tuit.userName}</b> @{tuit.handle} - {tuit.time}</p>
                        <p className="text-white">
                            {tuit.tuit}
                        </p>
                        <img src={tuit.image} alt="tuit image" width="50" className="w-100"/>

                        <div className="justify-content-between">
                            <i className="fa-regular fa-comment"/> 345
                            <i className="fa-regular fa-retweet"/> 333
                            <i className="fa-regular fa-heart"/> 888
                            <i className="fa-regular fa-share-from-square"/>

                        </div>
                    </div>
                </div>
            </li>
        </>

    );
}
export default TuitListItem;