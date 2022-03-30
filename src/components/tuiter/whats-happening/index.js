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
            <textarea value={whatsHappening}
                      onChange={(event =>
                      setWhatsHappening(event.target.value))}
                        className="form-control">
               What's happening?
            </textarea>
            <button onClick={tuitClickHandler}
            className="btn btn-primary btn-block rounded-pill w-25 h-25">
                Tuit
            </button>
        </>

    ); }
export default WhatsHappening;