document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('search-input');
    const scrollingText = document.querySelector('.scrolling-text');
    const placeholderText = "Where do you want to go?";
    let offset = 0;

    function scrollPlaceholder() {
        offset = (offset + 1) % (placeholderText.length * 10); // Adjust speed by changing increment
        input.placeholder = placeholderText.substring(offset / 10) + " " + placeholderText.substring(0, offset / 10);
        requestAnimationFrame(scrollPlaceholder);
    }

    scrollPlaceholder();
});
