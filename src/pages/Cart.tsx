import { Link } from "react-router-dom";
import { Minus, Plus, X, Trash2, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/data/products";
import { useState } from "react";

const Cart = () => {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCartStore();
  const [coupon, setCoupon] = useState("");
  const sub = subtotal();
  const shipping = sub >= 5000 ? 0 : 250;
  const total = sub + shipping;

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/" className="btn-add-cart inline-block">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-border text-xs text-muted-foreground uppercase tracking-wider font-medium">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {items.map((item) => (
            <div
              key={`${item.productId}-${item.size}-${item.color}`}
              className="grid grid-cols-12 gap-4 items-center py-6 border-b border-border"
            >
              <div className="col-span-12 md:col-span-6 flex gap-4">
                <Link to={`/products/${item.handle}`} className="w-20 h-24 bg-secondary flex-shrink-0 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </Link>
                <div>
                  <Link to={`/products/${item.handle}`} className="text-sm font-medium text-foreground hover:text-muted-foreground">
                    {item.title}
                  </Link>
                  {(item.size || item.color) && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {[item.size, item.color].filter(Boolean).join(" / ")}
                    </p>
                  )}
                  <button
                    onClick={() => removeItem(item.productId, item.size, item.color)}
                    className="text-xs text-muted-foreground hover:text-sale mt-2 flex items-center gap-1"
                  >
                    <Trash2 size={12} /> Remove
                  </button>
                </div>
              </div>

              <div className="col-span-4 md:col-span-2 text-center text-sm text-foreground">
                {formatPrice(item.price)}
              </div>

              <div className="col-span-4 md:col-span-2 flex justify-center">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => updateQuantity(item.productId, item.quantity - 1, item.size, item.color)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-secondary"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-10 h-8 flex items-center justify-center text-sm border-x border-border">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.productId, item.quantity + 1, item.size, item.color)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-secondary"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>

              <div className="col-span-4 md:col-span-2 text-right text-sm font-semibold text-foreground">
                {formatPrice(item.price * item.quantity)}
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between mt-6">
            <Link to="/" className="flex items-center gap-1 text-sm text-foreground hover:text-muted-foreground">
              <ArrowLeft size={14} /> Continue Shopping
            </Link>
            <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-sale">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-secondary/50 p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Order Summary</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-foreground">{formatPrice(sub)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className={shipping === 0 ? "text-success font-medium" : "text-foreground"}>
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </span>
              </div>
            </div>

            <div className="border-t border-border pt-3">
              <div className="flex justify-between font-semibold text-foreground">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            {/* Coupon */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 h-10 px-3 border border-border text-sm bg-background focus:outline-none focus:border-foreground"
              />
              <button className="h-10 px-4 bg-primary text-primary-foreground text-sm font-medium">
                Apply
              </button>
            </div>

            <Link
              to="/checkout"
              className="btn-add-cart block text-center w-full"
            >
              Proceed to Checkout
            </Link>

            {!shipping && (
              <p className="text-xs text-center text-success">✓ Free shipping applied!</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
