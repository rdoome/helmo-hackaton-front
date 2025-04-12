import {CARDIGAN_COLLECTION} from '../constants/products/cardigan.constant';
import {Product} from '../../domain/Product';
import {TEE_COLLECTION} from '../constants/products/tee.constant';
import {JEANS_COLLECTION} from '../constants/products/jeans.constant';
import {DRESSES_COLLECTION} from '../constants/products/dress.constant';
import {JACKET_COLLECTION} from '../constants/products/jacket.constant';
import {PANTS_COLLECTION} from '../constants/products/pant.constant';
import {ROMPERS_COLLECTION} from '../constants/products/romper.constant';
import {SHORTS_COLLECTION} from '../constants/products/short.constant';
import {SKIRT_COLLECTION} from '../constants/products/skirt.constant';


export function getClothesCollection(type: string): Product[] {
  switch (type) {
    case 'blouse':
      return CARDIGAN_COLLECTION;
    case 'cardigan':
      return TEE_COLLECTION;
    case 'dress':
      return DRESSES_COLLECTION;
    case 'jacket':
      return JACKET_COLLECTION;
    case 'jeans':
      return JEANS_COLLECTION;
    case 'pant':
      return PANTS_COLLECTION;
    case 'romper':
      return ROMPERS_COLLECTION;
    case 'short':
      return SHORTS_COLLECTION;
    case 'skirt':
      return SKIRT_COLLECTION;
    case 'tee':
      return TEE_COLLECTION;
    default:
      console.error(`Unknown type: ${type}`);
      return [];
  }
}
