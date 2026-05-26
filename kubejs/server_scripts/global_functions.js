// priority: 0

// functions that get loaded first and can be used in any other server script

/**
 * Creates a new data driven json file, with `path` as the file location and `json` as the contents
 * 
 * If the namespace is skipped it will default to `custom`
 */
const newData = function (event, path, json) {
  //console.log(`custom:${path}.json : ` + JsonIO.toString(jsonIn));

  if (!path.includes(":"))
    path = "custom:" + path;
  event.json(`${path}.json`, json);
};

/**@deprecated */
const newDataFullPath = function (event, path, jsonIn) {
  //console.log(`custom:${path}.json : ` + JsonIO.toString(jsonIn));
  event.json(`${path}.json`, jsonIn);
};

/**
 * Creates a new data driven text file, with `path` as the file location and `text` as the contents
 * 
 * If the namespace is skipped it will default to `custom`
 */
const newText = function (event, path, text) {
  if (!path.includes(":"))
    path = "custom:" + path;

  event.text(`${path}.txt`, text);
};

/**@deprecated */
const newTextFullPath = function (event, path, textIn) {
  event.text(`${path}.txt`, textIn);
};

/**@deprecated */
const newTag = function (replaceIn, valuesIn) {
  return {
    replace: replaceIn,
    values: valuesIn,
  };
};

/**
 * @param {*} jsonIn accepts an initial set of json. If none is given, will default to an empty object
 */
function JsonBuilder(jsonIn) {
  if (jsonIn == undefined)
    jsonIn = {};
  this.obj = jsonIn;
}
JsonBuilder.prototype.setField = function (key, value) {
  this.obj[key] = value;
  return this;
};
JsonBuilder.prototype.removeField = function (key) {
  if (this.obj.hasOwnProperty(key)) {
    delete this.obj[key];
  }
  return this;
};
JsonBuilder.prototype.getObj = function () {
  return this.obj;
};
JsonBuilder.prototype.addObject = function (jsonIn) {
  if (Array.isArray(this.obj)) {
    //console.log("passes");
    this.obj.push(jsonIn);
  }
  return this;
};
JsonBuilder.prototype.build = function (doLog) {
  let json = JSON.parse(JSON.stringify(this.obj));

  if (doLog !== undefined)
    console.log(json);

  return json;
};

//follows the recommended neoforge data
const wipeDataAtPath = function (event, path) {
  return newData(event, path, { "neoforge:conditions": [{ "type": "neoforge:false" }] });
}

/**
 * Modifies or creates a file at the path specified using FilesJS.
 * It works on anything within the .minecraft directory including config/asset directories
 */
function DataModifier(pathIn) {
  this.path = pathIn;
}
DataModifier.prototype.replaceValue = function (search, replace) {
  FilesJS.replaceInFile(this.path, search, replace);
  return this;
}
/**
 * @param {*} key accepts a String, for the targeted key/field
 * @param {*} value accepts a Json object, such as through JsonBuilder
 */
DataModifier.prototype.replaceJsonField = function (key, value) {
  var jsonText = FilesJS.readFile(this.path);
  var jsonObj = JSON.parse(jsonText);
  var jsonBuilder = new JsonBuilder(jsonObj);
  var replacedObj = jsonBuilder.setField(key, value).build();
  FilesJS.writeFile(this.path, JSON.stringify(replacedObj, null, 2));
  return this;
}
/**
 * Adds the contents to a new line at the end of the specified file. File must already be created
 */
DataModifier.prototype.append = function (contentIn) {
  FilesJS.appendFile(this.path, "\n" + contentIn);
  return this;
}
/**
 * Creates a file. Can be filled with the first line of the file.
 * Will give an error if used before the server level is loaded
 */
DataModifier.prototype.createFile = function (firstLine) {
  FilesJS.createFiles(this.path, firstLine);
  return this;
}

/**
 * One stop shop for replacing/hiding data for overlapping items
 * @param {*} targetIn takes a String of the item you want to be prioritized
 */
function ItemUnifier(targetIn) {
  this.target = targetIn;
}
/**
 * Makes the item entered dissapear from JEI/recipes
 * @param {*} shouldRemove true or unentered if relevant content should be removed entirely, false if it should instead be replaced
*/
ItemUnifier.prototype.addDuplicateItem = function (itemIn, shouldRemove) {
  if (shouldRemove == undefined || shouldRemove) {
    global.REMOVED_RECIPES.push(itemIn);
    global.REMOVED_LOOT_TABLES.push(itemIn);
  } else {
    global.REPLACED_RECIPES.push([itemIn, this.target]);
    global.REPLACED_LOOT_TABLES.push([itemIn, this.target]);
  }
  global.HIDE_JEI.push(itemIn);
  return this;
}
/**
 * Blank function for keeping relevant data inline
 */
ItemUnifier.prototype.modifyData = function () {
  return this;
}

/**
 * @deprecated
 * Create multiple field value pairs in JSON
 * 
 * Will skip any field value pairs where the value was never defined
 * 
 * @param {*} pairs formatted as [[fieldA, valueA], [fieldB, valueB], ...]
 */
