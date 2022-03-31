import React from "react";

import TuitList from "../tuit-list";
import WhatsHappening from "../whats-happening";

const HomeScreen = () => {
    return(
        <>
            <div>
                <h3>Home</h3>
                <WhatsHappening/>
                <TuitList/>
            </div>

        </>


    );
};
export default HomeScreen;