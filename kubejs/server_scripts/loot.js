// priority: 16

const $EntityPredicate = Java.loadClass('net.minecraft.advancements.critereon.EntityPredicate');


LootJS.modifiers((event) => {
  event.removeGlobalModifiers(/.*relics.*/); // remove relics from loot
  //event.removeGlobalModifiers(/.*butchery.*/);

  /*
  function weightPred(weightIn) {
    return new JsonBuilder({
      "condition": "minecraft:entity_properties",
      "entity": "this",
      "predicate": {
        "nbt": `{SaltsAnimalFarm:{Weight:${weightIn}}}`
      }
    }).build();
  };
  let sickPred = weightPred(0);
  let greatPred = weightPred(4);
  let greaterPred = weightPred(5);
  let maxPred = weightPred(6);

  //"minecraft:chicken"
  //"minecraft:cow"
  //"minecraft:goat"
  //"minecraft:pig"
  //"minecraft:rabbit"
  //"minecraft:sheep"
  event.addEntityModifier()
    //.removeLoot(ItemFilter.ANY) //removes everything
    //.replaceLoot()
    .addLoot(LootEntry.of("minecraft:diamond").matchCustomCondition(weightPred(1)))
    //.addLoot().matchEntity($EntityPredicate.Builder.entity())
  /**/

  /*const entry = LootEntry.of("minecraft:diamond").matchCustomCondition({
    "condition": "minecraft:entity_properties",
    "entity": "this",
    "predicate": {
      "nbt": "{SaltsAnimalFarm:{Weight:1}}"
    }
  });

  event.addEntityModifier("minecraft:chicken").addLoot(entry);*/


  /**/
  //console.log("eeee")
  handleAnimal('chicken', LootEntry.of('minecraft:feather'), LootEntry.of('minecraft:chicken'));
  handleAnimal('cow', LootEntry.of('minecraft:leather'), LootEntry.of('minecraft:beef'));
  handleAnimal('goat', LootEntry.of('minecraft:leather'), LootEntry.of('minecraft:white_wool'));
  handleAnimal('pig', LootEntry.of('minecraft:leather'), LootEntry.of('minecraft:porkchop'));
  handleAnimal('rabbit', LootEntry.of('minecraft:rabbit_hide'), LootEntry.of('minecraft:rabbit'));
  handleAnimal('sheep', LootEntry.of('minecraft:leather'), LootEntry.of('minecraft:mutton'));

  function handleAnimal(animalIn, lootEntryIn, extraLootEntryIn) {
    event.addEntityModifier(`minecraft:${animalIn}`).customAction((context, loot) => {
      let entity = context.entity;
      let nbt = entity.getNbt();
      let weight = nbt.toString().match(/Weight\s*:\s*([0-9]+(?:\.[0-9]+)?)/i);
      weight = weight ? Number(weight[1]) : undefined;

      if (weight == undefined)
        return;

      let moddedWeight = Math.round(weight / 2);
      console.log(`animal weight: ${weight}. modded weight = ${moddedWeight}`);

      //loot.clear();
      let leather = ItemFilter.item("minecraft:leather", false);
      //let hadLeather = loot.hasItem(leather);
      let hide = ItemFilter.item("minecraft:rabbit_hide", false);
      //let hadHide = loot.hasItem(hide);
      let feather = ItemFilter.item("minecraft:leather", false);
      //let hadFeather = loot.hasItem(feather);
      loot.remove(ItemFilter.tag("#c:foods"));
      loot.remove(leather);
      loot.remove(hide);
      loot.remove(feather);

      if (weight > 0) {
        loot.addItem(`butchery_lite:${animalIn}_carcass`);

        if (moddedWeight >= 1) {
          //addEntry is causing issues
          //loot.addEntry(lootEntryIn).rolls([1, moddedWeight]);
          //loot.addEntry(extraLootEntryIn).rolls([1, moddedWeight]);
        }
      }
    });
  }
  /**/
});





