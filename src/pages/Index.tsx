import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import ProductCard from "@/components/ProductCard";
import {
  categories,
  getBestSellers,
  getNewArrivals,
  getSaleProducts,
} from "@/data/products";

const slides = [
  {
    image: hero1,
    title: "Winter Collection 2026",
    subtitle: "Premium coats, sweaters & more",
    cta: "Shop Winter",
    link: "/collections/winter-shop",
  },
  {
    image: hero2,
    title: "Luxury Fragrances",
    subtitle: "Authentic perfumes from top brands",
    cta: "Shop Fragrances",
    link: "/collections/fragrances",
  },
  {
    image: hero3,
    title: "Clearance Sale",
    subtitle: "Up to 70% off on selected items",
    cta: "Shop Sale",
    link: "/collections/sale",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bestSellers = getBestSellers();
  const newArrivals = getNewArrivals();
  const saleProducts = getSaleProducts();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* Hero Slider */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden bg-secondary">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/30" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="space-y-4 px-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-background/90">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="inline-block bg-background text-foreground px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-background/90 transition-colors"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/60 hover:bg-background/80 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % slides.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/60 hover:bg-background/80 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentSlide ? "bg-background" : "bg-background/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.handle}
                to={`/collections/${cat.handle}`}
                className="group relative aspect-square bg-secondary overflow-hidden"
              >
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg md:text-xl font-bold text-foreground bg-background/90 px-6 py-3 group-hover:bg-background transition-colors">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-heading">Best Sellers</h2>
            <Link
              to="/collections/women"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {bestSellers.slice(0, 10).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-heading">New Arrivals</h2>
            <Link
              to="/collections/women"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {newArrivals.slice(0, 10).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="py-12 md:py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="sale-badge text-base px-4 py-1 mb-3 inline-block">
              Sale
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Up to 70% Off
            </h2>
            <p className="text-background/60 mt-2">
              Limited time clearance deals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {saleProducts.slice(0, 8).map((p) => (
              <div key={p.id} className="bg-background rounded-sm overflow-hidden">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/collections/sale"
              className="inline-block border border-background text-background px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-background hover:text-foreground transition-colors"
            >
              Shop All Sale
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <h2 className="section-heading mb-3">Stay in the Loop</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to get exclusive deals, new arrivals & more.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 border border-border text-sm focus:outline-none focus:border-foreground"
            />
            <button className="h-12 px-6 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wider hover:bg-foreground/80 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
