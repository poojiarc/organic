export type Variant = { label: string; price: number };
export type Product = {
  id: string;
  name: string;
  desc: string;
  category: "must-try" | "by-products" | "chips" | "fruits" | "vegetables" | "combo";
  variants?: Variant[];
  price?: number;
  unit?: string;
  emoji?: string;
};

export const PRODUCTS: Product[] = [
  { id: "mango-pulp", name: "Mango Pulp", desc: "Sun-ripened, hand-pulped — fragrance of childhood.", category: "must-try", price: 200, unit: "500ml", emoji: "🥭" },
  { id: "millet-idli", name: "Millet Idli Premix", desc: "Traditional millet blend, ready in minutes.", category: "must-try", price: 200, unit: "500gm", emoji: "🍚" },
  { id: "a2-ghee", name: "A2 Ghee", desc: "Pure desi-cow A2 ghee, slow churned.", category: "must-try", emoji: "🧈",
    variants: [{ label: "200ml", price: 300 }, { label: "330ml", price: 500 }, { label: "750ml", price: 1100 }] },
  { id: "buffalo-ghee", name: "Buffalo Ghee", desc: "Rich buffalo ghee, traditionally prepared.", category: "must-try", emoji: "🧈",
    variants: [{ label: "200ml", price: 300 }, { label: "330ml", price: 500 }, { label: "750ml", price: 1100 }] },
  { id: "sabudana-nippattu", name: "Sabudana Nippattu", desc: "Crunchy sago crackers, perfect tea-time snack.", category: "must-try", price: 200, unit: "200gm", emoji: "🥨" },
  { id: "jamun-strip", name: "Jamun Fruit Strip", desc: "Naturally sweet jamun, no preservatives.", category: "must-try", price: 400, unit: "100gm", emoji: "🍇" },
  { id: "ragi-papad", name: "Ragi Papad", desc: "Wholesome ragi papad — crisp & nourishing.", category: "must-try", price: 200, unit: "200gm", emoji: "🌾" },

  { id: "palm-jaggery", name: "Palm Jaggery Powder", desc: "Mineral-rich natural sweetener.", category: "by-products", price: 450, unit: "500gm", emoji: "🍯" },
  { id: "desi-eggs", name: "Desi Brown Eggs", desc: "Free-range desi farm eggs.", category: "by-products", price: 145, unit: "8 pieces", emoji: "🥚" },
  { id: "tamarind", name: "Tamarind", desc: "Sun-dried tangy tamarind.", category: "by-products", price: 100, unit: "500gm", emoji: "🌿" },
  { id: "cashew", name: "Cashew Kolar Nuts", desc: "Locally grown, hand-picked cashews.", category: "by-products", price: 120, unit: "100gm", emoji: "🥜" },
  { id: "honey", name: "Forest Honey", desc: "Raw, unfiltered forest honey.", category: "by-products", price: 1100, unit: "750ml", emoji: "🍯" },
  { id: "ragi-malt", name: "Ragi Malt Powder", desc: "Sprouted ragi malt — energising drink mix.", category: "by-products", price: 200, unit: "800gm", emoji: "🌾" },
  { id: "ragi-flour", name: "Ragi Flour", desc: "Stone-ground finger millet flour.", category: "by-products", price: 100, unit: "1kg", emoji: "🌾" },

  { id: "carrot-chips", name: "Carrot Chips", desc: "Crispy, oven-ready vegetable chips.", category: "chips", unit: "250gm", emoji: "🥕" },
  { id: "bittergourd-chips", name: "Bitter Gourd Chips", desc: "Healthy crunch with traditional flavour.", category: "chips", unit: "250gm", emoji: "🥬" },
  { id: "beetroot-chips", name: "Beetroot Chips", desc: "Earthy, vibrant, antioxidant-rich.", category: "chips", unit: "250gm", emoji: "🥬" },
  { id: "ladyfinger-chips", name: "Lady Finger Chips", desc: "Crispy okra snack.", category: "chips", unit: "250gm", emoji: "🥬" },
  { id: "mixed-chips", name: "Mixed Veg Chips", desc: "A mix of all your favourites.", category: "chips", unit: "250gm", emoji: "🥗" },

  { id: "papaya", name: "Papaya", desc: "Tree-ripened organic papaya.", category: "fruits", unit: "250gm", emoji: "🍈" },
  { id: "banana", name: "Banana", desc: "Naturally ripened country banana.", category: "fruits", unit: "250gm", emoji: "🍌" },
  { id: "guava", name: "Guava", desc: "Crisp, fragrant guava.", category: "fruits", unit: "250gm", emoji: "🍐" },

  { id: "tomato", name: "Tomato", desc: "Vine-ripened organic tomatoes.", category: "vegetables", unit: "250gm", emoji: "🍅" },
  { id: "ladyfinger", name: "Lady Finger", desc: "Tender okra, freshly picked.", category: "vegetables", unit: "250gm", emoji: "🥬" },
  { id: "carrot", name: "Carrot", desc: "Sweet, crunchy carrots.", category: "vegetables", unit: "250gm", emoji: "🥕" },
  { id: "beetroot", name: "Beetroot", desc: "Earthy organic beetroot.", category: "vegetables", unit: "250gm", emoji: "🥬" },
  { id: "radish", name: "Radish", desc: "Crisp white radish.", category: "vegetables", unit: "250gm", emoji: "🥬" },
  { id: "beans", name: "Beans", desc: "Tender farm beans.", category: "vegetables", unit: "250gm", emoji: "🫘" },
  { id: "brinjal", name: "Brinjal", desc: "Glossy organic brinjal.", category: "vegetables", unit: "250gm", emoji: "🍆" },
  { id: "drumstick", name: "Drumstick", desc: "Tender moringa drumsticks.", category: "vegetables", unit: "250gm", emoji: "🌿" },
  { id: "potato", name: "Potato", desc: "Wholesome organic potatoes.", category: "vegetables", unit: "250gm", emoji: "🥔" },
  { id: "lemon", name: "Lemon", desc: "Juicy, fragrant lemons.", category: "vegetables", unit: "1 piece", emoji: "🍋" },

  { id: "combo-890", name: "Family Wellness Combo", desc: "Mango Pulp + Ghee + Idli Premix + Nippattu + Tomato + Lemon + Lady Finger + Potato.", category: "combo", price: 890, unit: "Combo Pack", emoji: "🧺" },
];