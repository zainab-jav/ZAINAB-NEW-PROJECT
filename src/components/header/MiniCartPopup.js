import React from "react";

const MiniCartPopup = () => {
  return (
    <div id="header-cart" class="block block-cart">
      <ul class="mini-products-list">
        <li class="item">
          <a class="product-image" href="#">
            <img src="assets/images/product-images/cape-dress-1.jpg" alt="3/4 Sleeve Kimono Dress" title="" />
          </a>
          <div class="product-details">
            <a href="#" class="remove"><i class="anm anm-times-l" aria-hidden="true"></i></a>
            <a href="#" class="edit-i remove"><i class="anm anm-edit" aria-hidden="true"></i></a>
            <a class="pName" href="cart.html">Sleeve Kimono Dress</a>
            <div class="variant-cart">Black / XL</div>
            <div class="wrapQtyBtn">
              <div class="qtyField">
                <span class="label">Qty:</span>
                <a class="qtyBtn minus" href="javascript:void(0);"><i class="fa anm anm-minus-r" aria-hidden="true"></i></a>
                <input type="text" id="Quantity" name="quantity" value="1" class="product-form__input qty" />
                  <a class="qtyBtn plus" href="javascript:void(0);"><i class="fa anm anm-plus-r" aria-hidden="true"></i></a>
              </div>
            </div>
            <div class="priceRow">
                <div class="product-price">
                  <span class="money">$59.00</span>
                </div>
            </div>
          </div>
        </li>
          <li class="item">
            <a class="product-image" href="#">
              <img src="assets/images/product-images/cape-dress-2.jpg" alt="Elastic Waist Dress - Black / Small" title="" />
            </a>
            <div class="product-details">
              <a href="#" class="remove"><i class="anm anm-times-l" aria-hidden="true"></i></a>
              <a href="#" class="edit-i remove"><i class="anm anm-edit" aria-hidden="true"></i></a>
              <a class="pName" href="cart.html">Elastic Waist Dress</a>
              <div class="variant-cart">Gray / XXL</div>
              <div class="wrapQtyBtn">
                <div class="qtyField">
                  <span class="label">Qty:</span>
                  <a class="qtyBtn minus" href="javascript:void(0);"><i class="fa anm anm-minus-r" aria-hidden="true"></i></a>
                  <input type="text" id="Quantity" name="quantity" value="1" class="product-form__input qty" />
                    <a class="qtyBtn plus" href="javascript:void(0);"><i class="fa anm anm-plus-r" aria-hidden="true"></i></a>
                </div>
              </div>
                <div class="priceRow">
                  <div class="product-price">
                    <span class="money">$99.00</span>
                  </div>
                </div>
              </div>
            </li>
        </ul>
          <div class="total">
            <div class="total-in">
              <span class="label">Cart Subtotal:</span><span class="product-price"><span class="money">$748.00</span></span>
            </div>
            <div class="buttonSet text-center">
              <a href="cart.html" class="btn btn-secondary btn--small">View Cart</a>
              <a href="checkout.html" class="btn btn-secondary btn--small">Checkout</a>
            </div>
          </div>
                        </div>
      )
}

export default MiniCartPopup