const createExtendablePair = function (pairs) {
  const jsonObject = {};
  for (const [field, value] of pairs) {
    if (value !== undefined && field !== undefined)
      jsonObject[field] = value;
  }
  //console.log(jsonObject);
  return jsonObject;
};

const lootItemEntry = function (idIn, weightIn, componentIn) {
  if (weightIn === undefined)
    weightIn = 1;
  if (componentIn === undefined)
    componentIn = {};

  let output = {
    type: "minecraft:item",
    name: idIn,
    functions: [
      {
        function: "minecraft:set_components",
        components: componentIn,
        conditions: []
      }
    ]
  };

  return output;
};

/**
 * @param {*} pathIn takes a string with the path. Already prepended with `advancement/`
 */
function AdvancementBuilder(pathIn) {
  this.path = "advancement/" + pathIn;
  this.obj = new JsonBuilder({ 'sends_telemetry_event': false });
  this.reqObj = new JsonBuilder([]);
}
AdvancementBuilder.prototype.replaceValue = function (search, replace) {
  FilesJS.replaceInFile(this.path, search, replace);
  return this;
}
AdvancementBuilder.prototype.setRewards = function (jsonIn) {
  this.obj.setField("rewards", jsonIn);
  return this;
}
AdvancementBuilder.prototype.setDisplay = function (jsonIn) {
  this.obj.setField("display", jsonIn);
  return this;
}
/**Also adds the relevant requirement entry, with the name `req`*/
AdvancementBuilder.prototype.setCriteria = function (triggerIn, jsonIn) {
  this.obj.setField("criteria", new JsonBuilder({
    "req": {
      "trigger": triggerIn,
      "conditions": jsonIn
    }
  }).build());
  this.obj.setField("requirements", new JsonBuilder([
    [
      "req"
    ]
  ]).build());
  return this;
}
AdvancementBuilder.prototype.setParent = function (parentIn) {
  this.obj.setField("parent", parentIn);
  return this;
}
AdvancementBuilder.prototype.build = function (event) {
  return newData(event, this.path, this.obj.build());
};

/**@deprecated */
const dimensionAdvancement = function (parentIn, dimensionIn, descriptionIn, iconIn, titleIn) {
  return {
    parent: parentIn,
    criteria: {
      entered_dimension: {
        conditions: {
          to: dimensionIn,
        },
        trigger: 'minecraft:changed_dimension',
      },
    },
    display: {
      description: {
        translate: descriptionIn,
      },
      icon: {
        count: 1,
        id: iconIn,
      },
      title: {
        translate: titleIn,
      },
    },
    requirements: [
      [
        'entered_dimension',
      ],
    ],
    sends_telemetry_event: false,
  };
};

/**@deprecated */
const dummyAdvancement = function (iconIn, titleIn) {
  return {
    display: {
      icon: {
        id: iconIn,
      },
      title: titleIn,
      description: '',
      show_toast: false,
      announce_to_chat: false,
      hidden: true,
    },
    criteria: {
      impossible: {
        trigger: 'minecraft:impossible',
      },
    },
    requirements: [
      [
        'impossible',
      ],
    ],
  };
};

/**@deprecated */
const dummyAdvancementFunction = function (iconIn, titleIn, functionIn) {
  return {
    display: {
      icon: {
        id: iconIn,
      },
      title: titleIn,
      description: '',
      show_toast: false,
      announce_to_chat: false,
      hidden: true,
    },
    criteria: {
      impossible: {
        trigger: 'minecraft:impossible',
      },
    },
    requirements: [
      [
        'impossible',
      ],
    ],
    rewards: {
      function: functionIn,
    },
  };
};

/**
 * 
 * @param {$Server} serverIn 
 * @param {$ServerPlayerKJS_} playerIn 
 * @param {$StringBuilder_} functionIn 
 */
const command = function (serverIn, playerIn, functionIn) {
  serverIn.getCommands().performPrefixedCommand(playerIn.createCommandSourceStack().withSuppressedOutput().withPermission(2), functionIn);
};

const commandLoud = function (serverIn, playerIn, functionIn) {
  serverIn.getCommands().performPrefixedCommand(playerIn.createCommandSourceStack().withPermission(2), functionIn);
};

const getPlayerScore = function (playerIn, scoreIn) {
  const scoreboard = playerIn.getScoreboard();
  const score = scoreboard.getOrCreatePlayerScore(playerIn, scoreboard.getObjective(scoreIn)).get();
  return score;
};

/** Cannot be used if tag was added in the same tick */
const playerHasTag = function (playerIn, tagIn) {
  const playerTags = playerIn.getTags();
  console.info(playerTags);

  //soft matching, exact matching doesnt work
  return playerTags.some(tag => tag == tagIn);
};

const boonPrice = function (itemIn, minValueIn, maxValueIn) {
  return {
    ingredient: {
      item: itemIn,
    },
    range: {
      type: 'minecraft:uniform',
      min_inclusive: minValueIn,
      max_inclusive: maxValueIn,
    },
  };
};

