const NavigationSidebar = (active) => {


    return(`
            <div class="list-group">
                <!-- Twitter bird -->
                <a class="list-group-item fg-color-white ${active === 'tuiter' ? 'active' : ''}" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <!-- Home -->
                <a id="home" class="list-group-item fg-color-white ${active === 'home' ? 'active' : ''}" href="../homescreen/home.html">
                    <i class="fa-solid fa-house"></i>Home</a>
                <!-- Explore -->
                <a id="explore" class="list-group-item fg-color-white ${active === 'explore' ? 'active' : ''}" href="../explorescreen/explore.html">
                    <i class="fa-solid fa-hashtag"></i>Explore</a>
                <!-- Notifications -->
                <a class="list-group-item fg-color-white ${active === 'notifications' ? 'active' : ''}" href="">
                    <i class="fa-solid fa-bell"></i>Notifications</a>
                <!-- Messages -->
                <a class="list-group-item fg-color-white ${active === 'messages' ? 'active' : ''}" href="">
                    <i class="fa-solid fa-envelope"></i>Messages</a>
                <!-- Bookmarks -->
                <a class="list-group-item fg-color-white ${active === 'bookmarks' ? 'active' : ''}" href="">
                    <i class="fa-solid fa-bookmark"></i>Bookmarks</a>
                <!-- Lists -->
                <a class="list-group-item fg-color-white ${active === 'lists' ? 'active' : ''}" href="">
                    <i class="fa-solid fa-list"></i>Lists</a>
                <!-- Profile -->
                <a class="list-group-item fg-color-white ${active === 'profile' ? 'active' : ''}" href="">
                    <i class="fa-solid fa-user"></i>Profile</a>
                <!-- More -->
                <a class="list-group-item fg-color-white ${active === 'more' ? 'active' : ''}" href="">
                    <i class="fa-solid fa-ellipsis"></i>More</a>   
            </div>
            <div class="d-grid mt-2">
                <a href="" class="btn btn-primary btn-block rounded-pill w-100">Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;