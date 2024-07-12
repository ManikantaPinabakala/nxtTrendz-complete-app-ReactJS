import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let cartTotal = 0
      cartList.forEach(eachItem => {
        cartTotal += eachItem.price * eachItem.quantity
      })

      return (
        <div className="summary-container">
          <h1 className="order-total-heading">
            Order Total: <span className="order-total">Rs {cartTotal}/-</span>
          </h1>
          <p className="summary-list-length-text">
            {cartList.length} items in cart
          </p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
