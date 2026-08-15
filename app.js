const productGrid = document.getElementById('productGrid');
const girlsGrid = document.getElementById('girlsGrid');
const boysGrid = document.getElementById('boysGrid');
const ordersGrid = document.getElementById('ordersGrid');
const searchInput = document.getElementById('searchInput');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const bagCount = document.getElementById('bagCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutButton = document.querySelector('.checkout-btn');

let products = [
  { id: 1, gender: 'girls', name: 'Velvet Satin Dress', category: 'Dresses', price: 2899, oldPrice: 4299, rating: 4.9, badge: 'New', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Elegant satin dress for events and parties with a flattering silhouette.', sizes: ['XS','S','M','L'] },
  { id: 2, gender: 'girls', name: 'Pastel Hoodie', category: 'Hoodies', price: 1699, oldPrice: 2399, rating: 4.8, badge: 'Trending', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A soft pastel hoodie designed for timeless comfort and style.', sizes: ['S','M','L','XL'] },
  { id: 3, gender: 'girls', name: 'Flare Denim', category: 'Denim', price: 2799, oldPrice: 3899, rating: 4.7, badge: 'Hot', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', description: 'Relaxed flare jeans with premium stretch for easy everyday movement.', sizes: ['24','26','28','30','32'] },
  { id: 4, gender: 'girls', name: 'Cropped Knit Top', category: 'Tops', price: 1499, oldPrice: 2199, rating: 4.8, badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'Light knit top created for elevated casual wear in every season.', sizes: ['XS','S','M','L'] },
  { id: 5, gender: 'girls', name: 'Belted Blazer', category: 'Jackets', price: 3399, oldPrice: 4999, rating: 4.9, badge: 'Editor Pick', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'Tailored blazer with a polished shape that brings structure to your look.', sizes: ['S','M','L','XL'] },
  { id: 6, gender: 'girls', name: 'Casual Maxi Skirt', category: 'Skirts', price: 2199, oldPrice: 2999, rating: 4.7, badge: 'Popular', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'Flowy maxi skirt for effortless movement and style around the clock.', sizes: ['S','M','L'] },
  { id: 7, gender: 'boys', name: 'Street Bomber', category: 'Jackets', price: 2699, oldPrice: 3899, rating: 4.9, badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'A modern bomber with durable finish and sharp street-ready vibes.', sizes: ['S','M','L','XL'] },
  { id: 8, gender: 'boys', name: 'Classic Polo', category: 'Polos', price: 1599, oldPrice: 2399, rating: 4.8, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Premium cotton polo built for clean detailing and all-day comfort.', sizes: ['S','M','L','XL'] },
  { id: 9, gender: 'boys', name: 'Cargo Denim', category: 'Denim', price: 2999, oldPrice: 4399, rating: 4.8, badge: 'New Drop', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'Structured cargo denim that pairs utility with a classic silhouette.', sizes: ['30','32','34','36'] },
  { id: 10, gender: 'boys', name: 'Active Tee Pack', category: 'Essentials', price: 1799, oldPrice: 2499, rating: 4.9, badge: 'Must Buy', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Feels soft, looks clean, and works for everyday layering.', sizes: ['S','M','L','XL'] },
  { id: 11, gender: 'girls', name: 'Soft Pleat Set', category: 'Sets', price: 3299, oldPrice: 4799, rating: 4.8, badge: 'Trending', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A coordinated set with gorgeous flow and graceful movement.', sizes: ['S','M','L'] },
  { id: 12, gender: 'boys', name: 'Athletic Hoodie', category: 'Hoodies', price: 2499, oldPrice: 3199, rating: 4.8, badge: 'Popular', image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80', description: 'A durable performance hoodie made for casual everyday wear.', sizes: ['S','M','L','XL'] },
  { id: 13, gender: 'girls', name: 'Floral Midi Dress', category: 'Dresses', price: 3099, oldPrice: 4499, rating: 4.9, badge: 'Limited', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A delicate floral midi dress with romantic details and premium fabric.', sizes: ['XS','S','M','L'] },
  { id: 14, gender: 'boys', name: 'Utility Shirt', category: 'Shirts', price: 1999, oldPrice: 2899, rating: 4.7, badge: 'New', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'Functional shirt with smart detailing for easy everyday style.', sizes: ['S','M','L','XL'] },
  { id: 15, gender: 'girls', name: 'Oversized White Tee', category: 'Tops', price: 1299, oldPrice: 1899, rating: 4.8, badge: 'Essentials', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'Soft oversized tee crafted for minimal lifestyle dressing.', sizes: ['XS','S','M','L'] },
  { id: 16, gender: 'boys', name: 'Canvas Sneaker', category: 'Footwear', price: 2299, oldPrice: 3499, rating: 4.9, badge: 'Hot', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', description: 'Classic canvas sneaker with everyday cushioning and durable grip.', sizes: ['6','7','8','9','10'] },
  { id: 17, gender: 'girls', name: 'Luxury Cardigan', category: 'Knitwear', price: 2799, oldPrice: 3999, rating: 4.8, badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Cozy cardigan with soft texture and a polished premium finish.', sizes: ['S','M','L','XL'] },
  { id: 18, gender: 'boys', name: 'Fleece Pullover', category: 'Sweaters', price: 2199, oldPrice: 3199, rating: 4.8, badge: 'Oliver', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Crisp and cozy fleece pullover made for cold weather and style.', sizes: ['S','M','L','XL'] },
  { id: 19, gender: 'girls', name: 'Pleated Lounge Set', category: 'Sets', price: 2899, oldPrice: 4099, rating: 4.9, badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A soft lounge set that balances relaxed comfort with polished design.', sizes: ['S','M','L'] },
  { id: 20, gender: 'boys', name: 'Striped Tee', category: 'Tops', price: 1399, oldPrice: 1999, rating: 4.7, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'A clean striped tee with a relaxed silhouette for effortless styling.', sizes: ['S','M','L','XL'] },
  { id: 21, gender: 'girls', name: 'Rose Windbreaker', category: 'Jackets', price: 2599, oldPrice: 3699, rating: 4.8, badge: 'Featured', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'Lightweight windbreaker with a soft feel and feminine finish.', sizes: ['S','M','L','XL'] },
  { id: 22, gender: 'boys', name: 'Oversized Shirt', category: 'Shirts', price: 1899, oldPrice: 2699, rating: 4.8, badge: 'New', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'Loose fit oversized shirt made for versatile layering.', sizes: ['S','M','L','XL'] },
  { id: 23, gender: 'girls', name: 'Soft Leather Sling', category: 'Accessories', price: 1299, oldPrice: 1799, rating: 4.8, badge: 'Add-on', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', description: 'A minimal sling bag designed for everyday essentials and styling.', sizes: ['One Size'] },
  { id: 24, gender: 'boys', name: 'Sport Watch', category: 'Accessories', price: 1999, oldPrice: 2899, rating: 4.7, badge: 'Popular', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', description: 'Clean sporty watch with a durable build and bold finish.', sizes: ['One Size'] },
  { id: 25, gender: 'girls', name: 'Cloud Knit Set', category: 'Sets', price: 3499, oldPrice: 5099, rating: 4.9, badge: 'Luxury', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A soft knit set made for cozy, elevated everyday outfits.', sizes: ['S','M','L'] },
  { id: 26, gender: 'boys', name: 'Runner Jacket', category: 'Jackets', price: 2799, oldPrice: 3899, rating: 4.8, badge: 'Sports', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'Performance jacket made for movement, comfort, and modern styling.', sizes: ['S','M','L','XL'] },
  { id: 27, gender: 'girls', name: 'Slim Rib Top', category: 'Tops', price: 1399, oldPrice: 2199, rating: 4.7, badge: 'New', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A figure-skimming rib top with a polished and breathable finish.', sizes: ['XS','S','M','L'] },
  { id: 28, gender: 'boys', name: 'Basic Crewneck', category: 'Sweaters', price: 1899, oldPrice: 2599, rating: 4.9, badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Exceptional comfort and timeless styling in a classic crewneck.', sizes: ['S','M','L','XL'] },
  { id: 29, gender: 'girls', name: 'Peri Pleat Dress', category: 'Dresses', price: 3199, oldPrice: 4599, rating: 4.8, badge: 'Featured', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Gorgeous pleated silhouette made to stand out in any seasonal look.', sizes: ['S','M','L'] },
  { id: 30, gender: 'boys', name: 'Trail Cargo', category: 'Cargo', price: 2499, oldPrice: 3499, rating: 4.8, badge: 'Must Buy', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'A relaxed cargo with utility pockets and a modern streetwear fit.', sizes: ['30','32','34','36'] },
  { id: 31, gender: 'girls', name: 'Pink Satin Blouse', category: 'Tops', price: 2199, oldPrice: 3199, rating: 4.9, badge: 'Trending', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'Soft satin blouse with polished details and comfortable drape.', sizes: ['S','M','L'] },
  { id: 32, gender: 'boys', name: 'Twill Chino', category: 'Trousers', price: 2199, oldPrice: 2999, rating: 4.7, badge: 'Classic', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', description: 'Clean chino fit designed for elevated everyday dressing.', sizes: ['30','32','34','36'] },
  { id: 33, gender: 'girls', name: 'Velvet Evening Gown', category: 'Dresses', price: 4299, oldPrice: 5999, rating: 5.0, badge: 'Premium', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'Luxury evening gown with rich texture and elegant styling.', sizes: ['S','M','L'] },
  { id: 34, gender: 'boys', name: 'Graphite Zip Hoodie', category: 'Hoodies', price: 2399, oldPrice: 3299, rating: 4.8, badge: 'Edition', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Minimal zip hoodie with easy layering and a premium finish.', sizes: ['S','M','L','XL'] },
  { id: 35, gender: 'girls', name: 'Ribbed Midi Skirt', category: 'Skirts', price: 2099, oldPrice: 2899, rating: 4.8, badge: 'Popular', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A fitted midi skirt with a smooth rib texture and clean shape.', sizes: ['S','M','L'] },
  { id: 36, gender: 'boys', name: 'Leather Slip Sneaker', category: 'Footwear', price: 2799, oldPrice: 3999, rating: 4.9, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', description: 'Sleek leather sneaker built for everyday comfort and polish.', sizes: ['6','7','8','9','10'] },
  { id: 37, gender: 'girls', name: 'Soft Twill Jacket', category: 'Jackets', price: 3299, oldPrice: 4599, rating: 4.8, badge: 'New', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'A twill jacket that adds effortless structure and versatility.', sizes: ['S','M','L','XL'] },
  { id: 38, gender: 'boys', name: 'Warm Knit Sweater', category: 'Sweaters', price: 2299, oldPrice: 3499, rating: 4.9, badge: 'Seasonal', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'Chunky knit sweater for chilly days and modern layering.', sizes: ['S','M','L','XL'] },
  { id: 39, gender: 'girls', name: 'Mini Crossbody', category: 'Accessories', price: 1199, oldPrice: 1899, rating: 4.7, badge: 'Add-on', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', description: 'Compact bag that keeps essentials organized and easy to carry.', sizes: ['One Size'] },
  { id: 40, gender: 'boys', name: 'Canvas Travel Pack', category: 'Accessories', price: 1499, oldPrice: 2299, rating: 4.8, badge: 'Popular', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', description: 'A travel-ready pack that blends durability with modern utility.', sizes: ['One Size'] },
  { id: 41, gender: 'girls', name: 'Lace Party Top', category: 'Tops', price: 1899, oldPrice: 2799, rating: 4.8, badge: 'Festive', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'Light and elegant lace top with delicate detailing and a soft drape.', sizes: ['XS','S','M','L'] },
  { id: 42, gender: 'boys', name: 'Smart Casual Shirt', category: 'Shirts', price: 2099, oldPrice: 3199, rating: 4.9, badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'A tailored casual shirt with premium finish and comfortable fit.', sizes: ['S','M','L','XL'] },
  { id: 43, gender: 'girls', name: 'Crochet Cardigan', category: 'Knitwear', price: 2799, oldPrice: 3999, rating: 4.9, badge: 'Soft', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Delicate crochet details with a cozy knit base for everyday layering.', sizes: ['S','M','L'] },
  { id: 44, gender: 'boys', name: 'Workwear Jacket', category: 'Jackets', price: 3199, oldPrice: 4599, rating: 4.8, badge: 'Trending', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'A work-ready jacket with premium utility details and a rugged finish.', sizes: ['S','M','L','XL'] },
  { id: 45, gender: 'girls', name: 'Pearl Ribbon Dress', category: 'Dresses', price: 3899, oldPrice: 5499, rating: 5.0, badge: 'Premium', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A graceful pearl-accented dress made for special events.', sizes: ['S','M','L'] },
  { id: 46, gender: 'boys', name: 'Thermal Hoodie', category: 'Hoodies', price: 2499, oldPrice: 3399, rating: 4.7, badge: 'Warm', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Insulated thermal hoodie with soft inner lining for colder days.', sizes: ['S','M','L','XL'] },
  { id: 47, gender: 'girls', name: 'Wide Leg Linen', category: 'Trousers', price: 2199, oldPrice: 3299, rating: 4.8, badge: 'Summer', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', description: 'Wide-leg linen trousers with a relaxed silhouette and airy feel.', sizes: ['S','M','L'] },
  { id: 48, gender: 'boys', name: 'Athletic Shorts', category: 'Shorts', price: 1499, oldPrice: 2199, rating: 4.8, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'Lightweight athletic shorts made for easy movement and daily wear.', sizes: ['S','M','L','XL'] },
  { id: 49, gender: 'girls', name: 'Cotton Daily Set', category: 'Sets', price: 2699, oldPrice: 3799, rating: 4.7, badge: 'Office', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A chic set that transitions beautifully between casual and elevated looks.', sizes: ['S','M','L'] },
  { id: 50, gender: 'boys', name: 'Dry Fit Tee', category: 'Tops', price: 1399, oldPrice: 2199, rating: 4.8, badge: 'Best Buy', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Breathable dry-fit tee made for active days and relaxed fits.', sizes: ['S','M','L','XL'] },
  { id: 51, gender: 'girls', name: 'Sunset Wrap Dress', category: 'Dresses', price: 3199, oldPrice: 4699, rating: 4.9, badge: 'Featured', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A wrap dress designed to flatter the body and elevate everyday styling.', sizes: ['S','M','L'] },
  { id: 52, gender: 'boys', name: 'Classic Leather Belt', category: 'Accessories', price: 999, oldPrice: 1499, rating: 4.7, badge: 'Add-on', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', description: 'A bold leather belt that adds a refined finishing touch to any outfit.', sizes: ['One Size'] },
  { id: 53, gender: 'girls', name: 'Petal Knit Sweater', category: 'Sweaters', price: 2399, oldPrice: 3299, rating: 4.8, badge: 'Loved', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A warm knit sweater with a tactile finish and soft pastel tone.', sizes: ['S','M','L'] },
  { id: 54, gender: 'boys', name: 'Utility Cargo', category: 'Cargo', price: 2499, oldPrice: 3599, rating: 4.8, badge: 'Trending', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'A utility cargo built for everyday function and casual style.', sizes: ['30','32','34','36'] },
  { id: 55, gender: 'girls', name: 'Royal Satin Skirt', category: 'Skirts', price: 2099, oldPrice: 2999, rating: 4.8, badge: 'Hot', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'Silky satin skirt that creates graceful movement and refined styling.', sizes: ['S','M','L'] },
  { id: 56, gender: 'boys', name: 'Puffer Jacket', category: 'Jackets', price: 3599, oldPrice: 5299, rating: 4.9, badge: 'Winter', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'Comfortable puffer jacket built to keep you warm and sharp.', sizes: ['S','M','L','XL'] },
  { id: 57, gender: 'girls', name: 'Mesh Layer Top', category: 'Tops', price: 1599, oldPrice: 2299, rating: 4.7, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'Layer-friendly mesh design with easy elegance and a clean finish.', sizes: ['XS','S','M','L'] },
  { id: 58, gender: 'boys', name: 'Herringbone Shirt', category: 'Shirts', price: 2199, oldPrice: 3099, rating: 4.8, badge: 'Classic', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'Textured shirt with classic herringbone details for refined looks.', sizes: ['S','M','L','XL'] },
  { id: 59, gender: 'girls', name: 'Daylight Layer Set', category: 'Sets', price: 2999, oldPrice: 4299, rating: 4.9, badge: 'Popular', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A polished layering set with a soft silhouette and premium touch.', sizes: ['S','M','L'] },
  { id: 60, gender: 'boys', name: 'Classic Sweatshirt', category: 'Sweaters', price: 2199, oldPrice: 3099, rating: 4.8, badge: 'Comfort', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Everyday sweatshirt with soft brushed interior and easy fit.', sizes: ['S','M','L','XL'] },
  { id: 61, gender: 'girls', name: 'Soft Flame Dress', category: 'Dresses', price: 3399, oldPrice: 4999, rating: 4.9, badge: 'New', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A refined dress with movement, soft shine, and effortless elegance.', sizes: ['S','M','L'] },
  { id: 62, gender: 'boys', name: 'Lite Track Jacket', category: 'Jackets', price: 2599, oldPrice: 3899, rating: 4.8, badge: 'Sport', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'A light athletic jacket built for comfort and motion.', sizes: ['S','M','L','XL'] },
  { id: 63, gender: 'girls', name: 'Silver Tone Bag', category: 'Accessories', price: 1399, oldPrice: 2199, rating: 4.7, badge: 'Add-on', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', description: 'Fashion-forward sling bag with minimal finishing and everyday utility.', sizes: ['One Size'] },
  { id: 64, gender: 'boys', name: 'Active Cap', category: 'Accessories', price: 899, oldPrice: 1399, rating: 4.6, badge: 'Street', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', description: 'Classic cap with soft structure and a sporty finish.', sizes: ['One Size'] },
  { id: 65, gender: 'girls', name: 'Sequin Glow Top', category: 'Tops', price: 1899, oldPrice: 2899, rating: 4.8, badge: 'Festive', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'Body-skimming glam top with subtle sparkle and polished finish.', sizes: ['XS','S','M','L'] },
  { id: 66, gender: 'boys', name: 'Horizon Joggers', category: 'Joggers', price: 1799, oldPrice: 2599, rating: 4.8, badge: 'Popular', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'Soft cotton jogger made for comfort without losing the tailored feel.', sizes: ['S','M','L','XL'] },
  { id: 67, gender: 'girls', name: 'Velvet Lounge Set', category: 'Sets', price: 3299, oldPrice: 4799, rating: 4.9, badge: 'Cozy', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Soft lounge set for easy daywear with elegant polish.', sizes: ['S','M','L'] },
  { id: 68, gender: 'boys', name: 'Woven Overshirt', category: 'Shirts', price: 2399, oldPrice: 3299, rating: 4.8, badge: 'Classic', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'A textured overshirt with an elevated silhouette and bold finish.', sizes: ['S','M','L','XL'] },
  { id: 69, gender: 'girls', name: 'Soft Denim Mini', category: 'Denim', price: 2199, oldPrice: 3199, rating: 4.7, badge: 'Street', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', description: 'A fitted denim mini with classic detailing and premium stretch.', sizes: ['S','M','L'] },
  { id: 70, gender: 'boys', name: 'Cotton Overshirt', category: 'Shirts', price: 2299, oldPrice: 3299, rating: 4.8, badge: 'New', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'Functional overshirt with a relaxed fit for casual layering.', sizes: ['S','M','L','XL'] },
  { id: 71, gender: 'girls', name: 'Silky Slip Skirt', category: 'Skirts', price: 1999, oldPrice: 2799, rating: 4.7, badge: 'Trending', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'Satin slip skirt with graceful drape and simple elegance.', sizes: ['S','M','L'] },
  { id: 72, gender: 'boys', name: 'Brushed Hoodie', category: 'Hoodies', price: 2199, oldPrice: 2999, rating: 4.8, badge: 'Warm', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Brushed interior and clean shape built for daily wear.', sizes: ['S','M','L','XL'] },
  { id: 73, gender: 'girls', name: 'Marble Print Dress', category: 'Dresses', price: 3099, oldPrice: 4699, rating: 4.9, badge: 'Trend', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Modern printed dress with a premium, polished finish.', sizes: ['S','M','L'] },
  { id: 74, gender: 'boys', name: 'Camo Jacket', category: 'Jackets', price: 3299, oldPrice: 4899, rating: 4.8, badge: 'Adventure', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'Camo-inspired jacket that blends utility with street style.', sizes: ['S','M','L','XL'] },
  { id: 75, gender: 'girls', name: 'Lemon Knit Set', category: 'Sets', price: 3199, oldPrice: 4499, rating: 4.8, badge: 'Sunny', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A bright knit set with soft texture and a cheerful finish.', sizes: ['S','M','L'] },
  { id: 76, gender: 'boys', name: 'Trail Hoodie', category: 'Hoodies', price: 2599, oldPrice: 3799, rating: 4.9, badge: 'Mountain', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Trail-ready hoodie with a relaxed fit and everyday comfort.', sizes: ['S','M','L','XL'] },
  { id: 77, gender: 'girls', name: 'Pearl Heels', category: 'Footwear', price: 2499, oldPrice: 3499, rating: 4.8, badge: 'Party', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', description: 'Refined pearls and sleek heel design for special occasions.', sizes: ['5','6','7','8'] },
  { id: 78, gender: 'boys', name: 'Satin Bomber', category: 'Jackets', price: 3199, oldPrice: 4499, rating: 4.9, badge: 'Luxury', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A sleek bomber with smooth finish and a high-end look.', sizes: ['S','M','L','XL'] },
  { id: 79, gender: 'girls', name: 'Zebra Knit Top', category: 'Tops', price: 1699, oldPrice: 2499, rating: 4.7, badge: 'Statement', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A graphic knit top that adds confidence to everyday styling.', sizes: ['XS','S','M','L'] },
  { id: 80, gender: 'boys', name: 'Safari Shirt', category: 'Shirts', price: 2199, oldPrice: 3199, rating: 4.8, badge: 'Smart', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'Utility-inspired safari shirt with a polished rugged finish.', sizes: ['S','M','L','XL'] },
  { id: 81, gender: 'girls', name: 'Lila Pleated Skirt', category: 'Skirts', price: 2199, oldPrice: 3199, rating: 4.8, badge: 'Lovely', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'Soft pleats and premium fabric create a graceful silhouette.', sizes: ['S','M','L'] },
  { id: 82, gender: 'boys', name: 'Prime Denim', category: 'Denim', price: 2899, oldPrice: 4099, rating: 4.9, badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', description: 'Prime-fit denim with timeless styling and premium comfort.', sizes: ['30','32','34','36'] },
  { id: 83, gender: 'girls', name: 'Striped Co-ord', category: 'Sets', price: 2999, oldPrice: 4399, rating: 4.8, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Modern striped coordinates styled for confident everyday wear.', sizes: ['S','M','L'] },
  { id: 84, gender: 'boys', name: 'City Hoodie', category: 'Hoodies', price: 2099, oldPrice: 2799, rating: 4.8, badge: 'Popular', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'A handy city hoodie with clean lines and everyday ease.', sizes: ['S','M','L','XL'] },
  { id: 85, gender: 'girls', name: 'Satin Wrap Top', category: 'Tops', price: 1799, oldPrice: 2599, rating: 4.8, badge: 'New', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'Satin wrap top with soft drape and polished finish.', sizes: ['S','M','L'] },
  { id: 86, gender: 'boys', name: 'Grid Tee', category: 'Tops', price: 1299, oldPrice: 1899, rating: 4.7, badge: 'Everyday', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Minimal graphic tee with a comfortable fit and clean design.', sizes: ['S','M','L','XL'] },
  { id: 87, gender: 'girls', name: 'Luna Knit Dress', category: 'Dresses', price: 3499, oldPrice: 4899, rating: 4.9, badge: 'Premium', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'An elegant knit dress built for graceful movement and elevated styling.', sizes: ['S','M','L'] },
  { id: 88, gender: 'boys', name: 'Hybrid Runner', category: 'Footwear', price: 2599, oldPrice: 3799, rating: 4.8, badge: 'Sport', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', description: 'Everyday runner with cushioned comfort and polished finish.', sizes: ['6','7','8','9','10'] },
  { id: 89, gender: 'girls', name: 'Mint Utility Jacket', category: 'Jackets', price: 2899, oldPrice: 4199, rating: 4.8, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'Utility jacket with a soft palette and subtle modern detailing.', sizes: ['S','M','L','XL'] },
  { id: 90, gender: 'boys', name: 'Harmony Cargo', category: 'Cargo', price: 2599, oldPrice: 3599, rating: 4.8, badge: 'Featured', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'A roomy cargo with easy movement and practical detail.', sizes: ['30','32','34','36'] },
  { id: 91, gender: 'girls', name: 'Crescent Pleat Top', category: 'Tops', price: 1699, oldPrice: 2499, rating: 4.7, badge: 'Popular', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'Pleated detail and soft cotton build for polished daily wear.', sizes: ['XS','S','M','L'] },
  { id: 92, gender: 'boys', name: 'Signature Watch', category: 'Accessories', price: 2699, oldPrice: 3799, rating: 4.9, badge: 'Premium', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', description: 'A premium watch with a clean face and refined urban look.', sizes: ['One Size'] },
  { id: 93, gender: 'girls', name: 'Rose Shirt Set', category: 'Sets', price: 3299, oldPrice: 4699, rating: 4.8, badge: 'New', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A coordinated shirt set with effortless polish and clean lines.', sizes: ['S','M','L'] },
  { id: 94, gender: 'boys', name: 'Cotton Military Shirt', category: 'Shirts', price: 2299, oldPrice: 3299, rating: 4.8, badge: 'Utility', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'Military-inspired shirt with classic utility lines and comfort.', sizes: ['S','M','L','XL'] },
  { id: 95, gender: 'girls', name: 'Iris Knit Top', category: 'Tops', price: 1799, oldPrice: 2599, rating: 4.8, badge: 'Soft', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A soft knit top with texture and slight stretch for comfort.', sizes: ['XS','S','M','L'] },
  { id: 96, gender: 'boys', name: 'Cloud Camisole', category: 'Shirts', price: 1499, oldPrice: 2199, rating: 4.6, badge: 'Easy', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Lightweight layer shirt made for warm weather and comfort.', sizes: ['S','M','L','XL'] },
  { id: 97, gender: 'girls', name: 'Peach Pleat Set', category: 'Sets', price: 2899, oldPrice: 3999, rating: 4.8, badge: 'Lovely', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A soft peach shade pleated set with modern everyday styling.', sizes: ['S','M','L'] },
  { id: 98, gender: 'boys', name: 'Urban Scout Tee', category: 'Tops', price: 1499, oldPrice: 2199, rating: 4.8, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'A relaxed tee with modern graphic inspiration and premium feel.', sizes: ['S','M','L','XL'] },
  { id: 99, gender: 'girls', name: 'Summer Slip Dress', category: 'Dresses', price: 3199, oldPrice: 4699, rating: 4.9, badge: 'Arrival', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A breezy slip dress ideal for sunlit days and elegant evenings.', sizes: ['S','M','L'] },
  { id: 100, gender: 'boys', name: 'Luxe Track Pants', category: 'Joggers', price: 2399, oldPrice: 3299, rating: 4.9, badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'Premium track pants with soft finish and easy motion.', sizes: ['S','M','L','XL'] },
  { id: 101, gender: 'girls', name: 'Velvet Dot Top', category: 'Tops', price: 1799, oldPrice: 2499, rating: 4.7, badge: 'Popular', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'Soft dotted texture top with a stylish feminine touch.', sizes: ['XS','S','M','L'] },
  { id: 102, gender: 'boys', name: 'Contour Denim', category: 'Denim', price: 2899, oldPrice: 4099, rating: 4.8, badge: 'Clean', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', description: 'Clean, modern denim with contour fit and durable fabric.', sizes: ['30','32','34','36'] },
  { id: 103, gender: 'girls', name: 'Glossy Evening Set', category: 'Sets', price: 3499, oldPrice: 4999, rating: 5.0, badge: 'Luxury', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A glossy coordinated set that brings polish to any event look.', sizes: ['S','M','L'] },
  { id: 104, gender: 'boys', name: 'Shell Utility Jacket', category: 'Jackets', price: 2999, oldPrice: 4399, rating: 4.8, badge: 'Utility', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'A structured utility jacket with soft touch comfort.', sizes: ['S','M','L','XL'] },
  { id: 105, gender: 'girls', name: 'Aura Pleat Dress', category: 'Dresses', price: 3399, oldPrice: 4899, rating: 4.9, badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A graceful pleated dress with an elegant, fluid finish.', sizes: ['S','M','L'] },
  { id: 106, gender: 'boys', name: 'Sport Knit Pullover', category: 'Sweaters', price: 2499, oldPrice: 3599, rating: 4.9, badge: 'Athletic', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Lightweight knit pullover for all-day comfort and active styling.', sizes: ['S','M','L','XL'] },
  { id: 107, gender: 'girls', name: 'Skyline Breezy Shirt', category: 'Shirts', price: 1799, oldPrice: 2699, rating: 4.7, badge: 'Soft', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'A light breezy shirt designed to move with your day.', sizes: ['S','M','L'] },
  { id: 108, gender: 'boys', name: 'Trail Windbreaker', category: 'Jackets', price: 2799, oldPrice: 3899, rating: 4.8, badge: 'Adventure', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'Windbreaker made for daily movement and easy layering.', sizes: ['S','M','L','XL'] },
  { id: 109, gender: 'girls', name: 'Bloom Satin Top', category: 'Tops', price: 2199, oldPrice: 3199, rating: 4.8, badge: 'Premium', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A satin top with smooth flow and understated elegance.', sizes: ['S','M','L'] },
  { id: 110, gender: 'boys', name: 'Summit Shorts', category: 'Shorts', price: 1599, oldPrice: 2399, rating: 4.7, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'Flexible shorts with an easy fit for active and casual days.', sizes: ['S','M','L','XL'] },
  { id: 111, gender: 'girls', name: 'Satin Night Set', category: 'Sets', price: 2999, oldPrice: 4299, rating: 4.9, badge: 'Night', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A luxe satin set designed to feel smooth and elegant.', sizes: ['S','M','L'] },
  { id: 112, gender: 'boys', name: 'Quiet Runner', category: 'Footwear', price: 2799, oldPrice: 3999, rating: 4.9, badge: 'Quiet', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', description: 'Everyday running sneaker built for all-day cushioning and support.', sizes: ['6','7','8','9','10'] },
  { id: 113, gender: 'girls', name: 'Mini Denim Shirt', category: 'Shirts', price: 1899, oldPrice: 2899, rating: 4.7, badge: 'Denim', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'A light denim shirt with classic edge and modern fit.', sizes: ['S','M','L'] },
  { id: 114, gender: 'boys', name: 'Heritage Polo', category: 'Polos', price: 1799, oldPrice: 2499, rating: 4.8, badge: 'Classic', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Classic heritage polo with a clean finish and premium look.', sizes: ['S','M','L','XL'] },
  { id: 115, gender: 'girls', name: 'Pearl Mini Set', category: 'Sets', price: 3399, oldPrice: 4899, rating: 4.9, badge: 'Party', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A pearl-accented set made for stylish evenings and events.', sizes: ['S','M','L'] },
  { id: 116, gender: 'boys', name: 'Pioneer Jacket', category: 'Jackets', price: 3299, oldPrice: 4699, rating: 4.9, badge: 'New', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'A premium jacket with rugged finish and sharp modern details.', sizes: ['S','M','L','XL'] },
  { id: 117, gender: 'girls', name: 'Cream Rib Top', category: 'Tops', price: 1499, oldPrice: 2199, rating: 4.7, badge: 'Soft', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'Cream ribbed top with soft stretch and minimal styling.', sizes: ['XS','S','M','L'] },
  { id: 118, gender: 'boys', name: 'Wool Knit Vest', category: 'Knitwear', price: 2199, oldPrice: 3299, rating: 4.8, badge: 'Modern', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'A warm knit vest ideal for layering in style.', sizes: ['S','M','L','XL'] },
  { id: 119, gender: 'girls', name: 'Dusk Jersey Dress', category: 'Dresses', price: 2999, oldPrice: 4299, rating: 4.8, badge: 'Soft', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Jersey dress with a soft drape and modern body shape.', sizes: ['S','M','L'] },
  { id: 120, gender: 'boys', name: 'Navy Utility Shorts', category: 'Shorts', price: 1499, oldPrice: 2299, rating: 4.8, badge: 'Easy', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'Easy utility short with a relaxed fit for everyday wear.', sizes: ['S','M','L','XL'] },
  { id: 121, gender: 'girls', name: 'Cloud Knit Co-ord', category: 'Sets', price: 3299, oldPrice: 4599, rating: 4.9, badge: 'Comfy', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A comforting co-ord set with refined knit construction.', sizes: ['S','M','L'] },
  { id: 122, gender: 'boys', name: 'Breeze Track Top', category: 'Tops', price: 1699, oldPrice: 2499, rating: 4.7, badge: 'Light', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Easy track top with soft hand-feel and relaxed fit.', sizes: ['S','M','L','XL'] },
  { id: 123, gender: 'girls', name: 'Dusk Satin Skirt', category: 'Skirts', price: 2199, oldPrice: 3199, rating: 4.8, badge: 'Trending', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A satin skirt that feels soft, elegant, and easy to style.', sizes: ['S','M','L'] },
  { id: 124, gender: 'boys', name: 'Subtle Graphic Tee', category: 'Tops', price: 1299, oldPrice: 1999, rating: 4.7, badge: 'Graphic', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Graphic tee with understated print and everyday versatility.', sizes: ['S','M','L','XL'] },
  { id: 125, gender: 'girls', name: 'Petal Co-ord', category: 'Sets', price: 3199, oldPrice: 4399, rating: 4.8, badge: 'Lovely', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'Co-ord outfit with soft palette and feminine detailing.', sizes: ['S','M','L'] },
  { id: 126, gender: 'boys', name: 'Urban Softshell', category: 'Jackets', price: 3299, oldPrice: 4699, rating: 4.9, badge: 'Urban', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'Modern softshell jacket with lightweight protection and style.', sizes: ['S','M','L','XL'] },
  { id: 127, gender: 'girls', name: 'Ocean Wave Dress', category: 'Dresses', price: 3499, oldPrice: 4999, rating: 4.9, badge: 'Draped', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'Fluid dress with elegant wave-inspired silhouette and soft drape.', sizes: ['S','M','L'] },
  { id: 128, gender: 'boys', name: 'Monsoon Hoodie', category: 'Hoodies', price: 2399, oldPrice: 3299, rating: 4.8, badge: 'Rain', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Weather-ready hoodie with clean everyday finish and comfort.', sizes: ['S','M','L','XL'] },
  { id: 129, gender: 'girls', name: 'Blush Crochet Top', category: 'Tops', price: 1699, oldPrice: 2499, rating: 4.8, badge: 'Soft', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'Delicate crochet top with feminine texture and relaxed shape.', sizes: ['XS','S','M','L'] },
  { id: 130, gender: 'boys', name: 'Granite Bomber', category: 'Jackets', price: 3099, oldPrice: 4499, rating: 4.8, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A sleek bomber in a cool granite tone with a clean finish.', sizes: ['S','M','L','XL'] },
  { id: 131, gender: 'girls', name: 'Pearl Pleat Set', category: 'Sets', price: 3399, oldPrice: 4899, rating: 4.9, badge: 'Luxury', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'The perfect set for elevated daywear and polished evening looks.', sizes: ['S','M','L'] },
  { id: 132, gender: 'boys', name: 'Ridge Tee', category: 'Tops', price: 1399, oldPrice: 2099, rating: 4.7, badge: 'Style', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A textured ridge tee that stays modern and comfortable.', sizes: ['S','M','L','XL'] },
  { id: 133, gender: 'girls', name: 'Rosewood Skirt', category: 'Skirts', price: 2199, oldPrice: 3199, rating: 4.8, badge: 'Warm', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'Flowing rosewood skirt with beauty in every movement.', sizes: ['S','M','L'] },
  { id: 134, gender: 'boys', name: 'Tactical Parka', category: 'Jackets', price: 3899, oldPrice: 5299, rating: 4.9, badge: 'Winter', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'Cold-weather parka with durable finish and relaxed comfort.', sizes: ['S','M','L','XL'] },
  { id: 135, gender: 'girls', name: 'Tea Rose Dress', category: 'Dresses', price: 3499, oldPrice: 4999, rating: 4.8, badge: 'Featured', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'Soft rose-toned dress designed for day-to-evening transitions.', sizes: ['S','M','L'] },
  { id: 136, gender: 'boys', name: 'Metro Polo', category: 'Polos', price: 1899, oldPrice: 2799, rating: 4.8, badge: 'Smart', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'A polished polo that feels easy and refined all day.', sizes: ['S','M','L','XL'] },
  { id: 137, gender: 'girls', name: 'Velvet Ribbon Tote', category: 'Accessories', price: 1499, oldPrice: 2399, rating: 4.7, badge: 'New', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', description: 'Elegant ribbon tote for carrying essentials with a fashion touch.', sizes: ['One Size'] },
  { id: 138, gender: 'boys', name: 'Pilot Cap', category: 'Accessories', price: 899, oldPrice: 1299, rating: 4.6, badge: 'Add-on', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', description: 'Classic cap with a fashion-ready finish and everyday utility.', sizes: ['One Size'] },
  { id: 139, gender: 'girls', name: 'Citrus Knit Dress', category: 'Dresses', price: 3299, oldPrice: 4499, rating: 4.8, badge: 'Sunlit', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'Bright citrus tones with a knit dress silhouette that feels polished.', sizes: ['S','M','L'] },
  { id: 140, gender: 'boys', name: 'Orbit Hoodie', category: 'Hoodies', price: 2399, oldPrice: 3299, rating: 4.8, badge: 'New', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'A sleek orbit hoodie built for relaxed city styling.', sizes: ['S','M','L','XL'] },
  { id: 141, gender: 'girls', name: 'Pearl Sandals', category: 'Footwear', price: 1999, oldPrice: 2999, rating: 4.8, badge: 'Party', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', description: 'Delicate pearl sandal with comfort-focused sole and elegant finish.', sizes: ['5','6','7','8'] },
  { id: 142, gender: 'boys', name: 'Nylon Track Set', category: 'Sets', price: 2699, oldPrice: 3899, rating: 4.8, badge: 'Active', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'A lightweight match set designed for movement and daily activity.', sizes: ['S','M','L','XL'] },
  { id: 143, gender: 'girls', name: 'Moonlight Blazer', category: 'Jackets', price: 3499, oldPrice: 4899, rating: 4.9, badge: 'Luxury', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'Soft structured blazer that brings professionalism and flow together.', sizes: ['S','M','L'] },
  { id: 144, gender: 'boys', name: 'Cable Knit Tee', category: 'Tops', price: 1699, oldPrice: 2499, rating: 4.7, badge: 'Textured', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A cable-knit tee with elevated texture and comfortable fit.', sizes: ['S','M','L','XL'] },
  { id: 145, gender: 'girls', name: 'Rose Milk Sweater', category: 'Sweaters', price: 2499, oldPrice: 3499, rating: 4.8, badge: 'Cozy', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'Soft pastel sweater with a plush feel for cooler weather.', sizes: ['S','M','L'] },
  { id: 146, gender: 'boys', name: 'Classic Utility Vest', category: 'Vests', price: 1999, oldPrice: 2899, rating: 4.7, badge: 'Layer', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'A practical vest that layers perfectly over everyday essentials.', sizes: ['S','M','L','XL'] },
  { id: 147, gender: 'girls', name: 'Glow Knit Set', category: 'Sets', price: 3299, oldPrice: 4599, rating: 4.9, badge: 'Popular', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A knit set with premium tactility and refined styling.', sizes: ['S','M','L'] },
  { id: 148, gender: 'boys', name: 'Coastal Bomber', category: 'Jackets', price: 3199, oldPrice: 4199, rating: 4.8, badge: 'Coastal', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'Cool coastal bomber with modern silhouette and premium finish.', sizes: ['S','M','L','XL'] },
  { id: 149, gender: 'girls', name: 'Mint Co-ord', category: 'Sets', price: 3099, oldPrice: 4399, rating: 4.8, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A cool mint-toned set layered for comfort and visual balance.', sizes: ['S','M','L'] },
  { id: 150, gender: 'boys', name: 'Luxe Cargo Tee', category: 'Tops', price: 1799, oldPrice: 2699, rating: 4.8, badge: 'Trend', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Cargo-inspired tee with toned details and a sharp silhouette.', sizes: ['S','M','L','XL'] },
  { id: 151, gender: 'girls', name: 'Ash Knit Skirt', category: 'Skirts', price: 2199, oldPrice: 3199, rating: 4.8, badge: 'Soft', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'An ash-toned knit skirt with premium texture and movement.', sizes: ['S','M','L'] },
  { id: 152, gender: 'boys', name: 'Stone Utility Shirt', category: 'Shirts', price: 1899, oldPrice: 2599, rating: 4.7, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'A smart utility shirt designed for effortless styling.', sizes: ['S','M','L','XL'] },
  { id: 153, gender: 'girls', name: 'Velvet Haze Cardigan', category: 'Knitwear', price: 2799, oldPrice: 3899, rating: 4.8, badge: 'Soft', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A plush cardigan for lightweight warmth and a premium feel.', sizes: ['S','M','L'] },
  { id: 154, gender: 'boys', name: 'Signal Cargo', category: 'Cargo', price: 2699, oldPrice: 3999, rating: 4.8, badge: 'New', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'Updated cargo silhouette built for practical urban wear.', sizes: ['30','32','34','36'] },
  { id: 155, gender: 'girls', name: 'Flare Knit Dress', category: 'Dresses', price: 3399, oldPrice: 4899, rating: 4.9, badge: 'Premium', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A knit dress with flared shape and refined elegance.', sizes: ['S','M','L'] },
  { id: 156, gender: 'boys', name: 'Urban Twill Shirt', category: 'Shirts', price: 2199, oldPrice: 3199, rating: 4.8, badge: 'Modern', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'A structured twill shirt for smart casual style.', sizes: ['S','M','L','XL'] },
  { id: 157, gender: 'girls', name: 'Cream Puff Set', category: 'Sets', price: 2999, oldPrice: 4399, rating: 4.8, badge: 'Sweet', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'Cute and polished cream set with elegant neutral style.', sizes: ['S','M','L'] },
  { id: 158, gender: 'boys', name: 'Drift Pullover', category: 'Sweaters', price: 2299, oldPrice: 3299, rating: 4.8, badge: 'Popular', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'A soft pullover with a timeless cut and winter-ready warmth.', sizes: ['S','M','L','XL'] },
  { id: 159, gender: 'girls', name: 'Violet Layer Top', category: 'Tops', price: 1699, oldPrice: 2499, rating: 4.7, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A vivid violet layer top with relaxed tailoring and comfort.', sizes: ['XS','S','M','L'] },
  { id: 160, gender: 'boys', name: 'Night Shift Hoodie', category: 'Hoodies', price: 2499, oldPrice: 3699, rating: 4.9, badge: 'Dark', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Dark-toned hoodie for effortless late-night city styling.', sizes: ['S','M','L','XL'] },
  { id: 161, gender: 'girls', name: 'Breezy Floral Set', category: 'Sets', price: 3199, oldPrice: 4599, rating: 4.9, badge: 'Floral', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A light floral set with a fresh pattern and comfortable drape.', sizes: ['S','M','L'] },
  { id: 162, gender: 'boys', name: 'Sculpted Canvas', category: 'Footwear', price: 2499, oldPrice: 3599, rating: 4.8, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', description: 'A sculpted casual sneaker with cushioned support and casual finish.', sizes: ['6','7','8','9','10'] },
  { id: 163, gender: 'girls', name: 'Misty Short Sleeve', category: 'Tops', price: 1399, oldPrice: 2199, rating: 4.7, badge: 'Airy', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A soft airy short-sleeve top for everyday ease and polish.', sizes: ['XS','S','M','L'] },
  { id: 164, gender: 'boys', name: 'Warmstreet Hoodie', category: 'Hoodies', price: 2399, oldPrice: 3399, rating: 4.8, badge: 'Street', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Street-wear inspired hoodie with warm interior and modern fit.', sizes: ['S','M','L','XL'] },
  { id: 165, gender: 'girls', name: 'Cafe Tone Set', category: 'Sets', price: 2799, oldPrice: 3899, rating: 4.8, badge: 'Easy', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A light café-tone set designed for simple comfort and style.', sizes: ['S','M','L'] },
  { id: 166, gender: 'boys', name: 'Focus Tee', category: 'Tops', price: 1299, oldPrice: 1899, rating: 4.7, badge: 'New', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A focused everyday tee with soft touch and clean design.', sizes: ['S','M','L','XL'] },
  { id: 167, gender: 'girls', name: 'Sash Belt Dress', category: 'Dresses', price: 3599, oldPrice: 4999, rating: 4.9, badge: 'Belted', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A sash-belt dress that defines the waist with graceful ease.', sizes: ['S','M','L'] },
  { id: 168, gender: 'boys', name: 'Shadow Cargo', category: 'Cargo', price: 2799, oldPrice: 3999, rating: 4.8, badge: 'Urban', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'Shadow-colored cargo with all-day comfort and utility pockets.', sizes: ['30','32','34','36'] },
  { id: 169, gender: 'girls', name: 'Ash Sheen Dress', category: 'Dresses', price: 3899, oldPrice: 5499, rating: 4.9, badge: 'Luxury', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A sheen-satin dress in ash tones for evening elegance.', sizes: ['S','M','L'] },
  { id: 170, gender: 'boys', name: 'Stone Pullover', category: 'Sweaters', price: 2299, oldPrice: 3299, rating: 4.8, badge: 'Classic', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Stone-toned pullover created for clean layering and comfort.', sizes: ['S','M','L','XL'] },
  { id: 171, gender: 'girls', name: 'Ivory Lace Top', category: 'Tops', price: 1999, oldPrice: 2799, rating: 4.8, badge: 'Delicate', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'Delicate ivory lace top designed for day-to-night versatility.', sizes: ['XS','S','M','L'] },
  { id: 172, gender: 'boys', name: 'Fusion Tee', category: 'Tops', price: 1499, oldPrice: 2199, rating: 4.7, badge: 'New', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A fusion-inspired tee with subtle contrast and relaxed fit.', sizes: ['S','M','L','XL'] },
  { id: 173, gender: 'girls', name: 'Blue Drape Set', category: 'Sets', price: 3199, oldPrice: 4399, rating: 4.9, badge: 'Fresh', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A soft blue drape set that brings relaxed elegance to daily wear.', sizes: ['S','M','L'] },
  { id: 174, gender: 'boys', name: 'Canvas Utility Vest', category: 'Vests', price: 1899, oldPrice: 2899, rating: 4.7, badge: 'Layer', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'A flexible utility vest created for casual layering and comfort.', sizes: ['S','M','L','XL'] },
  { id: 175, gender: 'girls', name: 'Soft Fringe Bag', category: 'Accessories', price: 1399, oldPrice: 2199, rating: 4.7, badge: 'Style', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', description: 'Fringe detailing and soft finish bring playful elegance to your look.', sizes: ['One Size'] },
  { id: 176, gender: 'boys', name: 'Blast Jogger', category: 'Joggers', price: 1999, oldPrice: 2899, rating: 4.8, badge: 'Popular', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'High-comfort jogger with easy movement and an elevated finish.', sizes: ['S','M','L','XL'] },
  { id: 177, gender: 'girls', name: 'Velvet Patch Top', category: 'Tops', price: 1899, oldPrice: 2599, rating: 4.7, badge: 'Patch', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A textured patch top for refined everyday styling.', sizes: ['S','M','L'] },
  { id: 178, gender: 'boys', name: 'Harbor Tee', category: 'Tops', price: 1299, oldPrice: 1999, rating: 4.7, badge: 'Easy', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Harbor-inspired tee with a clean feel and easy fit.', sizes: ['S','M','L','XL'] },
  { id: 179, gender: 'girls', name: 'Coco Knit Set', category: 'Sets', price: 3299, oldPrice: 4699, rating: 4.9, badge: 'Premium', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A premium knit set in rich warm tones for elevated wear.', sizes: ['S','M','L'] },
  { id: 180, gender: 'boys', name: 'Camo Utility Tee', category: 'Tops', price: 1599, oldPrice: 2299, rating: 4.7, badge: 'Featured', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Utility-inspired camo tee with durable texture and relaxed fit.', sizes: ['S','M','L','XL'] },
  { id: 181, gender: 'girls', name: 'Ribbed Slip Dress', category: 'Dresses', price: 3299, oldPrice: 4799, rating: 4.9, badge: 'Classic', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A ribbed slip dress with flattering shape and elegant drape.', sizes: ['S','M','L'] },
  { id: 182, gender: 'boys', name: 'Mission Hoodie', category: 'Hoodies', price: 2499, oldPrice: 3499, rating: 4.8, badge: 'Mission', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'A mission-inspired hoodie that feels soft and structured.', sizes: ['S','M','L','XL'] },
  { id: 183, gender: 'girls', name: 'Coral Puffer Vest', category: 'Vests', price: 2799, oldPrice: 3899, rating: 4.8, badge: 'Warm', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', description: 'A puffer vest in coral tones with soft insulated feel.', sizes: ['S','M','L'] },
  { id: 184, gender: 'boys', name: 'Alpha Track Tee', category: 'Tops', price: 1499, oldPrice: 2199, rating: 4.7, badge: 'Active', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'A textured track tee with a modern cut and breathable finish.', sizes: ['S','M','L','XL'] },
  { id: 185, gender: 'girls', name: 'Dawn Chiffon Set', category: 'Sets', price: 3399, oldPrice: 4799, rating: 4.9, badge: 'Chic', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'Chiffon layers with soft details for a fresh polished look.', sizes: ['S','M','L'] },
  { id: 186, gender: 'boys', name: 'Metro Track Pants', category: 'Joggers', price: 2199, oldPrice: 3199, rating: 4.8, badge: 'New', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', description: 'Metro-inspired track pants with comfort and sleek finish.', sizes: ['S','M','L','XL'] },
  { id: 187, gender: 'girls', name: 'Glimmer Co-ord', category: 'Sets', price: 3299, oldPrice: 4699, rating: 4.9, badge: 'Luxury', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Glimmer finish and coordinating design for polished looks.', sizes: ['S','M','L'] },
  { id: 188, gender: 'boys', name: 'Summit Bomber', category: 'Jackets', price: 3199, oldPrice: 4699, rating: 4.9, badge: 'Popular', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'Summit bomber built for cool days and sharp layering.', sizes: ['S','M','L','XL'] },
  { id: 189, gender: 'girls', name: 'Lavender Soft Tee', category: 'Tops', price: 1599, oldPrice: 2399, rating: 4.7, badge: 'Soft', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A soft lavender tee that feels plush and effortless.', sizes: ['XS','S','M','L'] },
  { id: 190, gender: 'boys', name: 'Ranger Hoodie', category: 'Hoodies', price: 2599, oldPrice: 3699, rating: 4.8, badge: 'Adventure', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Ranger-inspired hoodie made for durable daily use.', sizes: ['S','M','L','XL'] },
  { id: 191, gender: 'girls', name: 'Mauve Pleat Dress', category: 'Dresses', price: 3499, oldPrice: 5099, rating: 4.9, badge: 'Elegant', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A mauve pleated dress offering soft movement and refined polish.', sizes: ['S','M','L'] },
  { id: 192, gender: 'boys', name: 'Northline Tee', category: 'Tops', price: 1599, oldPrice: 2299, rating: 4.8, badge: 'North', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Northline tee with easy softness and a crisp modern cut.', sizes: ['S','M','L','XL'] },
  { id: 193, gender: 'girls', name: 'Cream Chiffon Top', category: 'Tops', price: 1799, oldPrice: 2699, rating: 4.8, badge: 'Light', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A light chiffon top featuring soft movement and clean styling.', sizes: ['XS','S','M','L'] },
  { id: 194, gender: 'boys', name: 'Apex Knit Polo', category: 'Polos', price: 2099, oldPrice: 2999, rating: 4.9, badge: 'Premium', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'A premium knit polo with crisp collar and precise fit.', sizes: ['S','M','L','XL'] },
  { id: 195, gender: 'girls', name: 'Blush Satin Set', category: 'Sets', price: 3399, oldPrice: 4799, rating: 4.9, badge: 'Blush', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', description: 'A blush satin set for subtle glamour and elevated comfort.', sizes: ['S','M','L'] },
  { id: 196, gender: 'boys', name: 'Drift Bomber', category: 'Jackets', price: 3299, oldPrice: 4699, rating: 4.9, badge: 'New', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', description: 'Drift bomber with premium finish and urban-inspired lines.', sizes: ['S','M','L','XL'] },
  { id: 197, gender: 'girls', name: 'Sparklite Dress', category: 'Dresses', price: 3999, oldPrice: 5699, rating: 5.0, badge: 'Wedding', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', description: 'A statement dress with sparkle and graceful movement for special days.', sizes: ['S','M','L'] },
  { id: 198, gender: 'boys', name: 'Signal Hoodie', category: 'Hoodies', price: 2499, oldPrice: 3699, rating: 4.8, badge: 'Signal', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', description: 'Signal hoodie with bold simplicity and all-day comfort.', sizes: ['S','M','L','XL'] },
  { id: 199, gender: 'girls', name: 'Rosewater Knit Top', category: 'Tops', price: 1699, oldPrice: 2399, rating: 4.7, badge: 'Soft', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', description: 'A rosewater knit top with soft texture and polished shape.', sizes: ['XS','S','M','L'] },
  { id: 200, gender: 'boys', name: 'Summit Utility Tee', category: 'Tops', price: 1499, oldPrice: 2199, rating: 4.8, badge: 'Daily', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', description: 'Utility-inspired tee crafted for comfort and polished casual styling.', sizes: ['S','M','L','XL'] }
];

let cart = [];

const orders = [
  { id: '#LDF1024', status: 'Packed', date: '12 Aug 2026', amount: '₹2,499' },
  { id: '#LDF8901', status: 'Shipped', date: '09 Aug 2026', amount: '₹1,899' },
  { id: '#LDF7602', status: 'Delivered', date: '02 Aug 2026', amount: '₹3,299' }
];

function formatPrice(value) {
  return `₹${value.toLocaleString('en-IN')}`;
}

function filterProducts(items) {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return items;

  return items.filter((product) => {
    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });
}

function renderOrders() {
  ordersGrid.innerHTML = orders.map((order) => `
    <article class="order-card">
      <div>
        <span class="order-id">${order.id}</span>
        <p>${order.date}</p>
      </div>
      <span class="order-status ${order.status.toLowerCase()}">${order.status}</span>
      <strong>${order.amount}</strong>
    </article>
  `).join('');
}

function renderProductList(container, items) {
  const filtered = filterProducts(items);

  if (!filtered.length) {
    container.innerHTML = '<p class="empty-state">No products match your search.</p>';
    return;
  }

  container.innerHTML = filtered.map((product) => `
    <article class="mini-card">
      <img src="${product.image}" alt="${product.name}" />
      <div class="mini-body">
        <h4>${product.name}</h4>
        <div class="mini-row">
          <strong>${formatPrice(product.price)}</strong>
          <button class="mini-btn" data-id="${product.id}">Add</button>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.mini-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      const product = products.find((item) => item.id === id);
      if (!product) return;

      const existing = cart.find((item) => item.id === id);
      if (existing) existing.quantity += 1;
      else cart.push({ ...product, quantity: 1 });

      renderCart();
    });
  });
}

function renderProducts() {
  const filtered = filterProducts(products);

  productGrid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-body">
        <div class="product-head">
          <span>${product.category}</span>
          <span>⭐ ${product.rating}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-row">
          <strong>${formatPrice(product.price)}</strong>
          <span>${formatPrice(product.oldPrice)}</span>
        </div>
        <div class="sizes">
          ${product.sizes.map((size) => `<span>${size}</span>`).join('')}
        </div>
        <button class="add-btn" data-id="${product.id}">Add to cart</button>
      </div>
    </article>
  `).join('');

  if (!filtered.length) {
    productGrid.innerHTML = '<p class="empty-state">No matching items found.</p>';
  }

  document.querySelectorAll('.add-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      const product = products.find((item) => item.id === id);
      if (!product) return;

      const existing = cart.find((item) => item.id === id);
      if (existing) existing.quantity += 1;
      else cart.push({ ...product, quantity: 1 });

      renderCart();
    });
  });
}

function renderCart() {
  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-state">Your cart is empty.</p>';
    cartCount.textContent = '0';
    bagCount.textContent = '0 items';
    cartTotal.textContent = '₹0';
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div>
        <h4>${item.name}</h4>
        <p>${formatPrice(item.price)} × ${item.quantity}</p>
      </div>
      <button class="remove-btn" data-id="${item.id}">Remove</button>
    </div>
  `).join('');

  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartCount.textContent = String(totalQty);
  bagCount.textContent = `${totalQty} item${totalQty > 1 ? 's' : ''}`;
  cartTotal.textContent = formatPrice(totalPrice);

  document.querySelectorAll('.remove-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      cart = cart.filter((item) => item.id !== id);
      renderCart();
    });
  });
}

function handleCheckout() {
  if (!cart.length) {
    alert('Your cart is empty. Add some products before checkout.');
    return;
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const summary = cart
    .map((item) => `${item.name} x${item.quantity}`)
    .join(', ');

  const confirmed = window.confirm(
    `Checkout summary:\n${summary}\n\nTotal items: ${totalItems}\nTotal: ${formatPrice(totalPrice)}\n\nProceed to place your order?`
  );

  if (!confirmed) {
    return;
  }

  cart = [];
  renderCart();
  alert('Order placed successfully! Your products are on the way.');
}

checkoutButton.addEventListener('click', handleCheckout);

searchInput.addEventListener('input', () => {
  renderProducts();
  renderProductList(girlsGrid, products.filter((product) => product.gender === 'girls'));
  renderProductList(boysGrid, products.filter((product) => product.gender === 'boys'));
});

renderOrders();
renderProducts();
renderProductList(girlsGrid, products.filter((product) => product.gender === 'girls'));
renderProductList(boysGrid, products.filter((product) => product.gender === 'boys'));
renderCart();
