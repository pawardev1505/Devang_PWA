$(document).ready(function () {
    $(".add-to-cart").click(function () {
        $("#cart-items").append("<li>Food Items - $699</li>").listview("refresh");
        alert("Item added to cart!");
    });
});