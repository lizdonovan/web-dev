const PostSummaryItem = (post) => {
    return(`
        <li>
            <div class="card bg-transparent border-white">
                    <div class="card-body">

                        <img src="images/jquery.png" alt="react js logo" width="100" class="float-end">

                        <p class="text-white">${post.topic}</p>
                        <p class="fw-bold text-white">${post.userName} - ${post.time}</p>
                        <p class="fw-bold text-white">
                            ${post.title}
                        </p>

                    </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;