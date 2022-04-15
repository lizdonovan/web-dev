import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {updateTuit}
    from "../../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return (
        <>
            <div className="row mt-2">
                <div className="col">
                    <i className="far fa-comment me-1"/>
                    {tuit.comments}
                </div>

                <div className="col">
                    <i className="fa fa-retweet me-1"/>
                    {tuit.retuits}
                </div>

                <div className="col" onClick={likeTuit}>
                    {
                        tuit.liked &&
                        <i className="fas fa-heart me-2"
                           style={{color: tuit.liked ? 'red' : "white"}}/>
                    }
                    {
                        !tuit.liked &&
                        <i className="far fa-heart me-2"
                           style={{color: !tuit.liked ? "white" : "red"}}/>
                    }
                    {tuit.likes}
                    <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        likes: tuit.likes + 1
                        })} className="far fa-thumbs-up ms-2"/>

                </div>

                <div className="col">
                    <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        likes: tuit.likes - 1,
                        dislikes: tuit.dislikes + 1
                    })} className="fa-solid fa-thumbs-down"/>
                </div>

                <div className="col">
                    <i className="far fa-share-from-square me-1"/>
                </div>

            </div>
        </>

    ); }
export default TuitStats;


