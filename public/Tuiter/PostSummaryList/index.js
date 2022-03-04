import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = post => {

    return(`
        <ul>
           ${
        post.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }

        </ul>
    `);

}
export default PostSummaryList;