document.addEventListener("DOMContentLoaded", () => {
    const wishlistButtons = document.querySelectorAll(".wishlist");

    wishlistButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
            const productName = button.previousElementSibling.querySelector("h3").textContent;

            if (button.classList.contains("active")) {
                alert(`${productName} added to wishlist!`);
            } else {
                alert(`${productName} removed from wishlist.`);
            }
        });
    });
});