const rungExtension = function (aspectIn, attributeIn, rateIn) {
  return {
    aspect: aspectIn,
    attributes: [
      {
        attribute: attributeIn,
        id: 'custom:echeladder_aspect_mod',
        operation: 'add_value',
        value: 0.0,
        change_per_rung: rateIn,
      },
    ],
  };
};

const expSourceAdvancement = function (idIn, amountIn) {
  return {
    type: 'minestuck:advancement_earned',
    advancement_id: idIn,
    amount: amountIn
  };
};

const expSourceEntity = function (entityTypeIn, amountIn) {
  return {
    type: 'minestuck:kill_entity',
    entity_type: entityTypeIn,
    amount: amountIn
  };
};

const expSourceEntityTag = function (tagIn, amountIn) {
  return {
    type: 'minestuck:kill_entity_tag',
    entity_type_tag: tagIn,
    amount: amountIn
  };
};

/**
 * 
 * @param {import("net.minecraft.world.entity.EntityType").$EntityType$$Type} entityIn 
 * @param {*} spiritIn 
 * @param {*} countIn 
 * @returns 
 */
const malumSoul = function (entityIn, spiritIn, countIn) {
  return {
    registry_name: entityIn,
    primary_type: spiritIn,
    spirits: [
      {
        spirit: spiritIn,
        count: countIn,
      },
    ],
  };
};

const malumReap = function (entityIn, itemIn, countIn, chanceIn, minIn, maxIn) {
  return {
    registry_name: entityIn,
    drops: [
      {
        ingredient: {
          item: itemIn,
          count: countIn,
        },
        chance: chanceIn,
        min: minIn,
        max: maxIn,
      },
    ],
  };
};

/**
 * Creates a new potato ammo with the defaults:
 * 5 damage, 1 knockback, 20 reload ticks, render mode of tumble
 * Will pick name based off the first entry if there are multiple
 */
function PotatoAmmo(itemIn) {
  let name = itemIn;
  if (Array.isArray(name))
    name = name[0]; //accept the first entry
  this.path = `create/potato_projectile/type/${name.toString().replace(":", "")}`
  this.obj = new JsonBuilder({
    "items": itemIn,
    "damage": 5,
    "knockback": 1,
    "render_mode": { "type": "create:tumble" },
    "sound_pitch": 1.0,
    "split": 1,
    "velocity_multiplier": 1,
    "reload_ticks": 20,
    "sticky": false
  });
}
PotatoAmmo.prototype.setPath = function (pathIn) {
  this.path = pathIn;
  return this;
};
PotatoAmmo.prototype.setDamage = function (damageIn) {
  this.obj.setField("damage", damageIn);
  return this;
};
PotatoAmmo.prototype.setKnockback = function (knockbackIn) {
  this.obj.setField("knockback", knockbackIn);
  return this;
};
/**
 * @param {*} renderModeIn accepts types of: `billboard`, `tumble`, `toward_motion`, `stuck_to_entity`
 */
PotatoAmmo.prototype.setRenderMode = function (renderModeIn) {
  this.obj.setField("render_mode", renderModeIn);
  return this;
};
PotatoAmmo.prototype.setSoundPitch = function (soundPitchIn) {
  this.obj.setField("sound_pitch", soundPitchIn);
  return this;
};
PotatoAmmo.prototype.setSplit = function (splitIn) {
  this.obj.setField("split", splitIn);
  return this;
};
PotatoAmmo.prototype.setVelocMult = function (velocityMultiplierIn) {
  this.obj.setField("velocity_multiplier", velocityMultiplierIn);
  return this;
};
PotatoAmmo.prototype.setReloadTicks = function (reloadTicksIn) {
  this.obj.setField("reload_ticks", reloadTicksIn);
  return this;
};
PotatoAmmo.prototype.setSticky = function (stickyIn) {
  this.obj.setField("sticky", stickyIn);
  return this;
};
PotatoAmmo.prototype.setEntityHit = function (entityHitIn) {
  this.obj.setField("on_entity_hit", entityHitIn);
  return this;
};
PotatoAmmo.prototype.setBlockHit = function (blockHitIn) {
  this.obj.setField("on_block_hit", blockHitIn);
  return this;
};
PotatoAmmo.prototype.build = function (event) {
  return newData(event, this.path, this.obj.build())
};


const ammunitionWithEntityHit = function (itemsIn, damageIn, knockbackIn, onEntityHitIn, renderModeIn, soundPitchIn, splitIn, velocityMultiplierIn, stickyIn, reloadTicksIn) {
  return {
    "damage": damageIn,
    "items": itemsIn,
    "knockback": knockbackIn,
    "on_entity_hit": onEntityHitIn,
    "render_mode": renderModeIn,
    "sound_pitch": soundPitchIn,
    "split": splitIn,
    "velocity_multiplier": velocityMultiplierIn,
    "reload_ticks": reloadTicksIn,
    "sticky": stickyIn
  }
};

