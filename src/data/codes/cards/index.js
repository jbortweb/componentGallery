// Card Codes - Organized by categories

// Import all product cards
export * from './products/index.js';

// Import all profile cards  
export * from './profiles/index.js';

// Import all article cards
export * from './articles/index.js';

// Legacy export for backward compatibility
export const cardCodes = {
  // Profile Cards
  ProfileCard1: null, // Will be populated dynamically
  ProfileCard2: null,
  ProfileCard3: null,
  ProfileCard4: null,
  ProfileCard5: null,
  ProfileCard6: null,

  // Article Cards
  ArticleCard1: null,
  ArticleCard2: null,
  ArticleCard3: null,
  ArticleCard4: null,
  ArticleCard5: null,
  ArticleCard6: null,

  // Product Cards
  ProductCard1: null,
  ProductCard2: null,
  ProductCard3: null,
  ProductCard4: null,
  ProductCard5: null,
  ProductCard6: null,
};

// Dynamically populate the legacy object
import { ProfileCard1, ProfileCard2, ProfileCard3, ProfileCard4, ProfileCard5, ProfileCard6 } from './profiles/index.js';
import { ArticleCard1, ArticleCard2, ArticleCard3, ArticleCard4, ArticleCard5, ArticleCard6 } from './articles/index.js';
import { ProductCard1, ProductCard2, ProductCard3, ProductCard4, ProductCard5, ProductCard6 } from './products/index.js';

// Populate the legacy cardCodes object
cardCodes.ProfileCard1 = ProfileCard1;
cardCodes.ProfileCard2 = ProfileCard2;
cardCodes.ProfileCard3 = ProfileCard3;
cardCodes.ProfileCard4 = ProfileCard4;
cardCodes.ProfileCard5 = ProfileCard5;
cardCodes.ProfileCard6 = ProfileCard6;

cardCodes.ArticleCard1 = ArticleCard1;
cardCodes.ArticleCard2 = ArticleCard2;
cardCodes.ArticleCard3 = ArticleCard3;
cardCodes.ArticleCard4 = ArticleCard4;
cardCodes.ArticleCard5 = ArticleCard5;
cardCodes.ArticleCard6 = ArticleCard6;

cardCodes.ProductCard1 = ProductCard1;
cardCodes.ProductCard2 = ProductCard2;
cardCodes.ProductCard3 = ProductCard3;
cardCodes.ProductCard4 = ProductCard4;
cardCodes.ProductCard5 = ProductCard5;
cardCodes.ProductCard6 = ProductCard6;
