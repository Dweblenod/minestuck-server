// priority: 5





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
  //conversion('twilightforest:boar', 'minecraft:pig');
  //bossConversion('twilightforest:snow_queen', 'cataclysm:ignis', 'cataclysm:maledictus');
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

  removeItem('reestrogen:ringof_dreams')

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

  console.log('Ending gen in misc.');
};










