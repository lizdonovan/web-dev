import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {

    return(
        <>
            <div className="list-group">

                <a className={`list-group-item fg-color-white {active === 'tuiter' ? 'active' : ''}`} href="/">
                    <i className={`fab fa-twitter`}/></a>


                <a id="home" className={`list-group-item fg-color-white {active === 'home' ? 'active' : ''}`}
                   href={`../homescreen/home.html`}>
                    <i className={`fa-solid fa-house`}/>Home</a>

                <a id="explore" className={`list-group-item fg-color-white {active === 'explore' ? 'active' : ''}`}
                   href={`../explorescreen/explore.html`}>
                    <i className={`fa-solid fa-hashtag`}/>Explore</a>

                <a className={`list-group-item fg-color-white {active === 'notifications' ? 'active' : ''}`} href="">
                    <i className={`fa-solid fa-bell`}/>Notifications</a>

                <a className={`list-group-item fg-color-white {active === 'messages' ? 'active' : ''}`} href="">
                    <i className={`fa-solid fa-envelope`}/>Messages</a>

                <a className={`list-group-item fg-color-white {active === 'bookmarks' ? 'active' : ''}`} href="">
                    <i className={`fa-solid fa-bookmark`}/>Bookmarks</a>

                <a className={`list-group-item fg-color-white {active === 'lists' ? 'active' : ''}`} href="">
                    <i className={`fa-solid fa-list`}/>Lists</a>

                <a className={`list-group-item fg-color-white {active === 'profile' ? 'active' : ''}`} href="">
                    <i className={`fa-solid fa-user`}/>Profile</a>

                <a className={`list-group-item fg-color-white {active === 'more' ? 'active' : ''}`} href="">
                    <i className={`fa-solid fa-ellipsis`}/>More</a>
            </div>
            <div className={`d-grid mt-2`}>
                <a href="" className={`btn btn-primary btn-block rounded-pill w-100`}>Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;