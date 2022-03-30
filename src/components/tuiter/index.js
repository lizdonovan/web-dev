import React from "react";
import {Outlet} from "react-router-dom";
import Explorescreen from "./explore-screen/explorescreen";
import HomeScreen from "./home-screen";

import NavigationSidebar from "./navigationsidebar";
import WhoToFollowList from "./whotofollow";

import whoReducer from "./reducers/who-reducer";
import tuitReducer from "./reducers/tuit-reducer";
import profileReducer from "./reducers/profile-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const reducer = combineReducers({
    tuits: tuitReducer, who: whoReducer, profile: profileReducer
});
const store = createStore(reducer);


const Tuiter = () => {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>


    )
};

export default Tuiter;