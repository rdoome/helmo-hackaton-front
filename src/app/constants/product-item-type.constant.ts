// Définir le type pour le genre
type GenderType = 'men' | 'women';

// Définir le type pour les clés d'item pour les hommes (elles seront identiques pour les femmes si vous utilisez les mêmes clés)
type MenItemType = 'shoes' | 'clothes' | 'accessories' | 'watches' | 'bags' | 'underwear' | 'hats';
type WomenItemType = 'shoes' | 'clothes' | 'accessories' | 'bags' | 'jewelry' | 'lingerie' | 'beauty';

export const PRODUCT_CATEGORIES = {
  "men": {
    "shoes": {
      "label": "Shoes",
      "subtypes": [
        { "id": "oxfords", "name": "Oxfords" },
        { "id": "sneakers", "name": "Sneakers" },
        { "id": "boots", "name": "Boots" }
      ]
    },
    "clothes": {
      "label": "Clothes",
      "subtypes": [
        { "id": "pants", "name": "Pants" },
        { "id": "tshirts", "name": "T-Shirts" },
        { "id": "sweaters", "name": "Sweaters" },
        { "id": "pullovers", "name": "Pullovers" }
      ]
    },
    "accessories": {
      "label": "Accessories",
      "subtypes": [
        { "id": "belts", "name": "Belts" },
        { "id": "ties", "name": "Ties" },
        { "id": "cufflinks", "name": "Cufflinks" },
        { "id": "sunglasses", "name": "Sunglasses" }
      ]
    },
    "watches": {
      "label": "Watches",
      "subtypes": [
        { "id": "analog", "name": "Analog" },
        { "id": "digital", "name": "Digital" }
      ]
    },
    "bags": {
      "label": "Bags",
      "subtypes": [
        { "id": "briefcases", "name": "Briefcases" },
        { "id": "backpacks", "name": "Backpacks" },
        { "id": "messenger", "name": "Messenger Bags" }
      ]
    },
    "underwear": {
      "label": "Underwear",
      "subtypes": [
        { "id": "boxers", "name": "Boxers" },
        { "id": "briefs", "name": "Briefs" }
      ]
    },
    "hats": {
      "label": "Hats",
      "subtypes": [
        { "id": "caps", "name": "Caps" },
        { "id": "fedora", "name": "Fedoras" }
      ]
    }
  },
  "women": {
    "shoes": {
      "label": "Shoes",
      "subtypes": [
        { "id": "heels", "name": "Heels" },
        { "id": "flats", "name": "Flats" },
        { "id": "boots", "name": "Boots" }
      ]
    },
    "clothes": {
      "label": "Clothes",
      "subtypes": [
        { "id": "dresses", "name": "Dresses" },
        { "id": "skirts", "name": "Skirts" },
        { "id": "blouses", "name": "Blouses" },
        { "id": "pants", "name": "Pants" }
      ]
    },
    "accessories": {
      "label": "Accessories",
      "subtypes": [
        { "id": "scarves", "name": "Scarves" },
        { "id": "belts", "name": "Belts" },
        { "id": "gloves", "name": "Gloves" },
        { "id": "sunglasses", "name": "Sunglasses" }
      ]
    },
    "bags": {
      "label": "Bags",
      "subtypes": [
        { "id": "handbags", "name": "Handbags" },
        { "id": "clutches", "name": "Clutches" },
        { "id": "backpacks", "name": "Backpacks" }
      ]
    },
    "jewelry": {
      "label": "Jewelry",
      "subtypes": [
        { "id": "necklaces", "name": "Necklaces" },
        { "id": "earrings", "name": "Earrings" },
        { "id": "bracelets", "name": "Bracelets" },
        { "id": "rings", "name": "Rings" }
      ]
    },
    "lingerie": {
      "label": "Lingerie",
      "subtypes": [
        { "id": "bras", "name": "Bras" },
        { "id": "panties", "name": "Panties" },
        { "id": "bodysuits", "name": "Bodysuits" }
      ]
    },
    "beauty": {
      "label": "Beauty",
      "subtypes": [
        { "id": "skincare", "name": "Skincare" },
        { "id": "makeup", "name": "Makeup" },
        { "id": "haircare", "name": "Haircare" }
      ]
    }
  }
}
