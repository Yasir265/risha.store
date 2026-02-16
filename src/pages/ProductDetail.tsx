import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Minus, Plus, Star, Truck } from "lucide-react";
import { getProductByHandle, formatPrice, getSavePercentage, getBestSellers } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const product = getProductByHandle(handle || "");
  const addItem = useCartStore((s) => s.addItem);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
        <Link to="/" className="btn-add-cart inline-block">Back to Shop</Link>
      </div>
    );
  }

  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price;
  const savePercent = isOnSale ? getSavePercentage(product.price, product.compareAtPrice!) : 0;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      handle: product.handle,
      title: product.title,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      image: product.images[0],
      size: selectedSize || product.sizes?.[0],
      color: selectedColor || product.colors?.[0],
    }, quantity);
  };

  const related = getBestSellers().filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/collections/${product.category}`} className="hover:text-foreground capitalize">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Images */}
        <div>
          <div className="aspect-[3/4] bg-secondary overflow-hidden mb-3">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 bg-secondary overflow-hidden border-2 ${
                    i === selectedImage ? "border-foreground" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">{product.brand}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{product.title}</h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-border"} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className={`text-2xl font-bold ${isOnSale ? "price-sale" : "text-foreground"}`}>
              {formatPrice(product.price)}
            </span>
            {isOnSale && (
              <>
                <span className="price-original text-lg">{formatPrice(product.compareAtPrice!)}</span>
                <span className="sale-badge">Save {savePercent}%</span>
              </>
            )}
          </div>

          {/* Size */}
          {product.sizes && (
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[3rem] h-10 px-3 border text-sm font-medium transition-colors ${
                      selectedSize === s
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color */}
          {product.colors && (
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Color</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`h-10 px-4 border text-sm font-medium transition-colors ${
                      selectedColor === c
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Quantity</label>
            <div className="flex items-center border border-border w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-secondary">
                <Minus size={14} />
              </button>
              <span className="w-12 h-10 flex items-center justify-center text-sm font-medium border-x border-border">
                {quantity}
              </span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-secondary">
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button onClick={handleAddToCart} className="btn-add-cart flex-1">
              Add to Cart
            </button>
            <button onClick={handleAddToCart} className="btn-buy-now flex-1">
              Buy Now
            </button>
            <button className="w-12 h-12 border border-border flex items-center justify-center hover:bg-secondary transition-colors">
              <Heart size={18} />
            </button>
          </div>

          {/* Shipping Info */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
            <Truck size={16} />
            <span>Free shipping on orders over PKR 5,000</span>
          </div>

          {/* Tabs */}
          <div className="pt-6 border-t border-border">
            <div className="flex gap-6 border-b border-border">
              {["description", "info", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "info" ? "Additional Info" : tab}
                </button>
              ))}
            </div>
            <div className="py-4 text-sm text-muted-foreground leading-relaxed">
              {activeTab === "description" && <p>{product.description}</p>}
              {activeTab === "info" && (
                <div className="space-y-2">
                  <p><strong className="text-foreground">Brand:</strong> {product.brand}</p>
                  <p><strong className="text-foreground">Category:</strong> {product.category}</p>
                  {product.sizes && <p><strong className="text-foreground">Available Sizes:</strong> {product.sizes.join(", ")}</p>}
                  {product.colors && <p><strong className="text-foreground">Colors:</strong> {product.colors.join(", ")}</p>}
                </div>
              )}
              {activeTab === "reviews" && (
                <p>No reviews yet. Be the first to review this product!</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-16 pt-12 border-t border-border">
          <h2 className="section-heading mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
