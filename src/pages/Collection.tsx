import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Grid3X3, List, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import {
  products,
  getProductsByCategory,
  categories,
  type Product,
} from "@/data/products";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Popularity", value: "popular" },
];

const Collection = () => {
  const { handle } = useParams<{ handle: string }>();
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const category = categories.find(
    (c) => c.handle === handle || c.subcategories.some((s) => s.handle === handle)
  );

  const categoryName =
    category?.subcategories.find((s) => s.handle === handle)?.name ||
    category?.name ||
    handle?.replace(/-/g, " ") ||
    "Products";

  const filtered = useMemo(() => {
    let items = handle ? getProductsByCategory(handle) : products;
    if (items.length === 0) items = products; // fallback

    switch (sort) {
      case "price-asc":
        return [...items].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...items].sort((a, b) => b.price - a.price);
      case "popular":
        return [...items].sort((a, b) => b.reviews - a.reviews);
      default:
        return items;
    }
  }, [handle, sort]);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground capitalize">{categoryName}</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold capitalize text-foreground">
          {categoryName}
        </h1>
        <span className="text-sm text-muted-foreground">{filtered.length} products</span>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground md:hidden"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-1.5 ${view === "grid" ? "text-foreground" : "text-muted-foreground"}`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-1.5 ${view === "list" ? "text-foreground" : "text-muted-foreground"}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-sm border border-border px-3 py-2 bg-background focus:outline-none focus:border-foreground"
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden md:block w-56 flex-shrink-0 space-y-6">
          {category && (
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={`/collections/${category.handle}`}
                    className={`text-sm ${handle === category.handle ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    All {category.name}
                  </Link>
                </li>
                {category.subcategories.map((sub) => (
                  <li key={sub.handle}>
                    <Link
                      to={`/collections/${sub.handle}`}
                      className={`text-sm ${handle === sub.handle ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div
            className={
              view === "grid"
                ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                : "space-y-4"
            }
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products found in this category.</p>
              <Link to="/" className="btn-add-cart inline-block mt-4">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Collection;
