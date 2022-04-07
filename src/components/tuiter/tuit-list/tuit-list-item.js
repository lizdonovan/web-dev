import React from "react";
import TuitStats from "../tuit-stats";
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

                        <p><b>{tuit.userName}</b> @{tuit.postedBy.username} - {tuit.time}</p>
                        <p className="text-white">
                            {tuit.tuit}
                        </p>
                        <img src={tuit.image} alt="tuit image" width="50" className="w-100"/>

                        <TuitStats tuit={tuit}/>

                    </div>
                </div>
            </li>
        </>

    );
}
export default TuitListItem;