LootJS.lootTables((event) => {
  //console.log("blahblah");
  //event.getEntityTable("minecraft:sheep").firstPool();

  /*global.REPLACED_LOOT_TABLES.forEach(entry => {

  });*/

  //global.REMOVED_LOOT_TABLES.forEach(entry => {
  //  event.clearLootTables(/.*chest.*/);
  //});

  /*event.create('custom:chests/rare').createPool((pool) => {
    pool.addEntry(LootEntry.reference('minestuck:chests/rare_item')).rolls([1, 3]);
    pool.addEntry(LootEntry.reference('minestuck:chests/supply_item')).rolls([4, 7]);
  });

  event.create('custom:gameplay/ruined_artifact').createPool((pool) => {
    pool.addEntry(LootEntry.of('season_x:ruined_artifact_sword'));
    pool.addEntry(LootEntry.of('season_x:ruined_artifact_knife'));
    pool.addEntry(LootEntry.of('season_x:ruined_artifact_gear'));
    pool.addEntry(LootEntry.of('season_x:ruined_artifact_orb'));
    pool.addEntry(LootEntry.of('season_x:ruined_artifact_cube'));
    pool.addEntry(LootEntry.of('season_x:ruined_artifact_debris'));
    pool.addEntry(LootEntry.of('season_x:ruined_artifact_blade'));
  });

  event.create('custom:gameplay/scientist_map').createPool((pool) => {
    pool.addEntry(furledMap('cataclysm:ancient_factory', 'Research Facility Map', 1));
  });

  event.getLootTable('minecraft:chests/spawn_bonus_chest').createPool((pool) => {
    pool.addEntry(LootEntry.of('minecraft:bundle')).rolls([1, 2]);
    pool.addEntry(LootEntry.of('paldelight:sumac_berries')).rolls([3, 8]);
  });

  // any eyes that get modified are done so through here instead of config for easier management and visibility
  event.getLootTable('cataclysm:entities/scylla').createPool((pool) => {
    pool.addEntry(LootEntry.of('endrem:black_eye'));
  }).createPool((pool) => {
    pool.addEntry(LootEntry.reference('custom:gameplay/ruined_artifact').withWeight(1));
    pool.addEntry(LootEntry.empty().withWeight(2));
  });
  event.getLootTable('irons_spellbooks:entities/cryomancer').firstPool((pool) => {
    pool.addEntry(LootEntry.of('endrem:cold_eye'));
  });
  event.getLootTable('cataclysm:entities/aptrgangr').firstPool((pool) => {
    pool.addEntry(LootEntry.of('endrem:cold_eye'));
  });
  event.getLootTable('irons_spellbooks:entities/archevoker').firstPool((pool) => {
    pool.addEntry(LootEntry.of('endrem:corrupted_eye'));
  }).createPool((pool) => {
    pool.addEntry(LootEntry.reference('custom:gameplay/ruined_artifact').withWeight(1));
    pool.addEntry(LootEntry.empty().withWeight(15));
  });
  // cryptic through tech
  // cursed unmodded
  // evil through magic
  // exotic through magic
  // guardian unmodded
  // lost through dialogue
  // magical through magic
  event.getLootTable('cataclysm:entities/netherite_monstrosity').createPool((pool) => {
    pool.addEntry(LootEntry.of('endrem:nether_eye'));
  }).createPool((pool) => {
    pool.addEntry(LootEntry.reference('custom:gameplay/ruined_artifact').withWeight(1));
    pool.addEntry(LootEntry.empty().withWeight(2));
  });
  event.getLootTable('cataclysm:entities/ancient_remnant').createPool((pool) => {
    pool.addEntry(LootEntry.of('endrem:old_eye'));
  }).createPool((pool) => {
    pool.addEntry(LootEntry.reference('custom:gameplay/ruined_artifact').withWeight(1));
    pool.addEntry(LootEntry.empty().withWeight(2));
  });
  // rogue through ??
  // undead through magic
  // witch through magic
  // wither unmodded
  event.getLootTable('irons_spellbooks:entities/dead_king').createPool((pool) => {
    pool.addEntry(LootEntry.of('endrem:undead_soul')).rolls([1, 2]);
  }).createPool((pool) => {
    pool.addEntry(furledMap('minestuck:imp_bunker', 'Imp Bunker Map', 1));
    pool.addEntry(furledMap('minestuck:consort_village', 'Village Map', 1));
    pool.addEntry(furledMap('custom:lich', 'Lich Tower Map', 2));
    pool.addEntry(furledMap('custom:naga', 'Naga Map', 1));
    pool.addEntry(furledMap('custom:hydra', 'Hydra Map', 1));
    pool.addEntry(LootEntry.reference('custom:gameplay/ruined_artifact').withWeight(1));
  });
  event.getLootTable('twilightforest:entities/lich').firstPool((pool) => {
    pool.addEntry(LootEntry.of('endrem:undead_soul'));
  }).createPool((pool) => {
    pool.addEntry(furledMap('minestuck:imp_bunker', 'Imp Bunker Map', 2));
    pool.addEntry(furledMap('minestuck:consort_village', 'Village Map', 2));
    pool.addEntry(furledMap('irons_spellbooks:catacombs', 'Catacombs Map', 1));
    pool.addEntry(furledMap('custom:naga', 'Naga Map', 2));
    pool.addEntry(furledMap('custom:hydra', 'Hydra Map', 1));
    pool.addEntry(LootEntry.reference('custom:gameplay/ruined_artifact').withWeight(1));
    pool.addEntry(LootEntry.empty().withWeight(2));
  });
  event.getLootTable('twilightforest:entities/naga').createPool((pool) => {
    pool.addEntry(furledMap('minestuck:imp_bunker', 'Imp Bunker Map', 2));
    pool.addEntry(furledMap('minestuck:consort_village', 'Village Map', 2));
    pool.addEntry(furledMap('irons_spellbooks:catacombs', 'Catacombs Map', 1));
    pool.addEntry(furledMap('custom:lich', 'Lich Tower Map', 1));
    pool.addEntry(furledMap('custom:hydra', 'Hydra Map', 1));
    pool.addEntry(LootEntry.reference('custom:gameplay/ruined_artifact').withWeight(1));
    pool.addEntry(LootEntry.empty().withWeight(1));
  });
  event.getLootTable('twilightforest:entities/hydra').createPool((pool) => {
    pool.addEntry(furledMap('minestuck:imp_bunker', 'Imp Bunker Map', 1));
    pool.addEntry(furledMap('minestuck:consort_village', 'Village Map', 1));
    pool.addEntry(furledMap('irons_spellbooks:catacombs', 'Catacombs Map', 1));
    pool.addEntry(furledMap('custom:lich', 'Lich Tower Map', 2));
    pool.addEntry(furledMap('custom:naga', 'Naga Map', 2));
    pool.addEntry(LootEntry.reference('custom:gameplay/ruined_artifact').withWeight(1));
  });

  event.getLootTable('twilightforest:chests/tower_foyer').firstPool((pool) => {
    pool.addEntry(LootEntry.of('minecraft:skeleton_skull').withWeight(1));
  }).createPool((pool) => {
    pool.addEntry(LootEntry.reference('minestuck:chests/medium_basic').withWeight(1));
  });

  event.getLootTable('minestuck:gameplay/consort_general').firstPool((pool) => {
    pool.addEntry(furledMap('minestuck:imp_bunker', 'Imp Bunker Map', 2));
    pool.addEntry(furledMap('custom:lich_tower', 'Lich Map', 2));
    pool.addEntry(furledMap('custom:well', 'Occult Map', 1));
  });

  event.getLootTable('minestuck:gameplay/consort_food').firstPool((pool) => {
    pool.addEntry(LootEntry.of('create:dough').withWeight(3));
  });

  event.getLootTable('minestuck:chests/supply_item').firstPool((pool) => {
    // pool.addEntry(LootEntry.of("minecraft:iron_ingot").setCount([0, 5]).withWeight(8))
    // pool.addEntry(LootEntry.of("minecraft:gold_ingot").setCount([0, 4]).withWeight(6));
  });

  event.getLootTable('minestuck:chests/rare_item').firstPool((pool) => {
    pool.removeItem('minestuck:transportalizer');
    pool.addEntry(furledMap('irons_spellbooks:catacombs', 'Catacombs Map', 4));
    pool.addEntry(furledMap('custom:lich_tower', 'Lich Map', 2));
    pool.addEntry(furledMap('twilightforest:knight_stronghold', 'Knight Stronghold Map', 3));
    // pool.addEntry(furledMap('cataclysm:acropolis', 'Acropolis Map', 4));
    // pool.addEntry(furledMap('twilightforest:final_castle', 'Castle Map', 2));
    // pool.addEntry(LootEntry.of('twilightforest:magic_painting').withWeight(1));
    pool.addEntry(LootEntry.of('twilightforest:charm_of_keeping_1').withWeight(10));
    pool.addEntry(LootEntry.of('twilightforest:charm_of_life_1').withWeight(3));
    pool.addEntry(LootEntry.reference('irons_spellbooks:chests/additional_treasure_loot').withWeight(1));
    pool.addEntry(LootEntry.of('twilightforest:emperors_cloth').withWeight(1));
  }).createPool((pool) => {
    pool.addEntry(LootEntry.reference('custom:gameplay/ruined_artifact').withWeight(1));
    pool.addEntry(LootEntry.empty().withWeight(85));
  });

  event.getLootTable('minestuck:chests/laboratory/supply').firstPool((pool) => {
    pool.addEntry(LootEntry.of('minestuck:chessboard').setCount([1, 2]).withWeight(1));
    pool.addEntry(LootEntry.of('tempad:time_steel').setCount([0, 1]).withWeight(1));
    pool.addEntry(LootEntry.of('tempad:location_card').setCount([1, 2]).withWeight(3));
  }).createPool((pool) => {
    pool.addEntry(LootEntry.reference('minestuck:chests/supply_item').withWeight(1));
  });

  event.getLootTable('irons_spellbooks:magic_items/basic_curios').firstPool((pool) => {
    pool.removeItem('irons_spellbooks:fireward_ring');
    pool.removeItem('irons_spellbooks:frostward_ring');
    pool.removeItem('irons_spellbooks:poisonward_ring');
  });

  event.getLootTable('irons_spellbooks:chests/filler_storage_loot').firstPool().addEntry(LootEntry.reference('minestuck:chests/misc_item').withWeight(1));

  event.getLootTable('minestuck:chests/supply_item/terrain/minestuck/rain').firstPool((pool) => {
    pool.addEntry(LootEntry.of('twilightforest:magic_beans').withWeight(1));
    pool.addEntry(LootEntry.of('twilightforest:uberous_soil').withWeight(1));
  });

  event.getLootTable('minestuck:chests/supply_item/terrain/minestuck/rainbow').firstPool((pool) => {
    pool.removeItem('faygoplus:ultimate_faygo');
  });

  // there is no crow loot table
  // event.getLootTable('hexerei:entities/crow').firstPool().addEntry(LootEntry.reference('twilightforest:entities/raven'));

  */
});


