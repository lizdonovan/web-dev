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
                <span className="col">
                    <i className="far fa-comment me-1"/>
                    23
                </span>

                <span className="col">
                    <i className="far fa-retweet me-1"/>
                    98
                </span>

                <span onClick={likeTuit}
                      className="col">
                {
                tuit.liked &&
                <i className="fas fa-heart me-1"
                   style={{color: 'red'}}/>
                }
                    {
                        !tuit.liked &&
                        <i className="far fa-heart me-1"/>
                    }
                    {tuit.stats && tuit.stats.likes}
            </span>

                <span className="col">
                    <i className="far fa-share-from-square me-1"/>
                </span>
            </div>
        </>

    ); }
export default TuitStats;


