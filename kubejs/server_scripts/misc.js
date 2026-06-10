// priority: 5







/*PlayerEvents.inventoryOpened((event) => {
  let { player } = event;
  let { level } = event;
  let { inventoryContainer } = event;
  let isEditModeMenu = inventoryContainer.getType().getId() !== 'minestuck:edit_mode' || inventoryContainer.getType().getId() !== 'minestuck:atheneum';
  console.log(`Creative: ${player.isCreative()}, Permissions: ${!player.hasPermissions(2)}, Not edit mode inventroy: ${!isEditModeMenu}`);
  if (player.isCreative() && !player.hasPermissions(2) && !isEditModeMenu) {
    console.log(`No`);
  }
  //event.player.data.minestuck;
  //let editData = MSExtraData.get(level).findEditData(editData => editData.getEditor() == editor);
  console.log(`Container: ${inventoryContainer.getType().getId()}\nRegistries: ${event.registries}\nData: ${player.data.values}`);
});*/







EntityEvents.spawned((event) => {
  function conversion(originType, replacementType) {
    const { entity } = event;
    if (entity.getType() === originType) {
      const level = event.getLevel();
      const replacement = level.createEntity(replacementType);
      replacement.setPosition(entity.getBlock());
      level.addFreshEntity(replacement);
      event.cancel();
    }
  };

  function bossConversion(originType, replacementTypeA, replacementTypeB) {
    const { entity } = event;

    if (entity.getType() === originType) {
      const level = event.getLevel();
      const pos = entity.getBlock();

      // expects there to be a twilight boss spawner to destroy
      level.removeBlock(pos.getUp(), false);
      level.removeBlock(pos, false);

      const replacementA = level.createEntity(replacementTypeA);
      replacementA.setPosition(pos);
      level.addFreshEntity(replacementA);

      const replacementB = level.createEntity(replacementTypeB);
      replacementB.setPosition(pos);
      level.addFreshEntity(replacementB);

      console.info('summoned bosses');
      event.cancel();
    }
  };

  // disable twilight animals due to incompat with no mans
  //conversion('twilightforest:boar', 'minecraft:pig');
  //conversion('twilightforest:raven', 'hexerei:crow');
  //conversion('twilightforest:bighorn_sheep', 'minecraft:sheep');

  //bossConversion('twilightforest:snow_queen', 'cataclysm:ignis', 'cataclysm:maledictus');
});











EntityJSEvents.biomeSpawns((event) => {
  // players shouldnt be able to get to the dimension under normal circumstances, but will prevent client crashes in creative mode hyjinks
  //event.removeSpawn('twilightforest:boar', ['#twilightforest:in_twilight_forest']);
  //event.removeSpawn('twilightforest:bighorn_sheep', ['#twilightforest:in_twilight_forest']);
});








//TODO basicCommand is for OP only. 'basicPublicCommand' does not appear to exist in this version
ServerEvents.basicCommand('returnToSpawnpoint', event => {
  let { player } = event;
  let { server } = event;

  command(server, player, 'scoreboard objectives add lastSpawnTeleport dummy');
  command(server, player, 'scoreboard objectives add currentSpawnTeleport dummy');
  command(server, player, 'scoreboard objectives add spawnTeleportDiff dummy');

  command(server, player, 'execute store result score @s currentSpawnTeleport run time query gametime');
  command(server, player, 'execute store result score @s spawnTeleportDiff run scoreboard players operation @s currentSpawnTeleport -= @s lastSpawnTeleport');

  let teleportDiff = getPlayerScore(player, 'spawnTeleportDiff');
  if (teleportDiff >= 12000) {
    command(server, player, 'cast @s recall 10');
    command(server, player, 'execute store result score @s lastSpawnTeleport run time query gametime');
  } else {
    command(server, player, `tellraw @s "Could not return, still recovering from last usage! Seconds left: ${((12000 - teleportDiff) / 20.00).toPrecision(3)}"`);
  }
});

