import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  ShoppingBag, 
  Sparkles, 
  Compass, 
  Truck, 
  Home, 
  Check, 
  X, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface FlyShopPageProps {
  onNavigate: (page: PageId) => void;
}

interface ProductItem {
  id: string;
  name: string;
  brand: 'NAM Products' | 'Einarsson' | 'Hazumi' | 'Grey River Custom';
  category: 'rods' | 'reels' | 'lines' | 'flies' | 'gear';
  price: number;
  image: string;
  specs: string;
  description: string;
  lodgeStagingAvailable: boolean;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'nam-ren-single-7',
    name: 'NAM Ren Single Hand 9\'0" #7',
    brand: 'NAM Products',
    category: 'rods',
    price: 1150,
    image: '/images/gear/nam-ren-single.jpg',
    specs: '9\'0" • 7wt • 4-Piece • Fast Action',
    description: 'The definitive dry fly rod for waking Bombers across glassy Grey River holding pools.',
    lodgeStagingAvailable: true,
  },
  {
    id: 'nam-ren-two-hand-7',
    name: 'NAM Ren Two-Handed 12\'4" #7',
    brand: 'NAM Products',
    category: 'rods',
    price: 1390,
    image: '/images/gear/nam-ren-two-hand.jpg',
    specs: '12\'4" • 7/8wt • 5-Piece Travel • Medium-Fast',
    description: 'Designed for effortless Scandi swings in deep canyon pools with minimal backcast clearance.',
    lodgeStagingAvailable: true,
  },
  {
    id: 'einarsson-plus-78',
    name: 'Einarsson Plus 7/8 Fly Reel',
    brand: 'Einarsson',
    category: 'reels',
    price: 890,
    image: '/images/gear/einarsson-plus.jpg',
    specs: 'Sealed Carbon Drag • Large Arbor • 200m Backing',
    description: 'Zero start-up inertia brake system to protect fine tippets during explosive runs.',
    lodgeStagingAvailable: true,
  },
  {
    id: 'hazumi-bomber-line-wf7',
    name: 'Hazumi Atlantic Salmon Bomber WF7F',
    brand: 'Hazumi',
    category: 'lines',
    price: 125,
    image: '/images/gear/hazumi-line.jpg',
    specs: 'Weight-Forward Floating • Aggressive Front Taper',
    description: 'High-floating head engineered to turn over wind-resistant deer hair flies with ease.',
    lodgeStagingAvailable: true,
  },
  {
    id: 'grl-prime-dry-box',
    name: 'Grey River Prime Week Bomber Selection (18 Flies)',
    brand: 'Grey River Custom',
    category: 'flies',
    price: 110,
    image: '/images/gear/fly-box-dry.jpg',
    specs: 'Sizes 2–8 • Single Barbless • Waterproof Box',
    description: 'Hand-tied Green, White, and Natural Brown Bombers tuned specifically for our river system.',
    lodgeStagingAvailable: true,
  },
  {
    id: 'grl-canyon-wet-box',
    name: 'Grey River Canyon Wet & Sea Trout Box (24 Flies)',
    brand: 'Grey River Custom',
    category: 'flies',
    price: 135,
    image: '/images/gear/fly-box-wet.jpg',
    specs: 'Blue Charm, Undertakers & Muddler Minnows',
    description: 'Traditional hair-wing patterns and heavy sea trout bugs for canyon runs and late tides.',
    lodgeStagingAvailable: true,
  },
];

