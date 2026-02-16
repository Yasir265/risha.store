import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/data/products";

const MiniCart = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCartStore();

  const sub = subtotal();
  const freeShipping = sub >= 5000;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-foreground/40 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">
            Shopping Cart ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-1 hover:bg-secondary rounded-sm transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6">
            <ShoppingBag size={48} className="text-muted-foreground" />
            <p className="text-muted-foreground">Your cart is empty</p>
            <Link
              to="/"
              onClick={closeCart}
              className="btn-add-cart inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.size}-${item.color}`}
                  className="flex gap-4 pb-4 border-b border-border last:border-0"
                >
                  <Link
                    to={`/products/${item.handle}`}
                    onClick={closeCart}
                    className="w-20 h-24 flex-shrink-0 bg-secondary overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/products/${item.handle}`}
                      onClick={closeCart}
                      className="text-sm font-medium text-foreground hover:text-muted-foreground line-clamp-2"
                    >
                      {item.title}
                    </Link>
                    {(item.size || item.color) && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {[item.size, item.color].filter(Boolean).join(" / ")}
                      </p>
                    )}
                    <p className="text-sm font-semibold mt-1 text-foreground">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.quantity - 1,
                            item.size,
                            item.color
                          )
                        }
                        className="w-7 h-7 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.quantity + 1,
                            item.size,
                            item.color
                          )
                        }
                        className="w-7 h-7 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      removeItem(item.productId, item.size, item.color)
                    }
                    className="self-start p-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-4 space-y-3">
              {!freeShipping && (
                <p className="text-xs text-center text-muted-foreground">
                  Add{" "}
                  <span className="font-semibold text-foreground">
                    {formatPrice(5000 - sub)}
                  </span>{" "}
                  more for free shipping!
                </p>
              )}
              {freeShipping && (
                <p className="text-xs text-center text-success font-medium">
                  ✓ You qualify for free shipping!
                </p>
              )}
              <div className="flex justify-between text-base font-semibold text-foreground">
                <span>Subtotal</span>
                <span>{formatPrice(sub)}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="text-center py-2.5 border border-foreground text-foreground text-sm font-semibold uppercase tracking-wider hover:bg-secondary transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="btn-add-cart text-center"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MiniCart;
