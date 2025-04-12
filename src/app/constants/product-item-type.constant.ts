// Définir le type pour le genre
type GenderType = 'men' | 'women';

// Définir le type pour les clés d'item pour les hommes (elles seront identiques pour les femmes si vous utilisez les mêmes clés)
type MenItemType = 'shoes' | 'clothes' | 'accessories' | 'watches' | 'bags' | 'underwear' | 'hats';
type WomenItemType = 'shoes' | 'clothes' | 'accessories' | 'bags' | 'jewelry' | 'lingerie' | 'beauty';

export const PRODUCT_CATEGORIES = {
  "men": {
    "blouse": {
      "label": "Blouses"
    },
    "cardigan": {
      "label": "Cardigan"
    },
    "dress": {
      "label": "Dresses"
    },
    "jacket": {
      "label": "Jackets"
    },
    "jeans": {
      "label": "Jeans"
    },
    "pant": {
      "label": "Pants"
    },
    "romper": {
      "label": "Rompers"
    },
    "short": {
      "label": "Rompers"
    },
    "skirt": {
      "label": "Skirts"
    },
    "tee": {
      "label": "T-Shirts"
    }
  },
  "women": {
    "blouse": {
      "label": "Blouses"
    },
    "cardigan": {
      "label": "Cardigan"
    },
    "dress": {
      "label": "Dresses"
    },
    "jacket": {
      "label": "Jackets"
    },
    "jeans": {
      "label": "Jeans"
    },
    "pant": {
      "label": "Pants"
    },
    "romper": {
      "label": "Rompers"
    },
    "short": {
      "label": "Rompers"
    },
    "skirt": {
      "label": "Skirts"
    },
    "tee": {
      "label": "T-Shirts"
    }
  }
}
