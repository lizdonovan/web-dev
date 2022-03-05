import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {

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