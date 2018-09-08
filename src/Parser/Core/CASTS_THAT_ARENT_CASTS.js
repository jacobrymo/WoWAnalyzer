import SPELLS from 'common/SPELLS';

export default [
  /**
   * This can consist of boss mechanics marked as casts, buff applications marked
   * as separate casts from the normal ability, toy casts that some people macro
   * into their abilities and so forth
   */
  SPELLS.ASTRAL_VULNERABILITY.id, // Tomb of Sargeras - Sisters of the Moon: the "tick" when someone crosses moons
  SPELLS.ANNIHILATION_TRILLIAX.id, // The Nighthold - cake boss: the "tick" of the Annihilation beam
  SPELLS.CHI_BURST_HEAL.id, // this is the "tick" when you hit a player, the actual cast has a different id
  SPELLS.SHADOWY_APPARITION.id,
  SPELLS.DEFILED_AUGMENT_RUNE.id,
  SPELLS.UMBRAL_GLAIVE_STORM_TICK.id, // ticks of the Umbral Moonglaives trinket proc a cast event
  SPELLS.PRIMAL_FURY.id, // Feral Druid "extra CP on crit" proc causes a cast event
  SPELLS.BARBED_SHOT_PET_BUFF.id, //The buff applied to BM Hunter pet when casting Barbed Shot
  SPELLS.BLOW_DARKMOON_WHISTLE.id, //Darkmoon Whistle active that some people macro into abilities
  SPELLS.DARKMOON_FIREWORK.id, //Darkmoon Firework toy
  SPELLS.FIRE_MINES.id, // Forgefiends fabricator
  SPELLS.FIRE_MINES_2.id, // Forgefiends fabricator
  SPELLS.BIG_RED_RAYS.id, //Big Red Raygun active effect
  SPELLS.FRACTURE_MAIN_HAND.id, // Fracture main hand damage ability
  SPELLS.FRACTURE_OFF_HAND.id, // Fracture off hand damage ability
  SPELLS.SOUL_FRAGMENT_KILLING_BLOW.id, // Soul Fragment that are sometimes generated by killing blows (it does not affect much of a rotation, because it's usually ~1:200, comparing to usual soul fragment generation)
  SPELLS.CHAOS_BLADES_DAMAGE_OH.id, // Chaos Blades "casts" when you auto attack with the buff on. So the cast means nothing, just the buff application (SPELLS.CHAOS_BLADES_BUFF)
  SPELLS.CHAOS_BLADES_DAMAGE_MH.id, // Chaos Blades "casts" when you auto attack with the buff on. So the cast means nothing, just the buff application (SPELLS.CHAOS_BLADES_BUFF)
  255724, // proc from a Legion Antorus trinket
];
