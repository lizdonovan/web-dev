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
                    {tuit.comments}
                </span>

                <span className="col">
                    <i className="fa fa-retweet me-1"/>
                    {tuit.retuits}
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
                    {tuit.likes}
            </span>

                <span className="col">
                    <i className="far fa-share-from-square me-1"/>
                </span>
            </div>
        </>

    ); }
export default TuitStats;


