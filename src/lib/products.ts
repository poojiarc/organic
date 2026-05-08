import mangoImg from "@/assets/gallery/hand-mango.jpg";
import mangoDessertImg from "@/assets/gallery/mango-dessert.jpg";
import cashewImg from "@/assets/gallery/cashews.jpg";
import honeyImg from "@/assets/gallery/honey.jpg";
import productsImg from "@/assets/gallery/products-collage.jpg";
import bookImg from "@/assets/gallery/book-products.jpg";

// New gallery imports
import a2GheeImg from "@/assets/gallery/A2ghee.webp";
import bananaImg from "@/assets/gallery/banana.jpg";
import beetrootImg from "@/assets/gallery/beetroot.webp";
import beansImg from "@/assets/gallery/beans.jpg";
import beetrootChipsImg from "@/assets/gallery/beetrootchips.jpg";
import bitterGourdChipsImg from "@/assets/gallery/bittergourdchips.jpg";
import brinjalImg from "@/assets/gallery/brinjal.jpg";
import buffaloGheeImg from "@/assets/gallery/buffaloghee.jpg";
import carrotImg from "@/assets/gallery/carrot.jpg";
import carrotChipsImg from "@/assets/gallery/carrotchips.jpg";
import cashewKolarImg from "@/assets/gallery/cashewkolar.jpg";
import desiEggsImg from "@/assets/gallery/desiegs.webp";
import drumstickImg from "@/assets/gallery/drumstick.webp";
import forestHoneyImg from "@/assets/gallery/foresthoney.jpg";
import guavaImg from "@/assets/gallery/guvava.jpg";
import idliMixImg from "@/assets/gallery/idli-mix.jpg";
import jamunImg from "@/assets/gallery/jamun.jpg";
import ladiesFingerChipsImg from "@/assets/gallery/ladiesfingerchips.jpg";
import ladyfingerImg from "@/assets/gallery/ladyfinger.jpg";
import lemonImg from "@/assets/gallery/lemon.avif";
import mixedChipsImg from "@/assets/gallery/mixedveggiechips.webp";
import palmJaggeryImg from "@/assets/gallery/palmjaggerypowder.jpg";
import papayaImg from "@/assets/gallery/papaya.jpg";
import potatoImg from "@/assets/gallery/potato.jpg";
import radishImg from "@/assets/gallery/raddish.webp";
import ragiFlourImg from "@/assets/gallery/ragiflour.jpg";
import ragiMaltImg from "@/assets/gallery/ragimalt.jpg";
import ragiPapadImg from "@/assets/gallery/ragipapad.jpeg";
import sabudanaImg from "@/assets/gallery/sabbaki.png";
import tamarindImg from "@/assets/gallery/tamrind.jpg";
import tomatoImg from "@/assets/gallery/tomato.jpg";

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
  image?: string;
};