const ammunitionWithBlockHit = function (itemsIn, damageIn, knockbackIn, onBlockHitIn, renderModeIn, soundPitchIn, splitIn, velocityMultiplierIn, stickyIn, reloadTicksIn) {
  return {
    "damage": damageIn,
    "items": itemsIn,
    "knockback": knockbackIn,
    "on_block_hit": onBlockHitIn,
    "render_mode": renderModeIn,
    "sound_pitch": soundPitchIn,
    "split": splitIn,
    "velocity_multiplier": velocityMultiplierIn,
    "reload_ticks": reloadTicksIn,
    "sticky": stickyIn
  }
};















// GEN ====================================================================================================================

/** Replaces existing biome and structure set */
const newLandifyStructureSet = function (event, namespaceIn, biomeIdIn, structureIdIn) {
  event.json(`${namespaceIn}:tags/worldgen/biome/${biomeIdIn}.json`, newTag(true, ['#minestuck:land']));

  // garbage content with empty structures
  event.json(`${namespaceIn}:worldgen/structure_set/${structureIdIn}.json`, {
    placement: {
      type: 'minecraft:random_spread',
      salt: 34481210,
      separation: 5,
      spacing: 7,
    },
    structures: [],
  });
};

const landExtension = function (featuresIn, carversIn, mobSpawnsIn, structureSetsIn) {
  return {
    features: featuresIn,
    carvers: carversIn,
    mob_spawns: mobSpawnsIn,
    structure_sets: structureSetsIn,
  };
};

const landFeature = function (stepIn, featureIn, biomesIn) {
  return {
    step: stepIn,
    feature: featureIn,
    biome_types: biomesIn,
  };
};

const dummyPlacedFeature = function () {
  return {
    feature: "minecraft:acacia",
    placement: [
      {
        type: "minecraft:count",
        count: 0
      }
    ]
  };
};

const structureSet = function (structuresIn, spacingIn, seperationIn, saltIn) {
  return {
    structures: structuresIn,
    placement: {
      type: 'minecraft:random_spread',
      spacing: spacingIn,
      separation: seperationIn,
      salt: saltIn,
    },
  };
};

const templatePool = function (elementsIn) {
  return {
    fallback: 'minecraft:empty',
    elements: elementsIn,
  };
};

const jigsawStructure = function (startPoolIn, sizeIn, biomesIn, terrainAdaptationIn, stepIn, heightOffsetIn, heightmapIn) {
  return {
    type: 'minecraft:jigsaw',
    start_pool: startPoolIn,
    size: sizeIn,
    biomes: biomesIn,
    terrain_adaptation: terrainAdaptationIn,
    spawn_overrides: {},
    max_distance_from_center: 120,
    step: stepIn,
    start_height: {
      absolute: heightOffsetIn,
    },
    project_start_to_heightmap: heightmapIn,
    use_expansion_hack: false,
  };
};

const landStructureSet = function (structureSetIn, biomesIn) {
  return {
    structure_set: structureSetIn,
    biome_types: biomesIn,
  };
};

const structureEntry = function (structureIn, weightIn) {
  return {
    structure: structureIn,
    weight: weightIn,
  };
};

const templateEntry = function (locationIn, weightIn) {
  return {
    weight: weightIn,
    element: {
      element_type: 'minecraft:single_pool_element',
      projection: 'rigid',
      location: locationIn,
      processors: 'minestuck:structure_block_registry',
    },
  };
};

const templateEntryCustom = function (locationIn, weightIn, projectionIn, processorsIn) {
  return {
    weight: weightIn,
    element: {
      element_type: 'minecraft:single_pool_element',
      projection: projectionIn,
      location: locationIn,
      processors: processorsIn,
    },
  };
};

/**
 * 
 * @param {string} templateIn structure nbt file with path
 * @param {string} symmetryIn takes values of: 'symmetric', 'axis_symmetric', 'rotatable' (default)
 * @returns 
 */
const wfcEntry = function (templateIn, symmetryIn) {
  return {
    type: "template",
    template: templateIn,
    symmetry: symmetryIn
  };
};












// LOOT ====================================================================================================================

const furledMap = function (destinationIn, nameIn, weightIn) {
  return LootEntry.of('irons_spellbooks:furled_map')
    .jsonFunction(
      {
        function: 'irons_spellbooks:set_furled_map',
        destination: destinationIn,
        description_translation: nameIn,
      },
    ).withWeight(weightIn);
};














// RECIPE ====================================================================================================================

/**
 * @param {*} resultIn takes single `itemOutput`
 * @param {*} patternIn takes json array with 3 strings each up to 3 characters long. Example: `['#s#', 'f f', 'fff']`
 */
function ShapedCrafting(nameIn, resultIn, patternIn) {
  this.path = `recipe/${nameIn}`;
  this.obj = new JsonBuilder({
    "type": "minecraft:crafting_shaped",
    "pattern": patternIn,
    "result": resultIn
  });
  this.keyObj = new JsonBuilder();
}
/**Useful to override existing recipe*/
ShapedCrafting.prototype.setPath = function (pathIn) {
  this.path = pathIn;
  return this;
};
/**
 * @param {*} keyIn takes a string with the character it matches in the pattern
 * @param {*} valueIn takes single `itemEntry` or `tagEntry`
 */
