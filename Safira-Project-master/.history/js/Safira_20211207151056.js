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

$('.wrap-search-box .search').keyup(function (e) {
    const inputValue = $(this).val().toLowerCase();
    const searchProducts = sProducts.filter((val) =>
        val.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    // console.log($(this).val().toLowerCase().length);
    if (inputValue.length > 0) {
        $('.nav-and-slider .right').empty();
        $(`<div class="wrap-item d-flex f-wrap">
        </div>`).appendTo('.nav-and-slider .right');
        searchProducts.map((val) => {
            $(`<div class="item ml-20" data-id=${val.id} style="width:30%">
            <div class="wrap-product">
                <div class="wrap-img">
                    <img style="width: 100%;" src=${val.image} alt="">
                    <span class="sale-icon d-flex a-center j-center">Sale!</span>
                    <div class="sticker-status d-flex">
                        <button class="btn shopping--cart add--shopping"><i class="fas fa-shopping-cart"></i></button>
                        <button class="btn heart add--heart"><i class="fas fa-heart"></i></button>
                        <button><i class="fas fa-life-ring"></i></button>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <div class="wrap-content">
                    <a href="">${val.name}</a>
                    <span class="info"><a href="">${val.category}</a></span>
                    <span class="cost">$70.00</span>
                    <span class="price"> $${val.price}.00</span>
                </div>
            </div>
        </div>`).appendTo('.nav-and-slider .right .wrap-item');
        });
    }
    if (inputValue.length === 0) {
        $('.nav-and-slider .right').empty();
        $(`<div class="horizen-nav">
        <ul class="d-flex">
            <li>
                <a href="" style="color: #fc8a35;"><span >Home</span>
                <span><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="dropdown home">
                    <ul class="d-flex father">
                        <li>
                            <span class="demo"> Demo Group 01</span>
                            <ul class="child">
                                <li><a href="">Organic 01</a></li>
                                <li><a href="">Organic 02</a></li>
                                <li><a href="">Organic 03</a></li>
                                <li><a href="">Organic 04</a></li>
                                <li><a href="">Cosmestic 01</a></li>
                                <li><a href="">Cosmestic 02</a></li>
                                <li><a href="">Cosmestic 03</a></li>
                                <li><a href="">Cosmestic 04</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="demo">Demo Group 02</span>
                            <ul class="child">
                                <li><a href="">Electronic 01</a></li>
                                <li><a href="">Electronic 02</a></li>
                                <li><a href="">Electronic 03</a></li>
                                <li><a href="">Electronic 04</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href=""><span>Shop</span>
                <span><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="dropdown shop">
                    <ul class="d-flex father">
                        <li>
                            <span class="demo">Shop Layouts</span>
                            <ul class="child">
                                <li><a href="">Sidebar Left</a></li>
                                <li><a href="">Sidebar Right</a></li>
                                <li><a href="">Full Width</a></li>
                                <li><a href="">List View</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="demo">Shop Pages</span>
                            <ul class="child">
                                <li><a href="">Category</a></li>
                                <li><a href="">My account</a></li>
                                <li><a href="">Wishlist</a></li>
                                <li><a href="">Cart</a></li>
                                <li><a href="">Checkout</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="demo">Product Types</span>
                            <ul class="child">
                                <li><a href="">Grouped Product</a></li>
                                <li><a href="">Variable Product</a></li>
                                <li><a href="">Simple Product</a></li>
                                <li><a href="">External Product</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href=""><span>Blog</span>
                <span><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="dropdown blog">
                    <ul class="d-flex father">
                        <li>
                            <span class="demo">Blog Layouts</span>
                            <ul class="child">
                                <li><a href="">Sidebar Left</a></li>
                                <li><a href="">Sidebar Right</a></li>
                                <li><a href="">Large Image</a></li>
                                <li><a href="">Blog Grid</a></li>
                                <li><a href="">No Sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="demo">Blog Pages</span>
                            <ul class="child">
                                <li><a href="">Author</a></li>
                                <li><a href="">Archives</a></li>
                                <li><a href="">Category</a></li>
                                <li><a href="">Blog Tag</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="demo">Post Formats</span>
                            <ul class="child">
                                <li><a href="">Image Format</a></li>
                                <li><a href="">Gallery Format</a></li>
                                <li><a href="">Audio Format</a></li>
                                <li><a href="">Video Format</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href=""><span>Pages</span>
                <span><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="dropdown pages">
                    <ul class="father">
                        <li>
                            <ul class="child">
                                <li><a href="">Frequently Questions</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Error 404</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href=""><span>Contact</span></a></li>
        </ul>
    </div>
});

$('.close-modal').click(function (e) {
    e.preventDefault();
    $('.modal').css('display', 'none');
});

$('body').click(function (e) {
    e.preventDefault();
    $('.modal').css('display', 'none');
});
$('.modal-content').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
});

$('button .title').click(function (e) {
    e.preventDefault();
    $('.vertical-nav .list-content').toggle(200);
});
