// priority: 10

// TODO continue adapting lich tower

// ServerEvents.generateData('last', (event) => {
const generateDwebGen = function (event) {
  console.log('Started generating custom data in dweb_gen. If no finish log, then something may be broken!');

  newDataFullPath(event, 'irons_spellbooks:tags/worldgen/biome/has_structure/catacombs', newTag(true, ['#minestuck:land']));
  // newDataFullPath(event, `irons_spellbooks:tags/worldgen/structure/wayward_compass_locator`, newTag(true, ["irons_spellbooks:catacombs"])); //wayward compass is disabled
  newDataFullPath(event, 'irons_spellbooks:worldgen/processor_list/catacombs_randomization', {
    processors: [
      {
        processor_type: "minestuck:block_registry"
      },
      {
        processor_type: 'minecraft:rule',
        rules: [
          {
            input_predicate: {
              block: 'minecraft:stone_bricks',
              predicate_type: 'minecraft:random_block_match',
              probability: 0.25,
            },
            location_predicate: {
              predicate_type: 'minecraft:always_true',
            },
            output_state: {
              Name: 'minecraft:cracked_stone_bricks',
            },
          },
          {
            input_predicate: {
              block: 'minecraft:decorated_pot',
              predicate_type: 'minecraft:random_block_match',
              probability: 0.15,
            },
            location_predicate: {
              predicate_type: 'minecraft:always_true',
            },
            output_state: {
              Name: 'minecraft:air',
            },
          },
          {
            input_predicate: {
              block: 'minecraft:decorated_pot',
              predicate_type: 'minecraft:random_block_match',
              probability: 0.35,
            },
            location_predicate: {
              predicate_type: 'minecraft:always_true',
            },
            output_state: {
              Name: 'minecraft:flower_pot',
            },
          },
          {
            input_predicate: {
              block: 'minecraft:cobblestone',
              predicate_type: 'minecraft:random_block_match',
              probability: 0.5,
            },
            location_predicate: {
              predicate_type: 'minecraft:always_true',
            },
            output_state: {
              Name: 'minecraft:mossy_cobblestone',
            },
          },
        ],
      },
      {
        processor_type: 'minestuck:block_registry',
      },
    ],
  });



  newDataFullPath(event, 'cataclysm:tags/worldgen/biome/has_structure/ancient_factory_biomes', newTag(true, ['minestuck:veil'])); // vault spawns overtop
  newDataFullPath(event, 'cataclysm:worldgen/structure_set/ancient_factory', structureSet([structureEntry('cataclysm:ancient_factory', 1)], 75, 65, 319514301));
  newDataFullPath(event, 'cataclysm:tags/worldgen/biome/has_structure/acropolis_biomes', newTag(true, ['minestuck:prospit']));

  newDataFullPath(event, 'malum:tags/worldgen/biome/has_weeping_well', newTag(true, ['#minestuck:land']));

  newLandifyStructureSet(event, 'twilightforest', 'valid_hollow_tree_biomes', 'hollow_tree');
  newLandifyStructureSet(event, 'twilightforest', 'valid_fallen_trunk_biomes', 'fallen_trunk');
  newLandifyStructureSet(event, 'twilightforest', 'valid_quest_grove_biomes', 'quest_grove');
  newDataFullPath(event, 'twilightforest:tags/worldgen/biome/valid_final_castle_biomes', newTag(true, ['minestuck:skaia']));
  // newDataFullPath(event, `twilightforest:tags/worldgen/biome/valid_lich_tower_biomes`, newTag(true, ["#minestuck:land"])); //turned into its own structure
  // newDataFullPath(event, `twilightforest:tags/worldgen/biome/valid_knight_stronghold_biomes`, newTag(true, ["#minestuck:land/rough"])); //needs a lot more modification to work
  // edited to adapt it better to skaia
  newDataFullPath(event, 'twilightforest:worldgen/structure/final_castle', {
    type: 'twilightforest:final_castle',
    adjust_structure_elevation: true,
    advancements_required: [
      'custom:custom/enter_skaia',
    ],
    allow_biome_surface_decorations: false,
    allow_biome_underground_decorations: true,
    allow_biome_vegetation: true,
    ambient_spawns: [],
    biomes: '#twilightforest:valid_final_castle_biomes',
    chunk_clearance_radius: 4.0,
    hint_item: {
      components: {
        'minecraft:written_book_content': {
          author: 'twilightforest.book.author',
          generation: 3,
          pages: [
            {
              raw: '{"translate":"twilightforest.book.unknown.1"}',
            },
            {
              raw: '{"translate":"twilightforest.book.unknown.2"}',
            },
          ],
          resolved: true,
          title: {
            raw: 'twilightforest.book.unknown',
          },
        },
        'twilightforest:translatable_book': {},
      },
      count: 1,
      id: 'minecraft:written_book',
    },
    hint_mob: 'twilightforest:kobold',
    labelled_monster_spawns: {
      0: [],
      1: [],
      2: [],
      3: [],
    },
    spawn_overrides: {
      ambient: {
        bounding_box: 'full',
        spawns: [],
      },
      axolotls: {
        bounding_box: 'full',
        spawns: [],
      },
      creature: {
        bounding_box: 'full',
        spawns: [],
      },
      misc: {
        bounding_box: 'full',
        spawns: [],
      },
      monster: {
        bounding_box: 'full',
        spawns: [],
      },
      underground_water_creature: {
        bounding_box: 'full',
        spawns: [],
      },
      water_ambient: {
        bounding_box: 'full',
        spawns: [],
      },
      water_creature: {
        bounding_box: 'full',
        spawns: [],
      },
    },
    step: 'surface_structures',
    structure_icon: 'twilightforest:final_castle',
    terrain_adaptation: 'beard_box',
    water_spawns: [],
  });
  newDataFullPath(event, 'twilightforest:worldgen/structure_set/final_castle', structureSet([structureEntry('twilightforest:final_castle', 1)], 140, 92, 41361201));



  newDataFullPath(event, 'custom:worldgen/structure/naga', jigsawStructure('custom:naga', 6, '#minestuck:land/rough', 'beard_box', 'underground_structures', -4, 'WORLD_SURFACE_WG'));
  newDataFullPath(event, 'custom:worldgen/template_pool/naga', templatePool([templateEntry('custom:naga', 1)]));

  newDataFullPath(event, 'custom:worldgen/structure/lich_tower', jigsawStructure('custom:lich_tower', 6, '#minestuck:land/rough', 'beard_box', 'underground_structures', 0, 'WORLD_SURFACE_WG'));
  newDataFullPath(event, 'custom:worldgen/template_pool/lich_tower', templatePool([templateEntry('twilightforest:lich_tower', 1)]));

  newDataFullPath(event, 'custom:worldgen/structure/hydra', jigsawStructure('custom:hydra', 6, '#minestuck:land/rough', 'beard_box', 'underground_structures', -1, 'WORLD_SURFACE_WG'));
  newDataFullPath(event, 'custom:worldgen/template_pool/hydra', templatePool([templateEntry('custom:hydra', 1)]));

  newDataFullPath(event, 'custom:worldgen/structure_set/custom_bosses', structureSet([structureEntry('custom:naga', 4), structureEntry('custom:lich_tower', 2), structureEntry("custom:hydra", 1)], 80, 15, 598234012));

  newDataFullPath(event, 'custom:worldgen/structure/well', jigsawStructure('custom:well', 2, '#minestuck:land/rough', 'none', 'underground_structures', -12, 'WORLD_SURFACE_WG'));
  newDataFullPath(event, 'custom:worldgen/structure_set/well', structureSet([structureEntry('custom:well', 1)], 95, 50, 468567053));
  newDataFullPath(event, 'custom:worldgen/template_pool/well', templatePool([templateEntry('custom:well', 1)]));

  newDataFullPath(event, 'custom:worldgen/structure/skaia_portal', jigsawStructure('custom:skaia_portal', 2, '#enderscape:enderscape_biomes', 'none', 'underground_structures', 0, 'WORLD_SURFACE_WG'));
  newDataFullPath(event, 'custom:worldgen/structure_set/skaia_portal', structureSet([structureEntry('custom:skaia_portal', 1)], 95, 50, 6845734));
  newDataFullPath(event, 'custom:worldgen/template_pool/skaia_portal', templatePool([templateEntry('custom:skaia_portal', 1)]));

  newDataFullPath(event, 'custom:worldgen/structure/scientist_crash', jigsawStructure('custom:scientist_crash', 2, 'minestuck:veil', 'beard_box', 'surface_structures', 0, 'WORLD_SURFACE_WG'));
  newDataFullPath(event, 'custom:worldgen/template_pool/scientist_crash', templatePool([templateEntry('custom:scientist_crash', 1)]));
  newDataFullPath(event, 'custom:worldgen/structure/veil_skirmish', jigsawStructure('custom:skirmish/veil_derse', 2, 'minestuck:veil', 'beard_box', 'surface_structures', 0, 'WORLD_SURFACE_WG'));
  newDataFullPath(event, 'custom:worldgen/template_pool/skirmish/veil_derse', templatePool([templateEntryCustom('custom:skirmish/veil_derse', 1, 'terrain_matching', 'minestuck:structure_block_registry')]));
  newDataFullPath(event, 'custom:worldgen/template_pool/skirmish/veil_dersite', templatePool([
    templateEntryCustom('custom:skirmish/veil_dersite', 3, 'terrain_matching', 'minestuck:structure_block_registry'),
    templateEntryCustom('custom:skirmish/veil_dersite_dialogue', 1, 'terrain_matching', 'minestuck:structure_block_registry'),
  ]));
  newDataFullPath(event, 'custom:worldgen/template_pool/skirmish/veil_prospit', templatePool([templateEntryCustom('custom:skirmish/veil_prospit', 1, 'terrain_matching', 'minestuck:structure_block_registry')]));
  newDataFullPath(event, 'custom:worldgen/template_pool/skirmish/veil_prospitian', templatePool([
    templateEntryCustom('custom:skirmish/veil_prospitian', 3, 'terrain_matching', 'minestuck:structure_block_registry'),
    templateEntryCustom('custom:skirmish/veil_prospitian_dialogue', 1, 'terrain_matching', 'minestuck:structure_block_registry'),
  ]));

  newDataFullPath(event, 'custom:worldgen/structure_set/veil', structureSet([structureEntry('custom:veil_skirmish', 5), structureEntry('custom:scientist_crash', 1)], 55, 25, 37469342));



  // fix for NetherEx version 1.2.2 bug with endless mogus gen, moved it to ambient category and changed weights
  newDataFullPath(event, 'netherex:worldgen/biome/fungi_forest', {
    carvers: {
      air: 'minecraft:nether_cave',
    },
    downfall: 0.0,
    effects: {
      additions_sound: {
        sound: 'minecraft:ambient.warped_forest.additions',
        tick_chance: 0.0111,
      },
      ambient_sound: 'minecraft:ambient.warped_forest.loop',
      fog_color: 1705242,
      mood_sound: {
        block_search_extent: 8,
        offset: 2.0,
        sound: 'minecraft:ambient.warped_forest.mood',
        tick_delay: 6000,
      },
      music: {
        max_delay: 24000,
        min_delay: 12000,
        replace_current_music: false,
        sound: 'minecraft:music.nether.warped_forest',
      },
      sky_color: 7254527,
      water_color: 4159204,
      water_fog_color: 329011,
    },
    features: [
      [],
      [],
      [
        'netherex:huge_elder_mushrooms',
      ],
      [],
      [],
      [],
      [],
      [
        'netherex:glowstone_extra',
        'netherex:glowstone',
        'netherex:ore_gravel',
        'netherex:ore_blackstone',
        'netherex:ore_ancient_debris_small',
        'netherex:ore_ancient_debris_large',
        'netherex:ore_boomstone',
        'netherex:ore_lively_gold',
        'netherex:ore_lively_quartz',
      ],
    ],
    has_precipitation: false,
    spawn_costs: {
      'minecraft:enderman': {
        charge: 0.7,
        energy_budget: 0.15,
      },
      'minecraft:strider': {
        charge: 0.7,
        energy_budget: 0.15,
      },
      'netherex:mogus': {
        charge: 0.4,
        energy_budget: 0.25,
      },
    },
    spawners: {
      ambient: [
        {
          type: 'netherex:mogus',
          maxCount: 1,
          minCount: 1,
          weight: 30,
        },
      ],
      axolotls: [],
      creature: [
        {
          type: 'minecraft:strider',
          maxCount: 2,
          minCount: 1,
          weight: 5,
        },
      ],
      misc: [],
      monster: [
        {
          type: 'minecraft:enderman',
          maxCount: 4,
          minCount: 4,
          weight: 1,
        },
      ],
      underground_water_creature: [],
      water_ambient: [],
      water_creature: [],
    },
    temperature: 2.0,
  });

  newDataFullPath(event, 'immersiveengineering:worldgen/placed_feature/silver', dummyPlacedFeature());
  newDataFullPath(event, 'immersiveengineering:worldgen/placed_feature/uranium', dummyPlacedFeature());
  newDataFullPath(event, 'immersiveengineering:worldgen/placed_feature/lead', dummyPlacedFeature());
  newDataFullPath(event, 'immersiveengineering:worldgen/placed_feature/bauxite', dummyPlacedFeature());
  newDataFullPath(event, 'immersiveengineering:worldgen/placed_feature/deep_nickel', dummyPlacedFeature());
  newDataFullPath(event, 'immersiveengineering:worldgen/placed_feature/nickel', dummyPlacedFeature());
  newDataFullPath(event, 'mekanism:worldgen/placed_feature/ore_uranium_buried', dummyPlacedFeature());
  newDataFullPath(event, 'mekanism:worldgen/placed_feature/ore_uranium_buried_retrogen', dummyPlacedFeature());
  newDataFullPath(event, 'mekanism:worldgen/placed_feature/ore_uranium_small', dummyPlacedFeature());
  newDataFullPath(event, 'mekanism:worldgen/placed_feature/ore_uranium_small_retrogen', dummyPlacedFeature());
  newDataFullPath(event, 'mekanism:worldgen/placed_feature/ore_lead_normal', dummyPlacedFeature());
  newDataFullPath(event, 'mekanism:worldgen/placed_feature/ore_lead_normal_retrogen', dummyPlacedFeature());












  // Minestuck data =====================================================================================================================================================

  newDataFullPath(event, 'minestuck:tags/worldgen/biome/veil', newTag(false, ['minestuck:veil'])); // used by veil ore exc


  //replaces bucket lands with frog lands
  newDataFullPath(event, 'minestuck:minestuck/title_land_types', {
    "blood": [{ "value": "minestuck:pulse" }],
    "breath": [{ "value": "minestuck:wind" }],
    "doom": [{ "value": "minestuck:thunder" }],
    "heart": [{ "value": "minestuck:cake" }],
    "hope": [{ "value": "minestuck:towers" }],
    "life": [{ "value": "minestuck:rabbits" }],
    "light": [{ "value": "minestuck:light" }],
    "mind": [{ "value": "minestuck:thought" }],
    "rage": [{ "value": "#minestuck:monsters" }],
    "space": [{ "value": "minestuck:frogs" }],
    "time": [{ "value": "minestuck:clockwork" }],
    "void": [{ "value": "minestuck:silence" }]
  });
  //rain lands added to terrain_land_types in actual data. newDataFullPath did not accept json array



  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/end', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
      landFeature('surface_structures', 'enderscape:magnia_tower', ['normal', 'rough']),
      landFeature('surface_structures', 'enderscape:chorus_sprouts', ['normal', 'rough']),
      landFeature('surface_structures', 'enderscape:upward_tall_corrupt_growth', ['rough']),
      landFeature('surface_structures', 'enderscape:veiled_trees', ['rough']),
      landFeature('underground_structures', 'enderscape:kurodite', ['normal', 'rough', 'ocean']),
      landFeature('underground_structures', 'enderscape:veradite', ['normal', 'rough', 'ocean']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/flora', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
      landFeature('vegetal_decoration', {
        feature: 'twilightforest:thorns',
        placement: [
          {
            type: 'minecraft:rarity_filter',
            chance: 10,
          },
          {
            type: 'minecraft:in_square',
          },
          {
            type: 'minecraft:heightmap',
            heightmap: 'OCEAN_FLOOR',
          },
        ],
      }, ['normal', 'rough']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/forest', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
      landFeature('vegetal_decoration', 'nomansland:patch_fiddlehead', ['normal', 'rough']),
      landFeature('vegetal_decoration', 'nomansland:towering_willow_moss_checked', ['rough']),
      landFeature('vegetal_decoration', 'twilightforest:wood_roots', ['normal', 'rough']),
    ],
    [], [],
    [
      landStructureSet(structureSet(
        [structureEntry('twilightforest:hollow_tree', 1), structureEntry('twilightforest:fallen_trunk', 1)], 12, 7, 34481210,
      ), ['rough']),
    ],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/frost', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
      landFeature('underground_structures', 'nomansland:patch_icicles', ['rough']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/fungi', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
      landFeature('vegetal_decoration', 'nomansland:patch_mycelium_growths', ['rough']),
      landFeature('vegetal_decoration', 'enderscape:large_celestial_chanterelles', ['rough']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/heat', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/rain', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/rainbow', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/rock', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
      landFeature('underground_structures', 'create:striated_ores_overworld', ['normal', 'rough', 'ocean']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/sand', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/sandstone', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/shade', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/terrain/wood', landExtension(
    [
      landFeature('surface_structures', 'minestuck:trapped_puzzle', ['normal', 'rough']),
    ],
    [], [], [],
  ));

  newDataFullPath(event, 'minestuck:minestuck/land_type_extension/title/frogs', landExtension(
    [
      landFeature('vegetal_decoration', 'hexerei:flowering_lilypad_placed', ['ocean']),
      landFeature('vegetal_decoration', 'nomansland:patch_duckweed_sparse', ['ocean']),
    ],
    [], [], [],
  ));




  // increases the min y to accomodate ancient factory gen
  newDataFullPath(event, 'minestuck:dimension_type/veil', {
    fixed_time: 6000,
    has_skylight: false,
    has_ceiling: false,
    ultrawarm: false,
    natural: false,
    coordinate_scale: 1,
    piglin_safe: false,
    bed_works: true,
    respawn_anchor_works: false,
    has_raids: false,
    min_y: -64,
    height: 208,
    logical_height: 208,
    infiniburn: '#minecraft:infiniburn_overworld',
    effects: 'minestuck:veil_effects',
    ambient_light: 2,
    monster_spawn_light_level: {
      type: 'uniform',
      min_inclusive: 0,
      max_inclusive: 7,
    },
    monster_spawn_block_light_limit: 0,
  });
  newDataFullPath(event, 'minestuck:worldgen/noise_settings/veil', {
    sea_level: -64,
    disable_mob_generation: false,
    default_block: {
      Name: 'minestuck:meteoric_stone',
    },
    default_fluid: {
      Properties: {
        level: '0',
      },
      Name: 'minecraft:water',
    },
    noise: {
      size_vertical: 2,
      size_horizontal: 1,
      min_y: -64,
      height: 176,
    },
    noise_router: {
      barrier: 'zero',
      fluid_level_floodedness: 'zero',
      fluid_level_spread: 'zero',
      lava: 'zero',
      temperature: 'zero',
      vegetation: 'zero',
      continents: 'zero',
      erosion: 'zero',
      depth: 'minestuck:veil/depth',
      ridges: 'minestuck:veil/ridges',
      initial_density_without_jaggedness: 'minestuck:veil/initial_density',
      final_density: 'minestuck:veil/final_density',
      vein_toggle: 'zero',
      vein_ridged: 'zero',
      vein_gap: 'zero',
    },
    surface_rule: {
      type: 'sequence',
      sequence: [
        {
          type: 'condition',
          if_true: {
            type: 'vertical_gradient',
            random_name: 'bedrock_floor',
            true_at_and_below: {
              above_bottom: 0,
            },
            false_at_and_above: {
              above_bottom: 5,
            },
          },
          then_run: {
            type: 'block',
            result_state: {
              Name: 'minecraft:bedrock',
            },
          },
        },
      ],
    },
    spawn_target: [],
    aquifers_enabled: false,
    ore_veins_enabled: false,
    legacy_random_source: true,
  });
  // adding caves
  newDataFullPath(event, 'minestuck:worldgen/biome/veil', {
    carvers: {
      air: [
        {
          type: 'minecraft:cave',
          config: {
            floor_level: {
              type: 'minecraft:uniform',
              max_exclusive: -0.4,
              min_inclusive: -1,
            },
            horizontal_radius_multiplier: {
              type: 'minecraft:uniform',
              max_exclusive: 1.55,
              min_inclusive: 0.7,
            },
            lava_level: {
              above_bottom: 8,
            },
            probability: 0.07,
            replaceable: 'minestuck:meteoric_stone',
            vertical_radius_multiplier: {
              type: 'minecraft:uniform',
              max_exclusive: 1.45,
              min_inclusive: 0.8,
            },
            y: {
              type: 'minecraft:uniform',
              max_inclusive: {
                absolute: 64,
              },
              min_inclusive: {
                above_bottom: 8,
              },
            },
            yScale: {
              type: 'minecraft:uniform',
              max_exclusive: 0.9,
              min_inclusive: 0.1,
            },
          },
        },
      ],
    },
    downfall: 0.5,
    effects: {
      fog_color: 0,
      sky_color: 0,
      water_color: 4159204,
      water_fog_color: 329011,
    },
    features: [
      [],
      [],
      [
        'minestuck:veil_crater',
      ],
    ],
    has_precipitation: false,
    spawn_costs: {},
    spawners: {
      ambient: [],
      axolotls: [],
      creature: [],
      'minestuck:consort': [],
      'minestuck:underling': [],
      misc: [],
      monster: [
        {
          type: 'cataclysm:the_watcher',
          maxCount: 1,
          minCount: 1,
          weight: 5,
        },
      ],
      underground_water_creature: [],
      water_ambient: [],
      water_creature: [],
    },
    temperature: 0.5,
  });

  // increases the height to accomodate acropolis gen and decreases ambient light
  newDataFullPath(event, 'minestuck:dimension_type/prospit', {
    fixed_time: 6000,
    has_skylight: false,
    has_ceiling: false,
    ultrawarm: false,
    natural: false,
    coordinate_scale: 1,
    piglin_safe: false,
    bed_works: true,
    respawn_anchor_works: false,
    has_raids: false,
    min_y: -64,
    height: 368,
    logical_height: 368,
    infiniburn: '#minecraft:infiniburn_overworld',
    effects: 'minestuck:prospit_effects',
    ambient_light: 5,
    monster_spawn_light_level: {
      type: 'uniform',
      min_inclusive: 0,
      max_inclusive: 7,
    },
    monster_spawn_block_light_limit: 0,
  });
  // edited to adjust for structures
  newDataFullPath(event, 'minestuck:worldgen/noise_settings/prospit', {
    "aquifers_enabled": false,
    "default_block": {
      "Name": "minestuck:prospit_core"
    },
    "default_fluid": {
      "Name": "minecraft:water",
      "Properties": {
        "level": "0"
      }
    },
    "disable_mob_generation": true,
    "legacy_random_source": true,
    "noise": {
      "height": 64,
      "min_y": -64,
      "size_horizontal": 1,
      "size_vertical": 2
    },
    "noise_router": {
      "barrier": 0,
      "continents": 0,
      "depth": 0,
      "erosion": 0,
      "final_density": {
        "type": "minecraft:squeeze",
        "argument": {
          "type": "minecraft:mul",
          "argument1": 0.64,
          "argument2": {
            "type": "minecraft:interpolated",
            "argument": {
              "type": "minecraft:blend_density",
              "argument": {
                "type": "minecraft:add",
                "argument1": 2,
                "argument2": {
                  "type": "minecraft:mul",
                  "argument1": {
                    "type": "minecraft:y_clamped_gradient",
                    "from_value": 0,
                    "from_y": -48,
                    "to_value": 1,
                    "to_y": -16
                  },
                  "argument2": {
                    "type": "minecraft:add",
                    "argument1": -2,
                    "argument2": {
                      "type": "minecraft:add",
                      "argument1": 1,
                      "argument2": {
                        "type": "minecraft:mul",
                        "argument1": {
                          "type": "minecraft:y_clamped_gradient",
                          "from_value": 1,
                          "from_y": -16,
                          "to_value": 0,
                          "to_y": 0
                        },
                        "argument2": {
                          "type": "minecraft:add",
                          "argument1": -2,
                          "argument2": "minecraft:overworld/base_3d_noise"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "fluid_level_floodedness": 0,
      "fluid_level_spread": 0,
      "initial_density_without_jaggedness": 0,
      "lava": 0,
      "ridges": 0,
      "temperature": 0,
      "vegetation": 0,
      "vein_gap": 0,
      "vein_ridged": 0,
      "vein_toggle": 0
    },
    "ore_veins_enabled": false,
    "sea_level": -64,
    "spawn_target": [],
    "surface_rule": {
      "type": "minecraft:sequence",
      "sequence": [
        {
          "type": "minecraft:condition",
          "if_true": {
            "type": "minecraft:vertical_gradient",
            "false_at_and_above": {
              "above_bottom": 5
            },
            "random_name": "minecraft:bedrock_floor",
            "true_at_and_below": {
              "above_bottom": 0
            }
          },
          "then_run": {
            "type": "minecraft:block",
            "result_state": {
              "Name": "minecraft:bedrock"
            }
          }
        },
        {
          "type": "minecraft:condition",
          "if_true": {
            "type": "minecraft:y_above",
            "anchor": {
              "above_bottom": 92
            },
            "surface_depth_multiplier": 0,
            "add_stone_depth": false
          },
          "then_run": {
            "type": "minecraft:block",
            "result_state": {
              "Name": "minestuck:prospit_ferrostrata"
            }
          }
        },
        {
          "type": "minecraft:condition",
          "if_true": {
            "type": "minecraft:y_above",
            "anchor": {
              "above_bottom": 44
            },
            "surface_depth_multiplier": 0,
            "add_stone_depth": false
          },
          "then_run": {
            "type": "minecraft:block",
            "result_state": {
              "Name": "minestuck:prospit_rough_ferrostrata"
            }
          }
        }
      ]
    }
  });
  // adds more carapacians to make it a full battle
  newDataFullPath(event, 'minestuck:worldgen/biome/prospit', {
    carvers: {},
    downfall: 0.5,
    effects: {
      fog_color: 0,
      foliage_color: 15450368,
      grass_color: 16757504,
      sky_color: 0,
      water_color: 65488,
      water_fog_color: 49848,
    },
    features: [],
    has_precipitation: false,
    spawn_costs: {},
    spawners: {
      ambient: [],
      axolotls: [],
      creature: [],
      'minestuck:consort': [],
      'minestuck:underling': [],
      misc: [],
      monster:
        [
          {
            type: 'minestuck:dersite_pawn',
            maxCount: 10,
            minCount: 1,
            weight: 2,
          },
          {
            type: 'minestuck:dersite_bishop',
            maxCount: 1,
            minCount: 1,
            weight: 1,
          },
          {
            type: 'minestuck:dersite_rook',
            maxCount: 1,
            minCount: 1,
            weight: 1,
          },
          {
            type: 'minestuck:prospitian_pawn',
            maxCount: 10,
            minCount: 1,
            weight: 3,
          },
          {
            type: 'minestuck:prospitian_bishop',
            maxCount: 1,
            minCount: 1,
            weight: 1,
          },
          {
            type: 'minestuck:prospitian_rook',
            maxCount: 1,
            minCount: 1,
            weight: 1,
          },
        ],
      underground_water_creature: [],
      water_ambient: [],
      water_creature: [],
    },
    temperature: 0.5,
  });




















  // Minestuck Dungeons mod ===============================================================================================================

  // increase spacing
  newDataFullPath(event, 'minestuckdungeons:worldgen/structure_set/dungeons', {
    structures: [
      {
        "structure": "minestuckdungeons:lich_dungeon",
        "weight": 2
      },
      {
        "structure": "minestuckdungeons:underling_tower",
        "weight": 3
      },
      {
        "structure": "minestuckdungeons:impoutpost",
        "weight": 4
      },
      {
        "structure": "minestuckdungeons:sewer",
        "weight": 1
      },
      {
        "structure": "minestuckdungeons:medium_trial",
        "weight": 2
      },
      {
        "structure": "minestuckdungeons:observatory",
        "weight": 1
      }
    ],
    placement: {
      type: 'minecraft:random_spread',
      spacing: 35,
      separation: 9,
      salt: 1585232932,
    },
  });

  // increase spacing
  newDataFullPath(event, 'minestuckdungeons:worldgen/structure_set/miscstatues', {
    structures: [
      {
        structure: 'minestuckdungeons:frog_statue_1',
        weight: 1,
      },
      {
        structure: 'minestuckdungeons:player_statue_1',
        weight: 1,
      },
    ],
    placement: {
      type: 'minecraft:random_spread',
      spacing: 25,
      separation: 5,
      salt: 193003991,
    },
  });

  // increase spacing
  newDataFullPath(event, 'minestuckdungeons:worldgen/structure_set/floating_island', {
    structures: [
      {
        structure: 'minestuckdungeons:floating_island',
        weight: 1,
      },
    ],
    placement: {
      type: 'minecraft:random_spread',
      spacing: 65,
      separation: 8,
      salt: 1126227339,
    },
  });












  //Vault and trapped puzzles ===============================================================================================================
  newDataFullPath(event, 'minestuck:worldgen/configured_feature/trapped_puzzle_pushable', {
    type: 'minestuck:simple_template',
    config: {
      height_placement: {
        heightmap: 'WORLD_SURFACE_WG',
        offset: {
          type: 'minecraft:uniform',
          max_inclusive: -9,
          min_inclusive: -9,
        },
        query_type: 'min',
      },
      land_block_replacement: true,
      template: 'minestuck:trapped_puzzle_pushable',
    },
  });
  newDataFullPath(event, 'minestuck:worldgen/configured_feature/trapped_puzzle_rotate', {
    type: 'minestuck:simple_template',
    config: {
      height_placement: {
        heightmap: 'WORLD_SURFACE_WG',
        offset: {
          type: 'minecraft:uniform',
          max_inclusive: -9,
          min_inclusive: -9,
        },
        query_type: 'min',
      },
      land_block_replacement: true,
      template: 'minestuck:trapped_puzzle_rotate',
    },
  });
  newDataFullPath(event, 'minestuck:worldgen/configured_feature/trapped_puzzle', {
    type: 'minecraft:random_selector',
    config: {
      default: {
        feature: 'minestuck:trapped_puzzle_pushable',
        placement: [],
      },
      features: [
        {
          chance: 0.5,
          feature: {
            feature: 'minestuck:trapped_puzzle_rotate',
            placement: [],
          },
        },
      ],
    },
  });
  newDataFullPath(event, 'minestuck:worldgen/placed_feature/trapped_puzzle', {
    feature: 'minestuck:trapped_puzzle',
    placement: [
      {
        type: 'minecraft:rarity_filter',
        chance: 1024,
      },
      {
        type: 'minecraft:in_square',
      },
      {
        type: 'minecraft:heightmap',
        heightmap: 'OCEAN_FLOOR',
      },
      {
        type: 'minecraft:random_offset',
        xz_spread: 3,
        y_spread: 0,
      },
      {
        type: 'minecraft:biome',
      },
    ],
  });

  newDataFullPath(event, 'minestuck:worldgen/structure/skaian_vault', {
    type: 'minecraft:jigsaw',
    start_pool: 'minestuck:skaian_vault',
    size: 6,
    biomes: 'minestuck:veil',
    terrain_adaptation: 'none',
    spawn_overrides: {},
    max_distance_from_center: 106,
    step: 'underground_structures',
    start_height: {
      absolute: -3,
    },
    project_start_to_heightmap: 'WORLD_SURFACE_WG',
    use_expansion_hack: false,
  });
  newDataFullPath(event, 'minestuck:worldgen/structure_set/skaian_vault', {
    structures: [
      {
        structure: 'minestuck:skaian_vault',
        weight: 1,
      },
    ],
    placement: {
      type: 'minecraft:random_spread',
      salt: 319514301,
      spacing: 75,
      separation: 65,
    },
  }); // same placement as ancient factory
  newDataFullPath(event, 'minestuck:worldgen/template_pool/skaian_vault', {
    fallback: 'minecraft:empty',
    elements: [
      {
        weight: 1,
        element: {
          element_type: 'minecraft:single_pool_element',
          projection: 'rigid',
          location: 'minestuck:skaian_vault',
          processors: 'minecraft:empty',
        },
      },
    ],
  });













  // Veil laboratory ========================================================================================================================================

  newDataFullPath(event, 'minestuck:tags/worldgen/biome/has_structure/laboratory', newTag(false, ['minestuck:veil']));

  newDataFullPath(event, 'minestuck:loot_table/chests/laboratory/supply', {
    type: 'minecraft:chest',
    pools: [
      {
        bonus_rolls: 0.0,
        entries: [
          {
            type: 'minecraft:loot_table',
            value: 'minestuck:chests/supply_item',
          },
        ],
        name: 'supplies',
        rolls: {
          type: 'minecraft:uniform',
          max: 3.0,
          min: 1.0,
        },
      },
      {
        bonus_rolls: 0.0,
        entries: [
          {
            type: 'minecraft:loot_table',
            value: 'minestuck:chests/misc_item',
          },
        ],
        name: 'misc',
        rolls: {
          type: 'minecraft:uniform',
          max: 2.0,
          min: 1.0,
        },
      },
    ],
    random_sequence: 'minestuck:chests/laboratory/supply',
  });

  newDataFullPath(event, 'minestuck:worldgen/structure/laboratory', {
    type: 'minecraft:jigsaw',
    biomes: '#minestuck:has_structure/laboratory',
    liquid_settings: 'ignore_waterlogging',
    terrain_adaptation: 'beard_box',
    max_distance_from_center: 128,
    project_start_to_heightmap: 'WORLD_SURFACE_WG',
    size: 20,
    spawn_overrides: {},
    start_height: {
      absolute: 0,
    },
    start_pool: 'minestuck:laboratory/entry',
    step: 'surface_structures',
    use_expansion_hack: false,
  });

  newDataFullPath(event, 'minestuck:worldgen/template_pool/laboratory/entry', {
    fallback: 'minecraft:empty',
    elements: [
      {
        weight: 1,
        element: {
          location: 'minestuck:laboratory/entry_upper',
          processors: 'minestuck:structure_block_registry',
          projection: 'rigid',
          element_type: 'minecraft:single_pool_element',
        },
      },
    ],
  });

  newDataFullPath(event, 'minestuck:worldgen/template_pool/laboratory/entry_lower', {
    fallback: 'minecraft:empty',
    elements: [
      {
        weight: 1,
        element: {
          location: 'minestuck:laboratory/entry_lower',
          processors: 'minestuck:structure_block_registry',
          projection: 'rigid',
          element_type: 'minecraft:single_pool_element',
        },
      },
    ],
  });

  newDataFullPath(event, 'minestuck:worldgen/template_pool/laboratory/side_room', {
    fallback: 'minecraft:empty',
    elements: [
      {
        weight: 2,
        element: {
          location: 'minestuck:laboratory/connector_hall',
          processors: 'minestuck:structure_block_registry',
          projection: 'rigid',
          element_type: 'minecraft:single_pool_element',
        },
      },
      {
        weight: 1,
        element: {
          location: 'minestuck:laboratory/connector_double',
          processors: 'minestuck:structure_block_registry',
          projection: 'rigid',
          element_type: 'minecraft:single_pool_element',
        },
      },
      {
        weight: 2,
        element: {
          location: 'minestuck:laboratory/room_computer',
          processors: 'minestuck:structure_block_registry',
          projection: 'rigid',
          element_type: 'minecraft:single_pool_element',
        },
      },
      {
        weight: 2,
        element: {
          location: 'minestuck:laboratory/room_loot',
          processors: 'minestuck:structure_block_registry',
          projection: 'rigid',
          element_type: 'minecraft:single_pool_element',
        },
      },
      {
        weight: 2,
        element: {
          location: 'minestuck:laboratory/room_empty',
          processors: 'minestuck:structure_block_registry',
          projection: 'rigid',
          element_type: 'minecraft:single_pool_element',
        },
      },
    ],
  });

  newDataFullPath(event, 'minestuck:worldgen/structure_set/laboratory', {
    placement: {
      type: 'minecraft:random_spread',
      salt: 24635723,
      separation: 12,
      spacing: 36,
      spread_type: 'triangular',
    },
    structures: [
      {
        structure: 'minestuck:laboratory',
        weight: 1,
      },
    ],
  });
















  //Dream Tower ===================================================================================================

  newDataFullPath(event, 'minestuck:tags/worldgen/biome/has_structure/prospit_dream_tower', newTag(false, ['minestuck:prospit']));

  //goes above vanilla max_distance_from_center max 128
  newDataFullPath(event, 'minestuck:worldgen/structure/prospit_dream_tower', {
    type: 'minecraft:jigsaw',
    biomes: '#minestuck:has_structure/prospit_dream_tower',
    terrain_adaptation: 'none',
    max_distance_from_center: 148,
    //project_start_to_heightmap: 'WORLD_SURFACE_WG',
    size: 10,
    spawn_overrides: {},
    start_height: {
      absolute: 1,
    },
    start_pool: 'minestuck:prospit/dream_tower/base',
    step: 'surface_structures',
    use_expansion_hack: false,
  });

  newDataFullPath(event, 'minestuck:worldgen/template_pool/prospit/dream_tower/base', {
    fallback: 'minecraft:empty',
    elements: [
      {
        weight: 1,
        element: {
          location: 'minestuck:prospit/dream_tower/base',
          processors: 'minecraft:empty',
          projection: 'rigid',
          element_type: 'minecraft:single_pool_element',
        },
      },
    ],
  });

  newDataFullPath(event, 'minestuck:worldgen/template_pool/prospit/dream_tower/middle', {
    fallback: 'minecraft:empty',
    elements: [
      {
        weight: 1,
        element: {
          location: 'minestuck:prospit/dream_tower/middle',
          processors: 'minecraft:empty',
          projection: 'rigid',
          element_type: 'minecraft:single_pool_element',
        },
      },
    ],
  });

  newDataFullPath(event, 'minestuck:worldgen/template_pool/prospit/dream_tower/upper', {
    fallback: 'minecraft:empty',
    elements: [
      {
        weight: 1,
        element: {
          location: 'minestuck:prospit/dream_tower/upper',
          processors: 'minecraft:empty',
          projection: 'rigid',
          element_type: 'minecraft:single_pool_element',
        },
      }
    ],
  });

  // Needs to be placed manually for now
  /*newDataFullPath(event, 'minestuck:worldgen/structure_set/prospit_dream_tower', {
    "placement": {
      "type": "minecraft:concentric_rings",
      "distance": 0,
      "spread": 0,
      "count": 1,
      "preferred_biomes": "minestuck:prospit",
      "salt": 35854645,
      "frequency": 1
    },
    structures: [
      {
        structure: 'minestuck:prospit_dream_tower',
        weight: 1,
      },
    ],
  });*/









  // WFC Prospit ====================================================================================================================================================
  //Takes the existing wfc prospit datapack and adds/tweaks content

  //edited to be on prospit proper
  newDataFullPath(event, 'minestuck:worldgen/structure/prospit_wfc_demo', {
    type: 'minestuck:prospit_wfc_demo',
    biomes: 'minestuck:prospit',
    spawn_overrides: {},
    step: 'surface_structures',
  });
  newDataFullPath(event, 'minestuck:worldgen/structure_set/prospit_wfc_demo', {
    placement: {
      type: 'minestuck:fixed',
    },
    structures: [
      {
        structure: 'minestuck:prospit_wfc_demo',
        weight: 1,
      },
    ],
  });


  newDataFullPath(event, 'minestuck:minestuck/wfc_connection_set/prospit', [
    ["minestuck:air", "minestuck:air"],
    ["minestuck:solid", "minestuck:solid"],
    ["minestuck:roof_bottom", "minestuck:solid"],
    ["minestuck:support_top", "minestuck:solid"],
    ["minestuck:air", "minestuck:wall"],
    ["minestuck:wall", "minestuck:wall"],
    ["minestuck:wall_attachment", "minestuck:wall"],
    ["minestuck:roof_side", "minestuck:wall"],
    ["minestuck:roof_side", "minestuck:air"],
    ["minestuck:bridge", "minestuck:bridge"],
    ["minestuck:bridge", "minestuck:wall"],
    ["minestuck:ledge/front", "minestuck:air"],
    ["minestuck:ledge/front", "minestuck:bridge"],
    ["minestuck:ledge/left", "minestuck:ledge/right"],
    ["minestuck:ledge/back", "minestuck:ledge/back"],
    ["minestuck:ledge/left", "minestuck:wall"],
    ["minestuck:ledge/right", "minestuck:wall"],
    ["minestuck:ledge/back", "minestuck:wall"],
    ["minestuck:ledge/back", "minestuck:roof_side"],
    ["minestuck:corridor", "minestuck:corridor"],
    ["minestuck:corridor", "minestuck:bridge"],
    ["minestuck:corridor", "minestuck:ledge/left"],
    ["minestuck:corridor", "minestuck:ledge/right"],
    ["minestuck:corridor", "minestuck:ledge/back"],
    ["minestuck:window", "minestuck:air"],
    ["minestuck:stairs_end", "minestuck:stairs_end"],
    ["minestuck:stairs_end", "minestuck:corridor"],
    ["minestuck:stairs_end", "minestuck:ledge/back"],
    ["minestuck:stairs_end", "minestuck:ledge/left"],
    ["minestuck:stairs_end", "minestuck:ledge/right"],
    ["minestuck:stairs_side", "minestuck:stairs_side"],
    ["minestuck:stairs_side", "minestuck:air"],
    ["minestuck:stairs_side", "minestuck:wall"],
    ["minestuck:stairs_side", "minestuck:roof_side"],
    ["minestuck:stairs_side", "minestuck:ledge/back"],
    ["minestuck:stairs_side", "minestuck:ledge/left"],
    ["minestuck:stairs_side", "minestuck:ledge/right"],

    ["minestuck:top_border", "minestuck:air"],
    ["minestuck:bottom_border", "minestuck:solid"]
  ]);

  newDataFullPath(event, 'minestuck:minestuck/wfc_palette/prospit/normal', {
    "connection_set": "minestuck:prospit",
    "entries": [
      { "prototype": "minestuck:prospit/empty", "weight": 30 },
      { "prototype": "minestuck:prospit/solid", "weight": 10 },
      { "prototype": "minestuck:prospit/support", "weight": 5 },
      { "prototype": "minestuck:prospit/pyramid_roof", "weight": 2 },
      { "prototype": "minestuck:prospit/spike", "weight": 1 },
      { "prototype": "minestuck:prospit/bridge", "weight": 3 },
      { "prototype": "minestuck:prospit/ledge", "weight": 4 },
      { "prototype": "minestuck:prospit/ledge_corner", "weight": 4 },
      { "prototype": "minestuck:prospit/corridor", "weight": 8 },
      { "prototype": "minestuck:prospit/corridor_window", "weight": 3 },
      { "prototype": "minestuck:prospit/turn_corridor", "weight": 3 },
      { "prototype": "minestuck:prospit/t_corridor", "weight": 4 },
      { "prototype": "minestuck:prospit/t_corridor_window", "weight": 5 },
      {
        "prototype": { "type": "template", "template": "minestuck:prospit_wfc_demo/room" },
        "weight": 2
      },
      { "prototype": "minestuck:prospit/interior_stairs", "weight": 5 },
      { "prototype": "minestuck:prospit/outdoor_stairs", "weight": 3 },
      { "prototype": "minestuck:prospit/4_way_corridor", "weight": 2 },
      { "prototype": "minestuck:prospit/3_way_corridor_door", "weight": 1 },
      { "prototype": { "type": "template", "template": "minestuck:prospit/room/living_space_a" }, "weight": 1 },
      { "prototype": { "type": "template", "template": "minestuck:prospit/room/living_space_b" }, "weight": 1 },
      { "prototype": { "type": "template", "template": "minestuck:prospit/room/living_space_c" }, "weight": 1 },
      { "prototype": { "type": "template", "template": "minestuck:prospit/room/office" }, "weight": 1 }
    ]
  });

  newDataFullPath(event, 'minestuck:minestuck/wfc_palette/prospit/border', {
    "connection_set": "minestuck:prospit",
    "entries": [
      { "prototype": "minestuck:prospit/empty", "weight": 8 },
      { "prototype": "minestuck:prospit/solid", "weight": 12 },
      { "prototype": "minestuck:prospit/support", "weight": 2 },
      { "prototype": "minestuck:prospit/pyramid_roof", "weight": 3 },
      { "prototype": "minestuck:prospit/spike", "weight": 1 },
      { "prototype": "minestuck:prospit/corridor", "weight": 3 },
      { "prototype": "minestuck:prospit/t_corridor", "weight": 5 },
      { "prototype": "minestuck:prospit/interior_stairs", "weight": 4 }
    ]
  });

  newDataFullPath(event, 'minestuck:minestuck/wfc_palette/prospit/open_zone', {
    "connection_set": "minestuck:prospit",
    "entries": [
      { "prototype": "minestuck:prospit/empty", "weight": 70 },
      { "prototype": "minestuck:prospit/solid", "weight": 1 },
      { "prototype": "minestuck:prospit/support", "weight": 8 },
      { "prototype": "minestuck:prospit/pyramid_roof", "weight": 2 },
      { "prototype": "minestuck:prospit/spike", "weight": 1 },
      { "prototype": "minestuck:prospit/bridge", "weight": 8 },
      { "prototype": "minestuck:prospit/ledge", "weight": 6 },
      { "prototype": "minestuck:prospit/ledge_corner", "weight": 3 },
      { "prototype": "minestuck:prospit/corridor", "weight": 2 },
      { "prototype": "minestuck:prospit/corridor_window", "weight": 5 },
      { "prototype": "minestuck:prospit/turn_corridor", "weight": 3 },
      { "prototype": "minestuck:prospit/t_corridor", "weight": 1 },
      { "prototype": "minestuck:prospit/t_corridor_window", "weight": 4 },
      { "prototype": "minestuck:prospit/interior_stairs", "weight": 3 },
      { "prototype": "minestuck:prospit/outdoor_stairs", "weight": 2 },
      { "prototype": { "type": "template", "template": "minestuck:prospit_wfc_demo/lilies", "symmetry": "axis_symmetric" }, "weight": 3 },
      { "prototype": { "type": "template", "template": "minestuck:prospit/open/empty", "symmetry": "axis_symmetric" }, "weight": 16 },
      { "prototype": { "type": "template", "template": "minestuck:prospit/open/street_decor_a", "symmetry": "axis_symmetric" }, "weight": 5 },
      { "prototype": { "type": "template", "template": "minestuck:prospit/open/street_decor_b", "symmetry": "axis_symmetric" }, "weight": 5 },
      { "prototype": { "type": "template", "template": "minestuck:prospit/courtyard/spiral", "symmetry": "axis_symmetric" }, "weight": 3 },
      { "prototype": { "type": "template", "template": "minestuck:prospit/courtyard/town_square", "symmetry": "axis_symmetric" }, "weight": 4 }
    ]
  });


  //edits of existing pieces
  newDataFullPath(event, 'minestuck:minestuck/wfc_entry_prototype/prospit/corridor', wfcEntry('minestuck:prospit/corridor/straight', 'axis_symmetric'));
  newDataFullPath(event, 'minestuck:minestuck/wfc_entry_prototype/prospit/t_corridor', wfcEntry('minestuck:prospit/corridor/3_way', 'rotatable'));
  newDataFullPath(event, 'minestuck:minestuck/wfc_entry_prototype/prospit/spike', wfcEntry('minestuck:prospit/roof/spike', 'symmetric'));



  //new pieces
  newDataFullPath(event, 'minestuck:minestuck/wfc_entry_prototype/prospit/3_way_corridor_door', wfcEntry('minestuck:prospit/corridor/3_way_door', 'rotatable'));
  newDataFullPath(event, 'minestuck:minestuck/wfc_entry_prototype/prospit/4_way_corridor', wfcEntry('minestuck:prospit/corridor/4_way', 'rotatable'));



  //Dialogue for private office, viable for main mod except where noted!
  newDialogue(event, 'carapacian/prospit/private_office/start',
    newNode(nodeDataMessages(
      messageCarapacian('They welcome you into their office, then pace around erratically.'),
      [
        resp('What do you do for work?', 'carapacian/prospit/private_office/avoid_question'),
        resp('Are you aware there is a full blown war happening outside', 'carapacian/prospit/private_office/oblivious'), //server specific
        resp('Goodbye')
      ],
    ))
  );
  newDialogue(event, 'carapacian/prospit/private_office/avoid_question',
    newNode(nodeDataMessages(
      messageCarapacian('They say they do... office... type... work. They look anxious.'),
      [
        resp('That sounds vague', 'carapacian/prospit/private_office/avoid_question_2'),
        resp('Lets talk about something else', 'carapacian/prospit/private_office/start')
      ],
    ))
  );
  newDialogue(event, 'carapacian/prospit/private_office/avoid_question_2',
    newNode(nodeDataMessages(
      messageCarapacian('They get real hushed, lean in, and admit that they have no idea what they are doing. They were put in front of this desk with no explanation and they have been too freaked out to ask what they actually are supposed to be handling.'),
      [
        resp('Lets talk about something else', 'carapacian/prospit/private_office/start')
      ],
    ))
  );

  //Server specific
  newDialogue(event, 'carapacian/prospit/private_office/oblivious',
    newNode(nodeDataMessages(
      messageCarapacian('They look relieved. THATS what is going on! They had no idea. They didnt go outside to check when they first heard commotion and then they thought they would be judged if they came out part way through.'),
      [
        resp('Lets talk about something else', 'carapacian/prospit/private_office/start')
      ],
    ))
  );












  // Bunkers =====================================================================================================================================================

  newDataFullPath(event, 'minestuck:advancement/minestuck/dungeon', {
    parent: 'minestuck:minestuck/return_node',
    criteria: {
      imp_dungeon: {
        conditions: {
          player: [
            {
              condition: 'minecraft:entity_properties',
              entity: 'this',
              predicate: {
                location: {
                  structures: [
                    'minestuck:imp_dungeon',
                    'minestuck:prospit_bunker',
                    'minestuck:derse_bunker',
                    'minestuck:imp_bunker',
                  ],
                },
              },
            },
          ],
        },
        trigger: 'minecraft:location',
      },
    },
    display: {
      description: {
        translate: 'advancements.minestuck.dungeon.description',
      },
      icon: {
        count: 1,
        id: 'minestuck:frost_bricks',
      },
      title: {
        translate: 'advancements.minestuck.dungeon.title',
      },
    },
    requirements: [
      [
        'imp_dungeon',
      ],
    ],
    sends_telemetry_event: true,
  });

  newDataFullPath(event, 'minestuck:loot_table/chests/medium_supply', {
    type: 'minecraft:chest',
    pools: [
      {
        bonus_rolls: 0.0,
        entries: [
          {
            type: 'minecraft:loot_table',
            value: 'minestuck:chests/supply_item',
          },
        ],
        name: 'supplies',
        rolls: {
          type: 'minecraft:uniform',
          max: 4.0,
          min: 2.0,
        },
      },
      {
        bonus_rolls: 0.0,
        entries: [
          {
            type: 'minecraft:loot_table',
            value: 'minestuck:chests/misc_item',
          },
        ],
        name: 'misc',
        rolls: {
          type: 'minecraft:uniform',
          max: 2.0,
          min: 1.0,
        },
      },
    ],
    random_sequence: 'minestuck:chests/medium_supply',
  });

  newDataFullPath(event, 'minestuck:tags/worldgen/biome/has_structure/derse_bunker', newTag(false, ['#minestuck:land/normal', '#minestuck:land/rough']));
  newDataFullPath(event, 'minestuck:tags/worldgen/biome/has_structure/imp_bunker', newTag(false, ['#minestuck:land/normal', '#minestuck:land/rough']));
  newDataFullPath(event, 'minestuck:tags/worldgen/biome/has_structure/prospit_bunker', newTag(false, ['#minestuck:land/normal', '#minestuck:land/rough']));

  newDataFullPath(event, 'minestuck:worldgen/structure/derse_bunker', {
    type: 'minecraft:jigsaw',
    biomes: '#minestuck:has_structure/derse_bunker',
    liquid_settings: 'ignore_waterlogging',
    max_distance_from_center: 128,
    project_start_to_heightmap: 'WORLD_SURFACE_WG',
    size: 20,
    spawn_overrides: {},
    start_height: {
      absolute: 0,
    },
    start_pool: 'minestuck:derse_bunker/entry',
    step: 'surface_structures',
    use_expansion_hack: false,
  });
  newDataFullPath(event, 'minestuck:worldgen/structure/imp_bunker', {
    type: 'minecraft:jigsaw',
    biomes: '#minestuck:has_structure/imp_bunker',
    liquid_settings: 'ignore_waterlogging',
    max_distance_from_center: 128,
    project_start_to_heightmap: 'WORLD_SURFACE_WG',
    size: 20,
    spawn_overrides: {},
    start_height: {
      absolute: 0,
    },
    start_pool: 'minestuck:imp_bunker/entry',
    step: 'surface_structures',
    use_expansion_hack: false,
  });
  newDataFullPath(event, 'minestuck:worldgen/structure/prospit_bunker', {
    type: 'minecraft:jigsaw',
    biomes: '#minestuck:has_structure/prospit_bunker',
    liquid_settings: 'ignore_waterlogging',
    max_distance_from_center: 128,
    project_start_to_heightmap: 'WORLD_SURFACE_WG',
    size: 20,
    spawn_overrides: {},
    start_height: {
      absolute: 0,
    },
    start_pool: 'minestuck:prospit_bunker/entry',
    step: 'surface_structures',
    use_expansion_hack: false,
  });

  newDataFullPath(event, 'minestuck:worldgen/structure_set/bunkers', {
    placement: {
      type: 'minecraft:random_spread',
      salt: 34527185,
      separation: 12,
      spacing: 36,
      spread_type: 'triangular',
      frequency: 0.75,
    },
    structures: [
      {
        structure: 'minestuck:prospit_bunker',
        weight: 1,
      },
      {
        structure: 'minestuck:derse_bunker',
        weight: 1,
      },
      {
        structure: 'minestuck:imp_bunker',
        weight: 3,
      },
    ],
  });

  // for simplicity, kept template pool in normal data folder

  console.log('Ending gen in dweb_gen.');
  // });
};