ShapedCrafting.prototype.addKey = function (keyIn, valueIn) {
  this.keyObj.setField(keyIn, valueIn);
  return this;
};
ShapedCrafting.prototype.build = function (event) {
  return newData(event, this.path, this.obj.setField("key", this.keyObj.build()).build(true))
};

/**
 * @deprecated
 * USE `CreateRecipe` INSTEAD
 */
const createRecipeData = function (typeIn, heatRequirementIn, ingredientsIn, resultsIn) {
  return {
    type: typeIn,
    heat_requirement: heatRequirementIn,
    ingredients: ingredientsIn,
    results: resultsIn,
  };
};

/**
 * @deprecated
 * USE `CreateRecipe` INSTEAD
 */
const createRecipe = function (event, typeIn, heatRequirementIn, ingredientsIn, resultsIn) {
  event.custom(createRecipeData(typeIn, heatRequirementIn, ingredientsIn, resultsIn));
};

/**
 * @param {*} typeIn takes values of: "create:basin", "create:crushing", "create:compacting", "create:cutting", "create:deploying", "create:filling", "create:haunting", "create:milling", "create:mixing", "create:pressing", "create:splashing"
 * @param {*} ingredientsIn takes an array of Entry. If this is used in a sequenced_assembly then keep the first entry the same as transitional item
 * @param {*} resultsIn takes an array of Output. If this is used in a sequenced_assembly then keep it the same as transitional item
 */
function CreateRecipe(nameIn, typeIn, ingredientsIn, resultsIn) {
  this.path = `recipe/create/${typeIn.toString().split(":")[1]}/${nameIn}`;
  this.obj = new JsonBuilder({
    "type": typeIn,
    "ingredients": ingredientsIn,
    "results": resultsIn
  });
}
/**Useful to override existing recipe*/
CreateRecipe.prototype.setPath = function (pathIn) {
  this.path = pathIn;
  return this;
};
/**
 * @param {*} heatRequirementIn takes values of: `none`, `heated`, `superheated`
 * None by default
*/
CreateRecipe.prototype.setHeat = function (heatRequirementIn) {
  this.obj.setField("heat_requirement", heatRequirementIn);
  return this;
};
CreateRecipe.prototype.build = function (event) {
  return newData(event, this.path, this.obj.build())
};

/**
 * Simplified form of CreateRecipe for use in SequencedAssembly
 * @param {*} typeIn takes values of: "create:basin", "create:crushing", "create:compacting", "create:cutting", "create:deploying", "create:filling", "create:haunting", "create:milling", "create:mixing", "create:pressing", "create:splashing"
 * 
 */
const sequencedRecipeEntry = function (typeIn, ingredientIn, sequencedAssemblyIn) {
  return new CreateRecipe(null, typeIn, [sequencedAssemblyIn.getTransitItem(false), ingredientIn], [sequencedAssemblyIn.getTransitItem(true)])
}

/**
 * @param {*} ingredientIn takes single Entry
 * @param {*} resultsIn takes an array of Output
 * @param {*} transitionalItemIn takes single item (not Entry or Output)
 * @param {*} loopsIn takes an integer value
 */
function SequencedAssembly(nameIn, ingredientIn, resultsIn, transitionalItemIn, loopsIn) {
  this.path = `recipe/create/sequenced_assembly/${nameIn}`;
  this.obj = new JsonBuilder({
    "type": "create:sequenced_assembly",
    "ingredient": ingredientIn,
    "results": resultsIn,
    "loops": loopsIn,
    "transitional_item": itemOutput(transitionalItemIn)
  });
  this.seqObj = new JsonBuilder([]);
  this.transitionalItem = transitionalItemIn;
}
/**Useful to override existing recipe*/
SequencedAssembly.prototype.setPath = function (pathIn) {
  this.path = pathIn;
  return this;
};
/**Accepts an UNBUILT `CreateRecipe` or `sequencedRecipeEntry()`*/
SequencedAssembly.prototype.addSequence = function (createRecipeIn) {
  this.seqObj.addObject(createRecipeIn.obj.build());
  return this;
};
SequencedAssembly.prototype.getTransitItem = function (isOutput) {
  if (isOutput)
    return itemOutput(this.transitionalItem);
  else
    return itemEntry(this.transitionalItem);
};
SequencedAssembly.prototype.build = function (event) {
  return newData(event, this.path, this.obj.setField("sequence", this.seqObj.build()).build())
};

/**
 * Farmers Delight style recipe, accepts 6 ingredients.
 * Gives experience value of 1.0 and has cook time of 200 ticks by default
 * @param {*} resultIn takes an ItemOutput
 * @param {*} recipeTabIn takes value of: "meals", "drinks", "misc"
 */
function CookingRecipe(nameIn, resultIn, recipeTabIn) {
  //this.path = `recipe/cooking/${nameIn.path()}`;
  this.path = `recipe/cooking/${nameIn}`;
  this.obj = new JsonBuilder({
    "type": "farmersdelight:cooking",
    "recipe_book_tab": recipeTabIn,
    "result": resultIn
  });
  this.ingObj = new JsonBuilder([]);
}
/**Useful to override existing recipe*/
CookingRecipe.prototype.setPath = function (pathIn) {
  this.path = pathIn;
  return this;
};
/**
 * @param {*} ingredientIn takes an Entry
 * There can be a max of 6 ingredients
 */
