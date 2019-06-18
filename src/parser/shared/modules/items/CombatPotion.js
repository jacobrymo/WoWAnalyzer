import SPELLS from 'common/SPELLS/index';

import Potion from './Potion';

/**
 * Tracks combat potion cooldown (DPS, HPS, mana, mitigation).
 */
class CombatPotion extends Potion {
  static spells = [
    SPELLS.BATTLE_POTION_OF_INTELLECT,
    SPELLS.BATTLE_POTION_OF_STRENGTH,
    SPELLS.BATTLE_POTION_OF_AGILITY,
    SPELLS.BATTLE_POTION_OF_STAMINA,
    SPELLS.POTION_OF_RISING_DEATH,
    SPELLS.POTION_OF_BURSTING_BLOOD,
    SPELLS.STEELSKIN_POTION,
    SPELLS.COASTAL_MANA_POTION,
    SPELLS.COASTAL_REJUVENATION_POTION,
    SPELLS.POTION_OF_REPLENISHMENT,
  ];
  static recommendedEfficiency = 0;
  static extraAbilityInfo = {
    name: 'Combat Potion',
    buffSpellId: [
      SPELLS.BATTLE_POTION_OF_INTELLECT.id,
      SPELLS.BATTLE_POTION_OF_STRENGTH.id,
      SPELLS.BATTLE_POTION_OF_AGILITY.id,
      SPELLS.BATTLE_POTION_OF_STAMINA.id,
      SPELLS.POTION_OF_RISING_DEATH.id,
      SPELLS.POTION_OF_BURSTING_BLOOD.id,
      SPELLS.STEELSKIN_POTION.id,
      SPELLS.COASTAL_MANA_POTION.id,
      SPELLS.COASTAL_REJUVENATION_POTION.id,
      SPELLS.POTION_OF_REPLENISHMENT.id,
    ],
  };
}

export default CombatPotion;
