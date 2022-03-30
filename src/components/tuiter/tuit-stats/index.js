import React, {useState} from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return (
        <>
            <span>
                <i className="far fa-comment me-1"/>
            </span>

            <span>
                <i className="far fa-retweet me-1"/>
            </span>

            <span onClick={likeTuit}>
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

            <span>
                <i className="far fa-share-from-square me-1"/>
            </span>
        </>

    ); }
export default TuitStats;