CookingRecipe.prototype.addIngredient = function (ingredientIn) {
  this.ingObj.addObject(ingredientIn);
  return this;
};
/**
 * @param {*} experienceIn takes a float value
 */
CookingRecipe.prototype.setExperience = function (experienceIn) {
  this.obj.setField("experience", experienceIn);
  return this;
};
/**
 * @param {*} timeIn takes an integer
 */
CookingRecipe.prototype.setCookTime = function (timeIn) {
  this.obj.setField("cookingtime", timeIn);
  return this;
};
CookingRecipe.prototype.build = function (event) {
  return newData(event, this.path, this.obj.setField("ingredients", this.ingObj.build()).build())
};

const drilling = function (outputIn, stressIn, ticksIn, veinNameIn) {
  return {
    type: 'createoreexcavation:drilling',
    drill: {
      tag: 'createoreexcavation:drills',
    },
    output: outputIn,
    priority: 0,
    stress: stressIn,
    ticks: ticksIn,
    veinId: `createoreexcavation:ore_vein_type/${veinNameIn}`,
  };
};

const fluidExtracting = function (outputIn, stressIn, ticksIn, veinNameIn) {
  return {
    type: 'createoreexcavation:extracting',
    drill: {
      tag: 'createoreexcavation:drills',
    },
    output: outputIn,
    priority: 0,
    stress: stressIn,
    ticks: ticksIn,
    veinId: `createoreexcavation:ore_vein_type/${veinNameIn}`,
  };
};

const oreVeinType = function (biomeIn, countIn, idIn, nameIn, saltIn, seperationIn, spacingIn) {
  return {
    type: 'createoreexcavation:vein',
    amountMultiplierMax: 40.0,
    amountMultiplierMin: 15.0,
    biomeWhitelist: biomeIn,
    finite: 'default',
    icon: {
      count: countIn,
      id: idIn,
    },
    name: nameIn,
    placement: {
      salt: saltIn,
      separation: seperationIn,
      spacing: spacingIn,
    },
    priority: 0,
  };
};

const brewMix = function (fromIn, ingredientIn, toIn) {
  return {
    "mix_type": "potion",
    "from": fromIn,
    "ingredient": ingredientIn,
    "to": toIn
  };
};

const alchemyCombination = function (outputIn, modeIn, inputA, inputB) {
  return {
    type: 'minestuck:combination',
    input1: {
      item: inputA,
    },
    input2: {
      item: inputB,
    },
    mode: modeIn,
    output: outputIn,
  }
};

/**@deprecated */
const gristCost = function (outputIn, gristCostIn) {
  return {
    type: 'minestuck:grist_cost',
    priority: 100,
    grist_cost: gristCostIn,
    ingredient: {
      item: outputIn,
    },
  }
};

function GristCost(itemIn) {
  this.path = `recipe/grist_costs/${itemIn.toString().replace(":", "")}`;
  this.gristObj = new JsonBuilder();
  this.obj = new JsonBuilder({
    type: 'minestuck:grist_cost',
    ingredient: {
      item: itemIn
    }
  });
}
/**Useful to override existing recipe*/
GristCost.prototype.setPath = function (pathIn) {
  this.path = pathIn;
  return this;
};
GristCost.prototype.addGrist = function (gristIn, amountIn) {
  this.gristObj.setField(gristIn, amountIn);
  return this;
};
GristCost.prototype.setPriority = function (valueIn) {
  this.obj.setField("priority", valueIn);
  return this;
};
GristCost.prototype.build = function (event) {
  return newData(event, this.path, this.obj.setField("grist_cost", this.gristObj.build()).build())
};

/**
 * idIn is the item registry name
 * 
 * countIn has the default value of 1
 * */
const itemEntry = function (idIn, countIn) {
  var entry = new JsonBuilder({"item": idIn})
  
  if (countIn !== undefined)
    entry.setField("count", countIn);

  return entry.build();
};

/**
 * idIn is the registered tag name, with no prepended pound symbol
 * 
 * countIn has the default value of 1
 * */
const tagEntry = function (idIn, countIn) {
  var entry = new JsonBuilder({"tag": idIn})
  
  if (countIn !== undefined)
    entry.setField("count", countIn);

  return entry.build();
};

/**DOES NOT WORK IN CAULDRONS. USE fluidCauldronEntry() for that purpose*/
const fluidEntry = function (idIn, amountIn) {
  return {
    amount: amountIn,
    fluid: idIn,
    type: 'neoforge:single'
    //type: 'fluid_stack',
  };
};

const fluidCauldronEntry = function (idIn, amountIn) {
  return {
    amount: amountIn,
    id: idIn
  };
};


/**
 * 
 * @param {*} idIn values of: 'sacred', 'wicked', 'eldritch', 'aerial', 'aqueous', 'earthen', 'infernal', 'arcane'
 * @param {*} countIn has the default value of 1
 * @returns 
 */
const spiritEntry = function (idIn, countIn) {
  if (countIn === undefined)
    countIn = 1;

  return {
    type: idIn,
    count: countIn,
  };
};

