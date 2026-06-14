// priority: 15

const generateRecipes = function (event) {
  console.log('Started generating custom data in recipes. If no finish log, then something may be broken!');

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

  new CookingRecipe('knafeh', itemOutput('paldelight:knafeh', 3), 'misc')
    .setPath('paldelight:cooking/farmers/knafeh')
    //.setCookTime(260)
    //.setExperience(1.2)
    //.addIngredient(tagEntry('c:foods/dough'))
    //.addIngredient(tagEntry('c:foods/milk'))
    //.addIngredient(tagEntry('c:foods/cheese'))
    .addIngredient(itemEntry('minecraft:sugar'))
    .addIngredient(itemEntry('minecraft:sugar'))

    //.addIngredient(itemEntry('ramadandelight:date_syrup'))
    //.addIngredient(itemEntry('paldelight:rose_water'))
    .build(event)

  console.log('Ending gen in recipes.');
};



























// Recipe event =============================================================================================================================================

ServerEvents.recipes((event) => {
  //TODO using replace causes means tags are swapped for individual items in recipes
  global.REPLACED_RECIPES.forEach(entry => {
    event.replaceInput(
      { input: entry[0] },
      entry[0],
      Ingredient.of(entry[1])
    );
  });
  global.REMOVED_RECIPES.forEach(entry => {
    event.remove({ output: entry });
  });
});