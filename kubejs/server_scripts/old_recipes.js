// priority: 14
//just above dweb recipes so that other scripts will replace

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

  createRecipe(event, 'create:compacting', 'none', 
    [fluidEntry("minestuck:ender", 1000), tagEntry("c:dusts/quartz")], 
    [itemOutput("ae2:ender_dust")]
  );

  /*createRecipe(event, 'create:compacting', 'superheated', 
    [fluidEntry("minestuck:caulk", 1000), tagEntry("c:dusts/quartz"), tagEntry("c:dusts/quartz"), tagEntry("c:dusts/quartz"), tagEntry("c:dusts/quartz"), tagEntry("c:dusts/quartz"), tagEntry("c:dusts/quartz"), tagEntry("c:dusts/quartz"), tagEntry("c:dusts/quartz")], 
    [itemOutput("sillyworks:silicon_ingot"), fluidOutput('minestuck:oil', 100)]
  );*/

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
        )/*,
        createRecipeData('create:deploying', 'none', 
          [itemEntry('hexerei:moon_dust_brush'), itemEntry('sillyworks:fuel')], 
          [itemOutput('hexerei:moon_dust_brush')]
        )*/
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
  /*event.custom(
    {
      type: 'create:mixing',
      heatRequirement: 'superheated', Please note! heatRequirement is now heat_requirement
      ingredients: [
        { item: 'ae2:certus_quartz_dust' },
      ],
      results: [
        { amount: 50, id: 'sillyworks:molten_silicon' },
      ],
    },
  );*/









  // CCTWEAKED computer & tablet recipe reworks ============================================================================================================
  event.shaped('computercraft:computer_advanced', [
    'ABA',
    'ACA',
    'ADA',
  ], {
    A: 'sillyworks:diorite_alloy',
    B: 'create:golden_sheet',
    C: '#sillyworks:processors/good',
    D: 'ae2:quartz_glass',
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:gold': 100,
      'minestuck:garnet': 5,
      'minestuck:cobalt': 5,
    },
    ingredient: {
      item: 'computercraft:computer_advanced',
    },
  });
  event.shaped('computercraft:computer_normal', [
    'ABA',
    'ACA',
    'ADA',
  ], {
    A: 'sillyworks:stone_brick',
    B: 'create:iron_sheet',
    C: '#sillyworks:processors/bad',
    D: 'ae2:quartz_glass',
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:build': 100,
      'minestuck:garnet': 5,
      'minestuck:cobalt': 5,
    },
    ingredient: {
      item: 'computercraft:computer_normal',
    },
  });
  event.shaped('computercraft:pocket_computer_normal', [
    'ABA',
    'ACA',
    'ADA',
  ], {
    A: 'sillyworks:clay_polymer_ingot',
    B: 'minecraft:apple',
    C: '#sillyworks:processors/good',
    D: 'ae2:quartz_vibrant_glass',
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:build': 50,
      'minestuck:garnet': 25,
      'minestuck:cobalt': 25,
    },
    ingredient: {
      item: 'computercraft:pocket_computer_normal',
    },
  });
  event.shaped('computercraft:pocket_computer_advanced', [
    'ABA',
    'ACA',
    'ADA',
  ], {
    A: 'sillyworks:clay_polymer_ingot',
    B: 'minecraft:golden_apple',
    C: 'sillyworks:microprocessor',
    D: 'ae2:quartz_vibrant_glass',
  });
  event.custom({
    type: 'minestuck:grist_cost',
    grist_cost: {
      'minestuck:gold': 50,
      'minestuck:garnet': 25,
      'minestuck:cobalt': 25,
    },
    ingredient: {
      item: 'computercraft:pocket_computer_advanced',
    },
  });








  // vin's sillyworks inscribing recipes=============================================================================================
  /*event.custom(
    {
      type: 'ae2:inscriber',
      ingredients: {
        bottom: {
          item: 'sillyworks:wooden_circuit_plate',
        },
        middle: {
          item: 'create:copper_nugget',
        },
        top: {
          item: 'sillyworks:vacuum_tube',
        },
      },
      mode: 'press',
      result: {
        count: 1,
        id: 'sillyworks:basic_processor',
      }
    }
  );*/
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

  event.custom(
    {
      type: 'minestuck:grist_cost',
      grist_cost: {
        'minestuck:iodine': 4,
        'minestuck:ruby': 1,
      },
      ingredient: {
        item: 'farmersdelight:tomato',
      },
    },
  );
  event.custom(
    {
      type: 'minestuck:grist_cost',
      grist_cost: {
        'minestuck:iodine': 8,
        'minestuck:ruby': 2,
        'minestuck:build': 1,
      },
      ingredient: {
        item: 'farmersdelight:tomato_sauce',
      },
    },
  );
  event.custom(
    {
      type: 'minestuck:grist_cost',
      grist_cost: {
        'minestuck:iodine': 2,
        'minestuck:marble': 3,
      },
      ingredient: {
        item: 'farmersdelight:cabbage',
      },
    },
  );
  event.custom(
    {
      type: 'minestuck:grist_cost',
      grist_cost: {
        'minestuck:iodine': 4,
      },
      ingredient: {
        item: 'farmersdelight:rice',
      },
    },
  );

});