/**
 * idIn is the item registry name
 * 
 * countIn has the default value of 1
 * 
 * chanceIn takes a decimal value between 0.00 and 1.00
 * */
const itemOutput = function (idIn, countIn, chanceIn) {
  var output = new JsonBuilder({"id": idIn})
  
  if (countIn !== undefined)
    output.setField("count", countIn);
  if (chanceIn !== undefined)
    output.setField("chance", chanceIn);

  return output.build();
};

const fluidOutput = function (idIn, amountIn) {
  return {
    id: idIn,
    amount: amountIn,
  };
};

const newDrillingAndVein = function (event, idIn, nameIn, outputIn, stressIn, ticksIn, biomeIn, iconCountIn, iconBlockIn, saltIn, seperationIn, spacingIn) {
  event.json(`createoreexcavation:recipe/drilling/${idIn}.json`, drilling(
    outputIn, stressIn, ticksIn, idIn,
  ));

  event.json(`createoreexcavation:recipe/ore_vein_type/${idIn}.json`, oreVeinType(
    biomeIn, iconCountIn, iconBlockIn, nameIn, saltIn, seperationIn, spacingIn,
  ));
};

const newExtractingAndVein = function (event, idIn, nameIn, outputIn, stressIn, ticksIn, biomeIn, iconCountIn, iconBlockIn, saltIn, seperationIn, spacingIn) {
  event.json(`createoreexcavation:recipe/extractor/${idIn}.json`, fluidExtracting(
    outputIn, stressIn, ticksIn, idIn,
  ));

  event.json(`createoreexcavation:recipe/ore_vein_type/${idIn}.json`, oreVeinType(
    biomeIn, iconCountIn, iconBlockIn, nameIn, saltIn, seperationIn, spacingIn,
  ));
};

const defaultCrushTime = 200;

/*const craftToCauldron = function (event, outputIn, ingredientsIn) {
  event.remove(
    {
      output: outputIn,
      type: 'minecraft:crafting_shaped',
    },
  );
  event.custom(
    {
      type: 'hexerei:mixingcauldron',
      fluid: {
        id: "minecraft:water",
        amount: 1000
      },
      ingredients: ingredientsIn,
      output: outputIn,
    },
  );
};*/

/**
 * 
 * @param {*} event 
 * @param {*} outputIn 
 * @param {*} fluidIn 
 * @param {*} heatRequirementIn takes values of: "none", "heated", "superheated"
 * @param {*} moonRequirementIn takes values of: "none", "new_moon", "waxing_crescent", "first_quarter", "waxing_gibbous", "full_moon", "waning_gibbous", "last_quarter", "waning_crescent"
 * @param {*} ingredientsIn 
 */
const craftToCauldron = function (event, outputIn, ingredientsIn, fluidIn, heatRequirementIn, moonRequirementIn) {
  event.remove(
    {
      output: outputIn,
      type: 'minecraft:crafting_shaped',
    },
  );

  if (fluidIn === undefined)
    fluidIn = fluidCauldronEntry("minecraft:water", 1000);
  event.custom(createExtendablePair([
    ['type', 'hexerei:mixingcauldron'],
    ['fluid', fluidIn],
    ['ingredients', ingredientsIn],
    ['output', outputIn],
    ['heatRequirement', heatRequirementIn],
    ['moonRequirement', moonRequirementIn]
  ]));
  /*event.custom(
    {
      type: 'hexerei:mixingcauldron',
      fluid: fluidIn,
      ingredients: ingredientsIn,
      output: outputIn,
      heatRequirement: heatRequirementIn,
      moonRequirement: moonRequirementIn,
    },
  );*/
};

/** CHEMICAL VATS ARE BROKEN 30Aug25 */
const chemicalVatRecipe = function (event, heatRequirementIn, ingredientsIn, machinesIn, processingTimeIn, resultsIn) {
  event.custom({
    type: 'create:vat_machine_recipe',
    allowed_vat_types: [
      'tfmg:steel_vat',
      'tfmg:firebrick_lined_vat',
    ],
    heat_requirement: heatRequirementIn,
    ingredients: ingredientsIn,
    machines: machinesIn,
    min_size: 1,
    processing_time: processingTimeIn,
    results: resultsIn,
  });
};

/**
 * 
 * @param {*} event 
 * @param {*} outputIn 
 * @param {*} ingredientIn 
 * @param {*} spiritsIn 
 * @param {*} extrasIn 
 */
const spiritInfusionRecipe = function (event, outputIn, ingredientIn, spiritsIn, extrasIn) {
  event.custom({
    type: 'malum:spirit_infusion',
    extraIngredients: extrasIn,
    ingredient: ingredientIn,
    output: outputIn,
    spirits: spiritsIn,
  });
};












// DIALOGUE ===============================================================================================================

const cond = function (typeIn) {
  return {
    type: `minestuck:${typeIn}`,
  };
};

const condList = function (conditionsIn, listTypeIn) {
  return {
    type: 'minestuck:list',
    conditions: conditionsIn,
    list_type: listTypeIn,
  };
};

