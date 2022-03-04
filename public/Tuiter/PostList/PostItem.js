const PostItem = (post) => {
    return(`
        <li>
            <div class="card bg-light border-white">
                    <div class="card-body">

                        <img src="${post.avatarIcon}" alt="image avatar" width="50" class="rounded-circle">
                        
                        <p><b>${post.userName}</b> @${post.handle} - ${post.time}</p>

                        <p class="text-white">
                            ${post.tuit}
                        </p>

                        <img scr="${post.imageQ}" alt="tuit image" width="50">

                    </div>
            </div>
        </li>
    `);
}
export default PostItem;