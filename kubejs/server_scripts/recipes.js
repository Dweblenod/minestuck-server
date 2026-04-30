// priority: 15

const generateRecipes = function (event) {
  console.log('Started generating custom data in recipes. If no finish log, then something may be broken!');

  function dndRecipe(material, bolt) {
    return {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            registry: 'minecraft:item',
            tag: `c:ingots/${material}`,
          },
        },
        {
          type: 'neoforge:item_exists',
          item: `dndecor:${material}_${bolt}`,
        },
      ],
      type: 'minecraft:stonecutting',
      ingredient: {
        tag: `c:ingots/${material}`,
      },
      result: {
        count: 4,
        id: `dndecor:${material}_${bolt}`,
      },
    };
  }

  // disable all the improperly conditioned dndecor recipe files
  const materials = ['invar', 'tarnished_gold', 'platinum', 'wrought_iron', 'tungsten', 'silver', 'constantan', 'electrum'];
  const bolts = ['cross_bolt', 'flat_bolt', 'dash_bolt', 'dot_bolt'];
  for (const material of materials) {
    for (const bolt of bolts) {
      newDataFullPath(event, `dndecor:recipe/${material}_${bolt}_from_ingots_${material}_stonecutting`, dndRecipe(material, bolt));
    }
  }

  newDataFullPath(event, 'twilightforest:data_maps/entity_type/ominous_fire', {
    values: {
      'minecraft:horse': {
        transform_to: 'minecraft:zombie_horse',
      },
      'minecraft:piglin': {
        transform_to: 'minecraft:zombified_piglin',
      },
      'minecraft:villager': {
        transform_to: 'minecraft:zombie_villager',
      },
      'minestuck:salamander': {
        transform_to: 'netherex:salamander',
      },
    },
  });
  // should remove twilight mobs with no mans incompat
  newDataFullPath(event, 'twilightforest:data_maps/entity_type/transformation_powder', {
    replace: true,
    values: {
      'minecraft:bat': {
        transform_to: 'hexerei:crow',
      },
      'hexerei:crow': {
        transform_to: 'minecraft:bat',
      },
      'minecraft:cow': {
        transform_to: 'nomansland:deer',
      },
      'nomansland:deer': {
        transform_to: 'minecraft:cow',
      },
      'minecraft:witch': {
        transform_to: 'irons_spellbooks:necromancer',
      },
      'irons_spellbooks:necromancer': {
        transform_to: 'minecraft:witch',
      },
      'minecraft:chicken': {
        transform_to: 'twilightforest:penguin',
      },
      'twilightforest:penguin': {
        transform_to: 'hexerei:owl',
      },
      'hexerei:owl': {
        transform_to: 'minecraft:chicken',
      },
      'minecraft:cave_spider': {
        transform_to: 'twilightforest:swarm_spider',
      },
      'minecraft:ghast': {
        transform_to: 'twilightforest:carminite_ghastguard',
      },
      'minecraft:silverfish': {
        transform_to: 'twilightforest:towerwood_borer',
      },
      'minecraft:slime': {
        transform_to: 'twilightforest:maze_slime',
      },
      'minecraft:spider': {
        transform_to: 'twilightforest:hedge_spider',
      },
      'minecraft:vex': {
        transform_to: 'twilightforest:wraith',
      },
      'minecraft:zombified_piglin': {
        transform_to: 'twilightforest:minotaur',
      },
      'twilightforest:carminite_ghastguard': {
        transform_to: 'minecraft:ghast',
      },
      'twilightforest:hedge_spider': {
        transform_to: 'minecraft:spider',
      },
      'twilightforest:maze_slime': {
        transform_to: 'minecraft:slime',
      },
      'twilightforest:minotaur': {
        transform_to: 'minecraft:zombified_piglin',
      },
      'twilightforest:swarm_spider': {
        transform_to: 'minecraft:cave_spider',
      },
      'twilightforest:towerwood_borer': {
        transform_to: 'minecraft:silverfish',
      },
      'twilightforest:wraith': {
        transform_to: 'minecraft:vex',
      },
    },
  });

  newDrillingAndVein(event, 'bauxite', 'Bauxite', [itemOutput('tfmg:bauxite', 2)], 192, 120, 'minecraft:is_overworld', 2, 'tfmg:bauxite', 1768524184, 8, 136);
  newDrillingAndVein(event, 'coal', 'Cobblestone', [itemOutput('minecraft:cobblestone', 3), itemOutput('minecraft:gravel', 1, 0.15)], 192, 120, 'minecraft:is_overworld', 4, 'minecraft:cobblestone', 1042639205, 8, 128);
  newDrillingAndVein(event, 'copper', 'Sandstone', [itemOutput('minecraft:sandstone', 3), itemOutput('minecraft:sand', 1, 0.15), itemOutput('minecraft:gold_nugget', 1, 0.05)], 192, 100, 'c:is_desert', 4, 'minecraft:sandstone', 277506605, 8, 128);
  newDrillingAndVein(event, 'diamond', 'Diorite', [itemOutput('minecraft:diorite', 2)], 192, 120, 'minecraft:is_overworld', 2, 'minecraft:diorite', 2078084124, 8, 164);
  newDrillingAndVein(event, 'emerald', 'Granite', [itemOutput('minecraft:granite', 2)], 192, 120, 'minecraft:is_overworld', 2, 'minecraft:granite', 551829032, 8, 164);
  newDrillingAndVein(event, 'gold', 'Andesite', [itemOutput('minecraft:andesite', 2)], 192, 120, 'minecraft:is_overworld', 2, 'minecraft:andesite', 1523235716, 8, 164);
  newDrillingAndVein(event, 'hardened_diamond', 'Deepslate', [itemOutput('minecraft:deepslate', 2), itemOutput('createoreexcavation:raw_diamond', 1, 0.01)], 192, 120, 'minecraft:is_overworld', 2, 'minecraft:deepslate', 244884670, 8, 164);
  newDrillingAndVein(event, 'iron', 'Tuff', [itemOutput('minecraft:tuff', 1)], 192, 140, 'minecraft:is_overworld', 1, 'minecraft:tuff', 1544847576, 8, 164);
  newDrillingAndVein(event, 'lapis', 'Asurine', [itemOutput('create:asurine', 1)], 192, 120, 'minecraft:is_overworld', 1, 'create:asurine', 551334445, 8, 214);
  newDrillingAndVein(event, 'ochrum', 'Ochrum', [itemOutput('create:ochrum', 1)], 192, 120, 'minecraft:is_overworld', 1, 'create:ochrum', 1768524181, 8, 214);
  newDrillingAndVein(event, 'redstone', 'Crimsite', [itemOutput('create:crimsite', 1)], 192, 120, 'minecraft:is_overworld', 1, 'create:crimsite', 473161052, 8, 214);
  newDrillingAndVein(event, 'scoria', 'Scoria', [itemOutput('create:scoria', 1)], 192, 120, 'minecraft:is_overworld', 1, 'create:scoria', 1768524182, 8, 214);
  newDrillingAndVein(event, 'veridium', 'Veridium', [itemOutput('create:veridium', 1)], 192, 120, 'minecraft:is_overworld', 1, 'create:veridium', 1768524183, 8, 214);
  newDrillingAndVein(event, 'zinc', 'Limestone', [itemOutput('create:limestone', 3)], 192, 120, 'minecraft:is_overworld', 3, 'create:limestone', 1768524180, 8, 136);
  newDrillingAndVein(event, 'fireclay', 'Fireclay', [itemOutput('tfmg:fireclay', 1)], 192, 140, 'minecraft:is_overworld', 1, 'tfmg:fireclay', 1768524189, 8, 214);
  // newExtractingAndVein(event, 'oil', 'Oil', fluidOutput('tfmg:crude_oil', 100), 192, 140, 'minecraft:is_overworld', 1, 'tfmg:crude_oil_bucket', 486570667435, 8, 214); example made for Medli

  // veil tag created in misc
  newDrillingAndVein(event, 'veil', 'Meteoric', [itemOutput('minestuck:meteoric_stone', 1), itemOutput('ae2:certus_quartz_crystal', 1, 0.05), itemOutput('ae2:fluix_crystal', 1, 0.01)], 192, 120, 'minestuck:veil', 1, 'minestuck:meteoric_stone', 1768524185, 8, 80);
  // newDrillingAndVein(event, 'veil_metal', 'Octahedrite', [{chance:0.2,item:{id:'immersiveengineering:raw_nickel'}},{chance:0.01,item:{id:'mekanism:raw_osmium'}}], 192, 120, 'minestuck:veil', 1, 'minestuck:meteoric_stone', 1768524185, 8, 80);

  newDrillingAndVein(event, 'veradite', 'Veradite', [itemOutput('enderscape:veradite', 3)], 192, 120, 'minecraft:is_end', 3, 'enderscape:veradite', 1868524196, 8, 60);
  newDrillingAndVein(event, 'mirestone', 'Mirestone', [itemOutput('enderscape:mirestone', 3)], 192, 120, 'minecraft:is_end', 3, 'enderscape:mirestone', 1868524197, 8, 80);
  newDrillingAndVein(event, 'kurodite', 'Kurodite', [itemOutput('enderscape:kurodite', 3)], 192, 120, 'minecraft:is_end', 3, 'enderscape:kurodite', 1868524198, 8, 120);
  newDrillingAndVein(event, 'void_shale', 'Void_Shale', [itemOutput('enderscape:void_shale', 1)], 192, 140, 'minecraft:is_end', 1, 'enderscape:void_shale', 1868524199, 8, 214);

  newDataFullPath(event, 'c:tags/item/tea_ingredients', newTag(false, ['nomansland:thistle']));

  newDataFullPath(event, 'apothic_attributes:brewing_mixes/flying_from_levitation', brewMix(`apothic_attributes:levitation`, itemEntry('e2s2:godsoul_ingot'), 'apothic_attributes:flying'));

  newDataFullPath(event, 'supplementaries:recipe/sack', {
    type: 'minecraft:crafting_shaped',
    pattern: [
      '#s#',
      'f f',
      'fff',
    ],
    key: {
      '#': itemEntry('hexerei:infused_fabric'),
      s: itemEntry('minecraft:string'),
      f: itemEntry('supplementaries:flax'),
    },
    result: {
      id: 'supplementaries:sack',
    },
  });


  newDataFullPath(event, 'minestuck:recipe/combinations/subtractshumidire_zomorrodnegative', alchemyCombination('minestuck:subtractshumidire_zomorrodnegative', 'and', 'tfmg:turbine_engine', 'minecraft:iron_sword'));

  newDataFullPath(event, 'minestuck:recipe/combinations/transportalizer', alchemyCombination('minestuck:transportalizer', 'or', 'tempad:chronomark', 'endermanoverhaul:warped_pearl'));
  newDataFullPath(event, 'minestuck:recipe/grist_costs/transportalizer', gristCost('minestuck:transportalizer', {
    'minestuck:build': 10000,
    'minestuck:amethyst': 800,
    'minestuck:rust': 580,
    'minestuck:uranium': 200,
    'minestuck:quartz': 800,
    'minestuck:diamond': 20,
  }));

  newDataFullPath(event, 'minestuck:recipe/grist_costs/skaia_fork', gristCost('minestuck:skaia_fork', {
    'minestuck:build': 30000,
    'minestuck:amethyst': 6300,
    'minestuck:cobalt': 580,
    'minestuck:quartz': 50000,
  }));

  newDataFullPath(event, 'minestuck:recipe/grist_costs/skaian_crocker_rocker', gristCost('minestuck:skaian_crocker_rocker', {
    'minestuck:build': 30000,
    'minestuck:chalk': 9300,
    'minestuck:iodine': 2732,
    'minestuck:quartz': 2914,
    'minestuck:ruby': 10639,
  }));

  newData(event, 'recipe/combinations/giant_cobblestone', alchemyCombination('twilightforest:giant_cobblestone', 'and', 'twilightforest:magic_beans', 'minecraft:cobblestone'));
  newData(event, 'recipe/grist_costs/giant_cobblestone', gristCost('twilightforest:giant_cobblestone', { 'minestuck:build': 128 }));
  newData(event, 'recipe/combinations/giant_leaves', alchemyCombination('twilightforest:giant_leaves', 'and', 'twilightforest:magic_beans', 'minecraft:oak_leaves'));
  newData(event, 'recipe/grist_costs/giant_leaves', gristCost('twilightforest:giant_leaves', { 'minestuck:build': 64 }));

  console.log('Ending gen in recipes.');
};



























// Recipe event =============================================================================================================================================

ServerEvents.recipes((event) => {
  
});