const condTrue = function () {
  return {
    type: 'minestuck:always_true',
  };
};

const condTag = function (tagIn) {
  return {
    type: 'minestuck:custom_tag',
    tag_name: tagIn,
  };
};

/**
 * 
 * @param {*} itemIn 
 * @param {*} amountIn default value of 1
 * @returns 
 */
const condItem = function (itemIn, amountIn) {
  if (amountIn === undefined)
    amountIn = 1;

  return {
    type: 'minestuck:player_item',
    item: itemIn,
    amount: amountIn,
  };
};

/**
 * @param {*} objectiveIn 
 * @param {*} valueIn default value of 0
 * @param {*} ownerIn values of: "player", "npc", then any custom scoreboard owner name. Default value of "player"
 * @returns 
 */
const condScore = function (objectiveIn, valueIn, ownerIn) {
  if (valueIn === undefined)
    valueIn = 0;

  if (ownerIn === undefined)
    ownerIn = 'player';

  return {
    type: 'minestuck:custom_score',
    objective_name: objectiveIn,
    value: valueIn,
    owner_name: ownerIn
  };
};

const trig = function (typeIn) {
  return {
    type: `minestuck:${typeIn}`
  };
};

const trigCommand = function (commandIn) {
  return {
    type: 'minestuck:command',
    command: commandIn
  };
};

/**
 * 
 * @param {*} itemIn 
 * @param {*} amountIn default value of 1
 * @returns 
 */
const trigTakeItem = function (itemIn, amountIn) {
  if (amountIn === undefined)
    amountIn = 1;

  return {
    type: 'minestuck:take_item',
    item: itemIn,
    amount: amountIn
  };
};

/**
 * 
 * @param {*} itemIn 
 * @param {*} amountIn default value of 1
 * @returns 
 */
const trigGiveItem = function (itemIn, amountIn) {
  if (amountIn === undefined)
    amountIn = 1;

  return {
    type: 'minestuck:give_item',
    item: itemIn,
    amount: amountIn
  };
};

const trigGiveLoot = function (lootTableIn) {
  return {
    type: 'minestuck:give_from_loot_table',
    loot_table: lootTableIn
  };
};

const trigSetPlayerDialogue = function (dialogueIn) {
  return {
    type: 'minestuck:set_player_dialogue',
    dialogue: dialogueIn
  };
};

/**
 * @param {string} responseMessageIn 
 * @param {string} nextDialogueIn already has namespace of "custom"
 * @param {[...condition]} conditionsIn 
 * @param {string} conditionListTypeIn  takes values of: "none", "all", "any"
 * @param {[...trigger]} triggersIn 
 * @param {boolean} hideIn 
 * @param {string} tooltipIn 
 * @returns 
 */
const resp = function (responseMessageIn, nextDialogueIn, conditionsIn, conditionListTypeIn, triggersIn, hideIn, tooltipIn) {
  return createExtendablePair([
    ['message', responseMessageIn],
    ['next_dialogue', `custom:${nextDialogueIn}`],
    ['condition', condList(conditionsIn, conditionListTypeIn)],
    ['triggers', triggersIn],
    ['hide_if_failed', hideIn],
    ['fail_tooltip', tooltipIn]
  ]);
};

const nodeData = function (messageIn, responsesIn) {
  return {
    message: messageIn,
    responses: responsesIn,
  };
};

const nodeDataMessages = function (messagesIn, responsesIn) {
  return {
    messages: messagesIn,
    responses: responsesIn,
  };
};

const messageDescription = function (messageIn, descriptionIn) {
  return [
    {
      type: 'entity',
      message: messageIn,
    },
    {
      type: 'description',
      message: descriptionIn,
    },
  ];
};

const messageCarapacian = function (messageIn) {
  return [
    {
      type: 'entity',
      message: 'minestuck.dots',
    },
    {
      type: 'description',
      message: messageIn,
    },
  ];
};

const newNodeCond = function (nodeDataIn, conditionsIn, conditionListTypeIn, conditionedNodeDataIn) {
  return {
    conditioned_nodes: [
      {
        condition: condList(conditionsIn, conditionListTypeIn),
        node: conditionedNodeDataIn,
      },
    ],
    default_node: nodeDataIn,
  };
};

const newNode = function (nodeDataIn) {
  return {
    node: nodeDataIn,
  };
};

const newDialogue = function (event, path_end, nodeIn) {
  event.json(`custom:minestuck/dialogue/${path_end}.json`, nodeIn);
};

const newSelectable = function (event, path_end) {
  event.json(`custom:minestuck/selectable_dialogue/${path_end}.json`, {
    condition: condTrue(),
    dialogue: `custom:${path_end}`,
    dialogue_weight: 10,
  });
};

const newSelectableWithDialogue = function (event, path_end, conditionsIn, conditionListTypeIn, nodeIn) {
  event.json(`custom:minestuck/selectable_dialogue/${path_end}.json`, {
    condition: condList(conditionsIn, conditionListTypeIn),
    dialogue: `custom:${path_end}`,
    dialogue_weight: 10,
  });

  event.json(`custom:minestuck/dialogue/${path_end}.json`, nodeIn);
};
