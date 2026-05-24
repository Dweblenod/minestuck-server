// priority: 15

const generateRecipes = function (event) {
  console.log('Started generating custom data in recipes. If no finish log, then something may be broken!');

  /*function dndRecipe(material, bolt) {
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
  });*/
  new ShapedCrafting(null, itemOutput('computercraft:computer_normal'), [
    'ABA',
    'ACA',
    'ADA'])
    .setPath('computercraft:recipe/computer_normal')
    .addKey('A', itemEntry('sillyworks:stone_brick'))
    .addKey('B', itemEntry('create:iron_sheet'))
    .addKey('C', tagEntry('sillyworks:processors/bad'))
    .addKey('D', itemEntry('ae2:quartz_glass'))
    .build(event);
  new ShapedCrafting(null, itemOutput('computercraft:computer_advanced'), [
    'ABA',
    'ACA',
    'ADA'])
    .setPath('computercraft:recipe/computer_advanced')
    .addKey('A', itemEntry('sillyworks:diorite_alloy'))
    .addKey('B', itemEntry('create:golden_sheet'))
    .addKey('C', tagEntry('sillyworks:processors/good'))
    .addKey('D', itemEntry('ae2:quartz_glass'))
    .build(event);
  wipeDataAtPath(event, 'computercraft:recipe/computer_advanced_upgrade');
  new ShapedCrafting(null, itemOutput('computercraft:pocket_computer_normal'), [
    'ABA',
    'ACA',
    'ADA'])
    .setPath('computercraft:recipe/pocket_computer_normal')
    .addKey('A', itemEntry('sillyworks:clay_polymer_ingot'))
    .addKey('B', itemEntry('minecraft:apple'))
    .addKey('C', tagEntry('sillyworks:processors/good'))
    .addKey('D', itemEntry('ae2:quartz_vibrant_glass'))
    .build(event);
  new ShapedCrafting(null, itemOutput('computercraft:pocket_computer_advanced'), [
    'ABA',
    'ACA',
    'ADA'])
    .setPath('computercraft:recipe/pocket_computer_advanced')
    .addKey('A', itemEntry('sillyworks:clay_polymer_ingot'))
    .addKey('B', itemEntry('minecraft:golden_apple'))
    .addKey('C', itemEntry('sillyworks:microprocessor'))
    .addKey('D', itemEntry('ae2:quartz_vibrant_glass'))
    .build(event);
  wipeDataAtPath(event, 'computercraft:recipe/pocket_computer_advanced_upgrade');
  //newDataFullPath(event, 'minestuck:recipe/combinations/transportalizer', alchemyCombination('minestuck:transportalizer', 'or', 'tempad:chronomark', 'endermanoverhaul:warped_pearl'));
  new GristCost('minestuck:transportalizer').setPath('minestuck:recipe/grist_costs/transportalizer')
    .addGrist('minestuck:build', 10000)
    .addGrist('minestuck:amethyst', 800)
    .addGrist('minestuck:rust', 580)
    .addGrist('minestuck:uranium', 200)
    .addGrist('minestuck:quartz', 800)
    .addGrist('minestuck:diamond', 20)
    .build(event);

  new CreateRecipe('end_fluid_to_dust', 'create:compacting',
    [fluidEntry("minestuck:ender", 1000), tagEntry("c:dusts/quartz")],
    [itemOutput("ae2:ender_dust")])
    .build(event);

  var enderTest = new SequencedAssembly('ender_test', itemEntry('sillyworks:quartz_dust'),
    [itemOutput('ae2:ender_dust')], 'sillyworks:quartz_dust', 1);
  enderTest.addSequence(new CreateRecipe(null, 'create:filling',
    [enderTest.getTransitItem(false), fluidEntry('minestuck:ender', 500)],
    [enderTest.getTransitItem(true)]))
  enderTest.addSequence(sequencedRecipeEntry('create:filling', fluidEntry('minestuck:ender', 500), enderTest))
  enderTest.build(event)

  console.log('Ending gen in recipes.');
};



























// Recipe event =============================================================================================================================================

ServerEvents.recipes((event) => {
  global.REPLACED_RECIPES.forEach(entry => {
    event.replaceInput(
      { input: entry[0] },
      entry[0],
      Ingredient.of(entry[1])
    );
  });
  global.REMOVED_RECIPES.forEach(entry => {
    event.remove({output: entry});
  });
});






//old recipes
/*
ServerEvents.recipes((event) => {
  // tweaked versions of existing recipes made by medli/dweb ==========================================================================================

  event.remove({ output: '#refurbished_furniture:food' });
  event.remove(
    {
      type: 'refurbished_furniture:cutting_board_combining',
    }
  );
  event.remove(
    {
      type: 'refurbished_furniture:cutting_board_slicing',
    }
  );

  event.remove({ id: 'computercraft:computer_normal' });
  event.remove({ id: 'ae2:network/blocks/spatial_anchor' });
  event.remove({ id: 'mekanism:dimensional_stabilizer' });
  event.remove({ id: 'computercraft:computer_advanced' });
  event.remove({ id: 'computercraft:computer_advanced_upgrade' });
  event.remove({ id: 'computercraft:pocket_computer_normal' });
  event.remove({ id: 'computercraft:pocket_computer_advanced' });
  event.remove({ id: 'computercraft:pocket_computer_advanced_upgrade' });
  event.remove({ mod: 'ae2', output: 'ae2:cell_component_1k' });
  event.remove({ mod: 'ae2', output: 'ae2:cell_component_4k' });
  event.remove({ mod: 'ae2', output: 'ae2:cell_component_16k' });
  event.remove({ mod: 'ae2', output: 'ae2:cell_component_64k' });
  event.remove({ mod: 'ae2', output: 'ae2:cell_component_256k' });
  event.remove({ mod: 'ae2', output: 'ae2:spatial_cell_component_2' });
  event.remove({ mod: 'ae2', output: 'ae2:spatial_cell_component_16' });
  event.remove({ mod: 'ae2', output: 'ae2:spatial_cell_component_128' });
  event.remove({ mod: 'sillyworks', output: 'sillyworks:microprocessor' });
  //event.remove({ mod: 'sillyworks', output: 'sillyworks:basic_processor' });
  //event.remove({ mod: 'sillyworks', output: 'sillyworks:upgraded_processor' });
  //event.remove({ mod: 'sillyworks', output: 'sillyworks:silly' });
  event.remove({ output: 'hexerei:dowsing_rod' });
  event.remove({ output: 'minestuck:transportalizer' }); //readded farther down

  createRecipe(event, 'create:compacting', 'heated',
    [fluidEntry("minestuck:oil", 250), itemEntry('sillyworks:sawdust', 8)],
    [itemOutput("minecraft:coal", 6)]
  );

  createRecipe(event, 'create:mixing', 'superheated',
    [fluidEntry("minestuck:light_water", 1000), itemEntry('ae2:certus_quartz_dust', 2)],
    [itemOutput("minecraft:glowstone_dust", 2), fluidOutput('minecraft:water', 500)]
  );

  createRecipe(event, 'create:compacting', 'none',
    [fluidEntry("minestuck:molten_amber", 1000)],
    [itemOutput("minecraft:magma_block")]
  );

  event.custom({
    type: 'minecraft:smelting',
    category: 'misc',
    cookingtime: 200,
    experience: 0.1,
    ingredient: {
      item: 'minecraft:magma_cream',
    },
    result: {
      id: 'minecraft:blaze_powder'
    }
  });

  event.custom(
    {
      type: 'create:sequenced_assembly',
      ingredient: {
        item: 'hexerei:moon_dust_brush',
      },
      loops: 5,
      results: [
        {
          chance: 120.0,
          id: 'hexerei:broom_thruster_brush',
        },
      ],
      sequence: [
        createRecipeData('create:deploying', 'none',
          [itemEntry('hexerei:moon_dust_brush'), itemEntry('tfmg:aluminum_pipe')],
          [itemOutput('hexerei:moon_dust_brush')]
        ),
        createRecipeData('create:deploying', 'none',
          [itemEntry('hexerei:moon_dust_brush'), itemEntry('create:fluid_tank')],
          [itemOutput('hexerei:moon_dust_brush')]
        ),
        createRecipeData('create:deploying', 'none',
          [itemEntry('hexerei:moon_dust_brush'), itemEntry('mekanism:alloy_reinforced')],
          [itemOutput('hexerei:moon_dust_brush')]
        ),
        createRecipeData('create:deploying', 'none',
          [itemEntry('hexerei:moon_dust_brush'), itemEntry('ae2:speed_card')],
          [itemOutput('hexerei:moon_dust_brush')]
        ),
        createRecipeData('create:deploying', 'none',
          [itemEntry('hexerei:moon_dust_brush'), itemEntry('sillyworks:ceramic_plate')],
          [itemOutput('hexerei:moon_dust_brush')]
        )
      ],
      transitional_item: {
        id: 'hexerei:moon_dust_brush',
      },
    },
  );








  // Applied energistics 2 sequenced assembly recipes ========================================================================================
  event.custom(
    {
      type: 'create:sequenced_assembly',
      ingredient: {
        tag: 'c:dusts/quartz'
      },
      loops: 1,
      results: [
        {
          count: 2,
          id: 'ae2:quartz_fiber'
        },
      ],
      sequence: [
        createRecipeData('create:filling', 'none',
          [tagEntry('c:dusts/quartz'), fluidEntry('minecraft:water', 500)],
          [itemOutput('sillyworks:quartz_dust')]
        ),
        createRecipeData('create:deploying', 'none',
          [tagEntry('c:dusts/quartz'), itemEntry('sillyworks:glass_dust')],
          [itemOutput('sillyworks:quartz_dust')]
        ),
        createRecipeData('create:deploying', 'none',
          [tagEntry('c:dusts/quartz'), itemEntry('sillyworks:glass_dust')],
          [itemOutput('sillyworks:quartz_dust')]
        )
      ],
      transitional_item: {
        id: 'sillyworks:quartz_dust',
      },
    }
  );

  event.custom(
    {
      type: 'create:sequenced_assembly',
      ingredient: {
        item: 'ae2:quartz_fiber'
      },
      loops: 1,
      results: [
        {
          count: 2,
          id: 'ae2:fluix_glass_cable'
        },
      ],
      sequence: [
        createRecipeData('create:filling', 'none',
          [itemEntry('ae2:quartz_fiber'), fluidEntry('minecraft:water', 500)],
          [itemOutput('ae2:quartz_fiber')]
        ),
        createRecipeData('create:deploying', 'none',
          [itemEntry('ae2:quartz_fiber'), itemEntry('ae2:fluix_dust')],
          [itemOutput('ae2:quartz_fiber')]
        ),
        createRecipeData('create:deploying', 'none',
          [itemEntry('ae2:quartz_fiber'), itemEntry('ae2:fluix_dust')],
          [itemOutput('ae2:quartz_fiber')]
        )
      ],
      transitional_item: {
        id: 'ae2:quartz_fiber',
      },
    },
  );








  // ae2 sillyworks compat!! ======================================================================================================================================================
  event.shaped('ae2:cell_component_1k', [
    'ADA',
    'BCB',
    'ADA',
  ], {
    A: 'minecraft:redstone',
    B: '#c:gems/certus_quartz',
    C: '#sillyworks:processors/bad',
    D: '#c:gems/certus_quartz',
  });
  event.shaped('ae2:cell_component_4k', [
    'ADA',
    'BCB',
    'ADA',
  ], {
    A: 'minecraft:redstone',
    B: 'ae2:cell_component_1k',
    C: '#sillyworks:processors/bad',
    D: 'ae2:calculation_processor',
  });
  event.shaped('ae2:cell_component_16k', [
    'ADA',
    'BCB',
    'ADA',
  ], {
    A: 'minecraft:glowstone_dust',
    B: 'ae2:cell_component_4k',
    C: '#sillyworks:processors/good',
    D: 'ae2:calculation_processor',
  });
  event.shaped('ae2:cell_component_64k', [
    'ADA',
    'BCB',
    'ADA',
  ], {
    A: 'minecraft:glowstone_dust',
    B: 'ae2:cell_component_16k',
    C: '#sillyworks:processors/good',
    D: 'ae2:calculation_processor',
  });
  event.shaped('ae2:cell_component_256k', [
    'ADA',
    'BCB',
    'ADA',
  ], {
    A: 'ae2:sky_dust',
    B: 'ae2:cell_component_64k',
    C: 'sillyworks:microprocessor',
    D: 'ae2:calculation_processor',
  });
  event.shaped('ae2:spatial_cell_component_2', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: 'ae2:fluix_pearl',
    B: 'minecraft:quartz',
    C: 'sillyworks:microprocessor',
  });
  event.shaped('ae2:spatial_cell_component_16', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: 'ae2:spatial_cell_component_2',
    B: 'minecraft:quartz_block',
    C: 'sillyworks:microprocessor',
  });
  event.shaped('ae2:spatial_cell_component_128', [
    'ADA',
    'BCB',
    'AEA',
  ], {
    A: 'ae2:spatial_cell_component_16',
    B: 'mekanism:teleportation_core',
    C: 'sillyworks:supercomputer',
    D: 'sillyworks:ceramic_plate',
    E: 'minestuck:gutter_thumb_drive',
  });








  // vin's sillyworks inscribing recipes=============================================================================================

  event.custom(
    {
      type: 'ae2:inscriber',
      ingredients: {
        bottom: itemEntry('sillyworks:silicon_circuit_plate'),
        middle: itemEntry('minecraft:gold_nugget'),
        top: itemEntry('sillyworks:diorite_alloy'),
      },
      mode: 'press',
      result: itemOutput('sillyworks:upgraded_processor')
    }
  );
  event.custom(
    {
      type: 'ae2:inscriber',
      ingredients: {
        bottom: itemEntry('sillyworks:microchip_plate'),
        middle: itemEntry('sillyworks:superconductor_component'),
        top: itemEntry('sillyworks:clay_polymer_ingot'),
      },
      mode: 'press',
      result: itemOutput('sillyworks:microprocessor')
    }
  );

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {
      item: 'minestuck:energy_core',
    },
    loops: 1,
    results: [
      {
        count: 4,
        id: 'minestuck:battery',
      },
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          {
            item: 'minestuck:energy_core',
          },
          {
            item: 'create:copper_nugget',
          },
        ],
        results: [
          {
            id: 'minestuck:energy_core',
          },
        ],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {
            item: 'minestuck:energy_core',
          },
          {
            tag: 'c:ingots/lithium',
          },
        ],
        results: [
          {
            id: 'minestuck:energy_core',
          },
        ],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {
            item: 'minestuck:energy_core',
          },
          {
            item: 'create:iron_sheet',
          },
        ],
        results: [
          {
            id: 'minestuck:energy_core',
          },
        ],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {
            item: 'minestuck:energy_core',
          },
          {
            item: 'create:copper_nugget',
          },
        ],
        results: [
          {
            id: 'minestuck:energy_core',
          },
        ],
      },
      {
        type: 'create:pressing',
        ingredients: [
          {
            item: 'minestuck:energy_core',
          },
        ],
        results: [
          {
            id: 'minestuck:energy_core',
          },
        ],
      },
    ],
    transitional_item: {
      id: 'minestuck:energy_core',
    },
  });

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {
      item: 'minestuck:battery',
    },
    loops: 1,
    results: [
      {
        id: 'sillyworks:laser',
      },
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          {
            item: 'minestuck:battery',
          },
          {
            item: 'sillyworks:clay_polymer_ingot',
          },
        ],
        results: [
          {
            id: 'minestuck:battery',
          },
        ],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {
            item: 'minestuck:battery',
          },
          {
            item: 'sillyworks:diorite_alloy',
          },
        ],
        results: [
          {
            id: 'minestuck:battery',
          },
        ],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {
            item: 'minestuck:battery',
          },
          {
            item: 'sillyworks:diorite_alloy',
          },
        ],
        results: [
          {
            id: 'minestuck:battery',
          },
        ],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {
            item: 'minestuck:battery',
          },
          {
            item: 'ae2:fluix_crystal',
          },
        ],
        results: [
          {
            id: 'minestuck:battery',
          },
        ],
      },
    ],
    transitional_item: {
      id: 'minestuck:battery',
    },
  });

  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:chalk': 1,
      'minestuck:cobalt': 8888,
      'minestuck:diamond': 16384,
      'minestuck:build': 10000,
    },
    ingredient: {
      item: 'minestuck:action_claws_drawn',
    },
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:gold': 1500,
      'minestuck:cobalt': 5000,
      'minestuck:diamond': 20000,
      'minestuck:build': 30000,
      'minestuck:zillium': 30,
      'minestuck:quartz': 5000,
      'minestuck:amber': 30000,
    },
    ingredient: {
      item: 'minestuck:zillyhoo_hammer',
    },
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:gold': 1500,
      'minestuck:cobalt': 5000,
      'minestuck:diamond': 20000,
      'minestuck:build': 30000,
      'minestuck:zillium': 30,
      'minestuck:quartz': 5000,
      'minestuck:garnet': 30000,
    },
    ingredient: {
      item: 'minestuck:cutlass_of_zillywair',
    },
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:gold': 1500,
      'minestuck:cobalt': 5000,
      'minestuck:diamond': 20000,
      'minestuck:build': 30000,
      'minestuck:zillium': 30,
      'minestuck:quartz': 5000,
      'minestuck:amethyst': 30000,
    },
    ingredient: {
      item: 'minestuck:thistle_of_zillywich',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:build': 8000,
      'minestuck:cobalt': 500,
      'minestuck:tar': 450
    },
    ingredient: {
      item: 'minestuck:true_blue',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:build': 30000,
      'minestuck:cobalt': 632,
      'minestuck:diamond': 750,
      'minestuck:amethyst': 2350
    },
    ingredient: {
      item: 'minestuck:blue_beams',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:build': 30000,
      'minestuck:chalk': 10000,
      'minestuck:cobalt': 8000,
      'minestuck:diamond': 56000
    },
    ingredient: {
      item: 'minestuck:quill_of_echidna',
    }
  });

});

*/










