import NavigationSidebar from "../../navigationsidebar/index.js";
import PostSummaryList from "../../postsummarylist/index.js";
import PostList from "../../postlist/index.js";


(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar("home")}
        </div>
        
        <div class="col-10 col-md-6">
               ${PostList()}
        </div>
           
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);