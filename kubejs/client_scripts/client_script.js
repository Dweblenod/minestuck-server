// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)');

/*ProbeEvents.snippets(event => {
    event.create("metal", ["gold", "iron", "copper", "netherite"])
});*/

RecipeViewerEvents.removeCategories(event => {
  //event.remove('jeresources:mob')
  //event.remove('jeresources:dungeon')
  //event.remove('jearchaeology:brush')
});

RecipeViewerEvents.removeEntries('item', event => {
  event.remove('irons_spellbooks:wayward_compass');

  event.remove('cataclysm:mech_eye');
  event.remove('cataclysm:cursed_eye');
  event.remove('cataclysm:flame_eye');
  event.remove('cataclysm:storm_eye');

  event.remove('relics:infinity_ham');

  event.remove('extrastuck:office_key');
  event.remove('extrastuck:handgun');
  event.remove('extrastuck:handgun_bullet');
  event.remove('extrastuck:heavy_handgun_bullet');

  event.remove('minestuck_extended:roulette_modus_card');
});

RecipeViewerEvents.addInformation('item', event => {
  event.add('minestuck:sburb_code', ['Check the Quests for help if you get stuck!']);

  event.add('create:potato_cannon', ['Can accept the following as custom ammo:', '-cannon balls', '-fungal spores', 'The deployer may accept things not listed here!']);

  event.addItem('endrem:black_eye', ['Dropped by the scourge of the Prospitians']);
  event.addItem('endrem:cold_eye', ['Dropped by the strongest within a frozen prison, or by the ice inclined mages']);
  event.addItem('endrem:corrupted_eye', ['Dropped by the most powerful of Illager kind']);
  event.addItem('endrem:nether_eye', ['Dropped by that which dwells in the dormant forge']);
  event.addItem('endrem:old_eye', ['Dropped by that most powerful which dwells in the sandy catacombs']);
  event.addItem('endrem:undead_soul', ['Obtained by powerful or rare necrotic forces. Particularly those which hold dominion over others']);
});

ClientEvents.lang('en_us', event => {
  event.add('biome.minestuck.skaia', 'The Battlefield');
  event.add('biome.minestuck.veil', 'The Veil');
  event.add('biome.minestuck.prospit', 'Prospit');
  event.add('biome.minestuck.land_default_ocean', 'Land Ocean');
  event.add('biome.minestuck.land_default_normal', 'Land Normal');
  event.add('biome.minestuck.land_default_rough', 'Land Rough');
  event.add('biome.minestuck.land_high_humid_ocean', 'Land Ocean');
  event.add('biome.minestuck.land_high_humid_normal', 'Land Normal');
  event.add('biome.minestuck.land_high_humid_rough', 'Land Rough');
  event.add('biome.minestuck.land_no_rain_ocean', 'Land Ocean');
  event.add('biome.minestuck.land_no_rain_normal', 'Land Normal');
  event.add('biome.minestuck.land_no_rain_rough', 'Land Rough');
  event.add('biome.minestuck.land_snow_ocean', 'Land Ocean');
  event.add('biome.minestuck.land_snow_normal', 'Land Normal');
  event.add('biome.minestuck.land_snow_rough', 'Land Rough');
  event.add('tag.minestuck.land.rough', 'Land Rough');
  event.add('dimension.minestuck.skaia', 'The Battlefield');
  event.add('dimension.minestuck.veil', 'The Veil');
  event.add('dimension.minestuck.prospit', 'Prospit');
  event.add('attribute.name.player.underling_damage_modifier', 'Underling Damage Modifier');
  event.add('attribute.name.player.underling_damage_modifier.desc', 'How much extra damage towards Underlings you deal');
  event.add('attribute.name.player.underling_protection_modifier', 'Underling Protection Modifier');
  event.add('attribute.name.player.underling_protection_modifier.desc', 'Percentage of damage dealt by Underlings you are hit by');
  event.add('attribute.name.generic.fall_damage_multiplier.desc', 'Percentage of fall damage you will be affected by');

  event.add('parcool.max_stamina', 'Max Stamina');
  event.add('parcool.stamina_recovery', 'Stamina Recovery');

  event.add('gui.twilightforest.ominous_flame_jei', 'Ominous Flame');
})