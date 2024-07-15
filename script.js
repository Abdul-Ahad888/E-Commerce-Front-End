// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:true,    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// Object For Products
{
    "data": [
        {
            "id": "prod_Kvg9l6t47RjMwB",
            "name": "T-Shirt",
            "description": "A cool T-shirt",
            "price": {
                "formatted_with_symbol": "$20.00"
            },
            "image": {
                "url": "https://cdn.chec.io/merchants/1234/images/products/t-shirt.png"
            }
        },
        {
            "id": "prod_vlK6YoNG4jP8Dk",
            "name": "Sneakers",
            "description": "Comfortable sneakers",
            "price": {
                "formatted_with_symbol": "$50.00"
            },
            "image": {
                "url": "https://cdn.chec.io/merchants/1234/images/products/sneakers.png"
            }
        }
    ]
}