export const PRODUCTS: Product[] = [
  { id: "mango-pulp", name: "Mango Pulp", desc: "Sun-ripened, hand-pulped — fragrance of childhood.", category: "must-try", price: 200, unit: "500ml", emoji: "🥭", image: mangoDessertImg },
  { id: "millet-idli", name: "Millet Idli Premix", desc: "Traditional millet blend, ready in minutes.", category: "must-try", price: 200, unit: "500gm", emoji: "🍚", image: idliMixImg },
  { id: "a2-ghee", name: "A2 Ghee", desc: "Pure desi-cow A2 ghee, slow churned.", category: "must-try", emoji: "🧈", image: a2GheeImg,
    variants: [{ label: "200ml", price: 300 }, { label: "330ml", price: 500 }, { label: "750ml", price: 1100 }] },
  { id: "buffalo-ghee", name: "Buffalo Ghee", desc: "Rich buffalo ghee, traditionally prepared.", category: "must-try", emoji: "🧈", image: buffaloGheeImg,
    variants: [{ label: "200ml", price: 300 }, { label: "330ml", price: 500 }, { label: "750ml", price: 1100 }] },
  { id: "sabudana-nippattu", name: "Sabudana Nippattu", desc: "Crunchy sago crackers, perfect tea-time snack.", category: "must-try", price: 200, unit: "200gm", emoji: "🥨", image: sabudanaImg },
  { id: "jamun-strip", name: "Jamun Fruit Strip", desc: "Naturally sweet jamun, no preservatives.", category: "must-try", price: 400, unit: "100gm", emoji: "🍇", image: jamunImg },
  { id: "ragi-papad", name: "Ragi Papad", desc: "Wholesome ragi papad — crisp & nourishing.", category: "must-try", price: 200, unit: "200gm", emoji: "🌾", image: ragiPapadImg },

  { id: "palm-jaggery", name: "Palm Jaggery Powder", desc: "Mineral-rich natural sweetener.", category: "by-products", price: 450, unit: "500gm", emoji: "🍯", image: palmJaggeryImg },
  { id: "desi-eggs", name: "Desi Brown Eggs", desc: "Free-range desi farm eggs.", category: "by-products", price: 145, unit: "8 pieces", emoji: "🥚", image: desiEggsImg },
  { id: "tamarind", name: "Tamarind", desc: "Sun-dried tangy tamarind.", category: "by-products", price: 100, unit: "500gm", emoji: "🌿", image: tamarindImg },
  { id: "cashew", name: "Cashew Kolar Nuts", desc: "Locally grown, hand-picked cashews.", category: "by-products", price: 120, unit: "100gm", emoji: "🥜", image: cashewKolarImg },
  { id: "honey", name: "Forest Honey", desc: "Raw, unfiltered forest honey.", category: "by-products", price: 1100, unit: "750ml", emoji: "🍯", image: forestHoneyImg },
  { id: "ragi-malt", name: "Ragi Malt Powder", desc: "Sprouted ragi malt — energising drink mix.", category: "by-products", price: 200, unit: "800gm", emoji: "🌾", image: ragiMaltImg },
  { id: "ragi-flour", name: "Ragi Flour", desc: "Stone-ground finger millet flour.", category: "by-products", price: 100, unit: "1kg", emoji: "🌾", image: ragiFlourImg },

  { id: "carrot-chips", name: "Carrot Chips", desc: "Crispy, oven-ready vegetable chips.", category: "chips", unit: "250gm", emoji: "🥕", image: carrotChipsImg },
  { id: "bittergourd-chips", name: "Bitter Gourd Chips", desc: "Healthy crunch with traditional flavour.", category: "chips", unit: "250gm", emoji: "🥬", image: bitterGourdChipsImg },
  { id: "beetroot-chips", name: "Beetroot Chips", desc: "Earthy, vibrant, antioxidant-rich.", category: "chips", unit: "250gm", emoji: "🥬", image: beetrootChipsImg },
  { id: "ladyfinger-chips", name: "Lady Finger Chips", desc: "Crispy okra snack.", category: "chips", unit: "250gm", emoji: "🥬", image: ladiesFingerChipsImg },
  { id: "mixed-chips", name: "Mixed Veg Chips", desc: "A mix of all your favourites.", category: "chips", unit: "250gm", emoji: "🥗", image: mixedChipsImg },

  { id: "papaya", name: "Papaya", desc: "Tree-ripened organic papaya.", category: "fruits", unit: "250gm", emoji: "🍈", image: papayaImg },
  { id: "banana", name: "Banana", desc: "Naturally ripened country banana.", category: "fruits", unit: "250gm", emoji: "🍌", image: bananaImg },
  { id: "guava", name: "Guava", desc: "Crisp, fragrant guava.", category: "fruits", unit: "250gm", emoji: "🍐", image: guavaImg },

  { id: "tomato", name: "Tomato", desc: "Vine-ripened organic tomatoes.", category: "vegetables", unit: "250gm", emoji: "🍅", image: tomatoImg },
  { id: "ladyfinger", name: "Lady Finger", desc: "Tender okra, freshly picked.", category: "vegetables", unit: "250gm", emoji: "🥬", image: ladyfingerImg },
  { id: "carrot", name: "Carrot", desc: "Sweet, crunchy carrots.", category: "vegetables", unit: "250gm", emoji: "🥕", image: carrotImg },
  { id: "beetroot", name: "Beetroot", desc: "Earthy organic beetroot.", category: "vegetables", unit: "250gm", emoji: "🥬", image: beetrootImg },
  { id: "radish", name: "Radish", desc: "Crisp white radish.", category: "vegetables", unit: "250gm", emoji: "🥬", image: radishImg },
  { id: "beans", name: "Beans", desc: "Tender farm beans.", category: "vegetables", unit: "250gm", emoji: "🫘", image: beansImg },
  { id: "brinjal", name: "Brinjal", desc: "Glossy organic brinjal.", category: "vegetables", unit: "250gm", emoji: "🍆", image: brinjalImg },
  { id: "drumstick", name: "Drumstick", desc: "Tender moringa drumsticks.", category: "vegetables", unit: "250gm", emoji: "🌿", image: drumstickImg },
  { id: "potato", name: "Potato", desc: "Wholesome organic potatoes.", category: "vegetables", unit: "250gm", emoji: "🥔", image: potatoImg },
  { id: "lemon", name: "Lemon", desc: "Juicy, fragrant lemons.", category: "vegetables", unit: "1 piece", emoji: "🍋", image: lemonImg },

  { id: "combo-890", name: "Family Wellness Combo", desc: "Mango Pulp + Ghee + Idli Premix + Nippattu + Tomato + Lemon + Lady Finger + Potato.", category: "combo", price: 890, unit: "Combo Pack", emoji: "🧺", image: productsImg },
];

// Reference images kept available for future product cards
export const BRAND_IMAGES = { mangoImg, bookImg };