import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
        tuit: whatsHappening
        });
    }
    return (
        <>
            <div style={{marginBottom: '25px'}}>
                <textarea value={whatsHappening}
                          onChange={(event =>
                              setWhatsHappening(event.target.value))}
                          className="form-control"
                          placeholder="What's happening?">
            </textarea>

                <span>
                <a href="#"><i className="fas fa-image me-3"/></a>
                <a href="#"><i className="fas fa-analytics me-3"/></a>
                <a href="#"><i className="fas fa-smile me-3"/></a>
                <a href="#"><i className="fas fa-calendar me-3"/></a>
            </span>

                <button onClick={tuitClickHandler}
                        className="btn btn-primary btn-block fa-pull-right rounded-pill w-25 h-25">
                    Tuit
                </button>
            </div>
        </>

    ); }
export default WhatsHappening;