var products = [];
let sProducts = [];
let subArrray = [];

const cart = [];
const arrayHeart = [];
$.get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json', (data) => {
    subArrray = data;
    sProducts = data;
    products = data;
    renderProduct(data);
});
$('button.filter').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#header__scroll--menu').css('display', 'block');
});

$(document).on('click', '.delete-item', function () {
    const id = $(this).parents('li').data('id');
    console.log(id);
    const idx = cart.findIndex((val) => val.id === id);
    cart.splice(idx, 1);
    renderCart(cart);
    localStorage.setItem('selectedCart', JSON.stringify(cart));
});

$('#header__scroll--menu').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
});

$('body').click(function (e) {
    e.preventDefault();
    $('#header__scroll--menu').css('display', 'none');
});
