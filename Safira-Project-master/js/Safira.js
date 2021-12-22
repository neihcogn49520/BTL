$(document).on("click", ".add--shopping", function() {
    $(".modal").css("display", "flex");
    const id = $(this).parents(".item").data("id");
    const idx = cart.findIndex((val) => val.id === id);
    if (idx !== -1) {
        cart[idx].quantity = cart[idx].quantity + 1;

    } else {
        $(".modal-body").empty();
        const item = products.find((val) => val.id == id);
        cart.push({...item, quantity: 1 });
        $(`<div class="item">
        <div class="wrap-product d-flex a-center">
            <div class="wrap-img img-logo">
                <img style="width: 100%;height: 100%;" src=${item.image} alt="">
            </div>
            <div class="wrap-content d-flex f-column">
                <a class="mb-10 text-category-color font-1" href="">Apple China Imported</a>
                <span class="info mb-10 "><a class="text-category-color font-1" href="">Green vegetables</a></span>
                <span class="price primary-color fw-600"> $${item.price}.00 <span class="cost text-lthrough fw-500 black-color">$70.00</span></span>
            </div>
        </div>
        </div>`).appendTo(".modal-body");
    }
    renderCart(cart);
    localStorage.setItem("selectedCart", JSON.stringify(cart));
});