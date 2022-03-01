import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
           <div class="row">
                       <!-- search field and cog -->
                       <span><i class="fa-solid fa-magnifying-glass"></i></span>
                       <input class="w-75 border-right-0 mb-2 wd-border-radius" id="search" type="text" placeholder="Search Tuiter"/>
           </div>
           <ul class="nav mb-2 nav-tabs">
                    <!-- tabs -->
                    <li class="nav-item"><a class="nav-link bg-transparent active" href="">For you</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="">Trending</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="">News</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="">Sports</a></li>
                    <li class="nav-item d-sm-none d-md-block"><a class="nav-link d-sm-none d-md-block text-white" href="">Entertainment</a></li>
           </ul>
           <!-- image with overlaid text -->
           <div class="card text-white">
                    <img  src="images/spacexship.jpg">
                    <div class="card-img-overlay d-flex align-items-end">
                        <h2>SpaceX's Starship</h2>
                    </div>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
