import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item bg-light">Who to follow</li>
            <!-- continue here -->
            ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
            </ul>
`); }
export default WhoToFollowList;