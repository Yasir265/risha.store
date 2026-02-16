import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Eye } from "lucide-react";
import { Product, formatPrice, getSavePercentage } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price;
  const savePercent = isOnSale
    ? getSavePercentage(product.price, product.compareAtPrice!)
    : 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      handle: product.handle,
      title: product.title,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      image: product.images[0],
      size: product.sizes?.[0],
      color: product.colors?.[0],
    });
  };

  return (
    <div
      className="group product-card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.handle}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
          <img
            src={
              hovered && product.images.length > 1
                ? product.images[1]
                : product.images[0]
            }
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isOnSale && (
              <span className="sale-badge">-{savePercent}%</span>
            )}
            {product.tags.includes("new") && (
              <span className="bg-foreground text-background text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
                New
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            className="absolute top-2 right-2 p-1.5 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Heart size={16} />
          </button>

          {/* Quick Actions */}
          <div className="absolute bottom-0 left-0 right-0 flex gap-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleQuickAdd}
              className="flex-1 bg-primary/90 text-primary-foreground py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors"
            >
              Quick Add
            </button>
            <Link
              to={`/products/${product.handle}`}
              className="bg-background/90 text-foreground p-2.5 hover:bg-background transition-colors border-l border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye size={16} />
            </Link>
          </div>
        </div>

        {/* Info */}
        <div className="pt-3 pb-1 space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.brand}
          </p>
          <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-tight">
            {product.title}
          </h3>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold ${
                isOnSale ? "price-sale" : "text-foreground"
              }`}
            >
              {formatPrice(product.price)}
            </span>
            {isOnSale && (
              <span className="price-original">
                {formatPrice(product.compareAtPrice!)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
