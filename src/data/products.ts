export interface Product {
  id: string;
  handle: string;
  title: string;
  brand: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  subcategory: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
  description: string;
  tags: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface Category {
  name: string;
  handle: string;
  subcategories: { name: string; handle: string }[];
}

export const categories: Category[] = [
  {
    name: "Women",
    handle: "women",
    subcategories: [
      { name: "Tops", handle: "women-tops" },
      { name: "Bottoms", handle: "women-bottoms" },
      { name: "Dresses", handle: "women-dresses" },
      { name: "Nightwear", handle: "women-nightwear" },
      { name: "Lingerie", handle: "women-lingerie" },
      { name: "Sportswear", handle: "women-sportswear" },
      { name: "Shoes", handle: "women-shoes" },
      { name: "Accessories", handle: "women-accessories" },
    ],
  },
  {
    name: "Men",
    handle: "men",
    subcategories: [
      { name: "Shirts", handle: "men-shirts" },
      { name: "T-Shirts", handle: "men-tshirts" },
      { name: "Jeans", handle: "men-jeans" },
      { name: "Blazers", handle: "men-blazers" },
      { name: "Jackets", handle: "men-jackets" },
      { name: "Outerwear", handle: "men-outerwear" },
      { name: "Bottoms", handle: "men-bottoms" },
    ],
  },
  {
    name: "Kids",
    handle: "kids",
    subcategories: [
      { name: "Boys", handle: "kids-boys" },
      { name: "Girls", handle: "kids-girls" },
      { name: "Baby", handle: "kids-baby" },
      { name: "Footwear", handle: "kids-footwear" },
    ],
  },
  {
    name: "Cosmetics",
    handle: "cosmetics",
    subcategories: [
      { name: "Makeup", handle: "cosmetics-makeup" },
      { name: "Skin Care", handle: "cosmetics-skincare" },
      { name: "Hair Care", handle: "cosmetics-haircare" },
      { name: "Toiletries", handle: "cosmetics-toiletries" },
    ],
  },
  {
    name: "Fragrances",
    handle: "fragrances",
    subcategories: [
      { name: "Men Perfumes", handle: "fragrances-men" },
      { name: "Women Perfumes", handle: "fragrances-women" },
      { name: "Unisex", handle: "fragrances-unisex" },
      { name: "Body Mists", handle: "fragrances-bodymists" },
    ],
  },
  {
    name: "Eyewear",
    handle: "eyewear",
    subcategories: [
      { name: "Sunglasses", handle: "eyewear-sunglasses" },
      { name: "Optical Frames", handle: "eyewear-optical" },
    ],
  },
  {
    name: "Sale",
    handle: "sale",
    subcategories: [
      { name: "Women Sale", handle: "sale-women" },
      { name: "Men Sale", handle: "sale-men" },
      { name: "Kids Sale", handle: "sale-kids" },
      { name: "Clearance", handle: "sale-clearance" },
    ],
  },
  {
    name: "Winter Shop",
    handle: "winter-shop",
    subcategories: [
      { name: "Men Winter", handle: "winter-men" },
      { name: "Women Winter", handle: "winter-women" },
      { name: "Kids Winter", handle: "winter-kids" },
      { name: "Sweaters", handle: "winter-sweaters" },
    ],
  },
];

const img = (seed: string) =>
  `https://images.unsplash.com/${seed}?w=600&h=800&fit=crop`;

export const products: Product[] = [
  // Women
  { id: "w1", handle: "floral-summer-dress", title: "Floral Summer Dress", brand: "Enem", price: 3490, compareAtPrice: 4990, category: "women", subcategory: "women-dresses", images: [img("photo-1572804013309-59a88b7e92f1"), img("photo-1515886657613-9f3515b0c78f")], sizes: ["XS","S","M","L","XL"], colors: ["Red","Blue"], description: "Beautiful floral print summer dress perfect for casual outings.", tags: ["bestseller","new"], inStock: true, rating: 4.5, reviews: 42 },
  { id: "w2", handle: "casual-white-top", title: "Casual White Blouse", brand: "Enem", price: 1990, category: "women", subcategory: "women-tops", images: [img("photo-1564257631407-4deb1f99d992")], sizes: ["S","M","L","XL"], description: "Classic white blouse for everyday elegance.", tags: ["new"], inStock: true, rating: 4.2, reviews: 18 },
  { id: "w3", handle: "black-skinny-jeans-women", title: "Women's Black Skinny Jeans", brand: "Denim Co", price: 2790, compareAtPrice: 3490, category: "women", subcategory: "women-bottoms", images: [img("photo-1541099649105-f69ad21f3246")], sizes: ["26","28","30","32"], description: "Slim-fit black jeans with stretch comfort.", tags: ["bestseller"], inStock: true, rating: 4.7, reviews: 67 },
  { id: "w4", handle: "silk-nightgown", title: "Silk Satin Nightgown", brand: "Luxe Sleep", price: 3290, category: "women", subcategory: "women-nightwear", images: [img("photo-1616627561950-9f746e330187")], sizes: ["S","M","L"], colors: ["Pink","Black"], description: "Luxurious satin nightgown for ultimate comfort.", tags: [], inStock: true, rating: 4.3, reviews: 12 },
  { id: "w5", handle: "running-leggings-women", title: "Performance Running Leggings", brand: "SportFit", price: 2490, category: "women", subcategory: "women-sportswear", images: [img("photo-1506629082955-511b1aa562c8")], sizes: ["XS","S","M","L"], description: "High-waist compression leggings for active women.", tags: ["new"], inStock: true, rating: 4.6, reviews: 34 },
  { id: "w6", handle: "embroidered-kurta-women", title: "Embroidered Lawn Kurta", brand: "Enem", price: 4290, compareAtPrice: 5990, category: "women", subcategory: "women-tops", images: [img("photo-1583391733956-3750e0ff4e8b")], sizes: ["S","M","L","XL"], description: "Intricate embroidery on premium lawn fabric.", tags: ["bestseller"], inStock: true, rating: 4.8, reviews: 89 },
  { id: "w7", handle: "heeled-sandals-gold", title: "Gold Heeled Sandals", brand: "Stride", price: 3990, category: "women", subcategory: "women-shoes", images: [img("photo-1543163521-1bf539c55dd2")], sizes: ["36","37","38","39","40"], colors: ["Gold","Silver"], description: "Elegant gold heeled sandals for parties.", tags: [], inStock: true, rating: 4.1, reviews: 15 },
  { id: "w8", handle: "winter-wool-coat-women", title: "Wool Blend Winter Coat", brand: "Nordic", price: 8990, compareAtPrice: 12990, category: "women", subcategory: "winter-women", images: [img("photo-1539533113208-f6df8cc8b543")], sizes: ["S","M","L"], colors: ["Camel","Black"], description: "Premium wool blend coat for harsh winters.", tags: ["winter","bestseller"], inStock: true, rating: 4.9, reviews: 55 },

  // Men
  { id: "m1", handle: "classic-oxford-shirt", title: "Classic Oxford Shirt", brand: "Enem", price: 2490, category: "men", subcategory: "men-shirts", images: [img("photo-1596755094514-f87e34085b2c")], sizes: ["S","M","L","XL","XXL"], colors: ["White","Blue","Pink"], description: "Timeless oxford shirt for formal and casual wear.", tags: ["bestseller"], inStock: true, rating: 4.6, reviews: 78 },
  { id: "m2", handle: "slim-fit-chinos", title: "Slim Fit Chino Pants", brand: "Enem", price: 2990, category: "men", subcategory: "men-bottoms", images: [img("photo-1473966968600-fa801b869a1a")], sizes: ["30","32","34","36"], colors: ["Khaki","Navy","Black"], description: "Versatile slim-fit chinos for every occasion.", tags: ["new"], inStock: true, rating: 4.4, reviews: 45 },
  { id: "m3", handle: "leather-biker-jacket", title: "Leather Biker Jacket", brand: "Rebel", price: 9990, compareAtPrice: 14990, category: "men", subcategory: "men-jackets", images: [img("photo-1551028719-00167b16eac5")], sizes: ["M","L","XL"], colors: ["Black","Brown"], description: "Premium genuine leather biker jacket.", tags: ["bestseller"], inStock: true, rating: 4.8, reviews: 62 },
  { id: "m4", handle: "graphic-tee-men", title: "Urban Graphic T-Shirt", brand: "Street", price: 1290, compareAtPrice: 1790, category: "men", subcategory: "men-tshirts", images: [img("photo-1521572163474-6864f9cf17ab")], sizes: ["S","M","L","XL"], description: "Bold graphic tee for street style.", tags: ["new"], inStock: true, rating: 4.0, reviews: 23 },
  { id: "m5", handle: "navy-blazer-men", title: "Navy Slim Fit Blazer", brand: "Enem", price: 7990, category: "men", subcategory: "men-blazers", images: [img("photo-1507679799987-c73779587ccf")], sizes: ["38","40","42","44"], description: "Sharp navy blazer for business meetings.", tags: [], inStock: true, rating: 4.7, reviews: 31 },
  { id: "m6", handle: "denim-jacket-men", title: "Classic Denim Jacket", brand: "Denim Co", price: 4490, compareAtPrice: 5990, category: "men", subcategory: "men-jackets", images: [img("photo-1576995853123-5a10305d93c0")], sizes: ["M","L","XL"], description: "Iconic denim jacket with vintage wash.", tags: ["bestseller"], inStock: true, rating: 4.5, reviews: 48 },
  { id: "m7", handle: "winter-puffer-men", title: "Quilted Puffer Jacket", brand: "Nordic", price: 6990, compareAtPrice: 9990, category: "men", subcategory: "winter-men", images: [img("photo-1544923246-77307dd270b9")], sizes: ["M","L","XL","XXL"], colors: ["Black","Navy","Green"], description: "Warm quilted puffer for extreme cold.", tags: ["winter"], inStock: true, rating: 4.6, reviews: 39 },
  { id: "m8", handle: "formal-dress-shoes", title: "Formal Leather Derby Shoes", brand: "Stride", price: 5490, category: "men", subcategory: "men-shirts", images: [img("photo-1614252369475-531eba835eb1")], sizes: ["40","41","42","43","44"], colors: ["Black","Tan"], description: "Handcrafted leather derby shoes.", tags: [], inStock: true, rating: 4.3, reviews: 19 },

  // Kids
  { id: "k1", handle: "boys-cartoon-tshirt", title: "Boys Cartoon Print T-Shirt", brand: "KidZone", price: 890, compareAtPrice: 1290, category: "kids", subcategory: "kids-boys", images: [img("photo-1519238263530-99bdd11df2ea")], sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"], description: "Fun cartoon printed tee for active boys.", tags: ["new"], inStock: true, rating: 4.4, reviews: 27 },
  { id: "k2", handle: "girls-party-dress", title: "Girls Sparkle Party Dress", brand: "KidZone", price: 2490, category: "kids", subcategory: "kids-girls", images: [img("photo-1518831959646-742c3a14ebf7")], sizes: ["3-4Y","5-6Y","7-8Y"], colors: ["Pink","Lavender"], description: "Sparkly party dress for little princesses.", tags: [], inStock: true, rating: 4.7, reviews: 16 },
  { id: "k3", handle: "baby-onesie-set", title: "Baby Cotton Onesie 3-Pack", brand: "TinyTots", price: 1690, category: "kids", subcategory: "kids-baby", images: [img("photo-1522771930-78b353280809")], sizes: ["0-3M","3-6M","6-12M"], description: "Soft organic cotton onesies pack of 3.", tags: ["bestseller"], inStock: true, rating: 4.9, reviews: 54 },
  { id: "k4", handle: "kids-sneakers-light", title: "Light-Up Kids Sneakers", brand: "StepKids", price: 1990, compareAtPrice: 2790, category: "kids", subcategory: "kids-footwear", images: [img("photo-1514989940723-e8e51635b782")], sizes: ["24","26","28","30","32"], description: "LED light-up sneakers kids love.", tags: ["new"], inStock: true, rating: 4.5, reviews: 33 },

  // Cosmetics
  { id: "c1", handle: "matte-lipstick-set", title: "Matte Lipstick Collection", brand: "GlowUp", price: 1990, compareAtPrice: 2990, category: "cosmetics", subcategory: "cosmetics-makeup", images: [img("photo-1586495777744-4413f21062fa")], colors: ["Red","Nude","Berry","Coral"], description: "Long-lasting matte lipstick set of 4 shades.", tags: ["bestseller"], inStock: true, rating: 4.6, reviews: 91 },
  { id: "c2", handle: "vitamin-c-serum", title: "Vitamin C Brightening Serum", brand: "DermaCare", price: 2490, category: "cosmetics", subcategory: "cosmetics-skincare", images: [img("photo-1570194065650-d99fb4a38691")], description: "Brightening serum with 20% Vitamin C.", tags: ["new","bestseller"], inStock: true, rating: 4.8, reviews: 73 },
  { id: "c3", handle: "keratin-hair-mask", title: "Keratin Deep Hair Mask", brand: "HairLux", price: 1490, category: "cosmetics", subcategory: "cosmetics-haircare", images: [img("photo-1535585209827-a15fcdbc4c2d")], description: "Deep conditioning keratin mask for damaged hair.", tags: [], inStock: true, rating: 4.3, reviews: 21 },
  { id: "c4", handle: "eyeshadow-palette-nude", title: "Nude Eyeshadow Palette 12 Colors", brand: "GlowUp", price: 2290, compareAtPrice: 3290, category: "cosmetics", subcategory: "cosmetics-makeup", images: [img("photo-1512496015851-a90fb38ba796")], description: "Versatile nude palette for everyday glamour.", tags: ["bestseller"], inStock: true, rating: 4.5, reviews: 58 },

  // Fragrances
  { id: "f1", handle: "oud-royal-men", title: "Oud Royal Eau de Parfum - Men", brand: "Arabique", price: 5990, compareAtPrice: 7990, category: "fragrances", subcategory: "fragrances-men", images: [img("photo-1523293182086-7651a899d37f")], description: "Rich oud fragrance with leather and amber notes.", tags: ["bestseller"], inStock: true, rating: 4.9, reviews: 112 },
  { id: "f2", handle: "rose-bloom-women", title: "Rose Bloom Eau de Toilette - Women", brand: "Fleurette", price: 4490, category: "fragrances", subcategory: "fragrances-women", images: [img("photo-1541643600914-78b084683601")], description: "Delicate rose fragrance with musky undertones.", tags: ["new"], inStock: true, rating: 4.6, reviews: 47 },
  { id: "f3", handle: "fresh-aqua-unisex", title: "Fresh Aqua Unisex Cologne", brand: "AquaScent", price: 3290, category: "fragrances", subcategory: "fragrances-unisex", images: [img("photo-1594035910387-fea081ae5111")], description: "Fresh aquatic scent perfect for daily wear.", tags: [], inStock: true, rating: 4.2, reviews: 28 },
  { id: "f4", handle: "vanilla-mist-body", title: "Vanilla Dream Body Mist", brand: "MistCo", price: 1290, compareAtPrice: 1790, category: "fragrances", subcategory: "fragrances-bodymists", images: [img("photo-1588405748880-12d1d2a59f75")], description: "Sweet vanilla body mist for all-day freshness.", tags: ["new"], inStock: true, rating: 4.4, reviews: 35 },

  // Eyewear
  { id: "e1", handle: "aviator-gold-sunglasses", title: "Classic Aviator Sunglasses", brand: "VisionX", price: 2990, compareAtPrice: 4490, category: "eyewear", subcategory: "eyewear-sunglasses", images: [img("photo-1511499767150-a48a237f0083")], colors: ["Gold","Silver","Black"], description: "Timeless aviator frame with UV400 protection.", tags: ["bestseller"], inStock: true, rating: 4.7, reviews: 65 },
  { id: "e2", handle: "cat-eye-frames", title: "Cat Eye Optical Frames", brand: "VisionX", price: 3490, category: "eyewear", subcategory: "eyewear-optical", images: [img("photo-1574258495973-f010dfbb5371")], colors: ["Black","Tortoise"], description: "Stylish cat-eye frames for a bold look.", tags: ["new"], inStock: true, rating: 4.3, reviews: 14 },

  // Sale items
  { id: "s1", handle: "clearance-polo-men", title: "Men's Classic Polo - CLEARANCE", brand: "Enem", price: 990, compareAtPrice: 2490, category: "sale", subcategory: "sale-men", images: [img("photo-1586363104862-3a5e2ab60d99")], sizes: ["M","L","XL"], colors: ["Navy","White","Red"], description: "Classic polo shirt at clearance price.", tags: ["clearance"], inStock: true, rating: 4.1, reviews: 82 },
  { id: "s2", handle: "clearance-maxi-dress", title: "Bohemian Maxi Dress - SALE", brand: "Enem", price: 1990, compareAtPrice: 4990, category: "sale", subcategory: "sale-women", images: [img("photo-1496747611176-843222e1e57c")], sizes: ["S","M","L"], description: "Flowing bohemian maxi dress at amazing discount.", tags: ["clearance"], inStock: true, rating: 4.4, reviews: 37 },
  { id: "s3", handle: "clearance-kids-jacket", title: "Kids Windbreaker Jacket - SALE", brand: "KidZone", price: 1490, compareAtPrice: 2990, category: "sale", subcategory: "sale-kids", images: [img("photo-1503919545889-aef636e10ad4")], sizes: ["4-5Y","6-7Y","8-9Y"], description: "Lightweight windbreaker at half price.", tags: ["clearance"], inStock: true, rating: 4.2, reviews: 19 },

  // Winter
  { id: "wn1", handle: "cashmere-sweater-women", title: "Cashmere Blend Turtleneck", brand: "Nordic", price: 5990, compareAtPrice: 8490, category: "winter-shop", subcategory: "winter-women", images: [img("photo-1576871337632-b9aef4c17ab9")], sizes: ["S","M","L"], colors: ["Cream","Grey","Burgundy"], description: "Soft cashmere blend turtleneck sweater.", tags: ["winter","bestseller"], inStock: true, rating: 4.8, reviews: 44 },
  { id: "wn2", handle: "thermal-socks-pack", title: "Thermal Wool Socks 3-Pack", brand: "WarmStep", price: 990, category: "winter-shop", subcategory: "winter-sweaters", images: [img("photo-1586350977771-b3b0abd50c82")], sizes: ["Free Size"], description: "Extra warm thermal socks for cold weather.", tags: ["winter"], inStock: true, rating: 4.5, reviews: 61 },

  // More products to fill out
  { id: "w9", handle: "palazzo-pants-women", title: "Wide Leg Palazzo Pants", brand: "Enem", price: 2290, category: "women", subcategory: "women-bottoms", images: [img("photo-1594633312681-425c7b97ccd1")], sizes: ["S","M","L","XL"], colors: ["Black","White","Navy"], description: "Flowing palazzo pants for effortless style.", tags: ["new"], inStock: true, rating: 4.3, reviews: 22 },
  { id: "w10", handle: "crossbody-bag-tan", title: "Leather Crossbody Bag", brand: "BagCraft", price: 3790, category: "women", subcategory: "women-accessories", images: [img("photo-1548036328-c9fa89d128fa")], colors: ["Tan","Black"], description: "Genuine leather crossbody bag with adjustable strap.", tags: ["bestseller"], inStock: true, rating: 4.6, reviews: 38 },
  { id: "m9", handle: "henley-tshirt-men", title: "Cotton Henley T-Shirt", brand: "Enem", price: 1490, category: "men", subcategory: "men-tshirts", images: [img("photo-1581655353564-df123a1eb820")], sizes: ["S","M","L","XL"], colors: ["White","Grey","Black"], description: "Comfortable cotton henley for casual days.", tags: [], inStock: true, rating: 4.2, reviews: 29 },
  { id: "m10", handle: "cargo-pants-olive", title: "Cargo Pants - Olive", brand: "Street", price: 3290, category: "men", subcategory: "men-bottoms", images: [img("photo-1517438476312-10d79c077509")], sizes: ["30","32","34","36"], description: "Utility cargo pants with multiple pockets.", tags: ["new"], inStock: true, rating: 4.4, reviews: 17 },
  { id: "c5", handle: "foundation-set", title: "Full Coverage Foundation", brand: "GlowUp", price: 1790, category: "cosmetics", subcategory: "cosmetics-makeup", images: [img("photo-1596462502278-27bfdc403348")], description: "24-hour full coverage liquid foundation.", tags: ["new"], inStock: true, rating: 4.5, reviews: 43 },
  { id: "f5", handle: "sandalwood-oud", title: "Sandalwood & Oud Intense", brand: "Arabique", price: 7490, compareAtPrice: 9990, category: "fragrances", subcategory: "fragrances-men", images: [img("photo-1587017539504-67cfbddac569")], description: "Intense woody fragrance with sandalwood and oud.", tags: ["bestseller"], inStock: true, rating: 4.9, reviews: 87 },
  { id: "f6", handle: "jasmine-nights", title: "Jasmine Nights EDP - Women", brand: "Fleurette", price: 4990, category: "fragrances", subcategory: "fragrances-women", images: [img("photo-1592945403244-b3fbafd7f539")], description: "Enchanting jasmine fragrance for evening wear.", tags: ["new"], inStock: true, rating: 4.7, reviews: 29 },
];

export const getProductsByCategory = (categoryHandle: string): Product[] =>
  products.filter(
    (p) => p.category === categoryHandle || p.subcategory === categoryHandle
  );

export const getBestSellers = (): Product[] =>
  products.filter((p) => p.tags.includes("bestseller"));

export const getNewArrivals = (): Product[] =>
  products.filter((p) => p.tags.includes("new"));

export const getSaleProducts = (): Product[] =>
  products.filter((p) => p.compareAtPrice && p.compareAtPrice > p.price);

export const getProductByHandle = (handle: string): Product | undefined =>
  products.find((p) => p.handle === handle);

export const formatPrice = (price: number): string =>
  `PKR ${price.toLocaleString()}`;

export const getSavePercentage = (price: number, compareAt: number): number =>
  Math.round(((compareAt - price) / compareAt) * 100);
