// Function to toggle visibility of all posts container
function toggleAllPosts() {
    var allPostsContainer = document.getElementById("all-posts-container");
    if (allPostsContainer) {
        if (allPostsContainer.style.display === "block" || allPostsContainer.style.display === "") {
            allPostsContainer.style.display = "none"; // Hide all posts container
        } else {
            allPostsContainer.style.display = "block"; // Show all posts container
        }
    }
}

// Function to show all posts and filter based on search input
function showAllPostsAndFilter() {
    toggleAllPosts(); // Toggle the visibility of all posts container
    filterPosts(); // Filter posts based on search input
}

// Function to filter posts based on search input
function filterPosts() {
    var input = document.getElementById('search-input');
    var filter = input.value.toUpperCase();
    var posts = document.querySelectorAll('.post');

    posts.forEach(function(post) {
        var title = post.querySelector('h2');
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            post.style.display = ''; // Show the post
        } else {
            post.style.display = 'none'; // Hide the post
        }
    });
}

// Event listener for keyup event on search input
var searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        showAllPostsAndFilter(); // Show all posts and filter based on search input
    });
}

// Event listener for clear icon in search bar
var clearIcon = document.querySelector('.search-bar .clear-icon');
if (clearIcon) {
    clearIcon.addEventListener('click', function() {
        var input = document.getElementById('search-input');
        input.value = ''; // Clear the search input field
        showAllPostsAndFilter(); // Show all posts and filter based on empty search input
    });
}

// Event listener for the "All Posts" link
var allPostsLink = document.getElementById("all-posts-link");
if (allPostsLink) {
    allPostsLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleAllPosts(); // Toggle visibility of all posts container
    });
}
