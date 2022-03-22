import React from "react";

const PostItem = (
    {
        post = {
            "avatarIcon": "../../images/elon.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "tuit": "Amazing show about @Inspiration4x mission!",
            "imageQ": "../../images/mission.jpg"
        }

    }) => {
    return(

        <>
            <li>
                <div className="card bg-light border-white">
                    <div className="card-body">
                        <img src={post.avatarIcon} alt="image avatar" width="50" className="rounded-circle"/>

                            <p><b>{post.userName}</b> @{post.handle} - {post.time}</p>
                            <p className="text-white">
                                {post.tuit}
                            </p>
                            <img src={post.imageQ} alt="tuit image" width="50" className="w-100"/>

                                <div className="justify-content-between">
                                    <i className="fa-regular fa-comment"/> 345
                                    <i className="fa-regular fa-retweet"/> 333
                                    <i className="fa-regular fa-heart"/> 888
                                    <i className="fa-regular fa-share-from-square"/>

                                </div>
                    </div>
                </div>
            </li>
        </>

    );
}
export default PostItem;