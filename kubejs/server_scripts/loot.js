// priority: 16

LootJS.modifiers((event) => {
  event.removeGlobalModifiers(/.*relics.*/); // remove relics from loot

  handleAnimal('chicken', 'minecraft:feather', 'minecraft:chicken');
  handleAnimal('cow', 'minecraft:leather', 'minecraft:beef');
  handleAnimal('goat', 'minecraft:leather', 'minecraft:white_wool');
  handleAnimal('pig', 'minecraft:leather', 'minecraft:porkchop');
  handleAnimal('rabbit', 'minecraft:rabbit_hide', 'minecraft:rabbit');
  handleAnimal('sheep', 'minecraft:leather', 'minecraft:mutton');
  handleAnimal('hoglin');

  function handleAnimal(animalIn, lootEntryIn, extraLootEntryIn) {
    event.addEntityModifier(`minecraft:${animalIn}`).customAction((context, loot) => {
      if (lootEntryIn == undefined) {
        loot.addItem(`butchery_lite:${animalIn}_carcass`);
        return;
      }
      
      let entity = context.entity;
      let weight = entity.getNbt().toString().match(/Weight\s*:\s*([0-9]+(?:\.[0-9]+)?)/i); //grab the Weight value from nbt
      weight = weight ? Number(weight[1]) : undefined;

      if (weight == undefined) {
        return;
      }

      //loot.clear();
      loot.remove(ItemFilter.tag("#c:foods"));
      loot.remove(ItemFilter.item("minecraft:leather", false));
      loot.remove(ItemFilter.item("minecraft:rabbit_hide", false));

      if (weight > 0) {
        let moddedWeight = Math.round(weight / 3);
        loot.addItem(`butchery_lite:${animalIn}_carcass`);
        loot.addEntry(LootEntry.of(lootEntryIn, [0, moddedWeight]));
        loot.addEntry(LootEntry.of(extraLootEntryIn, [0, moddedWeight]));
      }
    });
  }
});





LootJS.lootTables((event) => {

  /*global.REPLACED_LOOT_TABLES.forEach(entry => {

  });*/

  //global.REMOVED_LOOT_TABLES.forEach(entry => {
  //  event.clearLootTables(/.*chest.*/);
  //});

  //chicken still broken
  event.getLootTable('butchery_lite:blocks/chicken_cut_1_drop').createPool((pool) => {
    pool.addEntry(LootEntry.of('farmersdelight:chicken_cuts'));
  });
  event.getLootTable('butchery_lite:blocks/chicken_cut_2_drop').clear();
  event.getLootTable('butchery_lite:blocks/chicken_cut_2_drop').createPool((pool) => {
    pool.addEntry(LootEntry.of('minecraft:chicken'));
  }).createPool((pool) => {
    pool.addEntry(LootEntry.of('minecraft:bone'));
    pool.addEntry(LootEntry.of('farmersdelight:chicken_cuts'));
  });

  largeAnimal(event, 'cow', 'minecraft:beef', 1, 'peruviansdelight:beef_heart');
  largeAnimal(event, 'goat', 'minecraft:bone', 1, 'createcybernetics:bodypart_heart');
  largeAnimal(event, 'pig', 'farmersdelight:ham', 2, 'createcybernetics:bodypart_heart');
  largeAnimal(event, 'sheep', 'minecraft:mutton', 1, 'createcybernetics:bodypart_heart');

  event.getLootTable(`butchery_lite:blocks/hoglin_skin_drop`).clear();
  event.getLootTable(`butchery_lite:blocks/hoglin_skin_drop`).createPool((pool) => {
    pool.addEntry(LootEntry.of('mynethersdelight:hoglin_hide'));
  })
  event.getLootTable(`butchery_lite:blocks/hoglin_cut_1_drop`).clear();
  largeAnimal(event, 'hoglin', 'mynethersdelight:hoglin_loin', 0, 'createcybernetics:bodypart_heart');
  event.getLootTable(`butchery_lite:blocks/hoglin_cut_1_drop`).createPool((pool) => {
    pool.addEntry(LootEntry.of('mynethersdelight:hoglin_loin')).rolls([2, 4]);
  });
});


function largeAnimal(event, name, food, emptyWeight, heart) {
  event.getLootTable(`butchery_lite:blocks/${name}_cut_1_drop`).createPool((pool) => {
    pool.addEntry(LootEntry.of(food));
    pool.addEntry(LootEntry.empty().withWeight(emptyWeight));
  });
  event.getLootTable(`butchery_lite:blocks/${name}_cut_2_drop`).createPool((pool) => {
    pool.addEntry(LootEntry.of(heart).withWeight(2));
    pool.addEntry(LootEntry.of('createcybernetics:bodypart_lungs').withWeight(2));
    pool.addEntry(LootEntry.of('createcybernetics:bodypart_muscle'));
    pool.addEntry(LootEntry.of(food));
    pool.addEntry(LootEntry.empty().withWeight(emptyWeight));
  });
  event.getLootTable(`butchery_lite:blocks/${name}_cut_3_drop`).createPool((pool) => {
    pool.addEntry(LootEntry.of('createcybernetics:bodypart_liver'));
    pool.addEntry(LootEntry.of('createcybernetics:bodypart_intestines'));
    pool.addEntry(LootEntry.of('createcybernetics:bodypart_skeleton'));
    pool.addEntry(LootEntry.of('minecraft:bone').withWeight(2)).rolls([1, 3]);
    pool.addEntry(LootEntry.of(food).withWeight(2)).rolls([1, 2]);
    pool.addEntry(LootEntry.empty().withWeight(emptyWeight + 1));
  });
}