//medli tweaks
/*
const generateMedliTweaks = function (event) {
    console.log('Started generating custom data in medlitweaks. If no finish log, then something may be broken!');

    //newDrillingAndVein(event, 'fireclay', 'Fireclay', [itemOutputCount('tfmg:fireclay', 1)], 192, 140, 'minecraft:is_overworld', 1, 'tfmg:fireclay', 1768524189, 8, 214);
    newExtractingAndVein(event, 'oil', 'Oil', fluidOutput('tfmg:crude_oil', 100), 192, 140, 'minestuck:land', 1, 'tfmg:crude_oil_bucket', 486570667435, 8, 214);

    console.log('Ending gen in medlitweaks.');
};

ServerEvents.recipes(event => {
    //cryptic eye
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "key": {
            "A": itemEntry("create:experience_block"),
            "B": itemEntry("minecraft:experience_bottle"),
            "C": itemEntry("minecraft:ender_eye"),
            "D": itemEntry("create_things_and_misc:mending_rune"),
            "E": itemEntry("create_things_and_misc:experience_sheet"),
            "F": itemEntry("malum:refined_brilliance")
        },
        "pattern": [
            " AEA ",
            "AFBFA",
            "DBCBD",
            "AFBFA",
            " AEA "
        ],
        "result": itemOutput("endrem:cryptic_eye")
    })
    //rogue eye
    event.custom(
        {
            type: 'create:sequenced_assembly',
            ingredient: {
                item: 'ae2:fluix_pearl',
            },
            loops: 5,
            results: [
                {
                    chance: 120.0,
                    id: 'endrem:rogue_eye',
                },
            ],
            sequence: [
                createRecipeData('create:deploying', 'none',
                    [itemEntry('ae2:fluix_pearl'), itemEntry('immersiveengineering:logic_unit')],
                    [itemOutput('ae2:fluix_pearl')]
                ),
                createRecipeData('create:deploying', 'none',
                    [itemEntry('ae2:fluix_pearl'), itemEntry('create:transmitter')],
                    [itemOutput('ae2:fluix_pearl')]
                ),
                createRecipeData('create:deploying', 'none',
                    [itemEntry('ae2:fluix_pearl'), itemEntry('create:electron_tube')],
                    [itemOutput('ae2:fluix_pearl')]
                ),
                createRecipeData('create:filling', 'none',
                    [itemEntry('ae2:fluix_pearl'), fluidEntry('immersiveengineering:redstone_acid', 500)],
                    [itemOutput('ae2:fluix_pearl')]
                ),
                createRecipeData('create:deploying', 'none',
                    [itemEntry('ae2:fluix_pearl'), itemEntry('immersiveengineering:connector_probe')],
                    [itemOutput('ae2:fluix_pearl')]
                )
            ],
            transitional_item: {
                id: 'ae2:fluix_pearl',
            },
        },
    );



    //oil vein
    //newExtractingAndVein(event, 'oil', 'Oil', fluidOutput('tfmg:crude_oil', 100), 192, 140, 'minecraft:is_overworld', 1, 'tfmg:crude_oil_bucket', 486570667435, 8, 214);
    //coated circuits => etched circuits
    event.custom({
        "type": "immersiveengineering:bottling_machine",
        "fluid": {
            "amount": 125,
            "tag": "c:redstone_acid"
        },
        "input": {
            "item": "tfmg:coated_circuit_board"
        },
        "results": [
            {
                "id": "tfmg:etched_circuit_board"
            }
        ]
    })
    //treated planks + steel => steelcasings
    event.custom({
        "type": "create:item_application",
        "ingredients": [
            {
                "item": "immersiveengineering:treated_wood_horizontal"
            },
            {
                "tag": "c:ingots/steel"
            }
        ],
        "results": [
            {
                "id": "tfmg:steel_casing"
            }
        ]
    })
    //naptha processing => ethyl & propyl
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "type": "fluid_stack",
                "amount": 250,
                "fluid": "tfmg:naphtha"
            }
        ],
        "results": [
            {
                "amount": 100,
                "id": "tfmg:propylene"
            },
            {
                "amount": 150,
                "id": "tfmg:ethylene"
            }
        ]
    })
    //propylene processing => liquid plastic
    event.custom({
        "type": "immersiveengineering:mixer",
        "energy": 3200,
        "fluid": {
            "amount": 500,
            "fluid": "tfmg:propylene"
        },
        "inputs": [],
        "result": {
            "amount": 500,
            "id": "tfmg:molten_plastic"
        }
    })
    //ethylene processing => liquid plastic
    event.custom({
        "type": "immersiveengineering:mixer",
        "energy": 3200,
        "fluid": {
            "amount": 500,
            "fluid": "tfmg:ethylene"
        },
        "inputs": [],
        "result": {
            "amount": 500,
            "id": "tfmg:molten_plastic"
        }
    })
    //molten plastic bottling => sheets
    event.custom({
        "type": "immersiveengineering:bottling_machine",
        "fluid": {
            "amount": 500,
            "fluid": "tfmg:molten_plastic"
        },
        "input": {
            "item": "immersiveengineering:mold_plate"
        },
        "results": [
            {
                "id": "tfmg:plastic_sheet"
            },
            {
                "id": "immersiveengineering:mold_plate"
            }
        ]
    })
    //POCKET WATCH
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:gold": 3000,
            "minestuck:rust": 1500,
            "minestuck:ruby": 750,
        },
        "ingredient": {
            "item": "twilightforest:pocket_watch"
        }
    })
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:clock"
        },
        "input2": {
            "item": "minestuck_extended:time_armor_trim_smithing_template"
        },
        "mode": "or",
        "output": "twilightforest:pocket_watch"
    })
    //PEACOCK FEATHER FAN
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 2000,
            "minestuck:quartz": 1000,
            "minestuck:cobalt": 250,
        },
        "ingredient": {
            "item": "twilightforest:peacock_feather_fan"
        }
    })
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minestuck:fan"
        },
        "input2": {
            "item": "minestuck_extended:breath_armor_trim_smithing_template"
        },
        "mode": "or",
        "output": "twilightforest:peacock_feather_fan"
    })
    //ICE BOMB
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:cobalt": 20,
            "minestuck:sulfur": 10,
            "minestuck:shale": 5,
        },
        "ingredient": {
            "item": "twilightforest:ice_bomb"
        }
    })
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:ice"
        },
        "input2": {
            "item": "minestuck:barbasol_bomb"
        },
        "mode": "and",
        "output": "twilightforest:ice_bomb"
    })
    //ICE BOW
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:cobalt": 1250,
            "minestuck:chalk": 400,
            "minestuck:build": 180,
        },
        "ingredient": {
            "item": "twilightforest:ice_bow"
        }
    })
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:bow"
        },
        "input2": {
            "item": "minecraft:ice"
        },
        "mode": "and",
        "output": "twilightforest:ice_bow"
    })
    //ICE SWORD
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:cobalt": 1000,
            "minestuck:chalk": 750,
            "minestuck:build": 200,
        },
        "ingredient": {
            "item": "twilightforest:ice_sword"
        }
    })
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:diamond_sword"
        },
        "input2": {
            "item": "minecraft:ice"
        },
        "mode": "or",
        "output": "twilightforest:ice_sword"
    })
    //SEEKER BOW
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:shale": 4000,
            "minestuck:amethyst": 2500,
            "minestuck:uranium": 1000,
            "minestuck:gold": 300
        },
        "ingredient": {
            "item": "twilightforest:seeker_bow"
        }
    })
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:bow"
        },
        "input2": {
            "item": "minestuck:pointer_wand"
        },
        "mode": "and",
        "output": "twilightforest:seeker_bow"
    })
    //TRI BOW
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:rust": 1500,
            "minestuck:gold": 450,
            "minestuck:uranium": 30,
            "minestuck:ruby": 17
        },
        "ingredient": {
            "item": "twilightforest:triple_bow"
        }
    })
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:bow"
        },
        "input2": {
            "item": "minecraft:trident"
        },
        "mode": "and",
        "output": "twilightforest:triple_bow"
    })
    //ENDER BOW
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:shale": 1500,
            "minestuck:uranium": 912,
            "minestuck:mercury": 300,
            "minestuck:ruby": 17
        },
        "ingredient": {
            "item": "twilightforest:ender_bow"
        }
    })
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:bow"
        },
        "input2": {
            "item": "minecraft:ender_pearl"
        },
        "mode": "and",
        "output": "twilightforest:ender_bow"
    })
    //ITEM MAGNET
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:raw_iron"
        },
        "input2": {
            "item": "minestuck:item_magnet"
        },
        "mode": "and",
        "output": "twilightforest:ore_magnet"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:rust": 300,
            "minestuck:gold": 20,
            "minestuck:mercury": 80,
            "minestuck:garnet": 50
        },
        "ingredient": {
            "item": "twilightforest:ore_magnet"
        }
    })
    //GIANT ITEMS
    //GIANT PICKAXE
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:stone_pickaxe"
        },
        "input2": {
            "item": "create_things_and_misc:magnifying_glass"
        },
        "mode": "and",
        "output": "twilightforest:giant_pickaxe"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 512,
        },
        "ingredient": {
            "item": "twilightforest:giant_pickaxe"
        }
    })
    //GIANT SWORD
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:stone_sword"
        },
        "input2": {
            "item": "create_things_and_misc:magnifying_glass"
        },
        "mode": "and",
        "output": "twilightforest:giant_sword"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 1024,
        },
        "ingredient": {
            "item": "twilightforest:giant_sword"
        }
    })
    //GIANT COBBLESTONE
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:cobblestone"
        },
        "input2": {
            "item": "create_things_and_misc:magnifying_glass"
        },
        "mode": "and",
        "output": "twilightforest:giant_cobblestone"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 128,
        },
        "ingredient": {
            "item": "twilightforest:giant_cobblestone"
        }
    })
    //GIANT LOG
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:oak_log"
        },
        "input2": {
            "item": "create_things_and_misc:magnifying_glass"
        },
        "mode": "and",
        "output": "twilightforest:giant_log"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 512,
        },
        "ingredient": {
            "item": "twilightforest:giant_log"
        }
    })
    //GIANT LEAVES
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:oak_leaves"
        },
        "input2": {
            "item": "create_things_and_misc:magnifying_glass"
        },
        "mode": "and",
        "output": "twilightforest:giant_leaves"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 64
        },
        "ingredient": {
            "item": "twilightforest:giant_leaves"
        }
    })
    //GIANT OBSIDIAN
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:obsidian"
        },
        "input2": {
            "item": "create_things_and_misc:magnifying_glass"
        },
        "mode": "and",
        "output": "twilightforest:giant_obsidian"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 384,
            "minestuck:cobalt": 384,
            "minestuck:tar": 1024,
        },
        "ingredient": {
            "item": "twilightforest:giant_obsidian"
        }
    })
    //brittle potion flask
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 30,
            "minestuck:cobalt": 6,
            "minestuck:shale": 5,
        },
        "ingredient": {
            "item": "twilightforest:brittle_potion_flask"
        }
    })
    //greater potion flask
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 180,
            "minestuck:cobalt": 36,
            "minestuck:shale": 30,
        },
        "ingredient": {
            "item": "twilightforest:greater_potion_flask"
        }
    })
    //lamp of cinders
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "occultism:magic_lamp_empty"
        },
        "input2": {
            "item": "minecraft:blaze_powder"
        },
        "mode": "or",
        "output": "twilightforest:lamp_of_cinders"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:mercury": 580,
            "minestuck:rust": 384,
            "minestuck:tar": 50,
            "minestuck:sulfur": 95,
        },
        "ingredient": {
            "item": "twilightforest:lamp_of_cinders"
        }
    })
    //IRONS SCHOOL'S FOCUS ITEM COMPAT
    //frozen bone
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:bone"
        },
        "input2": {
            "item": "minecraft:ice"
        },
        "mode": "or",
        "output": "irons_spellbooks:frozen_bone"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:chalk": 12,
            "minestuck:cobalt": 8,
        },
        "ingredient": {
            "item": "irons_spellbooks:frozen_bone"
        }
    })
    //blood vial
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minestuck:blood_bucket"
        },
        "input2": {
            "item": "minecraft:glass_bottle"
        },
        "mode": "or",
        "output": "irons_spellbooks:blood_vial"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:iodine": 8,
            "minestuck:garnet": 8,
        },
        "ingredient": {
            "item": "irons_spellbooks:blood_vial"
        }
    })
    //lightning bottle
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minestuck:battery"
        },
        "input2": {
            "item": "minecraft:glass_bottle"
        },
        "mode": "or",
        "output": "irons_spellbooks:lightning_bottle"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:cobalt": 20,
            "minestuck:uranium": 4,
        },
        "ingredient": {
            "item": "irons_spellbooks:lightning_bottle"
        }
    })
    //hogskin???
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:iodine": 40,
            "minestuck:uranium": 20,
        },
        "ingredient": {
            "item": "irons_spellbooks:hogskin"
        }
    })
    //curry powder
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:iodine": 40,
            "minestuck:chalk": 52,
            "minestuck:garnet": 6,
            "minestuck:tar": 12,
        },
        "ingredient": {
            "item": "extradelight:curry_powder"
        }
    })
    //fireclay
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:shale": 26,
            "minestuck:tar": 12,
        },
        "ingredient": {
            "item": "tfmg:fireclay_ball"
        }
    })
    //mangrove sapling
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:mangrove_propagule"
        },
        "input2": {
            "item": "minecraft:oak_sapling"
        },
        "mode": "or",
        "output": "twilightforest:mangrove_sapling"
    })
    //darkwood sapling
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:dark_oak_sapling"
        },
        "input2": {
            "item": "minecraft:spruce_sapling"
        },
        "mode": "or",
        "output": "twilightforest:mangrove_sapling"
    })
    //time sapling
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minestuck:time_aspect_sapling"
        },
        "input2": {
            "item": "minecraft:dark_oak_sapling"
        },
        "mode": "or",
        "output": "twilightforest:time_sapling"
    })
    //transformation sapling
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "twilightforest:transformation_powder"
        },
        "input2": {
            "item": "minecraft:oak_sapling"
        },
        "mode": "or",
        "output": "twilightforest:transformation_sapling"
    })
    //miner's tree
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:stone_pickaxe"
        },
        "input2": {
            "item": "minecraft:birch_sapling"
        },
        "mode": "or",
        "output": "twilightforest:mining_sapling"
    })
    //sorting sapling
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:hopper"
        },
        "input2": {
            "item": "minecraft:oak_sapling"
        },
        "mode": "or",
        "output": "twilightforest:sorting_sapling"
    })
    //rainbow sapliing
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minestuck:rainbow_sapling"
        },
        "input2": {
            "item": "minecraft:oak_sapling"
        },
        "mode": "or",
        "output": "twilightforest:rainbow_oak_sapling"
    })
    //twilight oak_sapling
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "twilightforest:firefly"
        },
        "input2": {
            "item": "minecraft:oak_sapling"
        },
        "mode": "or",
        "output": "twilightforest:twilight_oak_sapling"
    })
    //BIG twilight oak sapling
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "twilightforest:twilight_oak_sapling"
        },
        "input2": {
            "item": "minecraft:bonemeal"
        },
        "mode": "or",
        "output": "twilightforest:hollow_oak_sapling"
    })
    //clover
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:short_grass"
        },
        "input2": {
            "item": "minecraft:moss_carpet"
        },
        "mode": "and",
        "output": "twilightforest:clover_patch"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 4,
        },
        "ingredient": {
            "item": "twilightforest:clover_patch"
        }
    })
    //mushgloom
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:brown_mushroom"
        },
        "input2": {
            "item": "minecraft:red_mushroom"
        },
        "mode": "and",
        "output": "twilightforest:mushgloom"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:iodine": 8,
        },
        "ingredient": {
            "item": "twilightforest:mushgloom"
        }
    })
    //fiddlehead fern
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:fern"
        },
        "input2": {
            "item": "twilightforest:transformation_powder"
        },
        "mode": "and",
        "output": "twilightforest:fiddlehead"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 2,
        },
        "ingredient": {
            "item": "twilightforest:fiddlehead"
        }
    })
    //torchberry
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:torchflower"
        },
        "input2": {
            "item": "minecraft:glow_berries"
        },
        "mode": "and",
        "output": "twilightforest:torchberry_plant"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:iodine": 2,
            "minestuck:garnet": 3,
            "minestuck:sulfur": 2,
        },
        "ingredient": {
            "item": "twilightforest:torchberry_plant"
        }
    })
    //wrought iron
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:iron_ingot"
        },
        "input2": {
            "item": "minecraft:coal"
        },
        "mode": "and",
        "output": "twilightforest:wrought_iron_bar"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:rust": 9,
            "minestuck:tar": 1,
        },
        "ingredient": {
            "item": "twilightforest:wrought_iron_bar"
        }
    })
    //coronation carpet
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:red_carpet"
        },
        "input2": {
            "item": "minecraft:gold_ingot"
        },
        "mode": "and",
        "output": "twilightforest:coronation_carpet"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:chalk": 6,
            "minestuck:garnet": 3,
            "minestuck:gold": 2,
        },
        "ingredient": {
            "item": "twilightforest:coronation_carpet"
        }
    })
    //huge water lily
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "tag": "minecraft:flowers"
        },
        "input2": {
            "item": "minecraft:lily_pad"
        },
        "mode": "and",
        "output": "twilightforest:huge_water_lily"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:iodine": 2,
            "minestuck:garnet": 3,
            "minestuck:sulfur": 2,
        },
        "ingredient": {
            "item": "twilightforest:huge_water_lily"
        }
    })
    //huge lily pad
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:lily_pad"
        },
        "input2": {
            "item": "create_things_and_misc:magnifying_glass"
        },
        "mode": "and",
        "output": "twilightforest:huge_lily_pad"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:iodine": 8,
            "minestuck:amber": 16,
        },
        "ingredient": {
            "item": "twilightforest:huge_lily_pad"
        }
    })
    //moss patch
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:moss_carpet"
        },
        "input2": {
            "item": "twilightforest:transformation_powder"
        },
        "mode": "and",
        "output": "twilightforest:moss_patch"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 2,
        },
        "ingredient": {
            "item": "twilightforest:moss_patch"
        }
    })
    //mayapple
    event.custom({
        "type": "minestuck:combination",
        "input1": {
            "item": "minecraft:short_grass"
        },
        "input2": {
            "item": "twilightforest:transformation_powder"
        },
        "mode": "and",
        "output": "twilightforest:mayapple"
    })
    event.custom({
        "type": "minestuck:grist_cost",
        "grist_cost": {
            "minestuck:build": 2,
        },
        "ingredient": {
            "item": "twilightforest:mayapple"
        }
    })
    //meteorstone acid dissolving
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minestuck:meteoric_stone"
            },
            {
                "amount": 25,
                "fluid": "sillyworks:strong_acid",
                "type": "fluid_stack"
            }
        ],
        "results": [
            {
                "chance": .75,
                "id": "ae2:sky_dust"
            },
            {
                "chance": 0.25,
                "id": "mekanism:dust_osmium"
            },
        ]
    })
    spiritInfusionRecipe(event, itemOutput('relics:reflection_necklace'), tagEntry('c:ruined_artifact', 1), [spiritEntry('wicked', 24)], [itemEntry('minestuck:mirror')]);
    spiritInfusionRecipe(event, itemOutput('relics:drowned_belt'), tagEntry('c:ruined_artifact', 1), [spiritEntry('aqueous', 24)], [itemEntry('malum:gilded_belt')]);
    spiritInfusionRecipe(event, itemOutput('relics:jellyfish_necklace'), tagEntry('c:ruined_artifact', 1), [spiritEntry('wicked', 12), spiritEntry('aqueous', 12)], [itemEntry('irons_spellbooks:amethyst_resonance_charm')]);
    spiritInfusionRecipe(event, itemOutput('relics:hunter_belt'), tagEntry('c:ruined_artifact', 1), [spiritEntry('earthen', 12), spiritEntry('aerial', 12)], [itemEntry('malum:gilded_belt')]);
    spiritInfusionRecipe(event, itemOutput('relics:rage_glove'), tagEntry('c:ruined_artifact', 1), [spiritEntry('wicked', 12), spiritEntry('infernal', 12)], [itemEntry('alchemyexpanded:boxing_glove')]);
    spiritInfusionRecipe(event, itemOutput('relics:bastion_ring'), tagEntry('c:ruined_artifact', 1), [spiritEntry('sacred', 12), spiritEntry('infernal', 12)], [itemEntry('irons_spellbooks:silver_ring')]);
    spiritInfusionRecipe(event, itemOutput('relics:chorus_inhibitor'), tagEntry('c:ruined_artifact', 1), [spiritEntry('aqueous', 12), spiritEntry('arcane', 12)], [itemEntry('irons_spellbooks:silver_ring')]);
    spiritInfusionRecipe(event, itemOutput('relics:space_dissector'), tagEntry('c:ruined_artifact', 1), [spiritEntry('arcane', 24)], [itemEntry('minestuck_extended:space_armor_trim_smithing_template')]);
    spiritInfusionRecipe(event, itemOutput('relics:holy_locket'), tagEntry('c:ruined_artifact', 1), [spiritEntry('infernal', 12), spiritEntry('sacred', 12)], [itemEntry('irons_spellbooks:holy_rune')]);
    spiritInfusionRecipe(event, itemOutput('relics:enders_hand'), tagEntry('c:ruined_artifact', 1), [spiritEntry('arcane', 12), spiritEntry('eldritch', 12)], [itemEntry('alchemyexpanded:boxing_glove')]);
    spiritInfusionRecipe(event, itemOutput('relics:elytra_booster'), tagEntry('c:ruined_artifact', 1), [spiritEntry('infernal', 12), spiritEntry('aerial', 12)], [itemEntry('minecraft:elytra')]);
    spiritInfusionRecipe(event, itemOutput('relics:shadow_glaive'), tagEntry('c:ruined_artifact', 1), [spiritEntry('wicked', 16), spiritEntry('aerial', 8), spiritEntry('arcane', 8)], [itemEntry('irons_spellbooks:silver_ring')]);
    spiritInfusionRecipe(event, itemOutput('relics:leather_belt'), tagEntry('c:ruined_artifact', 1), [spiritEntry('sacred', 32)], [itemEntry('malum:gilded_belt')]);
    spiritInfusionRecipe(event, itemOutput('relics:wool_mitten'), tagEntry('c:ruined_artifact', 1), [spiritEntry('sacred', 8), spiritEntry('arcane', 8), spiritEntry('aqueous', 8)], [itemEntry('alchemyexpanded:boxing_glove')]);

})

*/