ServerEvents.basicCommand('simplePredefine', event => {
  const player = event.player;
  const server = event.level.server;
  const playerTags = player.getTags();

  function getTag(playerTags, tags) {
    for (const tag of tags) {
      if (playerTags.some(element => element == tag)) { //soft matching, several attempts at exact matching have failed
        return tag;
      }
    }

    return null;
  }

  const aspects = ['breath', 'life', 'light', 'time', 'heart', 'rage', 'blood', 'doom', 'void', 'space', 'mind', 'hope'];
  const titleLands = ['wind', 'rabbits', 'light', 'clockwork', 'cake', 'monsters', 'pulse', 'thunder', 'silence', 'frogs', 'thought', 'towers'];
  const aspect = getTag(playerTags, aspects);

  const classes = ['page', 'heir', 'maid', 'knight', 'sylph', 'seer', 'witch', 'mage', 'thief', 'rogue', 'prince', 'bard'];
  const titleClass = getTag(playerTags, classes);

  const terrainLands = ['end', 'flora', 'forest', 'taiga', 'frost', 'fungi', 'heat', 'rainbow', 'rain', 'rock', 'petrification', 'sand', 'lush_deserts', 'red_sand', 'sandstone', 'red_sandstone', 'shade', 'wood'];
  const terrainLand = getTag(playerTags, terrainLands);

  if (aspect !== null && titleClass !== null && terrainLand !== null) {
    var titleLand = titleLands[aspects.indexOf(aspect)];
    //commandLoud(server, player, `sburbpredefine define @s ${titleClass} ${aspect} minestuck:${titleLand} minestuck:${terrainLand}`);
    commandLoud(server, player, `sburbpredefine terrain_land @s minestuck:${terrainLand}`);
    commandLoud(server, player, `sburbpredefine title_land @s minestuck:${titleLand}`);
    commandLoud(server, player, `sburbpredefine title @s ${titleClass} ${aspect}`);
    console.log(`${player.displayName} predefined with values: ${titleClass} ${aspect} ${titleLand} ${terrainLand}`);
    //commandLoud(server, player, `tellraw @s "${titleClass} ${aspect} ${titleLand} ${terrainLand}"`);
  } else {
    command(server, player, `tellraw @s "Could not predefine the following: ${titleClass} ${aspect} ${titleLand} ${terrainLand}"`);
  }

  aspects.forEach(iterate => command(server, player, `tag @s remove ${iterate}`));
  titleLands.forEach(iterate => command(server, player, `tag @s remove ${iterate}`));
  classes.forEach(iterate => command(server, player, `tag @s remove ${iterate}`));
  terrainLands.forEach(iterate => command(server, player, `tag @s remove ${iterate}`));
});








BlockEvents.rightClicked('minecraft:white_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:light_gray_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:gray_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:black_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:brown_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:red_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:orange_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:yellow_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:lime_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:green_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:cyan_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:light_blue_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:blue_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:purple_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:magenta_bed', (event) => bedHandle(event));
BlockEvents.rightClicked('minecraft:pink_bed', (event) => bedHandle(event));

function bedHandle(event) {
  const { player } = event;

  if (player.shiftKeyDown) {
    const { level } = event;
    const { server } = level;
    const dimensionPath = level.dimension.toString();

    if (dimensionPath.includes('land')) {
      player.addTag('checkTravelToProspit');
      command(server, player, 'effect give @s minecraft:slow_falling 10 0 false');
      command(server, player, 'effect give @s minecraft:darkness 10 1 true');
      player.teleportRelative(0, 1000, 0);
      command(server, player, 'schedule function custom:from_land_bed_a 5t');
    } else if (dimensionPath.includes('prospit')) {
      command(server, player, 'attribute @s irons_spellbooks:cast_time_reduction modifier add bed_teleport_id 100 add_value');
      command(server, player, 'effect give @s minecraft:darkness 4 1 true');
      command(server, player, 'cast @s recall 10');
      command(server, player, 'attribute @s irons_spellbooks:cast_time_reduction modifier remove bed_teleport_id');
    }
  }
};
















