import React from "react";

import posts from "./posts.json"
import PostItem from "./postitem";

const PostList = () => {

    return(
        <>
            <ul className="list-group">
                {
                    posts.map(posts => {
                        return(
                            <PostItem posts={posts}/>
                        );
                    })
                }
            </ul>
        </>

    );

}
export default PostList;