import React, {useState} from "react";
import {createTuit}
    from "../../../actions/tuits-actions";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {

    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    return (
        <>
            <div style={{marginBottom: '25px'}}>
                    <textarea className="form-control w-75"
                                placeholder="What's happening?"
                                onChange={(e) =>
                                setNewTuit({...newTuit,
                                tuit: e.target.value})}/>

                <span>
                <a href="#"><i className="fas fa-image me-3"/></a>
                <a href="#"><i className="fas fa-analytics me-3"/></a>
                <a href="#"><i className="fas fa-smile me-3"/></a>
                <a href="#"><i className="fas fa-calendar me-3"/></a>
            </span>

                <button onClick={() =>
                    createTuit(dispatch, newTuit)}
                        className="btn btn-primary float-end">
                    Tuit
                </button>
            </div>
        </>

    ); }
export default WhatsHappening;