// Custom data =====================================================================================================================================================
const generateMisc = function (event) {
  console.log('Started generating custom data in misc. If no finish log, then something may be broken!');

  //reset to prevent errors when reloading midgame
  //global.REMOVED_RECIPES = [];
  //global.REPLACED_RECIPES = [];

  new ItemUnifier('paldelight:knafeh')
    .addDuplicateItem('ramadandelight:knafeh_tray_block') //missing texture
    .addDuplicateItem('ramadandelight:knafeh')

  new CookingRecipe('knafeh', itemOutput('paldelight:knafeh', 3), 'misc')
    .setPath('paldelight:cooking/farmers/knafeh')
    //.setCookTime(260)
    //.setExperience(1.2)
    .addIngredient(tagEntry('c:foods/dough'))
    .addIngredient(tagEntry('c:foods/milk'))
    //.addIngredient(tagEntry('c:foods/cheese'))
    .addIngredient(itemEntry('minecraft:sugar'))
    //.addIngredient(itemEntry('ramadandelight:date_syrup'))
    .addIngredient(itemEntry('paldelight:rose_water'))
    .build(event)

  new ItemUnifier('ramadandelight:maqluba_block')
    .addDuplicateItem('paldelight:maqluba')
  //olive oil onion

  new ItemUnifier('extradelight:ginger')
    .addDuplicateItem('peruviansdelight:kion', false)

  new ItemUnifier('extradelight:wild_ginger')
    .addDuplicateItem('peruviansdelight:kion_silvestre', false)

  new ItemUnifier('extradelight:soybeans')
    .addDuplicateItem('peruviansdelight:granos_soya', false)

  new ItemUnifier('extradelight:soybean_pod')
    .addDuplicateItem('peruviansdelight:vaina_soya', false)

  new ItemUnifier('extradelight:soy_sauce_item')
    .addDuplicateItem('peruviansdelight:sillao', false)

  removeItem('createcybernetics:wetware_spidereyes') //brings fps to 0

  new AdvancementBuilder('custom/world_top')
    .setCriteria('minecraft:location', new JsonBuilder().setField('player',
      {
        location: {
          position: {
            y: {
              min: 300,
              max: 3000,
            },
          },
          dimension: 'minecraft:overworld',
        }
      }).build())
    .setRewards(new JsonBuilder().setField('function', 'custom:world_top').build())
    .build(event);

  /*
  newDataFullPath(event, 'restrictedportals:advancement/thenether', dummyAdvancement('minecraft:crying_obsidian', 'Unlock The Nether'));
  newDataFullPath(event, 'restrictedportals:advancement/theend', dummyAdvancement('minecraft:end_portal_frame', 'Unlock The End'));
  newDataFullPath(event, 'restrictedportals:advancement/theveil', dummyAdvancement('minestuck:meteoric_stone', 'Unlock The Veil'));
  newDataFullPath(event, 'restrictedportals:advancement/prospit', dummyAdvancement('minestuck:prospit_tarnished_brick', 'Unlock Prospit'));
  newDataFullPath(event, 'restrictedportals:advancement/thebattlefield', dummyAdvancement('minestuck:chessboard', 'Unlock The Battlefield'));

  newDataFullPath(event, 'restrictedportals:advancement/land', dummyAdvancement('minestuck:cruxite_apple', 'Unlock Lands'));

  //newData(event, 'advancement/bed_travel', dummyAdvancementFunction('bed_travel', 'Bed Travel', 'custom:check_artifact_use'));
  //prospit travel handled in bedHandle()

  // prevent using artifact if not prepared
  newData(event, 'advancement/custom/artifact_use', {
    criteria: {
      requirement: {
        trigger: 'minecraft:using_item',
        conditions: {
          item: {
            items: [
              'minestuck:cruxite_apple',
              'minestuck:cruxite_potion',
            ],
          },
        },
      },
    },
    rewards: {
      function: 'custom:check_artifact_use',
    },
    sends_telemetry_event: false,
  });

  newData(event, 'advancement/custom/weeping_well_jump', {
    criteria: {
      requirement: {
        trigger: 'minecraft:effects_changed',
        conditions: {
          effects: {
            'malum:rejected': {},
            'occultism:third_eye': {},
          },
        },
      },
    },
    rewards: {
      function: 'custom:weeping_well_jump',
    },
    sends_telemetry_event: false,
  });

  newData(event, 'spirit_data/entity/salamander', malumSoul('minestuck:salamander', 'sacred', 1));
  newData(event, 'spirit_data/entity/turtle', malumSoul('minestuck:turtle', 'sacred', 1));
  newData(event, 'spirit_data/entity/iguana', malumSoul('minestuck:iguana', 'sacred', 1));
  newData(event, 'spirit_data/entity/nakagator', malumSoul('minestuck:nakagator', 'sacred', 1));
  newData(event, 'spirit_data/entity/ogre', malumSoul('minestuck:ogre', 'wicked', 1));
  newData(event, 'spirit_data/entity/basilisk', malumSoul('minestuck:basilisk', 'wicked', 2));
  newData(event, 'spirit_data/entity/lich', malumSoul('minestuck:lich', 'wicked', 3));

  newData(event, 'reaping_data/dead_king', malumReap('irons_spellbooks:dead_king', 'malum:grim_talc', 4, '1.0', '4', '8'));

  newDataFullPath(event, 'relics:curios/slots/feet', {
    replace: true,
    order: 240,
    size: 1,
    icon: 'relics:slot/empty_feet_slot',
  });

  newDataFullPath(event, 'tempad:curios/slots/charm', { size: 2 }); // 3 charms by default, which may make other mods OP

  newDataFullPath(event, 'minestuck:minestuck/exp_source/warden', expSourceEntity('minecraft:warden', 75));
  newData(event, 'minestuck/exp_source/naga', expSourceEntity('twilightforest:naga', 100));
  newData(event, 'minestuck/exp_source/lich', expSourceEntity('twilightforest:lich', 125));
  newData(event, 'minestuck/exp_source/hydra', expSourceEntity('twilightforest:hydra', 150));
  newData(event, 'minestuck/exp_source/dead_king', expSourceEntity('irons_spellbooks:dead_king', 175));
  newData(event, 'minestuck/exp_source/ignis', expSourceEntity('cataclysm:ignis', 300));
  newData(event, 'minestuck/exp_source/maledictus', expSourceEntity('cataclysm:maledictus', 290));
  newData(event, 'minestuck/exp_source/netherite_monstrosity', expSourceEntity('cataclysm:netherite_monstrosity', 225));
  newData(event, 'minestuck/exp_source/the_harbinger', expSourceEntity('cataclysm:the_harbinger', 225));
  newData(event, 'minestuck/exp_source/the_leviathan', expSourceEntity('cataclysm:the_leviathan', 260));
  newData(event, 'minestuck/exp_source/scylla', expSourceEntity('cataclysm:scylla', 280));










  // Minestuck ================================================================================================================================================

  newData(event, 'advancement/custom/enter_veil', dimensionAdvancement('minestuck:minestuck/entry', 'minestuck:veil', 'Join the fray in The Veil', 'minestuck:meteoric_stone', 'Step Onto The Veil'));
  newData(event, 'advancement/custom/enter_prospit', dimensionAdvancement('minestuck:minestuck/entry', 'minestuck:prospit', 'Join the fray on Prospit', 'minestuck:prospit_brick', 'Step Onto Prospit'));
  newData(event, 'advancement/custom/enter_skaia', dimensionAdvancement('minestuck:minestuck/entry', 'minestuck:skaia', 'The new end.', 'minestuck:chessboard', 'Step Onto The Battlefield'));

  // uses mcfunction file stored in data
  newData(event, 'advancement/custom/max_rung', {
    parent: 'minestuck:minestuck/big_one_mil',
    criteria: {
      reach_rung: {
        conditions: {
          rung: {
            min: 49,
          },
        },
        trigger: 'minestuck:echeladder',
      },
    },
    display: {
      description: {
        translate: 'Ascend to god tier by reaching max rung!',
      },
      frame: 'challenge',
      icon: {
        count: 1,
        id: 'minecraft:red_bed',
      },
      title: {
        translate: 'Ascend',
      },
      announce_to_chat: true,
    },
    requirements: [
      [
        'reach_rung',
      ],
    ],
    rewards: {
      function: 'custom:reach_max_rung',
      experience: 200,
    },
    sends_telemetry_event: false,
  });
  newData(event, 'advancement/custom/fledgling', {
    parent: 'minestuck:minestuck/first_step',
    criteria: {
      reach_rung: {
        conditions: {
          rung: {
            min: 3,
          },
        },
        trigger: 'minestuck:echeladder',
      },
    },
    display: {
      description: {
        translate: 'Make some headway on your Echeladder',
      },
      icon: {
        components: {
          'minestuck:value': 10,
        },
        count: 1,
        id: 'minestuck:boondollars',
      },
      title: {
        translate: 'Fledgling',
      },
      announce_to_chat: false,
    },
    requirements: [
      [
        'reach_rung',
      ],
    ],
    sends_telemetry_event: false,
  });

  // created by Shift
  newDataFullPath(event, 'msuportmodi:tags/block_entity_type/blacklistedblock', newTag(false, [
    'lootr:lootr_chest', 'lootr:lootr_barrel', 'lootr:lootr_shulker'
  ]));
  newDataFullPath(event, 'msuportmodi:tags/entity_type/blacklisted', newTag(false, [
    '#twilightforest:bosses', '#c:bosses', '#neoforge:bosses', '#minestuck:boss_mob',
    '#cataclysm:team_the_leviathan', '#cataclysm:team_the_harbinger', '#cataclysm:team_scylla', '#cataclysm:team_monstrosity', '#cataclysm:team_ignis', '#cataclysm:team_ender_guardian', '#cataclysm:team_ancient_remnant',
    '#minestuck:underlings',
    'corpse:corpse', '#lootr:carts', '#lootr:entities',
    '#c:capturing_not_supported', '#occultism:soul_gem_deny_list',
    '#custom:medium_exp_enemy', '#custom:large_exp_enemy', '#custom:huge_exp_enemy',
  ]));

  newData(event, 'minestuck/exp_source/prospit', expSourceAdvancement('minestuck:minestuck/enter_prospit', 300));

  newData(event, 'minestuck/exp_source/ancient_remnant', expSourceEntity('cataclysm:ancient_remnant', 350));
  newData(event, 'minestuck/exp_source/ender_golem', expSourceEntity('cataclysm:ender_golem', 175));
  newData(event, 'minestuck/exp_source/ender_guardian', expSourceEntity('cataclysm:ender_guardian', 275));

  newData(event, 'minestuck/exp_source/tiny_exp_enemy', expSourceEntityTag('custom:tiny_exp_enemy', 3));
  newData(event, 'minestuck/exp_source/small_exp_enemy', expSourceEntityTag('custom:small_exp_enemy', 5));
  newData(event, 'minestuck/exp_source/medium_exp_enemy', expSourceEntityTag('custom:medium_exp_enemy', 10));
  newData(event, 'minestuck/exp_source/large_exp_enemy', expSourceEntityTag('custom:large_exp_enemy', 75));
  newData(event, 'minestuck/exp_source/huge_exp_enemy', expSourceEntityTag('custom:huge_exp_enemy', 125));



  newData(event, 'minestuck/boondollar_prices/bomb', boonPrice('supplementaries:bomb', 400, 600));
  newData(event, 'minestuck/boondollar_prices/furled_map', boonPrice('irons_spellbooks:furled_map', 500, 1500));
  newData(event, 'minestuck/boondollar_prices/dough', boonPrice('create:dough', 2, 4));



  newData(event, 'minestuck/rung_extension/breath_extra', rungExtension('breath', 'irons_spellbooks:blood_spell_power', 0.004));
  newData(event, 'minestuck/rung_extension/life_extra', rungExtension('life', 'irons_spellbooks:nature_spell_power', 0.004));
  newData(event, 'minestuck/rung_extension/light_extra', rungExtension('light', 'irons_spellbooks:lightning_spell_power', 0.004));
  newData(event, 'minestuck/rung_extension/time_extra', rungExtension('time', 'irons_spellbooks:fire_spell_power', 0.004));
  newData(event, 'minestuck/rung_extension/heart_extra', rungExtension('heart', 'malum:spirit_spoils', 0.040816327)); // +2 by the end
  newData(event, 'minestuck/rung_extension/rage_extra', rungExtension('rage', 'irons_spellbooks:ender_spell_power', 0.004));
  newData(event, 'minestuck/rung_extension/blood_extra', rungExtension('blood', 'irons_spellbooks:blood_spell_power', 0.004));
  newData(event, 'minestuck/rung_extension/void_extra', rungExtension('void', 'irons_spellbooks:ender_spell_power', 0.004));
  newData(event, 'minestuck/rung_extension/space_extra', rungExtension('space', 'irons_spellbooks:ice_spell_power', 0.004));
  newData(event, 'minestuck/rung_extension/mind_extra', rungExtension('mind', 'irons_spellbooks:lightning_spell_power', 0.004));
  newData(event, 'minestuck/rung_extension/hope_extra', rungExtension('hope', 'irons_spellbooks:ender_spell_power', 0.004));
  */

  //already added via minestuck_extended
  /*newData(event, 'minestuck/rung_extension/god_tier', {
    attributes: [
      {
        attribute: 'neoforge:creative_flight',
        id: 'minestuck:echeladder_flight',
        operation: 'add_value',
        value: 1.0,
        change_per_rung: 0.0,
        rung: 49,
      },
    ],
  });*/

  /*newDataFullPath(event, 'minestuck:minestuck/config/rungs', [
    {
      background_color: -11545600,
      boondollars: 0,
      exp_requirement: 30,
      grist_capacity: 60,
      rung: 0,
      text_color: 16645931,
    },
    {
      background_color: -65536,
      boondollars: 50,
      exp_requirement: 50,
      grist_capacity: 75,
      rung: 1,
      text_color: 4210752,
    },
    {
      background_color: -6984628,
      boondollars: 75,
      exp_requirement: 70,
      grist_capacity: 93,
      rung: 2,
      text_color: 11992832,
    },
    {
      background_color: -8540105,
      boondollars: 105,
      exp_requirement: 90,
      grist_capacity: 116,
      rung: 3,
      text_color: 7821078,
    },
    {
      background_color: -2578944,
      boondollars: 140,
      exp_requirement: 110,
      grist_capacity: 145,
      rung: 4,
      rungCondition: {
        condition: {
          type: 'minestuck:player_advancement',
          advancement_id: 'minecraft:story/enter_the_nether',
        },
        description: 'You must enter The Nether before initiating this Rung!',
      },
      text_color: 16777215,
    },
    {
      background_color: -8454144,
      boondollars: 170,
      exp_requirement: 120,
      grist_capacity: 181,
      rung: 5,
      text_color: 16738816,
    },
    {
      background_color: -16744690,
      boondollars: 200,
      exp_requirement: 125,
      grist_capacity: 226,
      rung: 6,
      text_color: 38143,
    },
    {
      background_color: -8355712,
      boondollars: 250,
      exp_requirement: 130,
      grist_capacity: 282,
      rung: 7,
      text_color: 4144959,
    },
    {
      background_color: -16711903,
      boondollars: 320,
      exp_requirement: 130,
      grist_capacity: 352,
      rung: 8,
      text_color: 32639,
    },
    {
      background_color: -12058369,
      boondollars: 425,
      exp_requirement: 145,
      grist_capacity: 440,
      rung: 9,
      rungCondition: {
        condition: {
          type: 'minestuck:player_entered',
        },
        description: 'echeladder.must_enter',
      },
      text_color: 11665663,
    },
    {
      background_color: -12566464,
      boondollars: 575,
      exp_requirement: 160,
      grist_capacity: 550,
      rung: 10,
      text_color: 8101045,
    },
    {
      background_color: -1769728,
      boondollars: 790,
      exp_requirement: 175,
      grist_capacity: 687,
      rung: 11,
      text_color: 7182848,
    },
    {
      background_color: -2114708,
      boondollars: 1140,
      exp_requirement: 190,
      grist_capacity: 858,
      rung: 12,
      text_color: 2201121,
    },
    {
      background_color: -3223858,
      boondollars: 1630,
      exp_requirement: 205,
      grist_capacity: 1072,
      rung: 13,
      text_color: 8352831,
    },
    {
      background_color: -65536,
      boondollars: 2230,
      exp_requirement: 220,
      grist_capacity: 1340,
      rung: 14,
      text_color: 16744319,
    },
    {
      background_color: -3764659,
      boondollars: 2980,
      exp_requirement: 235,
      grist_capacity: 1675,
      rung: 15,
      text_color: 11471500,
    },
    {
      background_color: -10427052,
      boondollars: 3850,
      exp_requirement: 250,
      grist_capacity: 2093,
      rung: 16,
      text_color: 2791001,
    },
    {
      background_color: -7811448,
      boondollars: 4800,
      exp_requirement: 265,
      grist_capacity: 2616,
      rung: 17,
      text_color: 16767218,
    },
    {
      background_color: -16748868,
      boondollars: 6000,
      exp_requirement: 280,
      grist_capacity: 3270,
      rung: 18,
      text_color: 16777215,
    },
    {
      background_color: -971994,
      boondollars: 7500,
      exp_requirement: 295,
      grist_capacity: 4087,
      rung: 19,
      text_color: 14352255,
    },
    {
      background_color: -4124672,
      boondollars: 9500,
      exp_requirement: 310,
      grist_capacity: 5108,
      rung: 20,
      text_color: 3430844,
    },
    {
      background_color: -4551884,
      boondollars: 11900,
      exp_requirement: 325,
      grist_capacity: 6385,
      rung: 21,
      text_color: 14674024,
    },
    {
      background_color: -11455320,
      boondollars: 15200,
      exp_requirement: 340,
      grist_capacity: 7981,
      rung: 22,
      text_color: 2794451,
    },
    {
      background_color: -7156736,
      boondollars: 19300,
      exp_requirement: 355,
      grist_capacity: 9976,
      rung: 23,
      text_color: 5000268,
    },
    {
      background_color: -7118533,
      boondollars: 24400,
      exp_requirement: 370,
      grist_capacity: 12470,
      rung: 24,
      text_color: 54040,
    },
    {
      background_color: -15658719,
      boondollars: 45000,
      exp_requirement: 385,
      grist_capacity: 15587,
      rung: 25,
      text_color: 7283365,
    },
    {
      background_color: -2745560,
      boondollars: 68000,
      exp_requirement: 400,
      grist_capacity: 19483,
      rung: 26,
      text_color: 12888617,
    },
    {
      background_color: -1080959,
      boondollars: 95500,
      exp_requirement: 415,
      grist_capacity: 24353,
      rung: 27,
      text_color: 2325504,
    },
    {
      background_color: -1221606,
      boondollars: 124000,
      exp_requirement: 430,
      grist_capacity: 30441,
      rung: 28,
      text_color: 2960685,
    },
    {
      background_color: -2368549,
      boondollars: 180000,
      exp_requirement: 445,
      grist_capacity: 38051,
      rung: 29,
      text_color: 16738081,
    },
    {
      background_color: -1064192,
      boondollars: 260000,
      exp_requirement: 460,
      grist_capacity: 47563,
      rung: 30,
      text_color: 8685536,
    },
    {
      background_color: -13293147,
      boondollars: 425000,
      exp_requirement: 475,
      grist_capacity: 59453,
      rung: 31,
      text_color: 0,
    },
    {
      background_color: -10272735,
      boondollars: 632000,
      exp_requirement: 490,
      grist_capacity: 74316,
      rung: 32,
      text_color: 11382189,
    },
    {
      background_color: -4408132,
      boondollars: 880000,
      exp_requirement: 505,
      grist_capacity: 92895,
      rung: 33,
      text_color: 14828544,
    },
    {
      background_color: -4582144,
      boondollars: 1000000,
      exp_requirement: 520,
      grist_capacity: 116118,
      rung: 34,
      text_color: 14841353,
    },
    {
      background_color: -12409931,
      boondollars: 1000000,
      exp_requirement: 535,
      grist_capacity: 145147,
      rung: 35,
      rungCondition: {
        condition: {
          type: 'minestuck:player_advancement',
          advancement_id: 'minecraft:story/enter_the_end',
        },
        description: 'You must enter The End before initiating this Rung!',
      },
      text_color: 657568,
    },
    {
      background_color: -12819628,
      boondollars: 1000000,
      exp_requirement: 550,
      grist_capacity: 181433,
      rung: 36,
      text_color: 13018659,
    },
    {
      background_color: -3885439,
      boondollars: 1000000,
      exp_requirement: 565,
      grist_capacity: 226791,
      rung: 37,
      text_color: 3719505,
    },
    {
      background_color: -6908266,
      boondollars: 1000000,
      exp_requirement: 580,
      grist_capacity: 283488,
      rung: 38,
      text_color: 16361024,
    },
    {
      background_color: -9737365,
      boondollars: 1000000,
      exp_requirement: 595,
      grist_capacity: 354360,
      rung: 39,
      text_color: 3575370,
    },
    {
      background_color: -5432413,
      boondollars: 1000000,
      exp_requirement: 610,
      grist_capacity: 442950,
      rung: 40,
      text_color: 16777215,
    },
    {
      background_color: -16768513,
      boondollars: 1000000,
      exp_requirement: 625,
      grist_capacity: 553687,
      rung: 41,
      text_color: 41409,
    },
    {
      background_color: -16777216,
      boondollars: 1000000,
      exp_requirement: 640,
      grist_capacity: 692108,
      rung: 42,
      text_color: 7039390,
    },
    {
      background_color: -14069861,
      boondollars: 1000000,
      exp_requirement: 655,
      grist_capacity: 865135,
      rung: 43,
      text_color: 2960685,
    },
    {
      background_color: -5396357,
      boondollars: 1000000,
      exp_requirement: 670,
      grist_capacity: 1081418,
      rung: 44,
      text_color: 1577338,
    },
    {
      background_color: -12345803,
      boondollars: 1000000,
      exp_requirement: 685,
      grist_capacity: 1351772,
      rung: 45,
      text_color: 16748584,
    },
    {
      background_color: -7448514,
      boondollars: 1000000,
      exp_requirement: 700,
      grist_capacity: 1689715,
      rung: 46,
      text_color: 2063502,
    },
    {
      background_color: -10461088,
      boondollars: 1000000,
      exp_requirement: 800,
      grist_capacity: 2112143,
      rung: 47,
      text_color: 14831634,
    },
    {
      background_color: -2242478,
      boondollars: 1000000,
      exp_requirement: 900,
      grist_capacity: 2640178,
      rung: 48,
      text_color: 9904608,
    },
    {
      background_color: -1,
      boondollars: 1000000,
      exp_requirement: 1000,
      grist_capacity: 3300222,
      rung: 49,
      rungCondition: {
        condition: {
          type: 'minestuck:player_advancement',
          advancement_id: 'cataclysm:kill_all_bosses',
        },
        description: 'You must have defeated all Cataclysm bosses before initiating this Rung!',
      },
      text_color: 0,
    },
  ]);

  // max health reduced, you now need full solonion stats for 3 rows on max rung
  // max damage boost halved, now only +50% on max rung
  newDataFullPath(event, 'minestuck:minestuck/rung_extension/base_attributes', {
    attributes: [
      {
        attribute: 'minecraft:generic.max_health',
        id: 'minestuck:echeladder_health_boost',
        operation: 'add_value',
        value: 0.0,
        change_per_rung: 0.6530612245,
      },
      {
        attribute: 'minecraft:generic.attack_damage',
        id: 'minestuck:echeladder_damage_boost',
        operation: 'add_multiplied_base',
        value: 0.0,
        change_per_rung: 0.0102040816327,
      },
      {
        attribute: 'minestuck:player.underling_protection_modifier',
        id: 'minestuck:echeladder_underling_protection',
        operation: 'add_value',
        value: 0.0,
        change_per_rung: -0.015306122448979,
      },
      {
        attribute: 'minestuck:player.underling_damage_modifier',
        id: 'minestuck:echeladder_underling_damage',
        operation: 'add_value',
        value: 0.0,
        change_per_rung: 0.04,
      },
      {
        attribute: 'minecraft:generic.fall_damage_multiplier',
        id: 'minestuck:echeladder_fall_damage_reduction',
        operation: 'add_value',
        value: 0.0,
        change_per_rung: -0.01275,
      },
    ],
  });
  */

  console.log('Ending gen in misc.');
};










