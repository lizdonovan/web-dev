import React from "react";

import PostSummaryItem from "./postsummaryitem";
import posts from "./posts.json"

const PostSummaryList = () => {

    return(
        <>
            <ul>
                {
                posts.map(post => {
                    return(
                        <PostSummaryItem posts={posts}/>
                    );
                })
            }
            </ul>
        </>

    );

}
export default PostSummaryList;