//viksy
/*
ServerEvents.recipes(event => {
  event.remove({
    output: 'immersiveengineering:ingot_aluminum',
    type: 'minecraft:blasting'
  })
  event.remove({
    output: 'immersiveengineering:nugget_aluminum',
    type: 'create:splashing'
  })
  event.remove({
    output: 'immersiveengineering:nugget_uranium',
    type: 'create:splashing'
  })
  event.remove({
    output: 'immersiveengineering:ingot_aluminum',
    type: 'minecraft:smelting'
  })
  event.remove({
    input: 'tfmg:silicon_ingot',
    type: 'create:mixing'
  })
  event.remove({
    output: '#c:ingots/aluminum',
    type: 'minecraft:smelting'
  })
  event.remove({
    output: '#c:ingots/aluminum',
    type: 'minecraft:blasting'
  })
  event.remove({
    output: '#c:ingots/uranium',
    type: 'minecraft:smelting'
  })
  event.remove({
    output: '#c:ingots/uranium',
    type: 'minecraft:blasting'
  })
  event.remove({
    output: 'mekanism:ingot_osmium',
    type: 'minecraft:smelting'
  })
  event.remove({
    output: 'mekanism:ingot_osmium',
    type: 'minecraft:blasting'
  })
  event.remove({
    output: 'malum:refined_soulstone',
    type: 'minecraft:smelting'
  })
  event.remove({
    output: 'malum:refined_soulstone',
    type: 'minecraft:blasting'
  })
  event.remove({
    output: 'malum:refined_soulstone',
    type: 'create:splashing'
  })
  event.remove({
    output: '#c:nuggets/osmium',
    type: 'create:splashing'
  })
  event.remove({
    output: '#c:nuggets/aluminum',
    type: 'create:splashing'
  })
  event.remove({
    output: 'netherex:ribs',
    type: 'minecraft:smelting'
  })
  event.remove({
    output: 'minecraft:experience_bottle',
    type: 'minecraft:crafting_shapeless'
  })
  event.remove({
    output: 'tempad:time_steel',
    type: 'minecraft:crafting_shaped'
  })
  event.remove({
    output: 'ae2:silicon'
  })
  event.remove({
    output: 'ends_delight:dragon_tooth_knife'
  })
  event.remove({
    output: 'createaddition:electric_motor'
  })
  event.remove({
    output: 'mekanismgenerators:fusion_reactor_controller'
  })
  event.remove({
    output: 'sillyworks:fusion_generator'
  })
  event.remove({
    output: 'tfmg:cast_iron_chemical_vat'
  })
  event.remove({
    output: 'tfmg:steel_chemical_vat'
  })
  event.remove({
    output: 'tfmg:fireproof_chemical_vat'
  })
  event.remove({
    output: 'tfmg:mixer_blade'
  })
  event.remove({
    output: 'tfmg:centrifuge'
  })
  event.remove({
    output: 'tfmg:copper_electrode'
  })
  event.remove({
    output: 'tfmg:zinc_electrode'
  })
  event.remove({
    output: 'tfmg:graphite_electrode'
  })
  event.remove({
    output: 'hexerei:mahogany_broom'
  })
  event.remove({
    output: 'endermanoverhaul:corrupted_shield'
  })
  event.remove({
    output: 'hexerei:wet_moon_dust_brush'
  })
  event.remove({
    output: 'hexerei:moon_dust'
  })
  event.remove({
    output: 'createaddition:alternator'
  })
  event.remove({
    output: 'sillyworks:plastic_dust',
    type: 'create:crushing'
  })
  event.remove({
    output: '#c:plates/steel',
    type: 'create:pressing'
  })
  event.remove({
    output: '#c:plates/steel',
    type: 'minecraft:crafting_shapeless'
  })
  event.remove({
    input: 'minecraft:disc_fragment_5',
    type: 'create:crushing'
  })
  event.remove({
    output: 'tempad:location_card',
    input: 'minecraft:iron_ingot'
  })
  event.remove({
    output: '#kubejs:godspec'
  })
  event.remove({
    output: 'nomansland:pancake'
  })
  event.remove({
    output: 'supplementaries:pancake'
  })
  event.remove({
    output: 'malum:anomalous_design'
  })
  event.remove({
    output: 'irons_spellbooks:magic_cloth'
  })
  event.remove({
    output: 'irons_spellbooks:gold_spell_book'
  })
  event.remove({
    output: 'irons_spellbooks:diamond_spell_book'
  })
  event.remove({
    output: 'irons_spellbooks:dragonskin_spell_book'
  })
  event.remove({
    output: 'irons_spellbooks:cursed_doll_spell_book'
  })
  event.remove({
    output: 'irons_spellbooks:druidic_spell_book'
  })
  event.remove({
    output: 'irons_spellbooks:ice_spell_book'
  })
  event.remove({
    output: 'irons_spellbooks:netherite_spell_book'
  })
  event.remove({
    output: 'irons_spellbooks:upgrade_orb'
  })
  event.remove({
    output: 'occultism:chalk_white_impure'
  })
  event.remove({
    output: '#c:dusts/netherite',
    mod: 'occultism'
  })
  event.remove({
    output: 'disenchanting_table:disenchanting_table'
  })
  event.remove({
    output: 'mekanism:mekasuit_helmet'
  })
  event.remove({
    output: 'mekanism:mekasuit_bodyarmor'
  })
  event.remove({
    output: 'mekanism:mekasuit_pants'
  })
  event.remove({
    output: 'mekanism:mekasuit_boots'
  })
  event.remove({
    output: 'mekanism:canteen'
  })
  event.remove({
    output: 'mekanism:nutritional_liquifier'
  })
  event.remove({
    output: 'tfmg:coke_oven'
  })
  event.remove({
    output: 'tfmg:circuit_board'
  })
  event.remove({
    output: 'tfmg:fireproof_brick'
  })
  event.remove({
    output: 'tfmg:spark_plug'
  })
  event.remove({
    output: 'tfmg:steel_sword'
  })
  event.remove({
    output: 'tfmg:steel_pickaxe'
  })
  event.remove({
    output: 'tfmg:steel_axe'
  })
  event.remove({
    output: 'tfmg:steel_hoe'
  })
  event.remove({
    output: 'tfmg:steel_shovel'
  })
  event.remove({
    output: 'tfmg:aluminum_sword'
  })
  event.remove({
    output: 'tfmg:aluminum_pickaxe'
  })
  event.remove({
    output: 'tfmg:aluminum_axe'
  })
  event.remove({
    output: 'tfmg:aluminum_hoe'
  })
  event.remove({
    output: 'tfmg:aluminum_shovel'
  })
  event.remove({
    output: 'tfmg:lead_sword'
  })
  event.remove({
    output: 'tfmg:lead_pickaxe'
  })
  event.remove({
    output: 'tfmg:lead_axe'
  })
  event.remove({
    output: 'tfmg:lead_hoe'
  })
  event.remove({
    output: 'tfmg:lead_shovel'
  })
  event.remove({
    output: 'e2s2:voidmetal_block'
  })
  event.remove({
    output: 'extradelight:charcuterie_board_feast'
  })
  event.remove({
    output: 'ae2:printed_silicon'
  })
  event.remove({
    output: 'e2s2:shadow_chestplate'
  })
  event.remove({
    output: 'e2s2:relica_chestplate'
  })
  event.remove({
    output: 'irons_spellbooks:arcane_ingot'
  })
  event.remove({
    output: 'immersiveengineering:blastbrick'
  })
  event.remove({
    output: 'immersiveengineering:alloybrick'
  })
  event.remove({
    output: 'immersiveengineering:cokebrick'
  })
  event.remove({
    output: 'sillyworks:supercomputer'
  })
  event.remove({
    output: 'cataclysm:meat_shredder'
  })
  event.remove({
    output: 'cataclysm:wither_assault_shoulder_weapon'
  })
  event.remove({
    output: 'cataclysm:laser_gatling'
  })
  event.remove({
    output: 'hexerei:pestle_and_mortar'
  })
  event.remove({
    input: 'ae2:printed_silicon'
  })
  event.remove({
    input: 'tfmg:fireproof_bricks'
  })
  event.remove({
    id: 'sillyworks:mixing/plastic_dust'
  })
  event.remove({
    id: 'create:crafting/kinetics/cogwheel'
  })
  event.remove({
    id: 'create:crafting/kinetics/large_cogwheel'
  })
  event.remove({
    id: 'create:crafting/kinetics/large_cogwheel_from_little'
  })
  event.remove({
    id: 'hexerei:coffer_from_mixing_cauldron'
  })
  event.remove({
    id: 'occultism:spirit_fire/purified_ink'
  })
  event.remove({
    id: 'occultism:spirit_fire/taboo_book'
  })
  event.remove({
    id: 'occultism:crushing/mithril_dust_from_ingot'
  })
  event.remove({
    id: 'tfmg:industrial_blasting/silicon'
  })
  event.remove({
    id: 'minestuck_extended:grist_costs/shadow_crystal'
  })
  event.remove({
    id: 'minestuck_extended:combinations/shadow_crystal'
  })
  event.remove({
    id: 'minestuck_extended:combinations/shadow_sword'
  })
  event.remove({
    id: 'minestuck_extended:combinations/rude_axe'
  })
  event.remove({
    output: 'occultism:book_of_binding_empty',
    type: 'occultism:spirit_fire'
  })
  event.remove({
    output: 'occultism:demons_dream_essence'
  })
  event.remove({
    output: 'occultism:chalk_void'
  })
  event.remove({
    output: 'occultism:chalk_red'
  })
  event.remove({
    output: 'createaddition:tesla_coil'
  })
  event.remove({
    mod: 'gateways'
  })
  event.smithing(
    'ends_delight:dragon_tooth_knife',
    'e2s2:modifier_template',
    'ends_delight:dragon_egg_shell_knife',
    'ends_delight:dragon_tooth'
  )
  event.custom({
    "type": "occultism:spirit_fire",
    "ingredient": {
      "item": "minecraft:book"
    },
    "result": {
      "count": 1,
      "id": "minestuck:grimoire",
      "components": {
        "minecraft:max_stack_size": 64
      }
    }
  })
  event.custom({
    "type": "occultism:spirit_fire",
    "ingredient": {
      "item": "occultism:chalk_red_impure"
    },
    "result": {
      "count": 1,
      "id": "occultism:chalk_red",
      "components": {
        "minecraft:food": {
          saturation: 1.2,
          nutrition: 4
        }
      }
    }
  })
  event.custom({
    "type": "occultism:spirit_fire",
    "ingredient": {
      "item": "hexerei:belladonna_berries"
    },
    "result": {
      "count": 1,
      "id": "alchemyexpanded:wizard_berries"
    }
  })
  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [{
      "item": "alchemyexpanded:wizard_berries"
    }],
    "output": {
      "id": "irons_spellbooks:arcane_essence",
      "count": 1
    },
    "grindingTime": 20
  })
  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [{
        "item": "alchemyexpanded:wizard_berries"
      },
      {
        "item": "alchemyexpanded:wizard_berries"
      },
      {
        "item": "alchemyexpanded:wizard_berries"
      },
      {
        "item": "alchemyexpanded:wizard_berries"
      },
      {
        "item": "alchemyexpanded:wizard_berries"
      }
    ],
    "output": {
      "id": "irons_spellbooks:arcane_essence",
      "count": 5
    },
    "grindingTime": 100
  })
  event.custom({
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
      "amount": 1000,
      "tag": "sillyworks:strong_acid"
    },
    "input": {
      "item": "season_x:ruined_caledfwlch"
    },
    "results": [{
      "id": "season_x:broken_caledfwlch"
    }]
  })
  event.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [],
    "energy": 102400,
    "input": {
      "basePredicate": {
        "tag": "ae2:all_quartz_dust"
      },
      "count": 18
    },
    "results": [{
      "tag": "c:storage_blocks/silicon"
    }],
    "time": 1000
  })
  event.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [],
    "energy": 1200,
    "input": {
      "basePredicate": {
        "item": "cataclysm:black_steel_ingot"
      },
      "count": 1
    },
    "results": [{
      "tag": "c:ingots/steel"
    }],
    "time": 1000
  })
  event.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [],
    "energy": 800,
    "input": {
      "basePredicate": {
        "item": "create:crushed_raw_osmium"
      },
      "count": 1
    },
    "results": [{
      "tag": "c:ingots/osmium"
    }],
    "time": 200
  })
  event.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [],
    "energy": 800,
    "input": {
      "basePredicate": {
        "item": "season_x:broken_caledfwlch"
      },
      "count": 1
    },
    "results": [{
      "item": "season_x:hot_caledfwlch"
    }],
    "time": 200
  })
  event.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [],
    "energy": 800,
    "input": {
      "basePredicate": {
        "item": "create:crushed_raw_aluminum"
      },
      "count": 1
    },
    "results": [{
      "tag": "c:ingots/aluminum"
    }],
    "time": 200
  })
  event.custom({
    "type": "extradelight:oven",
    "consumeContainer": false,
    "container": {
      "count": 1,
      "id": "extradelight:sheet"
    },
    "cookingtime": 800,
    "experience": 1.0,
    "ingredients": [{
        "tag": "c:cookie_dough"
      },
      {
        "tag": "c:frosting/blue"
      },
      {
        "tag": "c:frosting/white"
      },
      {
        "tag": "c:frosting/black"
      }
    ],
    "result": {
      "count": 8,
      "id": "minestuck_extended:lancer_cookie"
    }
  })
  event.custom({
    "type": "extradelight:oven",
    "consumeContainer": false,
    "container": {
      "count": 1,
      "id": "extradelight:sheet"
    },
    "cookingtime": 800,
    "experience": 1.0,
    "ingredients": [{
        "tag": "c:flour"
      },
      {
        "tag": "c:eggs"
      },
      {
        "item": "nomansland:pine_nuts"
      },
      {
        "tag": "c:foods/berry"
      },
      {
        "item": "alchemyexpanded:wizard_berries"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "minecraft:sugar"
      }
    ],
    "result": {
      "count": 2,
      "id": "season_x:wizardberry_tart"
    }
  })
  event.custom({
    "type": "hexerei:mixingcauldron",
    "fluid": {
      "id": "minecraft:water",
      "amount": 1000
    },
    "ingredients": [{
        "item": "occultism:spirit_attuned_gem"
      },
      {
        "tag": "c:gems/quartz"
      },
      {
        "tag": "hexerei:flower_biproduct"
      },
      {
        "tag": "c:ingots/silver"
      },
      {
        "item": "e2s2:sunbeam_ingot"
      },
      {
        "tag": "c:ingots/silver"
      },
      {
        "tag": "hexerei:flower_biproduct"
      },
      {
        "tag": "c:gems/quartz"
      }
    ],
    "output": {
      "id": "season_x:moon_crystal",
      "count": 1
    },
    "moonRequirement": "full_moon"
  })
  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [{
        "tag": "c:gems/quartz"
      },
      {
        "tag": "c:gems/quartz"
      }
    ],
    "output": {
      "id": "sillyworks:quartz_dust",
      "count": 1
    },
    "grindingTime": 100
  })
  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [{
        "item": "occultism:datura"
      },
      {
        "item": "occultism:datura"
      },
      {
        "item": "occultism:datura"
      },
      {
        "item": "occultism:datura"
      },
      {
        "item": "occultism:datura"
      }
    ],
    "output": {
      "id": "occultism:demons_dream_essence",
      "count": 1
    },
    "grindingTime": 100
  })
    event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [{
        "item": "occultism:datura_seeds"
      },
      {
        "item": "occultism:datura_seeds"
      },
      {
        "item": "occultism:datura_seeds"
      },
      {
        "item": "occultism:datura_seeds"
      },
      {
        "item": "occultism:datura_seeds"
      }
    ],
    "output": {
      "id": "occultism:demons_dream_essence",
      "count": 1
    },
    "grindingTime": 100
  })
  event.custom({
    "type": "hexerei:mixingcauldron",
    "fluid": {
      "id": "minecraft:water",
      "amount": 250
    },
    "ingredients": [{
        "item": "minecraft:wooden_sword"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      }
    ],
    "output": {
      "id": "minestuck_extended:shadow_sword",
      "count": 1
    }
  })
  event.custom({
    "type": "hexerei:mixingcauldron",
    "fluid": {
      "id": "minecraft:water",
      "amount": 250
    },
    "ingredients": [{
        "item": "minecraft:wooden_axe"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      },
      {
        "tag": "c:dusts/coal"
      }
    ],
    "output": {
      "id": "minestuck_extended:rude_axe",
      "count": 1
    }
  })
  event.custom({
    "type": "hexerei:mixingcauldron",
    "fluid": {
      "id": "minecraft:water",
      "amount": 1000
    },
    "ingredients": [{
        "item": "malum:runic_sapball"
      },
      {
        "tag": "malum:runewood_planks"
      },
      {
        "item": "malum:hallowed_gold_ingot"
      },
      {
        "tag": "malum:runewood_planks"
      },
      {
        "item": "minecraft:shulker_shell"
      },
      {
        "tag": "malum:runewood_planks"
      },
      {
        "item": "malum:hallowed_gold_ingot"
      },
      {
        "tag": "malum:runewood_planks"
      }
    ],
    "output": {
      "id": "hexerei:coffer"
    }
  })
  event.custom({
    "type": "hexerei:mixingcauldron",
    "fluid": {
      "id": "minecraft:water",
      "amount": 1000
    },
    "ingredients": [{
        "item": "minecraft:netherite_ingot"
      },
      {
        "item": "hexerei:mahogany_log"
      },
      {
        "item": "malum:refined_soulstone"
      },
      {
        "item": "minecraft:wheat"
      },
      {
        "item": "hexerei:mandrake_root"
      },
      {
        "item": "minecraft:wheat"
      },
      {
        "item": "malum:refined_soulstone"
      },
      {
        "item": "hexerei:mahogany_log"
      }
    ],
    "output": {
      "id": "hexerei:mahogany_broom"
    },
    "fluidOutput": {
      "id": "hexerei:blood_fluid",
      "amount": 1000
    }
  })
  event.custom({
    "type": "hexerei:mixingcauldron",
    "fluid": {
      "id": "minecraft:water",
      "amount": 1000
    },
    "ingredients": [{
        "item": "hexerei:herb_enhanced_broom_brush"
      },
      {
        "item": "hexerei:moon_dust"
      },
      {
        "item": "hexerei:moon_dust"
      },
      {
        "item": "hexerei:mandrake_root"
      },
      {
        "item": "malum:void_salts"
      },
      {
        "item": "hexerei:mandrake_root"
      },
      {
        "item": "hexerei:moon_dust"
      },
      {
        "item": "hexerei:moon_dust"
      }
    ],
    "output": {
      "id": "hexerei:wet_moon_dust_brush"
    }
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "item": "minestuck:native_sulfur"
    }],
    "processing_time": 40,
    "results": [{
        "chance": 0.20,
        "id": "sillyworks:sulfur_dust",
        "count": 1
      },
      {
        "chance": 0.10,
        "id": "sillyworks:sulfur_dust",
        "count": 1
      }
    ]
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "item": "enderscape:veradite"
    }],
    "processing_time": 40,
    "results": [{
        "chance": 0.75,
        "id": "sillyworks:end_stone_dust",
        "count": 1
      },
      {
        "chance": 0.75,
        "id": "e2s2:voidmetal_nugget",
        "count": 2
      },
      {
        "chance": 0.25,
        "id": "e2s2:voidmetal_nugget",
        "count": 1
      }
    ]
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "item": "enderscape:mirestone"
    }],
    "processing_time": 40,
    "results": [{
        "chance": 0.50,
        "id": "sillyworks:end_stone_dust",
        "count": 1
      },
      {
        "chance": 1,
        "id": "e2s2:voidmetal_nugget",
        "count": 2
      },
      {
        "chance": 0.25,
        "id": "mekanism:nugget_tin",
        "count": 1
      }
    ]
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "item": "enderscape:kurodite"
    }],
    "processing_time": 40,
    "results": [{
        "chance": 0.50,
        "id": "sillyworks:deepslate_dust",
        "count": 1
      },
      {
        "chance": 0.75,
        "id": "e2s2:asterite_nugget",
        "count": 2
      },
      {
        "chance": 0.5,
        "id": "tfmg:lead_nugget",
        "count": 1
      }
    ]
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "item": "enderscape:void_shale"
    }],
    "processing_time": 200,
    "results": [{
        "chance": 0.80,
        "id": "create:powdered_obsidian",
        "count": 1
      },
      {
        "chance": 0.75,
        "id": "enderscape:nebulite_shards",
        "count": 2
      },
      {
        "chance": 0.15,
        "id": "mekanism:shard_osmium",
        "count": 1
      }
    ]
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "tag": "enderscape:magnia_blocks"
    }],
    "processing_time": 200,
    "results": [{
        "chance": 0.80,
        "id": "sillyworks:iron_dust",
        "count": 1
      },
      {
        "chance": 0.15,
        "id": "tfmg:lithium_nugget",
        "count": 1
      },
      {
        "chance": 0.15,
        "id": "tfmg:nickel_nugget",
        "count": 1
      },
      {
        "chance": 0.15,
        "id": "occultism:silver_nugget",
        "count": 1
      }
    ]
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "item": "nomansland:quartzite"
    }],
    "processing_time": 200,
    "results": [{
        "chance": 0.75,
        "id": "sillyworks:quartz_dust",
        "count": 1
      },
      {
        "chance": 0.25,
        "id": "sillyworks:quartz_dust",
        "count": 2
      }
    ]
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "tag": "c:ingots/lithium"
    }],
    "processing_time": 200,
    "results": [{
      "chance": 1,
      "id": "mekanism:dust_lithium",
      "count": 1
    }]
  })

    event.custom({
    "type": "hexerei:mixingcauldron",
    "fluid": {
      "id": "minecraft:water",
      "amount": 500
    },
    "ingredients": [{
        "tag": "minecraft:wool"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "minecraft:stick"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      }
    ],
    "output": {
      "id": "irons_spellbooks:magic_cloth"
    }
  })
  event.custom({
    "type": "hexerei:mixingcauldron",
    "fluid": {
      "id": "minecraft:water",
      "amount": 1000
    },
    "ingredients": [{
        "item": "occultism:crushed_blue_ice"
      },
      {
        "item": "occultism:crushed_blue_ice"
      },
      {
        "item": "occultism:crushed_blue_ice"
      },
      {
        "item": "occultism:crushed_blue_ice"
      },
      {
        "item": "season_x:hot_deringer"
      },
      {
        "item": "occultism:crushed_blue_ice"
      },
      {
        "item": "occultism:crushed_blue_ice"
      },
      {
        "item": "occultism:crushed_blue_ice"
      }
    ],
    "output": {
      "id": "minestuck:royal_deringer"
    }
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "malum:raw_soulstone"
    },
    "duration": 5,
    "ingredients": [{
        "item": "minecraft:blaze_powder"
      },
      {
        "item": "minecraft:blaze_powder"
      },
      {
        "item": "malum:arcane_charcoal"
      },
      {
        "item": "malum:arcane_charcoal"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "malum:refined_soulstone"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "malum:fused_consciousness"
    },
    "duration": 600,
    "ingredients": [{
        "item": "occultism:chalk_black"
      },
      {
        "item": "occultism:chalk_black"
      },
      {
        "item": "occultism:chalk_black"
      },
      {
        "item": "occultism:chalk_rainbow"
      },
      {
        "item": "malum:void_salts"
      },
      {
        "item": "malum:void_salts"
      },
      {
        "item": "malum:void_salts"
      },
      {
        "item": "malum:void_salts"
      },
      {
        "item": "malum:void_salts"
      },
      {
        "item": "malum:void_salts"
      },
      {
        "item": "malum:void_salts"
      },
      {
        "item": "malum:void_salts"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "occultism:chalk_void"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/misc_chalk_void"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "malum:crushed_soulstone"
    },
    "duration": 5,
    "ingredients": [{
        "item": "minecraft:blaze_powder"
      },
      {
        "item": "minecraft:blaze_powder"
      },
      {
        "item": "malum:arcane_charcoal"
      },
      {
        "item": "malum:arcane_charcoal"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 2,
      "id": "malum:refined_soulstone"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "malum:block_of_raw_soulstone"
    },
    "duration": 5,
    "ingredients": [{
        "item": "malum:auric_embers"
      },
      {
        "item": "malum:blazing_quartz"
      },
      {
        "item": "malum:auric_embers"
      },
      {
        "item": "malum:blazing_quartz"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 20,
      "id": "malum:refined_soulstone"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "occultism:book_of_binding_bound_foliot"
    },
    "duration": 30,
    "ingredients": [{
        "item": "minecraft:enchanting_table"
      },
      {
        "item": "minecraft:lapis_block"
      },
      {
        "item": "malum:block_of_brilliance"
      },
      {
        "item": "minestuck:sorcerers_pinball"
      }
    ],
    "pentacle_id": "occultism:craft_foliot",
    "result": {
      "count": 1,
      "id": "disenchanting_table:disenchanting_table"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft_with_spirit_name"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "occultism:book_of_binding_bound_foliot"
    },
    "duration": 3,
    "ingredients": [{
        "item": "hexerei:moon_dust"
      },
      {
        "tag": "c:ingots/silver"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      }
    ],
    "pentacle_id": "occultism:craft_foliot",
    "result": {
      "count": 1,
      "id": "irons_spellbooks:arcane_ingot"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft_with_spirit_name"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "occultism:book_of_binding_bound_foliot"
    },
    "duration": 30,
    "ingredients": [{
        "item": "irons_spellbooks:hogskin"
      },
      {
        "item": "irons_spellbooks:hogskin"
      },
      {
        "tag": "kubejs:taboo_books"
      },
      {
        "item": "minecraft:gold_ingot"
      },
      {
        "item": "minecraft:gold_ingot"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      }
    ],
    "pentacle_id": "occultism:craft_foliot",
    "result": {
      "count": 1,
      "id": "irons_spellbooks:gold_spell_book"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft_with_spirit_name"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "occultism:book_of_binding_bound_marid"
    },
    "duration": 60,
    "ingredients": [{
        "tag": "kubejs:magic_cloth"
      },
      {
        "tag": "kubejs:magic_cloth"
      },
      {
        "tag": "kubejs:taboo_books"
      },
      {
        "item": "minecraft:diamond_block"
      },
      {
        "item": "irons_spellbooks:hogskin"
      },
      {
        "item": "irons_spellbooks:hogskin"
      }
    ],
    "pentacle_id": "occultism:craft_marid",
    "result": {
      "count": 1,
      "id": "irons_spellbooks:diamond_spell_book"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft_with_spirit_name"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "occultism:book_of_binding_bound_marid"
    },
    "duration": 60,
    "ingredients": [{
        "item": "irons_spellbooks:rotten_spell_book"
      },
      {
        "tag": "kubejs:magic_cloth"
      },
      {
        "tag": "kubejs:magic_cloth"
      },
      {
        "item": "minecraft:amethyst_shard"
      },
      {
        "item": "minecraft:glow_ink_sac"
      },
      {
        "item": "minecraft:spore_blossom"
      },
      {
        "item": "minecraft:honeycomb"
      },
      {
        "item": "e2s2:sunbeam_ingot"
      },
      {
        "item": "e2s2:sunbeam_ingot"
      },
      {
        "item": "e2s2:sunbeam_ingot"
      }
    ],
    "pentacle_id": "occultism:craft_marid",
    "result": {
      "count": 1,
      "id": "irons_spellbooks:druidic_spell_book"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft_with_spirit_name"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "occultism:book_of_binding_bound_marid"
    },
    "duration": 60,
    "ingredients": [{
        "item": "irons_spellbooks:ruined_book"
      },
      {
        "tag": "kubejs:magic_cloth"
      },
      {
        "tag": "kubejs:magic_cloth"
      },
      {
        "item": "irons_spellbooks:ice_venom_vial"
      },
      {
        "item": "irons_spellbooks:ice_venom_vial"
      },
      {
        "item": "irons_spellbooks:mithril_scrap"
      },
      {
        "item": "irons_spellbooks:mithril_scrap"
      },
      {
        "item": "irons_spellbooks:frozen_bone"
      },
      {
        "item": "irons_spellbooks:frozen_bone"
      },
      {
        "item": "minestuck:cold_cake"
      },
      {
        "item": "occultism:crushed_blue_ice"
      },
      {
        "item": "occultism:crushed_blue_ice"
      }
    ],
    "pentacle_id": "occultism:craft_marid",
    "result": {
      "count": 1,
      "id": "irons_spellbooks:ice_spell_book"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft_with_spirit_name"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "occultism:book_of_binding_bound_marid"
    },
    "duration": 60,
    "ingredients": [{
        "item": "irons_spellbooks:arcane_ingot"
      },
      {
        "item": "irons_spellbooks:arcane_ingot"
      },
      {
        "item": "irons_spellbooks:ruined_book"
      },
      {
        "item": "irons_spellbooks:bloody_vellum"
      },
      {
        "item": "irons_spellbooks:bloody_vellum"
      },
      {
        "item": "irons_spellbooks:bloody_vellum"
      },
      {
        "item": "irons_spellbooks:bloody_vellum"
      }
    ],
    "pentacle_id": "occultism:craft_marid",
    "result": {
      "count": 1,
      "id": "irons_spellbooks:cursed_doll_spell_book"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft_with_spirit_name"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "occultism:book_of_binding_bound_marid"
    },
    "duration": 10,
    "ingredients": [{
        "item": "minestuck:meteoric_stone"
      },
      {
        "item": "minestuck:meteoric_stone"
      },
      {
        "item": "minestuck:meteoric_stone"
      },
      {
        "item": "minestuck:meteoric_stone"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "malum:refined_soulstone"
      },
      {
        "item": "malum:refined_soulstone"
      },
      {
        "item": "malum:refined_soulstone"
      },
      {
        "item": "malum:refined_soulstone"
      }
    ],
    "pentacle_id": "occultism:craft_marid",
    "result": {
      "count": 1,
      "id": "irons_spellbooks:blank_rune"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft_with_spirit_name"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "irons_spellbooks:ruined_book"
    },
    "duration": 120,
    "entity_to_sacrifice": {
      "display_name": "ritual.occultism.sacrifice.humans",
      "tag": "occultism:humans"
    },
    "ingredients": [{
        "item": "occultism:dragonyst_dust"
      },
      {
        "item": "e2s2:dragon_stone"
      },
      {
        "item": "e2s2:obsidian_ingot"
      },
      {
        "item": "e2s2:obsidian_ingot"
      },
      {
        "item": "e2s2:obsidian_ingot"
      },
      {
        "item": "irons_spellbooks:dragonskin"
      },
      {
        "item": "irons_spellbooks:dragonskin"
      },
      {
        "item": "irons_spellbooks:dragonskin"
      },
      {
        "item": "irons_spellbooks:dragonskin"
      },
      {
        "item": "irons_spellbooks:dragonskin"
      },
      {
        "item": "irons_spellbooks:dragonskin"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "irons_spellbooks:dragonskin_spell_book"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "irons_spellbooks:ruined_book"
    },
    "duration": 300,
    "entity_to_sacrifice": {
      "display_name": "ritual.occultism.sacrifice.humans",
      "tag": "occultism:humans"
    },
    "ingredients": [{
        "item": "minecraft:netherite_ingot"
      },
      {
        "item": "minecraft:netherite_ingot"
      },
      {
        "tag": "kubejs:strange_crystals"
      },
      {
        "tag": "kubejs:strange_crystals"
      },
      {
        "tag": "kubejs:magic_cloth"
      },
      {
        "tag": "kubejs:magic_cloth"
      },
      {
        "tag": "kubejs:magic_cloth"
      },
      {
        "tag": "kubejs:magic_cloth"
      },
      {
        "tag": "kubejs:strange_crystals"
      },
      {
        "tag": "kubejs:strange_crystals"
      },
      {
        "item": "irons_spellbooks:bloody_vellum"
      },
      {
        "item": "irons_spellbooks:bloody_vellum"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "irons_spellbooks:netherite_spell_book"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "minestuck:eightball"
    },
    "duration": 120,
    "entity_to_sacrifice": {
      "display_name": "ritual.occultism.sacrifice.humans",
      "tag": "occultism:humans"
    },
    "ingredients": [{
        "item": "mekanism:fluorite_gem"
      },
      {
        "item": "mekanism:fluorite_gem"
      },
      {
        "item": "mekanism:fluorite_gem"
      },
      {
        "item": "mekanism:fluorite_gem"
      },
      {
        "item": "mekanism:fluorite_gem"
      },
      {
        "item": "mekanism:fluorite_gem"
      },
      {
        "item": "mekanism:fluorite_gem"
      },
      {
        "item": "mekanism:fluorite_gem"
      },
      {
        "item": "minestuck:dice"
      },
      {
        "item": "irons_spellbooks:arcane_ingot"
      },
      {
        "item": "occultism:iesnium_ingot"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "minestuck:fluorite_octet"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "e2s2:nether_heart"
    },
    "duration": 30,
    "ingredients": [{
        "item": "cataclysm:ancient_metal_ingot"
      },
      {
        "item": "cataclysm:ancient_metal_ingot"
      },
      {
        "item": "irons_spellbooks:pyrium_ingot"
      },
      {
        "item": "irons_spellbooks:pyrium_ingot"
      },
      {
        "item": "e2s2:sunbeam_ingot"
      },
      {
        "item": "e2s2:sunbeam_ingot"
      },
      {
        "item": "malum:hallowed_gold_ingot"
      },
      {
        "item": "malum:hallowed_gold_ingot"
      },
      {
        "item": "malum:block_of_auric_embers"
      },
      {
        "item": "malum:block_of_auric_embers"
      },
      {
        "item": "malum:block_of_auric_embers"
      },
      {
        "item": "malum:block_of_auric_embers"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 2,
      "id": "e2s2:godsoul_ingot"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "season_x:arcane_schematics"
    },
    "duration": 180,
    "ingredients": [{
        "item": "season_x:phantasmagorium"
      },
      {
        "item": "occultism:silver_block"
      },
      {
        "item": "minecraft:iron_block"
      },
      {
        "item": "minecraft:iron_block"
      },
      {
        "item": "malum:mimicry_relay"
      },
      {
        "item": "malum:mimicry_relay"
      },
      {
        "item": "malum:block_of_soul_stained_steel"
      },
      {
        "item": "irons_spellbooks:mithril_ingot"
      },
      {
        "item": "irons_spellbooks:mithril_ingot"
      },
      {
        "item": "malum:zinc_node"
      },
      {
        "item": "malum:zinc_node"
      },
      {
        "item": "malum:zinc_node"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "malum:anomalous_design"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "e2s2:crimson_pearl"
    },
    "duration": 30,
    "entity_to_sacrifice": {
      "display_name": "ritual.occultism.sacrifice.pigs",
      "tag": "c:pigs"
    },
    "ingredients": [{
        "item": "irons_spellbooks:mithril_ingot"
      },
      {
        "item": "occultism:iesnium_ingot"
      },
      {
        "item": "irons_spellbooks:arcane_ingot"
      },
      {
        "item": "malum:hallowed_gold_ingot"
      },
      {
        "item": "irons_spellbooks:cinder_essence"
      },
      {
        "item": "irons_spellbooks:cinder_essence"
      },
      {
        "item": "irons_spellbooks:cinder_essence"
      },
      {
        "item": "irons_spellbooks:cinder_essence"
      },
    ],
    "pentacle_id": "occultism:contact_wild_spirit",
    "result": {
      "count": 1,
      "id": "irons_spellbooks:upgrade_orb"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "minestuck_extended:devilsknife"
    },
    "duration": 3600,
    "ingredients": [{
        "item": "malum:fused_consciousness"
      },
      {
        "item": "malum:edge_of_deliverance"
      },
      {
        "item": "e2s2:shadow_crystal"
      },
      {
        "item": "minestuck:carnie_club"
      },
      {
        "item": "minestuck:clown_club"
      },
      {
        "item": "minestuck:horn"
      },
      {
        "item": "minestuck:destiny_decimator"
      },
      {
        "item": "minestuck:time_flayer"
      },
      {
        "item": "minestuck:mutant_cutie_cell_cutter"
      },
      {
        "item": "minestuck:shadowrazor"
      },
      {
        "item": "ends_delight:dragon_tooth"
      },
      {
        "item": "irons_spellbooks:hellrazor"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "e2s2:devilsknife"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "irons_spellbooks:divine_soulshard"
    },
    "duration": 600,
    "ingredients": [{
        "item": "e2s2:dragon_helmet"
      },
      {
        "item": "cataclysm:ignitium_helmet"
      },
      {
        "item": "irons_spellbooks:netherite_mage_helmet"
      },
      {
        "item": "malum:malignant_stronghold_helmet"
      },
      {
        "item": "sillyworks:power_armor_helmet"
      },
      {
        "item": "cataclysm:cursium_helmet"
      },
      {
        "item": "e2s2:sunbeam_helmet"
      },
      {
        "item": "e2s2:incendiary_scarlet_helmet"
      },
      {
        "item": "sillyworks:supercomputer"
      },
      {
        "item": "season_x:phantasmagorium"
      },
      {
        "tag": "c:storage_blocks/steel"
      },
      {
        "item": "irons_spellbooks:mithril_weave"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "e2s2:unfinished_godspec_helmet"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "irons_spellbooks:divine_soulshard"
    },
    "duration": 600,
    "ingredients": [{
        "item": "e2s2:dragon_chestplate"
      },
      {
        "item": "cataclysm:ignitium_chestplate"
      },
      {
        "item": "irons_spellbooks:netherite_mage_chestplate"
      },
      {
        "item": "malum:malignant_stronghold_chestplate"
      },
      {
        "item": "sillyworks:power_armor_chestplate"
      },
      {
        "item": "cataclysm:cursium_chestplate"
      },
      {
        "item": "e2s2:sunbeam_chestplate"
      },
      {
        "item": "e2s2:incendiary_scarlet_chestplate"
      },
      {
        "item": "sillyworks:supercomputer"
      },
      {
        "item": "season_x:phantasmagorium"
      },
      {
        "tag": "c:storage_blocks/steel"
      },
      {
        "item": "irons_spellbooks:mithril_weave"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "e2s2:unfinished_godspec_chestplate"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "irons_spellbooks:divine_soulshard"
    },
    "duration": 600,
    "ingredients": [{
        "item": "e2s2:dragon_leggings"
      },
      {
        "item": "cataclysm:ignitium_leggings"
      },
      {
        "item": "irons_spellbooks:netherite_mage_leggings"
      },
      {
        "item": "malum:malignant_stronghold_leggings"
      },
      {
        "item": "sillyworks:power_armor_leggings"
      },
      {
        "item": "cataclysm:cursium_leggings"
      },
      {
        "item": "e2s2:sunbeam_leggings"
      },
      {
        "item": "e2s2:incendiary_scarlet_leggings"
      },
      {
        "item": "sillyworks:supercomputer"
      },
      {
        "item": "season_x:phantasmagorium"
      },
      {
        "tag": "c:storage_blocks/steel"
      },
      {
        "item": "irons_spellbooks:mithril_weave"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "e2s2:unfinished_godspec_leggings"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "irons_spellbooks:divine_soulshard"
    },
    "duration": 600,
    "ingredients": [{
        "item": "e2s2:dragon_boots"
      },
      {
        "item": "cataclysm:ignitium_boots"
      },
      {
        "item": "irons_spellbooks:netherite_mage_boots"
      },
      {
        "item": "malum:malignant_stronghold_boots"
      },
      {
        "item": "sillyworks:power_armor_boots"
      },
      {
        "item": "cataclysm:cursium_boots"
      },
      {
        "item": "e2s2:sunbeam_boots"
      },
      {
        "item": "e2s2:incendiary_scarlet_boots"
      },
      {
        "item": "sillyworks:supercomputer"
      },
      {
        "item": "season_x:phantasmagorium"
      },
      {
        "tag": "c:storage_blocks/steel"
      },
      {
        "item": "irons_spellbooks:mithril_weave"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "e2s2:unfinished_godspec_boots"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "season_x:broken_caledfwlch"
    },
    "duration": 600,
    "ingredients": [{
        "item": "e2s2:asterite_ingot"
      },
      {
        "item": "irons_spellbooks:mithril_ingot"
      },
      {
        "item": "irons_spellbooks:arcane_ingot"
      },
      {
        "item": "occultism:iesnium_ingot"
      },
      {
        "item": "malum:block_of_arcane_charcoal"
      },
      {
        "item": "malum:block_of_blazing_quartz"
      },
      {
        "item": "cataclysm:ancient_metal_ingot"
      },
      {
        "tag": "c:ruined_artifact"
      }
    ],
    "pentacle_id": "occultism:contact_eldritch_spirit",
    "result": {
      "count": 1,
      "id": "season_x:hot_deringer"
    },
    "ritual_dummy": {
      "count": 1,
      "id": "occultism:ritual_dummy/custom_ritual_craft"
    },
    "ritual_type": "occultism:craft"
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "I": {
        "item": "sillyworks:microprocessor"
      },
      "P": {
        "tag": "c:plates/steel"
      },
      "E": {
        "item": "immersiveengineering:coil_hv"
      },
      "M": {
        "item": "immersiveengineering:heavy_engineering"
      },
      "T": {
        "item": "sillyworks:tiny_mechanism"
      },
      "O": {
        "item": "mekanism:ingot_osmium"
      },
      "S": {
        "item": "tfmg:steel_mechanism"
      },
      "C": {
        "item": "sillyworks:clay_polymer_ingot"
      }
    },
    "pattern": [
      "PPTTPP",
      "OIIIIO",
      "OEMMEO",
      "OEMMEO",
      "OSTTSO",
      "CCCCCC"
    ],
    "result": {
      "count": 1,
      "id": "sillyworks:fusion_generator"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "I": {
        "item": "sillyworks:tiny_mechanism"
      },
      "C": {
        "item": "tfmg:aluminum_ingot"
      },
      "L": {
        "item": "minecraft:flint"
      }
    },
    "pattern": [
      "C",
      "I",
      "L"
    ],
    "result": {
      "count": 1,
      "id": "tfmg:spark_plug"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "W": {
        "item": "cataclysm:witherite_ingot"
      },
      "M": {
        "item": "tfmg:steel_mechanism"
      },
      "I": {
        "item": "tfmg:steel_ingot"
      },
      "P": {
        "item": "tfmg:steel_pipe"
      },
      "R": {
        "item": "minecraft:redstone_block"
      }
    },
    "pattern": [
      "WRMWP",
      "WW I "
    ],
    "result": {
      "count": 1,
      "id": "cataclysm:wither_assault_shoulder_weapon"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "W": {
        "item": "cataclysm:witherite_ingot"
      },
      "M": {
        "item": "tfmg:steel_mechanism"
      },
      "I": {
        "item": "tfmg:steel_ingot"
      },
      "P": {
        "item": "ae2:fluix_pearl"
      },
      "R": {
        "item": "minecraft:redstone_block"
      }
    },
    "pattern": [
      "WW I ",
      "WRIMP"
    ],
    "result": {
      "count": 1,
      "id": "cataclysm:laser_gatling"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "W": {
        "item": "cataclysm:witherite_ingot"
      },
      "M": {
        "item": "tfmg:steel_mechanism"
      },
      "I": {
        "item": "tfmg:steel_ingot"
      },
      "R": {
        "tag": "c:rods/steel"
      }
    },
    "pattern": [
      "   W ",
      "  WIW",
      "  MW ",
      " R   ",
      "R    "
    ],
    "result": {
      "count": 1,
      "id": "cataclysm:meat_shredder"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "I": {
        "item": "e2s2:unfinished_godspec_helmet"
      },
      "C": {
        "item": "e2s2:godsoul_ingot"
      },
      "L": {
        "item": "sillyworks:tiny_mechanism"
      },
      "F": {
        "item": "malum:prismatic_focus_lens"
      }
    },
    "pattern": [
      "C C",
      "CIC",
      "LFL"
    ],
    "result": {
      "count": 1,
      "id": "e2s2:godspec_helmet",
      "components": {
        "minecraft:attribute_modifiers": {
          "modifiers": [{
              "type": "irons_spellbooks:max_mana",
              "id": "custom:godspec_head_mana",
              "amount": 200,
              "operation": "add_value",
              "slot": "head"
            },
            {
              "type": "irons_spellbooks:spell_power",
              "id": "custom:godspec_head_magic",
              "amount": 0.15,
              "operation": "add_value",
              "slot": "head"
            },
            {
              "type": "minecraft:generic.armor",
              "id": "custom:godspec_head_armor",
              "amount": 5,
              "operation": "add_value",
              "slot": "head"
            },
            {
              "type": "minecraft:generic.armor_toughness",
              "id": "custom:godspec_head_toughness",
              "amount": 5,
              "operation": "add_value",
              "slot": "head"
            },
            {
              "type": "minecraft:generic.knockback_resistance",
              "id": "custom:godspec_head_knockback",
              "amount": 0.25,
              "operation": "add_value",
              "slot": "head"
            }
          ],
          "show_in_tooltip": true
        }
      }
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "I": {
        "item": "e2s2:unfinished_godspec_chestplate"
      },
      "C": {
        "item": "e2s2:godsoul_ingot"
      },
      "L": {
        "item": "sillyworks:robot_mechanism"
      },
      "F": {
        "item": "tfmg:steel_mechanism"
      },
      "B": {
        "item": "create_compressed:mechanism_block"
      },
      "M": {
        "item": "mekanism:module_attack_amplification_unit"
      },
      "W": {
        "item": "minecraft:blue_wool"
      },
      "S": {
        "item": "tfmg:steel_ingot"
      }
    },
    "pattern": [
      "WC CW",
      "CMBMC",
      "LFIFL",
      "CSSSC",
      " WWW "
    ],
    "result": {
      "count": 1,
      "id": "e2s2:godspec_chestplate",
      "components": {
        "minecraft:attribute_modifiers": {
          "modifiers": [{
              "type": "irons_spellbooks:max_mana",
              "id": "custom:godspec_chest_mana",
              "amount": 200,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "irons_spellbooks:spell_power",
              "id": "custom:godspec_chest_magic",
              "amount": 0.15,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "minecraft:generic.armor",
              "id": "custom:godspec_chest_armor",
              "amount": 12,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "minecraft:generic.armor_toughness",
              "id": "custom:godspec_chest_toughness",
              "amount": 5,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "minecraft:generic.knockback_resistance",
              "id": "custom:godspec_chest_knockback",
              "amount": 0.25,
              "operation": "add_value",
              "slot": "chest"
            }
          ],
          "show_in_tooltip": true
        }
      }
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "I": {
        "item": "e2s2:unfinished_godspec_leggings"
      },
      "C": {
        "item": "e2s2:godsoul_ingot"
      },
      "L": {
        "item": "sillyworks:robot_mechanism"
      },
      "F": {
        "item": "tfmg:steel_mechanism"
      },
      "S": {
        "item": "tfmg:steel_ingot"
      },
      "M": {
        "item": "mekanism:module_locomotive_boosting_unit"
      }
    },
    "pattern": [
      "S   S",
      "SCLCS",
      "CMIMC",
      "FS SF",
      "CS SC"
    ],
    "result": {
      "count": 1,
      "id": "e2s2:godspec_leggings",
      "components": {
        "minecraft:attribute_modifiers": {
          "modifiers": [{
              "type": "irons_spellbooks:max_mana",
              "id": "custom:godspec_legs_mana",
              "amount": 200,
              "operation": "add_value",
              "slot": "legs"
            },
            {
              "type": "irons_spellbooks:spell_power",
              "id": "custom:godspec_legs_magic",
              "amount": 0.15,
              "operation": "add_value",
              "slot": "legs"
            },
            {
              "type": "minecraft:generic.armor",
              "id": "custom:godspec_legs_armor",
              "amount": 8,
              "operation": "add_value",
              "slot": "legs"
            },
            {
              "type": "minecraft:generic.armor_toughness",
              "id": "custom:godspec_legs_toughness",
              "amount": 5,
              "operation": "add_value",
              "slot": "legs"
            },
            {
              "type": "minecraft:generic.knockback_resistance",
              "id": "custom:godspec_legs_knockback",
              "amount": 0.25,
              "operation": "add_value",
              "slot": "legs"
            }
          ],
          "show_in_tooltip": true
        }
      }
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "I": {
        "item": "e2s2:unfinished_godspec_boots"
      },
      "C": {
        "item": "e2s2:godsoul_ingot"
      },
      "L": {
        "item": "sillyworks:tiny_mechanism"
      },
      "F": {
        "item": "tfmg:steel_ingot"
      }
    },
    "pattern": [
      "C   C",
      "LFIFL",
      "CF FC"
    ],
    "result": {
      "count": 1,
      "id": "e2s2:godspec_boots",
      "components": {
        "minecraft:attribute_modifiers": {
          "modifiers": [{
              "type": "irons_spellbooks:max_mana",
              "id": "custom:godspec_feet_mana",
              "amount": 200,
              "operation": "add_value",
              "slot": "feet"
            },
            {
              "type": "irons_spellbooks:spell_power",
              "id": "custom:godspec_feet_magic",
              "amount": 0.15,
              "operation": "add_value",
              "slot": "feet"
            },
            {
              "type": "minecraft:generic.armor",
              "id": "custom:godspec_feet_armor",
              "amount": 5,
              "operation": "add_value",
              "slot": "feet"
            },
            {
              "type": "minecraft:generic.armor_toughness",
              "id": "custom:godspec_feet_toughness",
              "amount": 5,
              "operation": "add_value",
              "slot": "feet"
            },
            {
              "type": "minecraft:generic.knockback_resistance",
              "id": "custom:godspec_feet_knockback",
              "amount": 0.25,
              "operation": "add_value",
              "slot": "feet"
            }
          ],
          "show_in_tooltip": true
        }
      }
    }
  })

  event.custom({
    "type": "occultism:crushing",
    "ignore_crushing_multiplier": true,
    "ingredient": {
      "item": "season_x:ruined_caledfwlch"
    },
    "result": {
      "type": "occultism:item",
      "count": 1,
      "item": "season_x:broken_caledfwlch"
    }
  })
  event.custom({
    "type": "occultism:crushing",
    "ignore_crushing_multiplier": true,
    "ingredient": {
      "item": "irons_spellbooks:mithril_scrap"
    },
    "result": {
      "type": "occultism:item",
      "count": 1,
      "item": "season_x:mithril_dust"
    }
  })
  event.custom({
    "type": "occultism:crushing",
    "ignore_crushing_multiplier": true,
    "ingredient": {
      "item": "irons_spellbooks:mithril_ingot"
    },
    "result": {
      "type": "occultism:item",
      "count": 4,
      "item": "season_x:mithril_dust"
    }
  })
  event.custom({
    "type": "occultism:crushing",
    "ingredient": {
      "tag": "c:raw_materials/soulstone"
    },
    "result": {
      "type": "occultism:tag",
      "count": 1,
      "tag": "malum:crushed_soulstone"
    }
  })
  event.custom({
    "type": "occultism:crushing",
    "ingredient": {
      "tag": "c:raw_materials/brilliance"
    },
    "result": {
      "type": "occultism:tag",
      "count": 2,
      "tag": "malum:crushed_brilliance"
    }
  })
  event.custom({
    "type": "create:compacting",
    "heat_requirement": "superheated",
    "ingredients": [{
        "tag": "c:dusts/deepslate"
      },
      {
        "item": "tfmg:fireclay_ball"
      },
      {
        "tag": "c:dusts/clay"
      },
      {
        "amount": 50,
        "fluid": "minecraft:water",
        "type": "fluid_stack"
      }
    ],
    "results": [{
      "id": "season_x:coke_brick",
      "count": 1
    }]
  })
  event.custom({
    "type": "create:compacting",
    "heat_requirement": "heated",
    "ingredients": [{
        "tag": "c:dusts/sulfur"
      },
      {
        "amount": 250,
        "fluid": "tfmg:heavy_oil",
        "type": "fluid_stack"
      }
    ],
    "results": [{
      "id": "tfmg:rubber_sheet",
      "count": 1
    }]
  })
  event.custom({
    "type": "create:compacting",
    "heat_requirement": "superheated",
    "ingredients": [{
        "tag": "c:dusts/netherrack"
      },
      {
        "item": "tfmg:fireclay_ball"
      },
      {
        "tag": "c:dusts/clay"
      },
      {
        "amount": 50,
        "fluid": "minecraft:lava",
        "type": "fluid_stack"
      }
    ],
    "results": [{
      "id": "season_x:blast_brick",
      "count": 1
    }]
  })
  event.custom({
    "type": "create:compacting",
    "heat_requirement": "heated",
    "ingredients": [{
        "tag": "c:dusts/silicon"
      },
      {
        "tag": "c:dusts/sulfur"
      }
    ],
    "results": [{
      "id": "tfmg:n_semiconductor",
      "count": 1
    }]
  })
  event.custom({
    "type": "create:compacting",
    "heat_requirement": "heated",
    "ingredients": [{
        "tag": "c:dusts/silicon"
      },
      {
        "tag": "c:nuggets/aluminum"
      },
      {
        "tag": "c:nuggets/aluminum"
      },
      {
        "tag": "c:nuggets/aluminum"
      }
    ],
    "results": [{
      "id": "tfmg:p_semiconductor",
      "count": 1
    }]
  })
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "superheated",
    "ingredients": [{
        "tag": "c:ingots/silicon"
      },
      {
        "tag": "c:ingots/nickel"
      },
      {
        "tag": "c:ingots/steel"
      },
      {
        "tag": "c:ingots/nickel"
      },
      {
        "tag": "c:ingots/steel"
      }
    ],
    "results": [{
      "id": "tfmg:magnetic_alloy_ingot",
      "count": 2
    }]
  })
  event.custom({
    "type": "create:mixing",
    "ingredients": [{
        "item": "minecraft:blue_ice"
      },
      {
        "item": "minecraft:blue_ice"
      },
      {
        "item": "minecraft:blue_ice"
      },
      {
        "item": "minecraft:blue_ice"
      },
      {
        "item": "minecraft:blue_ice"
      },
      {
        "item": "minecraft:blue_ice"
      },
      {
        "item": "minecraft:blue_ice"
      },
      {
        "item": "minecraft:blue_ice"
      },
      {
        "item": "season_x:hot_deringer"
      },
      {
        "amount": 1000,
        "fluid": "tfmg:cooling_fluid",
        "type": "fluid_stack"
      }
    ],
    "results": [{
      "id": "minestuck:royal_deringer",
      "count": 1
    }]
  })
  event.custom({
    "type": "create:mixing",
    "ingredients": [{
      "item": "minecraft:glow_berries"
    }],
    "results": [{
      "id": "supplementaries:lumisene",
      "amount": 125
    }]
  })
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "superheated",
    "ingredients": [{
        "item": "create:crushed_raw_osmium"
      },
      {
        "amount": 100,
        "fluid": "sillyworks:strong_acid",
        "type": "fluid_stack"
      }
    ],
    "results": [{
        "chance": 1,
        "id": "mekanism:dust_osmium"
      },
      {
        "chance": 0.5,
        "id": "mekanism:dust_osmium"
      }
    ]
  })
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "superheated",
    "ingredients": [{
        "item": "tfmg:bauxite_powder"
      },
      {
        "amount": 5,
        "fluid": "sillyworks:weak_acid",
        "type": "fluid_stack"
      }
    ],
    "results": [{
      "chance": 1,
      "id": "tfmg:aluminum_ingot"
    }]
  })
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "superheated",
    "ingredients": [{
      "tag": "c:dusts/aluminum"
    }],
    "results": [{
      "chance": 1,
      "id": "tfmg:aluminum_ingot"
    }]
  })
  event.custom({
    "type": "create:mixing",
    "ingredients": [{
      "tag": "c:buckets/air"
    }],
    "results": [{
      "chance": 1,
      "id": "tfmg:neon_bucket"
    }]
  })
  event.custom({
    "type": "malum:favor_of_the_void",
    "ingredient": {
      "item": "create:empty_schematic"
    },
    "output": {
      "count": 1,
      "id": "season_x:arcane_schematics"
    }
  })
  event.custom({
    "type": "malum:favor_of_the_void",
    "ingredient": {
      "item": "season_x:sack_of_magical_paraphernalia"
    },
    "output": {
      "count": 1,
      "id": "season_x:phantasmagorium"
    }
  })
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "create:brass_ingot"
      },
      "middle": {
        "item": "minecraft:gunpowder"
      },
      "top": {
        "item": "tfmg:lead_ingot"
      },
    },
    "mode": "press",
    "result": {
      "count": 32,
      "id": "alchemyexpanded:ammo"
    }
  })
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "tag": "c:alloys/advanced"
      },
      "middle": {
        "item": "minestuck:battery"
      },
      "top": {
        "item": "tfmg:magnet"
      },
    },
    "mode": "press",
    "result": {
      "count": 24,
      "id": "alchemyexpanded:laser_ammo"
    }
  })
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "create:brass_ingot"
      },
      "middle": {
        "item": "minecraft:gunpowder"
      },
      "top": {
        "item": "sillyworks:uranium_ingot"
      },
    },
    "mode": "press",
    "result": {
      "count": 12,
      "id": "season_x:uranium_round"
    }
  })
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "create:brass_ingot"
      },
      "middle": {
        "item": "minecraft:gunpowder"
      },
      "top": {
        "item": "mekanism:ingot_osmium"
      },
    },
    "mode": "press",
    "result": {
      "count": 12,
      "id": "season_x:osmium_round"
    }
  })
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "tfmg:steel_ingot"
      },
      "middle": {
        "item": "minecraft:tnt"
      },
      "top": {
        "item": "mekanism:alloy_atomic"
      },
    },
    "mode": "press",
    "result": {
      "count": 12,
      "id": "season_x:atomic_round"
    }
  })
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "minecraft:netherite_ingot"
      },
      "middle": {
        "item": "ae2:singularity"
      },
      "top": {
        "item": "e2s2:godsoul_ingot"
      },
    },
    "mode": "press",
    "result": {
      "count": 12,
      "id": "season_x:godbreaker_round"
    }
  })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "o",
      "O"
    ],
    "key": {
      "o": {
        "item": "e2s2:shadow_crystal"
      },
      "O": {
        "item": "e2s2:dark_cloak"
      }
    },
    "result": {
      "id": "e2s2:shadow_chestplate",
      "count": 1,
      "components": {
        "minecraft:attribute_modifiers": {
          "modifiers": [{
              "type": "irons_spellbooks:max_mana",
              "id": "custom:shadow_mantle_mana",
              "amount": 250,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "irons_spellbooks:spell_power",
              "id": "custom:shadow_mantle_magic",
              "amount": 0.50,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "irons_spellbooks:spell_resist",
              "id": "custom:shadow_mantle_magic_resist",
              "amount": 0.25,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "minecraft:generic.armor",
              "id": "custom:shadow_armor",
              "amount": 12,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "minecraft:generic.armor_toughness",
              "id": "custom:shadow_toughness",
              "amount": 5,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "minecraft:generic.knockback_resistance",
              "id": "custom:shadow_knockback",
              "amount": 0.50,
              "operation": "add_value",
              "slot": "chest"
            }
          ],
          "show_in_tooltip": true
        }
      }
    }
  })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "GRG",
      "SSS",
      "SOS"
    ],
    "key": {
      "R": {
        "item": "e2s2:restored_brooch"
      },
      "O": {
        "item": "e2s2:ruined_cloak"
      },
      "S": {
        "item": "e2s2:immaculate_yarn"
      },
      "G": {
        "item": "e2s2:godsoul_ingot"
      }
    },
    "result": {
      "id": "e2s2:relica_chestplate",
      "count": 1,
      "components": {
        "minecraft:attribute_modifiers": {
          "modifiers": [{
              "type": "irons_spellbooks:max_mana",
              "id": "custom:relica_mana",
              "amount": 200,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "irons_spellbooks:spell_power",
              "id": "custom:relica_magic",
              "amount": 0.25,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "parcool:stamina_recovery",
              "id": "custom:relica_stamina",
              "amount": 10,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "minecraft:generic.armor",
              "id": "custom:relica_armor",
              "amount": 10,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "minecraft:generic.armor_toughness",
              "id": "custom:relica_toughness",
              "amount": 4,
              "operation": "add_value",
              "slot": "chest"
            },
            {
              "type": "minecraft:generic.knockback_resistance",
              "id": "custom:relica_knockback",
              "amount": 0.40,
              "operation": "add_value",
              "slot": "chest"
            }
          ],
          "show_in_tooltip": true
        }
      }
    }
  })
  event.smoking('season_x:toasted_italian_sub', 'season_x:italian_sub')
  event.smelting('tfmg:cast_iron_ingot', '#kubejs:cast_iron_blocks')
  event.smelting('tfmg:lithium_ingot', '#c:dusts/lithium')
  event.smelting('minecraft:iron_ingot', '#c:ingots/black_steel')
  event.smelting('irons_spellbooks:mithril_scrap', '#c:dusts/mithril')
  event.shapeless(
    Item.of('supplementaries:pancake', 6),
    [
      '#c:dough',
      '#extradelight:sweetener',
      '#c:foods/milk',
      '#c:eggs',
      'nomansland:maple_syrup_bottle'
    ]
  )
  event.shapeless(
    Item.of('immersiveengineering:tesla_coil', 1),
    [
      'createaddition:tesla_coil'
    ]
  )
  event.shapeless(
    Item.of('createaddition:tesla_coil', 1),
    [
      'immersiveengineering:tesla_coil'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 1),
    [
      'season_x:moon_crystal',
      '#c:ash',
      '#c:ash',
      '#c:ash',
      '#c:ash'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 1),
    [
      'season_x:moon_crystal',
      '#c:dusts/quartz'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 3),
    [
      'season_x:moon_crystal',
      '#c:dusts/amethyst'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 2),
    [
      'season_x:moon_crystal',
      'occultism:burnt_otherstone'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 24),
    [
      'season_x:moon_crystal',
      'occultism:echo_dust'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 8),
    [
      'season_x:moon_crystal',
      'malum:hex_ash'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 32),
    [
      'season_x:moon_crystal',
      '#c:dusts/iesnium'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 4),
    [
      'season_x:moon_crystal',
      'minestuck:glowystone_dust'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 64),
    [
      'season_x:moon_crystal',
      'sillyworks:magic_powder'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 48),
    [
      'season_x:moon_crystal',
      'season_x:mithril_dust'
    ]
  )
  event.shapeless(
    Item.of('hexerei:moon_dust', 16),
    [
      'season_x:moon_crystal',
      'e2s2:sunbeam_ingot'
    ]
  )
  event.shapeless(
    Item.of('irons_spellbooks:arcane_essence', 16),
    [
      'sillyworks:magic_powder'
    ]
  )
  event.shapeless(
    Item.of('occultism:chalk_white_impure', 1),
    [
      '#c:dusts/otherstone',
      'hexerei:moon_dust',
      '#c:dusts/otherworld_wood'
    ]
  )
  event.shapeless(
    Item.of('irons_spellbooks:common_ink', 1),
    [
      '#kubejs:ink_base',
      'hexerei:moon_dust',
      'irons_spellbooks:arcane_essence',
      'occultism:otherworld_essence'
    ]
  )
  event.shapeless(
    Item.of('season_x:sack_of_magical_paraphernalia', 1),
    [
      'occultism:iesnium_ingot',
      'malum:soulwoven_silk',
      'malum:refined_brilliance',
      'malum:malignant_pewter_ingot',
      'e2s2:asterite_ingot',
      'irons_spellbooks:arcane_ingot',
      'irons_spellbooks:mithril_scrap',
      'irons_spellbooks:timeless_slurry',
      'minestuck:cueball'
    ]
  )
  event.shapeless(
    Item.of('tfmg:circuit_board', 1),
    [
      'tfmg:etched_circuit_board',
      '#sillyworks:processors/bad',
      'sillyworks:silicon_component',
      'tfmg:capacitor_item',
      'tfmg:resistor',
      'tfmg:transistor_item'
    ]
  )
  event.shapeless(
    Item.of('season_x:italian_sub', 1),
    [
      'minestuck:stale_baguette',
      'paldelight:olive_oil',
      'extradelight:cheese',
      'extradelight:sliced_tomato',
      'extradelight:salami_item',
      'farmersdelight:cabbage_leaf',
      'extradelight:sliced_onion',
      'nomansland:pesto_bottle',
      'extradelight:mayo_jar_item'
    ]
  )
  event.shaped('endermanoverhaul:corrupted_shield', [
    'CBC',
    'BAB',
    'CBC'
  ], {
    A: '#enderscape:rubble_shields',
    B: 'e2s2:end_stone_alloy',
    C: 'endermanoverhaul:enderman_tooth'
  })
  event.shaped('extradelight:charcuterie_board_feast', [
    'BAC',
    'BAC',
    'EDE'
  ], {
    A: 'extradelight:salami_item',
    B: 'extradelight:crackers',
    C: 'extradelight:cheese',
    D: 'minecraft:bowl',
    E: '#c:foods/pickled/vegetables'
  })
  event.shaped('4x create:cogwheel', [
    'BAB',
    'ACA',
    'BAB'
  ], {
    A: '#minecraft:planks',
    B: 'create:shaft',
    C: 'nomansland:resin'
  })
  event.shaped('2x create:large_cogwheel', [
    'BAB',
    ' C ',
    'BAB'
  ], {
    A: 'create:shaft',
    B: '#minecraft:planks',
    C: 'nomansland:resin'
  })
  event.shaped('extradelight:unripe_salami_item', [
    'B',
    'A',
    'A'
  ], {
    A: 'extradelight:salami_mix',
    B: 'farmersdelight:canvas'
  })
  event.shaped('irons_spellbooks:silver_ring', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: '#c:ingots/silver',
    B: 'irons_spellbooks:arcane_essence'
  })
  event.shaped('4x immersiveengineering:cokebrick', [
    'CBC',
    'BAB',
    'CBC'
  ], {
    A: 'create:industrial_iron_block',
    B: 'tfmg:cast_iron_ingot',
    C: 'season_x:coke_brick'
  })
  event.shaped('8x immersiveengineering:alloybrick', [
    'CBC',
    'BAB',
    'CBC'
  ], {
    A: 'create:brass_block',
    B: 'supplementaries:ash_bricks',
    C: '#c:bricks/nether'
  })
  event.shaped('4x tfmg:hardened_planks', [
    ' C ',
    'CAC',
    ' C '
  ], {
    C: '#minecraft:planks',
    A: 'tfmg:creosote_bucket'
  })
  event.shaped('mekanismgenerators:fusion_reactor_controller', [
    'CBC',
    'DAD',
    'CCC'
  ], {
    A: 'sillyworks:supercomputer',
    B: '#c:glass_panes',
    C: 'mekanismgenerators:fusion_reactor_frame',
    D: 'mekanism:ultimate_chemical_tank'
  })
  event.shaped('hexerei:pestle_and_mortar', [
    ' B ',
    ' A ',
    'DCD'
  ], {
    A: 'irons_spellbooks:arcane_essence',
    B: 'extradelight:pestle_deepslate',
    C: 'extradelight:mortar_stone',
    D: '#c:ingots/silver'
  })
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:cobalt': 75,
      'minestuck:quartz': 50,
      'minestuck:diamond': 25
    },
    ingredient: {
      item: 'season_x:moon_crystal',
    },
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:chalk": 100,
      "minestuck:diamond": 1
    },
    "ingredient": {
      "item": "occultism:chalk_white"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:chalk": 100,
      "minestuck:diamond": 1
    },
    "ingredient": {
      "item": "occultism:chalk_white_impure"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:gold": 5,
      "minestuck:iodine": 10,
      "minestuck:marble": 5
    },
    "ingredient": {
      "item": "e2s2:petrified_ore"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:rust": 9
    },
    "ingredient": {
      "item": "malum:esoteric_spool"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:build": 2
    },
    "ingredient": {
      "tag": "malum:tainted_rock_blocks"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:build": 2
    },
    "ingredient": {
      "tag": "malum:twisted_rock_blocks"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:build": 2,
      "minestuck:gold": 2
    },
    "ingredient": {
      "item": "malum:ether"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:build": 2,
      "minestuck:gold": 2
    },
    "ingredient": {
      "item": "malum:iridescent_ether"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:garnet": 250,
      "minestuck:rust": 50,
      "minestuck:diamond": 50
    },
    "ingredient": {
      "item": "e2s2:crimson_pearl"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:caulk": 3,
      "minestuck:amber": 3
    },
    "ingredient": {
      "item": "nomansland:resin"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:chalk": 2,
      "minestuck:amber": 10,
      "minestuck:build": 2
    },
    "ingredient": {
      "item": "extradelight:egg_mix"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:chalk": 4,
      "minestuck:amber": 4
    },
    "ingredient": {
      "item": "extradelight:cheese"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:amber": 4,
      "minestuck:build": 1
    },
    "ingredient": {
      "tag": "c:cooking_oil"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:iodine": 4,
      "minestuck:cobalt": 1
    },
    "ingredient": {
      "tag": "c:dough"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:chalk": 3
    },
    "ingredient": {
      "tag": "c:salt"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:iodine": 3
    },
    "ingredient": {
      "tag": "c:flour"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:rust": 18,
      "minestuck:tar": 9
    },
    "ingredient": {
      "tag": "c:ingots/steel"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:diamond": 18,
      "minestuck:rust": 9
    },
    "ingredient": {
      "tag": "c:ingots/asterite"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:garnet": 36,
      "minestuck:rust": 27
    },
    "ingredient": {
      "tag": "c:ingots/superconductor"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:quartz": 81,
      "minestuck:rust": 18
    },
    "ingredient": {
      "tag": "c:ingots/silicon"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:diamond": 81,
      "minestuck:gold": 18
    },
    "ingredient": {
      "tag": "c:ingots/iesnium"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:build": 90,
      "minestuck:artifact": 90
    },
    "ingredient": {
      "tag": "c:ingots/plastic"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:amethyst": 49,
      "minestuck:rust": 18
    },
    "ingredient": {
      "item": "malum:soul_stained_steel_ingot"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:gold": 49,
      "minestuck:amethyst": 18
    },
    "ingredient": {
      "item": "malum:hallowed_gold_ingot"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:diamond": 1,
      "minestuck:quartz": 4
    },
    "ingredient": {
      "tag": "c:gems/certus_quartz"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:amethyst": 4,
      "minestuck:garnet": 2,
    },
    "ingredient": {
      "tag": "c:gems/fluix"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:build": 1,
      "minestuck:tar": 1,
      "minestuck:diamond": 126
    },
    "ingredient": {
      "item": "minecraft:netherite_upgrade_smithing_template"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:caulk": 16,
      "minestuck:shale": 20
    },
    "ingredient": {
      "item": "tfmg:resistor"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:build": 4,
      "minestuck:gold": 2
    },
    "ingredient": {
      "item": "sillyworks:diorite_alloy"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:build": 4,
      "minestuck:shale": 2
    },
    "ingredient": {
      "item": "sillyworks:granite_alloy"
    }
  });
  event.custom({
    "type": "minestuck:grist_cost",
    "grist_cost": {
      "minestuck:build": 270,
      "minestuck:artifact": 270,
      "minestuck:garnet": 4,
      "minestuck:gold": 9
    },
    "ingredient": {
      "item": "tfmg:etched_circuit_board"
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:gold': 1500,
      'minestuck:cobalt': 5000,
      'minestuck:diamond': 20000,
      'minestuck:build': 30000,
      'minestuck:zillium': 30,
      'minestuck:quartz': 5000,
      'minestuck:ruby': 30000,
    },
    ingredient: {
      item: 'alchemyexpanded:flintlock_of_zillyhau',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:gold': 1500,
      'minestuck:cobalt': 5000,
      'minestuck:diamond': 20000,
      'minestuck:build': 30000,
      'minestuck:zillium': 30,
      'minestuck:quartz': 5000,
      'minestuck:marble': 30000,
    },
    ingredient: {
      item: 'alchemyexpanded:blunderbuss_of_zillywigh',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:tar': 50,
      'minestuck:chalk': 100,
      'minestuck:zillium': 1
    },
    ingredient: {
      item: 'ends_delight:dragon_tooth',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:tar': 500,
      'minestuck:uranium': 8000,
      'minestuck:ruby': 100,
      'minestuck:sulfur': 100,
      'minestuck:zillium': 5
    },
    ingredient: {
      item: 'e2s2:dragon_claw',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:tar': 500,
      'minestuck:uranium': 8000,
      'minestuck:ruby': 100,
      'minestuck:sulfur': 100,
      'minestuck:zillium': 5
    },
    ingredient: {
      item: 'e2s2:dragon_wing',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:tar': 500,
      'minestuck:uranium': 8000,
      'minestuck:ruby': 100,
      'minestuck:sulfur': 100,
      'minestuck:zillium': 5
    },
    ingredient: {
      item: 'e2s2:dragon_heart',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:tar': 4000,
      'minestuck:uranium': 4000,
      'minestuck:zillium': 3
    },
    ingredient: {
      item: 'e2s2:charred_hilt',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:tar': 200,
      'minestuck:uranium': 200,
      'minestuck:ruby': 50,
      'minestuck:sulfur': 50
    },
    ingredient: {
      item: 'e2s2:dragon_scale',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:amber': 100,
      'minestuck:zillium': 1,
      'minestuck:ruby': 50,
      'minestuck:sulfur': 50
    },
    ingredient: {
      item: 'ends_delight:liquid_dragon_egg',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:tar': 60,
      'minestuck:iodine': 300
    },
    ingredient: {
      item: 'ends_delight:raw_dragon_meat',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:tar': 60,
      'minestuck:iodine': 300,
      'minestuck:chalk': 50
    },
    ingredient: {
      item: 'ends_delight:dragon_leg',
    }
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:diamond': 1,
      'minestuck:build': 50
    },
    ingredient: {
      item: 'hexerei:moon_dust',
    }
  });
  event.custom({
    "type": "minestuck:combination",
    "input1": {
      "tag": "minecraft:saplings"
    },
    "input2": {
      "item": "minecraft:slime_ball"
    },
    "mode": "and",
    "output": "nomansland:resin"
  })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "sillyworks:supercomputer_case"
    },
    "loops": 2,
    "results": [{
      "id": "sillyworks:supercomputer"
    }],
    "sequence": [{
        "type": "create:deploying",
        "ingredients": [{
            "item": "sillyworks:supercomputer_case"
          },
          [{
            "item": "sillyworks:microprocessor"
          }]
        ],
        "results": [{
          "id": "sillyworks:supercomputer_case"
        }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{
            "item": "sillyworks:supercomputer_case"
          },
          [{
            "item": "mekanism:ultimate_control_circuit"
          }]
        ],
        "results": [{
          "id": "sillyworks:supercomputer_case"
        }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{
            "item": "sillyworks:supercomputer_case"
          },
          [{
            "item": "tfmg:circuit_board"
          }]
        ],
        "results": [{
          "id": "sillyworks:supercomputer_case"
        }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{
            "item": "sillyworks:supercomputer_case"
          },
          [{
            "item": "mekanismgenerators:turbine_blade"
          }]
        ],
        "results": [{
          "id": "sillyworks:supercomputer_case"
        }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{
            "item": "sillyworks:supercomputer_case"
          },
          [{
            "item": "sillyworks:fusion_core"
          }]
        ],
        "results": [{
          "id": "sillyworks:supercomputer_case"
        }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{
            "item": "sillyworks:supercomputer_case"
          },
          [{
            "item": "tfmg:steel_mechanism"
          }]
        ],
        "results": [{
          "id": "sillyworks:supercomputer_case"
        }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{
            "item": "sillyworks:supercomputer_case"
          },
          [{
            "item": "ae2:singularity"
          }]
        ],
        "results": [{
          "id": "sillyworks:supercomputer_case"
        }]
      }
    ],
    "transitional_item": {
      "id": "sillyworks:supercomputer_case"
    }
  })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "season_x:hot_caledfwlch"
    },
    "loops": 1,
    "results": [{
      "id": "season_x:hot_deringer"
    }],
    "sequence": [{
        "type": "create:deploying",
        "ingredients": [{
            "item": "season_x:hot_caledfwlch"
          },
          [{
            "tag": "c:ruined_artifact"
          }]
        ],
        "results": [{
          "id": "season_x:hot_caledfwlch"
        }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{
            "item": "season_x:hot_caledfwlch"
          },
          [{
            "tag": "c:ingots/osmium"
          }]
        ],
        "results": [{
          "id": "season_x:hot_caledfwlch"
        }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{
            "item": "season_x:hot_caledfwlch"
          },
          [{
            "tag": "c:ingots/steel"
          }]
        ],
        "results": [{
          "id": "season_x:hot_caledfwlch"
        }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{
            "item": "season_x:hot_caledfwlch"
          },
          [{
            "item": "e2s2:asterite_ingot"
          }]
        ],
        "results": [{
          "id": "season_x:hot_caledfwlch"
        }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{
          "item": "season_x:hot_caledfwlch"
        }],
        "results": [{
          "id": "season_x:hot_caledfwlch"
        }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{
          "item": "season_x:hot_caledfwlch"
        }],
        "results": [{
          "id": "season_x:hot_caledfwlch"
        }]
      }
    ],
    "transitional_item": {
      "id": "season_x:hot_caledfwlch"
    }
  })
  event.custom({
    "type": "create:pressing",
    "ingredients": [{
      "tag": "c:foods/raw_ender_mite_meat"
    }],
    "results": [{
      "id": "e2s2:endermite_slop"
    }]
  })
  event.custom({
    "type": "immersiveengineering:cloche",
    "input": {
      "item": "hexerei:mugwort_bush"
    },
    "render": {
      "type": "immersiveengineering:generic",
      "block": "hexerei:mugwort_bush"
    },
    "results": [{
        "count": 2,
        "id": "hexerei:mugwort_flowers"
      },
      {
        "count": 2,
        "id": "hexerei:mugwort_leaves"
      },
      {
        "chance": 1,
        "output": {
          "id": "alchemyexpanded:wizard_berries"
        }
      },
      {
        "chance": 0.10,
        "output": {
          "id": "hexerei:mugwort_bush"
        }
      }
    ],
    "soil": {
      "item": "farmersdelight:rich_soil"
    },
    "time": 640
  })
  event.custom({
    "type": "immersiveengineering:cloche",
    "input": {
      "item": "hexerei:yellow_dock_bush"
    },
    "render": {
      "type": "immersiveengineering:generic",
      "block": "hexerei:yellow_dock_bush"
    },
    "results": [{
        "count": 2,
        "id": "hexerei:yellow_dock_flowers"
      },
      {
        "count": 2,
        "id": "hexerei:yellow_dock_leaves"
      },
      {
        "chance": 1,
        "output": {
          "id": "alchemyexpanded:wizard_berries"
        }
      },
      {
        "chance": 0.10,
        "output": {
          "id": "hexerei:yellow_dock_bush"
        }
      }
    ],
    "soil": {
      "item": "farmersdelight:rich_soil"
    },
    "time": 640
  })
  event.custom({
    "type": "immersiveengineering:cloche",
    "input": {
      "item": "hexerei:mandrake_plant"
    },
    "render": {
      "type": "immersiveengineering:generic",
      "block": "hexerei:mandrake_plant"
    },
    "results": [{
        "count": 2,
        "id": "hexerei:mandrake_flowers"
      },
      {
        "count": 2,
        "id": "hexerei:mandrake_root"
      },
      {
        "chance": 1,
        "output": {
          "id": "alchemyexpanded:wizard_berries"
        }
      },
      {
        "chance": 0.10,
        "output": {
          "id": "hexerei:mandrake_plant"
        }
      }
    ],
    "soil": {
      "item": "farmersdelight:rich_soil"
    },
    "time": 640
  })
  event.custom({
    "type": "immersiveengineering:cloche",
    "input": {
      "item": "hexerei:belladonna_plant"
    },
    "render": {
      "type": "immersiveengineering:generic",
      "block": "hexerei:belladonna_plant"
    },
    "results": [{
        "count": 2,
        "id": "hexerei:belladonna_flowers"
      },
      {
        "count": 2,
        "id": "hexerei:belladonna_berries"
      },
      {
        "chance": 1,
        "output": {
          "id": "alchemyexpanded:wizard_berries"
        }
      },
      {
        "chance": 0.10,
        "output": {
          "id": "hexerei:belladonna_plant"
        }
      }
    ],
    "soil": {
      "item": "farmersdelight:rich_soil"
    },
    "time": 640
  })
  event.stonecutting('2x createaddition:iron_wire', '#c:ingots/iron')
  event.stonecutting('2x createaddition:gold_wire', '#c:ingots/gold')
  event.stonecutting('2x createaddition:electrum_wire', '#c:ingots/electrum')
  event.replaceInput({
      input: 'netherex:ash'
    },
    'netherex:ash',
    '#c:ash'
  )
  event.replaceInput({
      input: 'occultism:purified_ink'
    },
    'occultism:purified_ink',
    'irons_spellbooks:common_ink'
  )
  event.replaceInput({
      input: 'tfmg:fireproof_brick'
    },
    'tfmg:fireproof_brick',
    'season_x:blast_brick'
  )
  event.replaceInput({
      input: 'farmersdelight:rope'
    },
    'farmersdelight:rope',
    '#supplementaries:ropes'
  )
  event.replaceInput({
      input: 'occultism:taboo_book'
    },
    'occultism:taboo_book',
    '#kubejs:taboo_books'
  )
  event.replaceInput({
      output: 'createoreexcavation:netherite_drill'
    },
    'minecraft:netherite_ingot',
    'minecraft:netherite_block'
  )
  event.replaceInput({
      mod: 'ae2'
    },
    '#c:ingots/iron',
    '#c:ingots/aluminum'
  )
  event.replaceInput({
      mod: 'tempad'
    },
    '#c:ingots/iron',
    '#c:ingots/constantan'
  )
  event.replaceInput({
      mod: 'sillyworks'
    },
    'minecraft:quartz',
    '#c:gems/quartz'
  )
  event.replaceInput({
      mod: 'minestuck'
    },
    'minecraft:quartz',
    '#c:gems/quartz'
  )
  event.replaceInput({
      mod: 'tfmg'
    },
    'tfmg:silicon_ingot',
    '#c:ingots/silicon'
  )
  event.replaceInput({
      mod: 'sillyworks'
    },
    'sillyworks:plastic_ingot',
    '#c:ingots/plastic'
  )
  event.replaceInput({
      mod: 'season_x'
    },
    'minecraft:dirt',
    'farmersdelight:rich_soil'
  )
  event.replaceInput({
      input: 'tfmg:plastic_sheet'
    },
    'tfmg:plastic_sheet',
    '#c:ingots/plastic'
  )
  event.replaceInput({
      input: 'irons_spellbooks:magic_cloth'
    },
    'irons_spellbooks:magic_cloth',
    '#kubejs:magic_cloth'
  )
  event.replaceInput({
      type: 'minecraft:crafting_shaped'
    },
    'enderscape:shadoline_ingot',
    'e2s2:voidmetal_ingot'
  )
  event.replaceOutput({
      type: 'minecraft:crafting_shapeless'
    },
    'enderscape:shadoline_ingot',
    'e2s2:voidmetal_ingot'
  )
  event.replaceInput({
      input: 'extradelight:french_fries'
    },
    'extradelight:french_fries',
    '#kubejs:french_fries'
  )
  event.replaceInput({
      input: 'minestuck:french_fry'
    },
    'minestuck:french_fry',
    '#kubejs:french_fries'
  )
  event.replaceOutput({
      output: 'enderscape:shadoline_ingot'
    },
    'enderscape:shadoline_ingot',
    'e2s2:voidmetal_ingot'
  )
  event.replaceInput({
      output: 'hexerei:mixing_cauldron'
    },
    'minecraft:torch',
    'irons_spellbooks:arcane_essence'
  )
  event.replaceInput({
      output: 'tfmg:lithium_blade'
    },
    'tfmg:steel_sword',
    'minestuck:katana'
  )
  event.replaceOutput({
      output: 'tfmg:lithium_blade'
    },
    'tfmg:lithium_blade',
    'season_x:lithium_katana'
  )
  event.replaceOutput({
      output: 'tfmg:fireproof_bricks'
    },
    'tfmg:fireproof_bricks',
    'immersiveengineering:blastbrick'
  )
  event.replaceInput({
      output: 'enderscape:dusk_purpur_block'
    },
    'enderscape:shadoline_ingot',
    'e2s2:voidmetal_ingot'
  )
  event.replaceInput({
      output: 'mekanismgenerators:solar_panel'
    },
    '#c:glass_panes',
    'sillyworks:silicon_plate_2'
  )
  event.replaceInput({
      output: 'occultism:gray_paste'
    },
    'minecraft:gunpowder',
    'mekanism:dust_fluorite'
  )
  event.replaceInput({
      output: 'irons_spellbooks:arcane_ingot'
    },
    '#irons_spellbooks:arcane_ingot_base',
    '#c:ingots/silver'
  )
  event.replaceInput({
      output: 'irons_spellbooks:iron_spell_book'
    },
    '#c:leathers',
    'hexerei:infused_fabric'
  )
  event.replaceInput({
      output: 'occultism:research_fragment_dust'
    },
    'minecraft:experience_bottle',
    'malum:refined_brilliance'
  )
  event.replaceInput({
      output: 'occultism:witherite_dust'
    },
    'minecraft:wither_skeleton_skull',
    'cataclysm:witherite_ingot'
  )
  event.replaceInput({
      output: 'occultism:dragonyst_dust'
    },
    'minecraft:dragon_breath',
    'e2s2:draconic_voidmetal'
  )
  event.replaceInput({
      output: 'occultism:dragonyst_dust'
    },
    'minecraft:end_crystal',
    'e2s2:dragon_scale'
  )
  event.replaceInput({
      output: 'immersiveengineering:rs_engineering'
    },
    '#c:ingots/copper',
    '#sillyworks:tubes'
  )
  event.replaceInput({
      output: 'immersiveengineering:light_engineering'
    },
    'minecraft:copper_ingot',
    '#sillyworks:mechanisms'
  )
  event.replaceInput({
      output: 'immersiveengineering:heavy_engineering'
    },
    '#c:ingots/electrum',
    'tfmg:circuit_board'
  )
  event.replaceInput({
      output: 'irons_spellbooks:portal_frame'
    },
    'minecraft:ender_pearl',
    '#kubejs:strange_crystals'
  )
  event.replaceInput({
      output: 'mekanism:cardboard_box'
    },
    '#c:dusts/wood',
    'create:cardboard'
  )
  event.replaceInput({
      output: 'irons_spellbooks:mithril_weave'
    },
    'minecraft:chain',
    'malum:soulwoven_silk'
  )
  event.replaceInput({
      output: 'irons_spellbooks:paladin_chestplate'
    },
    'minecraft:gold_ingot',
    'malum:hallowed_gold_ingot'
  )
  event.replaceInput({
      output: 'irons_spellbooks:speed_boots'
    },
    'minecraft:feather',
    'occultism:awakened_feather'
  )
  event.replaceInput({
      output: 'occultism:spawn_egg/iesnium_golem'
    },
    'minecraft:nether_star',
    'season_x:phantasmagorium'
  )
  event.replaceInput({
      output: 'occultism:spawn_egg/wild_strong_breeze'
    },
    'minecraft:tuff_bricks',
    'malum:wind_nucleus'
  )
  event.replaceInput({
      output: 'occultism:trinity_gem'
    },
    'occultism:echo_dust',
    'season_x:phantasmagorium'
  )
  event.replaceInput({
      output: 'occultism:storage_stabilizer_tier4'
    },
    'minecraft:beacon',
    'season_x:phantasmagorium'
  )
  event.replaceInput({
      output: 'irons_spellbooks:upgrade_orb'
    },
    'irons_spellbooks:arcane_ingots',
    'malum:soul_stained_steel_ingot'
  )
  event.replaceInput({
      output: 'occultism:chalk_rainbow'
    },
    'occultism:brush',
    'season_x:phantasmagorium'
  )
  event.replaceInput({
      output: 'occultism:eldritch_chalice'
    },
    'minecraft:soul_lantern',
    'malum:fused_consciousness'
  )
  event.replaceInput({
      output: 'occultism:eldritch_chalice'
    },
    'minecraft:end_stone_bricks',
    'alchemyexpanded:sadakos_mixing_bowl'
  )
  event.replaceInput({
      mod: 'tfmg'
    },
    'tfmg:synthetic_string',
    'immersiveengineering:wirecoil_structure_steel'
  )
  event.replaceInput({
      mod: 'tfmg'
    },
    'tfmg:hardened_planks',
    '#immersiveengineering:treated_wood'
  )
})
  */