const WhoToFollowListItem = who => {

    return(`
          <li class="list-group-item bg-light">
                        <div class="d-flex flex-row justify-content-between">
                            <img src="${who.avatarIcon}" alt="avatar icon" width="50" class="rounded-circle ">
                            <p class="text-white ">
                                ${who.userName} <br>
                                @${who.handle}
                            </p>
                            <button class="btn btn-primary btn-block rounded-pill w-25 h-25">Follow</button>
                        </div>
                    </li>  
    `);
}
export default WhoToFollowListItem;
