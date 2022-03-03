const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <!-- Twitter bird -->
                <a class="list-group-item table-dark fg-color-white" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <!-- Home -->
                <a class="list-group-item table-dark fg-color-white" href="">
                    <i class="fa-solid fa-house">Home</a>
                <!-- Explore -->
                <a class="list-group-item table-dark fg-color-white active" href="">
                    <i class="fa-solid fa-hashtag">Explore</a>
                <!-- Notifications -->
                <a class="list-group-item table-dark fg-color-white" href="">
                    <i class="fa-solid fa-bell"></i>Notifications</a>
                <!-- Messages -->
                <a class="list-group-item table-dark fg-color-white" href="">
                    <i class="fa-solid fa-envelope"></i>Messages</a>
                <!-- Bookmarks -->
                <a class="list-group-item table-dark fg-color-white" href="">
                    <i class="fa-solid fa-bookmark"></i>Bookmarks</a>
                <!-- Lists -->
                <a class="list-group-item table-dark fg-color-white" href="">
                    <i class="fa-solid fa-list"></i>Lists</a>
                <!-- Profile -->
                <a class="list-group-item table-dark fg-color-white" href="">
                    <i class="fa-solid fa-user"></i>Profile</a>
                <!-- More -->
                <a class="list-group-item table-dark fg-color-white" href="">
                    <i class="fa-solid fa-ellipsis"></i>More</a>   
            </div>
            <div class="d-grid mt-2">
                <a href="" class="btn btn-primary btn-block rounded-pill w-100">Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;