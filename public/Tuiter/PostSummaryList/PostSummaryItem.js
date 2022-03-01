const PostSummaryItem = (post) => {

    let htmlPost = "{" + post.topic + post.userName + post.time + post.image + post.title + "}";
    return htmlPost;
}