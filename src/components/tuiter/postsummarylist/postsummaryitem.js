const PostSummaryItem = (
    {
       post = {
           "topic": "Web Development",
           "userName": "ReactJS",
           "time": "2h",
           "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
           "image": "../../../images/react.jpg"
       }
    }) => {
    return(
        <>
            <li className={'list-group-item border-white mb-3'}>
                <div className={`card bg-light `}>
                    <div className={`card-body`}>
                        <img src={post.image} alt="logo" width="100" className={`float-end`}/>
                            <p className={'text-white'}>{post.topic}</p>
                            <p className={`fw-bold text-white`}>{post.userName} - {post.time}</p>
                            <p className={`fw-bold text-white`}>
                                {post.title}
                            </p>
                    </div>
                </div>
            </li>
        </>
    );
}
export default PostSummaryItem;