/*
//viksyloot
LootJS.lootTables((event) => {
    event.getLootTable('e2s2:chests/wither_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('minestuck:starshard_tri_blade')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('endrem:wither_eye')).rolls([1, 1]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('ends_delight:non_hatchable_dragon_egg')).rolls([0, 3]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('ends_delight:dragon_leg')).rolls([1, 2]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('ends_delight:raw_dragon_meat')).rolls([6, 8]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('ends_delight:dragon_tooth')).rolls([0, 4]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('irons_spellbooks:dragonskin')).rolls([4, 8]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('minestuck:basilisk_breath_dragonslayer')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('e2s2:dragon_stone')).rolls([0, 1]);
    });
    event.create('custom:chests/meteor_lab/all').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/ecto')).rolls([1, 3]);
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/supplies')).rolls([1, 4]);
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/parts')).rolls([1, 3]);
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/electronics')).rolls([1, 2]);
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/misc')).rolls([1, 5]);
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/sburb')).rolls([0, 1]);
    });
    event.create('custom:chests/meteor_lab/ecto').createPool((pool) => {
        pool.addEntry(LootEntry.of('minestuck:computer_parts')).rolls([1, 3]);
        pool.addEntry(LootEntry.of('minestuck:completed_sburb_code')).rolls([1, 1]);
        pool.addEntry(LootEntry.of('minestuckdungeons:build_block')).rolls([1, 3]);
        pool.addEntry(LootEntry.of('create_things_and_misc:slime_bucket')).rolls([1, 1]);
        pool.addEntry(LootEntry.of('minecraft:slime_block')).rolls([1, 4]);
    });
    event.create('custom:chests/meteor_lab/supplies').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:bread')).rolls([0, 6]);
        pool.addEntry(LootEntry.of('alchemyexpanded:dito')).rolls([0, 2]);
        pool.addEntry(LootEntry.of('alchemyexpanded:ammo')).rolls([0, 3]);
        pool.addEntry(LootEntry.of('alchemyexpanded:flare')).rolls([0, 1]);
    });
    event.create('custom:chests/meteor_lab/parts').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:redstone')).rolls([3, 6]);
        pool.addEntry(LootEntry.of('minecraft:iron_ingot')).rolls([1, 4]);
        pool.addEntry(LootEntry.of('dndecor:industrial_cogwheel')).rolls([1, 6]);
        pool.addEntry(LootEntry.of('tfmg:copper_wire')).rolls([1, 6]);
        pool.addEntry(LootEntry.of('tfmg:cast_iron_pipe')).rolls([1, 2]);
    });
    event.create('custom:chests/meteor_lab/electronics').createPool((pool) => {
        pool.addEntry(LootEntry.of('sillyworks:basic_processor')).rolls([1, 2]);
        pool.addEntry(LootEntry.of('minestuck:battery')).rolls([1, 4]);
        pool.addEntry(LootEntry.of('tfmg:capacitor_item')).rolls([1, 2]);
        pool.addEntry(LootEntry.of('tfmg:resistor')).rolls([1, 2]);
        pool.addEntry(LootEntry.of('tfmg:transistor_item')).rolls([1, 2]);
        pool.addEntry(LootEntry.of('sillyworks:vacuum_tube')).rolls([1, 2]);
    });
    event.create('custom:chests/meteor_lab/misc').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/captcha_codes')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:uranium_powered_stick')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:blank_disk')).rolls([0, 2]);
        pool.addEntry(LootEntry.of('alchemyexpanded:gun_parts')).rolls([0, 3]);
        pool.addEntry(LootEntry.of('minestuck:captcha_card')).rolls([3, 8]);
    });
    event.create('custom:chests/meteor_lab/sburb').createPool((pool) => {
        pool.addEntry(LootEntry.of('minestuck:platform_receptacle')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:platform_generator')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:trajector_block')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:skaianet_denier')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:holopad')).rolls([1, 1]);
        pool.addEntry(LootEntry.of('computercraft:computer_normal')).rolls([1, 1]);
        pool.addEntry(LootEntry.of('minestuck:ancient_thumb_drive')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('alchemyexpanded:green_sun_book')).rolls([1, 1]);
    });
    event.create('custom:chests/meteor_lab/all/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/all')).rolls([2, 8]);
    });
    event.create('custom:chests/meteor_lab/ecto/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/ecto')).rolls([2, 8]);
    });
    event.create('custom:chests/meteor_lab/supplies/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/supplies')).rolls([6, 12]);
    });
    event.create('custom:chests/meteor_lab/parts/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/parts')).rolls([2, 8]);
    });
    event.create('custom:chests/meteor_lab/electronics/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/electronics')).rolls([2, 8]);
    });
    event.create('custom:chests/meteor_lab/misc/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/misc')).rolls([1, 3]);
    });
    event.create('custom:chests/meteor_lab/sburb/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/sburb')).rolls([6, 8]);
    });
    
});
*/