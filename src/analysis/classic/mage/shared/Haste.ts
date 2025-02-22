import CoreHaste, { DEFAULT_HASTE_BUFFS } from 'parser/shared/modules/Haste';
import SPELLS from 'common/SPELLS/classic/mage';

class Haste extends CoreHaste {
  hasteBuffs = {
    ...DEFAULT_HASTE_BUFFS,
    [SPELLS.ICY_VEINS.id]: 0.2,
    [SPELLS.PYROMANIAC.id]: 0.05,
  };
}

export default Haste;
