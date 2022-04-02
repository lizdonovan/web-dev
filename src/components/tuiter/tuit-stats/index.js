import React, {useState} from "react";
import {useDispatch} from "react-redux";

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
                        <i className="far fa-heart me-2"/>
                    }
                    {tuit.likes}
                </div>

                <div className="col">
                    <i className="far fa-share-from-square me-1"/>
                </div>

            </div>
        </>

    ); }
export default TuitStats;


