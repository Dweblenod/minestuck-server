// priority: 49

/**
 * NOTES AND INSTRUCTIONS
 * 
 * This script is intended to act as a blank template and instructional guide, primarily when it comes to creating a script that utilizes ServerEvents.generateData()
 * 
 * ALL server scripts should be given a priority, even if it doesnt use data gen
 * 
 * The server script `global_functions` is loaded first, and contains functions that are used across multiple scripts. If you dont see where a function was declared, thats where it came from!
 * Next comes all scripts with the actual meat
 * Then last should be `generate`. When it comes to ServerEvents.generateData(), we try not to call it multiple times. Instead their contents are turned into an object that executes within the script 'generate'
 * 
 * You MUST add the function below (generateTemp() in this case) to `generate.js`. Be sure to give it its own priority at the top of the file. This one has a priority of 49
*/


const generateTemp = function (event) {
  console.log('Started generating custom data in temp. If no finish log, then something may be broken!'); //Probably unneccesarry but I consider it good practice to start and end generateData() with logging. It may help with overall logging and error correction



  //Creates or replaces a tag at that exact path. In this case, it adds ignis to `team_maledictus` so maledictus doesnt attack it. Uses the global function `newTag()` so as not to write it all out by hand
  //newDataFullPath(event, `cataclysm:tags/entity_type/team_maledictus`, newTag(false, ["cataclysm:ignis"]));



  //Creates or replaces both a drilling recipe and ore vein recipe. In this case it replaces the default zinc recipe with one labelled limestone which gives 3 blocks of it. 
  //Whenever you see square brackets, that indicates that it is looking for a JSON array of inputs. In order to keep it clean, much of the time I replace raw JSON input with functions so its clear what you need and why.
  //itemOutputCount() is an example of raw JSON being replaced with a function. It is one of many global function representing some often used JSON object. Each function can be chained together within the array via a comma

  //newDrillingAndVein(event, 'zinc', 'Limestone', [itemOutputCount('create:limestone', 2)], 192, 120, 'minecraft:is_overworld', 3, 'create:limestone', 1768524180, 8, 136);



  //Creates a new dialogue and selectable dialogue. In this case its a consort themed dialogue option that can occur randomly as long as its in a Land (selectable dialogue allow it to be chosen at random). It has no responses or additional Conditions

  //newSelectableWithDialogue(event, 'consort/wire_magic', [cond('is_is_land')], 'any', newNode(nodeData('You better not go and tell me electricity isnt magic. What do you MEAN something can travel invisibly and without sound over a thousand miles within a second???', [])));



  console.log('Ending gen in temp.');
};