import PostSummaryList from "../../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->

                <i class="fa-solid fa-magnifying-glass"></i>
                <input class="w-75 border-right-0 mb-2 wd-border-radius" id="search" type="text" placeholder="Search Tuiter"/>


                <a href="explore-settings.html">
                    <i class="fa-solid fa-gear"></i>
                </a>
                
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
           <div class="card bg-transparent border-white">
                <div class="card-body">

                    <img src="images/React.jpg" alt="react js logo" width="100" class="float-end">

                    <p class="text-white">Web Development</p>
                    <p class="fw-bold text-white">ReactJS - 2hr</p>
                    <p class="fw-bold text-white">
                       React.js is a component based front end library
                       that makes it very easy to build Single Page Applications
                       or SPAs
                    </p>

                </div>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
