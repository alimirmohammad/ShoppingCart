class ShoppingCart {
    cart = [];
    allProducts = [];
    constructor(){
        this.getStorage();
        this.render()
    }

    setStorage(){
        localStorage.setItem('cart', JSON.stringify(this.cart));
        localStorage.setItem('allProducts', JSON.stringify(this.allProducts));
    }

    getStorage(){
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart){
            this.cart = cart;
        }
        const allItems = JSON.parse(localStorage.getItem('allProducts'));
        if(allItems)
            this.allProducts = allItems;
    }

    removeFromCart(id){
        const index1 = this.findWithAttr(this.cart, 'id', id);
        const index2 = this.findWithAttr(this.allProducts, 'id', id);
        this.cart.splice(index1, 1);
        this.allProducts[index2].countAvailable += this.allProducts[index2].count;
        this.allProducts[index2].count = 0;
        this.allProducts[index2].selected = false;
        this.setStorage();
        this.render();

    }

    addCount(id){
        const index1 = this.findWithAttr(this.cart, 'id', id);
        const index2 = this.findWithAttr(this.allProducts, 'id', id);
        if(!this.cart[index1].countAvailable)
            return;
        this.cart[index1].count++;
        this.cart[index1].countAvailable--;
        this.allProducts[index2].count++;
        this.allProducts[index2].countAvailable--;

        this.setStorage();
        this.render();
    }

    subtractCount(id){
        const index1 = this.findWithAttr(this.cart, 'id', id);
        const index2 = this.findWithAttr(this.allProducts, 'id', id);
        if(this.cart[index1].count <= 1)
            return;
        this.cart[index1].count--;
        this.cart[index1].countAvailable++;
        this.allProducts[index2].count--;
        this.allProducts[index2].countAvailable++;
        this.setStorage();
        this.render();
    }

    findWithAttr(array, attr, value) {
        for(let i = 0; i < array.length; i++) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    render(){
        let html = '';
        let totalPrice = 0;
        let totalPriceFinal = 0;
        let totalDiscount = 0;
        this.cart.forEach((product, index) => {
            const productPrice = product.price * product.count;
            const productPriceFinal = product.finalPrice * product.count;
            const productDiscount = productPrice - productPriceFinal;
            totalPrice += productPrice;
            totalPriceFinal += productPriceFinal;
            totalDiscount += productDiscount;

            let priceStr = this.formatNumber(productPrice);
//             html += `
//                 <div class="col-lg-3 col-md-6 product-card">
//                     <div class="card">
//
//
//                         <img src=${product.image_url} alt="..." class="img-fluid">
//                         <div class="card-body">
//                             <h5 class="card-title">${product.name}</h5>
//                             <div class="row">
//                             <div class="col-4">
//                   <div class="r-comparison">
//                   <input type="checkbox" name="compare" id="" value="0" class="comparison-box"> مقایسه
// </div>
// </div>
//                             <div class="col-8">
//
// </div>
//
// </div>
//                             <p class="card-text">
//                                 <span>${priceStr}</span>
//                                 <span>تومان</span>
//                             </p>
//                             ${product.discount ? `<p class="card-text">
//                                 <span>${this.formatNumber(product.price - product.finalPrice)}</span>
//                                 <span>تومان تخفیف</span>
//                             </p>` : ''}
//                             <button class="btn btn-danger" onclick="shoppingCart.removeFromCart(${product.id})">حذف از سبد خرید</button>
//                             <button class="btn btn-outline-dark" onclick="shoppingCart.addCount(${product.id})">+</button>
//                             <span>${product.count}</span>
//                             <button class="btn btn-outline-dark" onclick="shoppingCart.subtractCount(${product.id})">-</button>
//
//                             <p class="card-text" id="seller"><strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//     <path fill="#5F5F5F" fill-rule="nonzero" d="M20.89 7.14l1.09 5.447a1.095 1.095 0 0 1-1.068 1.308h-.196v5.447c0 .6-.49 1.09-1.09 1.09-.599 0-1.09-.49-1.09-1.09v-5.447H14.18v5.447c0 .6-.49 1.09-1.09 1.09H4.374c-.6 0-1.09-.49-1.09-1.09v-5.447h-.196a1.095 1.095 0 0 1-1.068-1.308L3.11 7.14a1.087 1.087 0 0 1 1.068-.872h15.644c.523 0 .97.37 1.068.872zM12 18.253v-4.358H5.463v4.358H12zM4.374 5.179c-.6 0-1.09-.49-1.09-1.09 0-.599.49-1.089 1.09-1.089h15.252c.6 0 1.09.49 1.09 1.09 0 .599-.49 1.089-1.09 1.089H4.374z"/>
// </svg> فروشنده: </strong>${product.seller}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         })
        html += `<li class="c-cart-item">
                        <div class="row">
                            <div class="col-3 img-col">
                                <img alt=""
                                     class="img-fluid c-cart-item__img" src=${product.image_url}>
                            </div>
                            <div class="col-6">
                                <div class="c-cart-item__title">
                                    ${product.name}
                                </div>
                                <div class="c-cart-item__product-data c-cart-item__product-data--warranty">
                                    <i class="fas fa-shield-alt"></i> گارانتی ۲۴ ماهه یکپارچه (سازگار، حامی(ویستا) و
                                    آواژنگ)
                                </div>
                                <div class="c-cart-item__product-data c-cart-item__product-data--seller">
                                    <img alt="" src="https://www.digikala.com/static/files/500f5df4.svg"> ${product.seller}
                                </div>
                                <div>
                                <button class="btn btn-danger" onclick="shoppingCart.removeFromCart(${product.id})">حذف از سبد خرید</button>
</div>
                                <div class="c-quantity-selector">
                                    <button class="btn btn-outline-dark" onclick="shoppingCart.addCount(${product.id})">+</button>
                                    <span>${product.count}</span>
                                    <button class="btn btn-outline-dark" onclick="shoppingCart.subtractCount(${product.id})">-</button>
                                </div>
                            </div>
                            <div class="col-3 c-cart-item-price-div">
                                <div class="item-prices">
                                    <div class="c-cart-item__discount">
                                        تخفیف
                                        <span>
                        ${this.formatNumber(productDiscount)}
                    </span>
                                        تومان
                                    </div>
                                    <div class="c-cart-item__product-price">
                                        ${priceStr}
                                        <span>
                        تومان
                    </span></div>
                                </div>

                            </div>
                        </div>
                    </li>
            `;
        })

        document.getElementById('c-cart-items').innerHTML = html;
        document.querySelector('.c-checkout-bill__price').innerText = `${this.formatNumber(totalPrice)} تومان`;
        document.querySelector('.c-checkout-bill__price--discount').innerText = `${this.formatNumber(totalDiscount)} تومان`;
        document.querySelector('.c-checkout-bill__total-price--amount').innerText = `${this.formatNumber(totalPriceFinal)} تومان`;
    }
}

const shoppingCart = new ShoppingCart();