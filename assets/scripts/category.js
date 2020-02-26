var allProducts = [
    {
        id: 0,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 8,
        colors: ['red', 'gray'],
        viewer: 82,
        star: 5,
        seller: 'دیجی‌کالا',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook X543MA - A',
        price: 3260000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/113460092.jpg'
    },
    {
        id: 1,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 25,
        colors: ['black', 'pink', 'yellow'],
        viewer: 34,
        star: 4,
        seller: 'کالاوما',
        name: 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - F',
        price: 2969000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/4546967.jpg'
    },
    {
        id: 2,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 5,
        colors: ['white', 'gray', 'blue'],
        viewer: 48,
        star: 3,
        seller: 'دی جی لند پلاس',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook K540UB - F',
        price: 7260000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/114936893.jpg'
    },
    {
        id: 3,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 0,
        colors: ['black'],
        viewer: 12,
        star: 2,
        seller: 'کندل ایران',
        name: 'لپ تاپ 15 اینچی دل مدل XPS 7590-A',
        price: 35600000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/114047572.jpg'
    },
    {
        id: 4,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 15,
        colors: ['brown', 'green'],
        viewer: 97,
        star: 1,
        seller: 'دیجی‌کالا',
        name: 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - FA',
        price: 4520000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/4213736.jpg'
    },
    {
        id: 5,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 14,
        colors: ['purple'],
        viewer: 21,
        star: 3,
        seller: 'دیجی‌کالا',
        name: 'لپ تاپ 15 اینچی ایسوس مدل  VivoBook K550IK- A',
        price: 8899000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/462024.jpg'
    },
    {
        id: 6,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 0,
        colors: [],
        viewer: 5,
        star: 2,
        seller: 'دیجی‌کالا',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook K540UB - D',
        price: 7639000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/111958009.jpg'
    },
    {
        id: 7,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 25,
        colors: ['red'],
        viewer: 23,
        star: 1,
        seller: 'کسری کامپیوتر',
        name: 'لپ تاپ 15 اینچی اچ پی مدل RA008 - A',
        price: 3475000,
        image_url: 'https://dkstatics-public-2.digikala.com/digikala-products/110307311.jpg'
    },
    {
        id: 8,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 0,
        colors: [],
        viewer: 34,
        star: 5,
        seller: 'فن آوران',
        name: 'لپ تاپ 14 اینچی آی لایف مدل Zed Air H2',
        price: 2249000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/1601135.jpg'
    },
    {
        id: 9,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 4,
        colors: ['white'],
        viewer: 34,
        star: 4,
        seller: 'پیشرو تک',
        name: 'لپ تاپ 15 اینچی مایکروسافت مدل Surface Book 2- C',
        price: 34499000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/3105744.jpg'
    },
    {
        id: 10,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 10,
        colors: ['yellow', 'green'],
        viewer: 34,
        star: 5,
        seller: 'آداک شاپ',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook K540UB - B',
        price: 6199000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/111335555.jpg'
    },
    {
        id: 11,
        count: 0,
        countAvailable: 10,
        selected: false,
        discount: 2,
        colors: ['black'],
        viewer: 34,
        star: 2,
        seller: 'پیشرو تک',
        name: 'لپ تاپ 16 اینچی اپل مدل MacBook Pro MVVK2 2019 همراه با تاچ بار',
        price: 40899000,
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/114389900.jpg'
    }
];

var cart = [];

function search() {
    getStorage();
    var searchProduct = document.getElementsByTagName('input')[0].value;

    if (!searchProduct) {
        var products = allProducts;
    } else {
        var products = allProducts.filter((product) => {
            return product.name.includes(searchProduct)
        })
    }
    var productsHtml = '';


    products.forEach((product, index) => {
        var starsHtml = '';
        var colorsHtml = '';
        product.finalPrice = ((100 - product.discount) / 100) * product.price;

        const priceStr = formatNumber(product.price);
        for (var i = 0; i < 5 - product.star; i++) {
            starsHtml += '<i class="far fa-star"></i>';
        }
        for (var i = 0; i < product.star; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        product.colors.forEach(color => {
            colorsHtml += `<li><div class="color" style="background-color: ${color}"></div></li>`;
        });

        productsHtml += `<div class="col-lg-3 col-md-6 product-card">
                    <div class="card">
                    <ul class="colors-list">
                    ${colorsHtml}
                </ul>

                        <img src=${product.image_url} alt="..." class="img-fluid">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <div class="row">
                            <div class="col-4">
                  <div class="r-comparison">
                  <input type="checkbox" name="compare" id="" value="0" class="comparison-box"> مقایسه
</div>          
</div>
                            <div class="col-8">
                            <p class="l-stars">
                            ${product.viewer} نفر ${starsHtml}
</p>
</div> 

</div>
                            <p class="card-text">
                                <span>${priceStr}</span>
                                <span>تومان</span>
                            </p>
                            <p class="card-text">
                                <div class="row discount-price">
                                <div class="col-5">
                                <span>${product.discount ? product.discount : ''}</span>
                                <span>${product.discount ? '٪ تخفیف' : ''}</span>
</div>
                                <div class="col-7">
                                ${product.discount ? `<span>${formatNumber(product.finalPrice)}</span>
                                <span>تومان با تخفیف</span>` : ''}
                                
</div>
</div>
                            </p>

                              <button ${product.selected ? 'disabled' : ''} class="btn btn-primary" id="btn-${product.id}" onclick="addToCart(${product.id})">افزودن به سبد خرید</button>
                            <p class="card-text" id="seller"><strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#5F5F5F" fill-rule="nonzero" d="M20.89 7.14l1.09 5.447a1.095 1.095 0 0 1-1.068 1.308h-.196v5.447c0 .6-.49 1.09-1.09 1.09-.599 0-1.09-.49-1.09-1.09v-5.447H14.18v5.447c0 .6-.49 1.09-1.09 1.09H4.374c-.6 0-1.09-.49-1.09-1.09v-5.447h-.196a1.095 1.095 0 0 1-1.068-1.308L3.11 7.14a1.087 1.087 0 0 1 1.068-.872h15.644c.523 0 .97.37 1.068.872zM12 18.253v-4.358H5.463v4.358H12zM4.374 5.179c-.6 0-1.09-.49-1.09-1.09 0-.599.49-1.089 1.09-1.089h15.252c.6 0 1.09.49 1.09 1.09 0 .599-.49 1.089-1.09 1.089H4.374z"/>
</svg> فروشنده: </strong>${product.seller}</p>
                        </div>
                    </div>
                </div>`
    });

    document.getElementById('products').innerHTML = productsHtml;
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function findWithAttr(array, attr, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

function addToCart(id){
    search();
    const index = findWithAttr(allProducts, 'id', id);
    const btn = document.getElementById('btn-' + id);
    if(allProducts[index].selected)
        return;

    allProducts[index].count = 1;
    allProducts[index].countAvailable--;
    allProducts[index].selected = true;
    btn.disabled = true;
    // cart.push(allProducts[index]);
    cart = allProducts.filter(product => product.selected);
    setStorage();

}

function setStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
}

function getStorage(){
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    if(cartItems)
        cart = cartItems;
    const allItems = JSON.parse(localStorage.getItem('allProducts'));
    if(allItems)
        allProducts = allItems;
}

search();
