import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { categories } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Trust Badges */}
      <div className="border-b border-background/10">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
                <span className="text-gold text-lg">✓</span>
              </div>
              <h4 className="font-semibold text-sm">100% Authentic Products</h4>
              <p className="text-xs text-background/60">Guaranteed genuine products</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
                <span className="text-gold text-lg">🚚</span>
              </div>
              <h4 className="font-semibold text-sm">Nation-Wide Delivery</h4>
              <p className="text-xs text-background/60">Free shipping over PKR 5,000</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
                <span className="text-gold text-lg">↩</span>
              </div>
              <h4 className="font-semibold text-sm">Easy Returns</h4>
              <p className="text-xs text-background/60">7-day hassle-free returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              ENEM <span className="font-light">STORE</span>
            </h3>
            <p className="text-sm text-background/60 mb-4 leading-relaxed">
              Pakistan's premier online fashion destination. Shop authentic branded clothing,
              cosmetics, fragrances & accessories.
            </p>
            <div className="space-y-2 text-sm text-background/60">
              <p className="flex items-center gap-2"><Phone size={14} /> +92 300 1234567</p>
              <p className="flex items-center gap-2"><Mail size={14} /> info@enemstore.pk</p>
              <p className="flex items-center gap-2"><MapPin size={14} /> Lahore, Pakistan</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-background transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/shipping" className="hover:text-background transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-sm text-background/60">
              {categories.slice(0, 7).map((cat) => (
                <li key={cat.handle}>
                  <Link
                    to={`/collections/${cat.handle}`}
                    className="hover:text-background transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm text-background/60 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 h-10 px-3 bg-background/10 border border-background/20 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/40"
              />
              <button className="h-10 px-4 bg-background text-foreground text-sm font-semibold uppercase tracking-wider hover:bg-background/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-background/40">
          <p>© 2026 Enem Store. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Visa</span>
            <span>MasterCard</span>
            <span>JazzCash</span>
            <span>EasyPaisa</span>
            <span>COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
