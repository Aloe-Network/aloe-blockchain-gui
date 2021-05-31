import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.ALOE]: IS_MAINNET ? 'XCH' : 'TXCH',
};
