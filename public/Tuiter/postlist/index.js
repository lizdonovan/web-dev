import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {

    return(`
        <ul>
           ${
        posts.map(posts => {
            return(PostItem(posts));
        }).join('')
    }

        </ul>
    `);

}
export default PostList;