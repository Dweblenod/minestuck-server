// priority: 16

LootJS.modifiers((event) => {
  event.removeGlobalModifiers(/.*relics.*/); // remove relics from loot

  handleAnimal('chicken', 'minecraft:feather', 'minecraft:chicken');
  handleAnimal('cow', 'minecraft:leather', 'minecraft:beef');
  handleAnimal('goat', 'minecraft:leather', 'minecraft:white_wool');
  handleAnimal('pig', 'minecraft:leather', 'minecraft:porkchop');
  handleAnimal('rabbit', 'minecraft:rabbit_hide', 'minecraft:rabbit');
  handleAnimal('sheep', 'minecraft:leather', 'minecraft:mutton');

  function handleAnimal(animalIn, lootEntryIn, extraLootEntryIn) {
    event.addEntityModifier(`minecraft:${animalIn}`).customAction((context, loot) => {
      let entity = context.entity;
      let weight = entity.getNbt().toString().match(/Weight\s*:\s*([0-9]+(?:\.[0-9]+)?)/i); //grab the Weight value from nbt
      weight = weight ? Number(weight[1]) : undefined;

      if (weight == undefined)
        return;

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
});