// priority: 16

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