export const FlyShopPage: React.FC<FlyShopPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<{ product: ProductItem; quantity: number; deliveryChoice: 'lodge' | 'home' }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const addToCart = (product: ProductItem, deliveryChoice: 'lodge' | 'home') => {
    setCart((prev) => {
      const existing = prev.find(item => item.product.id === product.id && item.deliveryChoice === deliveryChoice);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id && item.deliveryChoice === deliveryChoice 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1, deliveryChoice }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-[#F5F2EB] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Lodge Staging Promise */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-300/80 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D97746] font-bold bg-[#D97746]/10 px-3.5 py-1.5 rounded-full border border-[#D97746]/25">
              <Compass className="w-3.5 h-3.5" />
              <span>Official Outfitter Outpost Store</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#11191F] tracking-tight">
              Grey River Outfitting Shop
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              River-tested gear curated specifically for the Grey River system. Choose standard home delivery or have your rods, reels, and custom fly boxes rigged and staged in your cabin prior to arrival.
            </p>
          </div>

          {/* Cart Trigger */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 bg-[#11191F] hover:bg-[#1B2A32] text-white px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-bold transition shadow-sm cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#D97746]" />
            <span>View Gear Cart ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
          </button>
        </div>

        {/* Fulfillment Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#2D4A3E]/10 text-[#2D4A3E]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Cabin Staging Service
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Have your gear rigged with backing, leader, and inspected by your head guide waiting in your room upon arrival.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#D97746]/10 text-[#D97746]">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Home Delivery
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Shipped directly to your doorstep in advance so you can cast and prep prior to your expedition flight.
              </p>
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          {['all', 'rods', 'reels', 'lines', 'flies'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-mono font-bold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#11191F] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Outfitter Gear' : cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback placeholder if image is missing
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#11191F]/90 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1 rounded border border-white/10 uppercase tracking-widest">
                  {product.brand}
                </div>
                {product.lodgeStagingAvailable && (
                  <div className="absolute top-3 right-3 bg-[#2D4A3E] text-white text-[10px] font-mono px-2.5 py-1 rounded font-bold uppercase tracking-wider flex items-center gap-1">
                    <Check className="w-3 h-3" /> Cabin Staged
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                    {product.specs}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="text-2xl font-serif font-bold text-slate-900">
                    ${product.price.toLocaleString()} <span className="text-xs font-sans text-slate-500 font-normal">CAD</span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => addToCart(product, 'lodge')}
                      className="w-full bg-[#2D4A3E] hover:bg-[#233a31] text-white text-[10px] font-mono font-bold uppercase tracking-wider py-2.5 px-2 rounded transition text-center cursor-pointer"
                    >
                      Stage in Cabin
                    </button>
                    <button
                      onClick={() => addToCart(product, 'home')}
                      className="w-full bg-[#11191F] hover:bg-[#1B2A32] text-white text-[10px] font-mono font-bold uppercase tracking-wider py-2.5 px-2 rounded transition text-center cursor-pointer"
                    >
                      Ship to Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Slide-out Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col">
            
            {/* Drawer Header */}
            <div className="p-6 bg-[#11191F] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#D97746]" />
                <h3 className="text-lg font-serif">Outfitter Gear Cart</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-slate-400 hover:text-white transition p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-slate-400 space-y-3">
                  <Compass className="w-10 h-10 mx-auto text-slate-300" />
                  <p className="text-sm">Your outfitter gear cart is empty.</p>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex-1 space-y-1">
                      <h4 className="text-xs font-bold text-slate-900">{item.product.name}</h4>
                      <div className="text-[10px] font-mono text-slate-500">
                        Qty: {item.quantity} • ${item.product.price * item.quantity} CAD
                      </div>
                      <span className={`inline-block text-[9px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                        item.deliveryChoice === 'lodge' 
                          ? 'bg-[#2D4A3E]/10 text-[#2D4A3E]' 
                          : 'bg-[#D97746]/10 text-[#D97746]'
                      }`}>
                        {item.deliveryChoice === 'lodge' ? '✓ Cabin Staged' : '📦 Home Delivery'}
                      </span>
                    </div>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-slate-400 hover:text-red-600 transition self-start"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Checkout Area */}
            {cart.length > 0 && (
              <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono uppercase text-slate-600">Subtotal:</span>
                  <span className="text-2xl font-serif font-bold text-slate-900">
                    ${cartTotal.toLocaleString()} <span className="text-xs font-sans text-slate-500 font-normal">CAD</span>
                  </span>
                </div>
                
                <p className="text-[11px] text-slate-500 leading-normal">
                  *Taxes, permits, and destination delivery instructions collected during secure checkout.
                </p>

                <button 
                  onClick={() => {
                    // Integrate Shopify Checkout URL or Buy Button checkout redirect here
                    alert('Connecting to Shopify checkout with your selected items...');
                  }}
                  className="w-full bg-[#D97746] hover:bg-[#C26334] text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-sm"
                >
                  Proceed to Secure Checkout →
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};