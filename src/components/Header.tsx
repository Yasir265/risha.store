import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import MiniCart from "./MiniCart";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuTimeout = useRef<ReturnType<typeof setTimeout>>();
  const totalItems = useCartStore((s) => s.totalItems());
  const toggleCart = useCartStore((s) => s.toggleCart);
  const isCartOpen = useCartStore((s) => s.isOpen);

  const handleMenuEnter = (handle: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(handle);
  };

  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 200);
  };

  useEffect(() => {
    return () => {
      if (menuTimeout.current) clearTimeout(menuTimeout.current);
    };
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>Easy Payments • All Credit & Debit Cards Accepted • Free Shipping Over PKR 5,000</span>
      </div>

      {/* Free Shipping Bar */}
      <div className="free-shipping-bar">
        🚚 Free Shipping for Orders Above PKR 5,000
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20 px-4">
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                ENEM <span className="font-light">STORE</span>
              </h1>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-4 pr-10 border border-border rounded-sm bg-secondary/50 text-sm focus:outline-none focus:border-foreground transition-colors"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-1 md:gap-4">
              {/* Mobile Search */}
              <button
                className="md:hidden p-2"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              <Link
                to="/account"
                className="hidden md:flex items-center gap-1 text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                <User size={20} />
                <span className="hidden lg:inline">Account</span>
              </Link>

              <Link
                to="/wishlist"
                className="p-2 text-foreground hover:text-muted-foreground transition-colors relative"
              >
                <Heart size={20} />
              </Link>

              <button
                onClick={toggleCart}
                className="p-2 text-foreground hover:text-muted-foreground transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-sale text-sale-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {searchOpen && (
            <div className="md:hidden px-4 pb-3">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-4 pr-10 border border-border rounded-sm bg-secondary/50 text-sm focus:outline-none focus:border-foreground"
                autoFocus
              />
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block border-t border-border">
          <div className="container mx-auto">
            <ul className="flex items-center justify-center gap-0">
              {categories.map((cat) => (
                <li
                  key={cat.handle}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(cat.handle)}
                  onMouseLeave={handleMenuLeave}
                >
                  <Link
                    to={`/collections/${cat.handle}`}
                    className={`nav-link flex items-center gap-1 px-4 py-3 ${
                      cat.handle === "sale"
                        ? "text-sale font-bold"
                        : ""
                    }`}
                  >
                    {cat.name}
                    <ChevronDown size={12} className="opacity-50" />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {activeMenu === cat.handle && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 bg-background border border-border shadow-lg py-6 px-8 min-w-[280px] z-50 animate-fade-in"
                      onMouseEnter={() => handleMenuEnter(cat.handle)}
                      onMouseLeave={handleMenuLeave}
                    >
                      <div className="grid gap-2">
                        {cat.subcategories.map((sub) => (
                          <Link
                            key={sub.handle}
                            to={`/collections/${sub.handle}`}
                            className="text-sm text-foreground hover:text-muted-foreground transition-colors py-1"
                            onClick={() => setActiveMenu(null)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link
                          to={`/collections/${cat.handle}`}
                          className="text-sm font-semibold text-foreground hover:text-muted-foreground"
                          onClick={() => setActiveMenu(null)}
                        >
                          Shop All {cat.name} →
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 top-[calc(4rem+4.5rem)] bg-background z-50 overflow-y-auto">
            <nav className="p-4">
              {categories.map((cat) => (
                <div key={cat.handle} className="border-b border-border">
                  <Link
                    to={`/collections/${cat.handle}`}
                    className={`block py-3 font-medium ${
                      cat.handle === "sale" ? "text-sale" : "text-foreground"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat.name}
                  </Link>
                  <div className="pl-4 pb-2">
                    {cat.subcategories.map((sub) => (
                      <Link
                        key={sub.handle}
                        to={`/collections/${sub.handle}`}
                        className="block py-1.5 text-sm text-muted-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-4 space-y-3">
                <Link
                  to="/account"
                  className="flex items-center gap-2 py-2 text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  <User size={18} /> My Account
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Mini Cart */}
      <MiniCart />
    </>
  );
};

export default Header;
