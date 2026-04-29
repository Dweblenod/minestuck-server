// priority: 25

/**
 * HI VIKSY
 * 
 * Check `temp.js` to learn more about the formatting and used of this file structure
 */


const generateGateways = function (event) {
    console.log('Started generating custom data in gateways. If no finish log, then something may be broken!');

    newDataFullPath(event, 'gateways:gateways/sealed_soul_of_tyros', {
        "rules": {
            "spawn_range": 0,
            "leash_range": 32,
            "allow_discarding": false,
            "allow_dim_change": false,
            "player_damage_only": true,
            "remove_mobs_on_failure": false,
            "fail_on_out_of_bounds": false,
            "spacing": 0,
            "follow_range_boost": 32,
            "default_drop_chance": 0,
            "requires_nearby_players": false,
            "lives": -1
        },
        "size": "large",
        "color": "#ff8777",
        "waves": [{
            "entities": [{
                "entity": "irons_spellbooks:fire_boss",
                "count": 1,
                "desc": "The Reborn, True Form of Tyros\, Supreme Flamebearer",
                "nbt": {
                    "CustomNameVisible": 1,
                    "CustomName": "{\"text\":\"Tyros, Supreme Flamebearer\"}"
                }
            }],
            "max_wave_time": 72000,
            "setup_time": 200,
            "modifiers": [{
                "attribute": "generic.attack_damage",
                "operation": "add_multiplied_total",
                "value": 0.5
            },
            {
                "attribute": "generic.attack_knockback",
                "operation": "add_multiplied_total",
                "value": 0.5
            },
            {
                "attribute": "generic.armor_toughness",
                "operation": "add_value",
                "value": 10
            },
            {
                "attribute": "irons_spellbooks:spell_power",
                "operation": "add_multiplied_total",
                "value": 0.50
            },
            {
                "attribute": "irons_spellbooks:spell_resist",
                "operation": "add_multiplied_total",
                "value": 0.50
            },
            {
                "attribute": "generic.armor",
                "operation": "add_value",
                "value": 10
            },
            {
                "attribute": "generic.knockback_resistance",
                "operation": "add_value",
                "value": 1
            },
            {
                "attribute": "generic.movement_speed",
                "operation": "add_multiplied_total",
                "value": 0.4
            },
            {
                "attribute": "generic.scale",
                "operation": "add_multiplied_total",
                "value": -0.4
            }
            ]
        }],
        "rewards": [{
            "type": "gateways:stack_list",
            "stacks": [{
                "id": "season_x:the_end",
                "optional": true,
                "count": 1
            }]
        }],
        "failures": [{
            "type": "gateways:explosion",
            "strength": 8,
            "fire": true,
            "block_damage": true
        }]
    });
    newDataFullPath(event, 'gateways:gear_sets/asterite', {
        "weight": 0,
        "quality": 0,
        "mainhands": [{
            "weight": 1,
            "stack": {
                "id": "ends_delight:dragon_tooth_knife"
            },
            "drop_chance": 0
        }
        ],
        "offhands": [{
            "weight": 1,
            "stack": {
                "id": "ends_delight:dragon_tooth_knife"
            },
            "drop_chance": 0
        }],
        "boots": [{
            "weight": 1,
            "stack": {
                "id": "e2s2:asterite_boots"
            },
            "drop_chance": 0
        }],
        "leggings": [{
            "weight": 1,
            "stack": {
                "id": "e2s2:asterite_leggings"
            },
            "drop_chance": 0
        }],
        "chestplates": [{
            "weight": 1,
            "stack": {
                "id": "e2s2:asterite_chestplate"
            },
            "drop_chance": 0
        }],
        "helmets": [{
            "weight": 1,
            "stack": {
                "id": "e2s2:asterite_helmet"
            },
            "drop_chance": 0
        }],
        "tags": []
    });
    newDataFullPath(event, 'gateways:gear_sets/dragon', {
        "weight": 0,
        "quality": 0,
        "mainhands": [{
            "weight": 1,
            "stack": {
                "id": "e2s2:dragon_sword"
            },
            "drop_chance": 0
        }
        ],
        "offhands": [{
            "weight": 1,
            "stack": {
                "id": "enderscape:kurodite_rubble_shield"
            },
            "drop_chance": 0
        }],
        "boots": [{
            "weight": 1,
            "stack": {
                "id": "e2s2:dragon_boots"
            },
            "drop_chance": 0
        }],
        "leggings": [{
            "weight": 1,
            "stack": {
                "id": "e2s2:dragon_leggings"
            },
            "drop_chance": 0
        }],
        "chestplates": [{
            "weight": 1,
            "stack": {
                "id": "e2s2:dragon_chestplate"
            },
            "drop_chance": 0
        }],
        "helmets": [{
            "weight": 1,
            "stack": {
                "id": "e2s2:dragon_helmet"
            },
            "drop_chance": 0
        }],
        "tags": []
    });
    newDataFullPath(event, 'gateways:gear_sets/heavy_leather', {
        "weight": 0,
        "quality": 0,
        "mainhands": [{
            "weight": 1,
            "stack": {
                "id": "twilightforest:seeker_bow",
                "components": {
                    "minecraft:enchantments": {
                        "levels": {
                            "minecraft:power": 2
                        }
                    }
                }
            },
            "drop_chance": 0
        }
        ],
        "boots": [{
            "weight": 1,
            "stack": {
                "id": "sillyworks:heavy_leather_boots"
            },
            "drop_chance": 0
        }],
        "leggings": [{
            "weight": 1,
            "stack": {
                "id": "sillyworks:heavy_leather_leggings"
            },
            "drop_chance": 0
        }],
        "chestplates": [{
            "weight": 1,
            "stack": {
                "id": "sillyworks:heavy_leather_chestplate"
            },
            "drop_chance": 0
        }],
        "tags": []
    });
    newDataFullPath(event, 'gateways:gear_sets/steel', {
        "weight": 0,
        "quality": 0,
        "mainhands": [{
            "weight": 1,
            "stack": {
                "id": "twilightforest:triple_bow",
                "components": {
                    "minecraft:enchantments": {
                        "levels": {
                            "minecraft:power": 3
                        }
                    }
                }
            },
            "drop_chance": 0
        }
        ],
        "offhands": [{
            "weight": 1,
            "stack": {
                "id": "alchemyexpanded:razor_shield"
            },
            "drop_chance": 0
        }],
        "boots": [{
            "weight": 1,
            "stack": {
                "id": "immersiveengineering:armor_steel_boots"
            },
            "drop_chance": 0
        }],
        "leggings": [{
            "weight": 1,
            "stack": {
                "id": "immersiveengineering:armor_steel_leggings"
            },
            "drop_chance": 0
        }],
        "chestplates": [{
            "weight": 1,
            "stack": {
                "id": "immersiveengineering:armor_steel_chestplate"
            },
            "drop_chance": 0
        }],
        "helmets": [{
            "weight": 1,
            "stack": {
                "id": "immersiveengineering:armor_steel_helmet"
            },
            "drop_chance": 0
        }],
        "tags": []
    });
    newDataFullPath(event, 'gateways:gear_sets/power_armor', {
        "weight": 0,
        "quality": 0,
        "mainhands": [{
            "weight": 1,
            "stack": {
                "id": "mekanism:electric_bow",
                "components": {
                    "minecraft:enchantments": {
                        "levels": {
                            "minecraft:power": 5
                        }
                    }
                }
            },
            "drop_chance": 0
        }
        ],
        "offhands": [{
            "weight": 1,
            "stack": {
                "id": "immersiveengineering:shield"
            },
            "drop_chance": 0
        }],
        "boots": [{
            "weight": 1,
            "stack": {
                "id": "sillyworks:power_armor_boots"
            },
            "drop_chance": 0
        }],
        "leggings": [{
            "weight": 1,
            "stack": {
                "id": "sillyworks:power_armor_leggings"
            },
            "drop_chance": 0
        }],
        "chestplates": [{
            "weight": 1,
            "stack": {
                "id": "sillyworks:power_armor_chestplate"
            },
            "drop_chance": 0
        }],
        "tags": []
    });
    newDataFullPath(event, 'gateways:gear_sets/suit', {
        "weight": 0,
        "quality": 0,
        "mainhands": [{
            "weight": 1,
            "stack": {
                "id": "alchemyexpanded:maneg",
                "components": {
                    "minecraft:enchantments": {
                        "levels": {
                            "minecraft:sharpness": 5
                        }
                    }
                }
            },
            "drop_chance": 0
        }],
        "offhands": [{
            "weight": 1,
            "stack": {
                "id": "alchemyexpanded:maneg",
                "components": {
                    "minecraft:enchantments": {
                        "levels": {
                            "minecraft:sharpness": 5
                        }
                    }
                }
            },
            "drop_chance": 0
        }],
        "boots": [{
            "weight": 1,
            "stack": {
                "id": "alchemyexpanded:suit_shoes"
            },
            "drop_chance": 0
        }],
        "leggings": [{
            "weight": 1,
            "stack": {
                "id": "alchemyexpanded:suit_pants"
            },
            "drop_chance": 0
        }],
        "chestplates": [{
            "weight": 1,
            "stack": {
                "id": "alchemyexpanded:suit_chest"
            },
            "drop_chance": 0
        }],
        "tags": []
    });
    newDataFullPath(event, 'gateways:gear_sets/ceramic', {
        "weight": 0,
        "quality": 0,
        "mainhands": [{
            "weight": 1,
            "stack": {
                "id": "alchemyexpanded:maneg",
                "components": {
                    "minecraft:enchantments": {
                        "levels": {
                            "minecraft:sharpness": 5
                        }
                    }
                }
            },
            "drop_chance": 0
        }],
        "offhands": [{
            "weight": 1,
            "stack": {
                "id": "alchemyexpanded:maneg",
                "components": {
                    "minecraft:enchantments": {
                        "levels": {
                            "minecraft:sharpness": 5
                        }
                    }
                }
            },
            "drop_chance": 0
        }],
        "boots": [{
            "weight": 1,
            "stack": {
                "id": "sillyworks:ceramic_boots"
            },
            "drop_chance": 0
        }],
        "leggings": [{
            "weight": 1,
            "stack": {
                "id": "sillyworks:ceramic_leggings"
            },
            "drop_chance": 0
        }],
        "chestplates": [{
            "weight": 1,
            "stack": {
                "id": "sillyworks:ceramic_chestplate"
            },
            "drop_chance": 0
        }],
        "helmets": [{
            "weight": 1,
            "stack": {
                "id": "sillyworks:ceramic_helmet"
            },
            "drop_chance": 0
        }],
        "tags": []
    });
    newDataFullPath(event, 'gateways:gateways/final_fight_rematch', {
        "rules": {
            "spawn_range": 0,
            "leash_range": 32,
            "allow_discarding": false,
            "allow_dim_change": false,
            "player_damage_only": true,
            "remove_mobs_on_failure": true,
            "fail_on_out_of_bounds": false,
            "spacing": 0,
            "follow_range_boost": 32,
            "default_drop_chance": 0,
            "requires_nearby_players": false,
            "lives": -1
        },
        "size": "large",
        "color": "#ffa764",
        "waves": [{
            "entities": [{
                "entity": "cataclysm:ignited_berserker",
                "count": 3
            },
            {
                "entity": "cataclysm:draugr",
                "count": 1
            },
            {
                "entity": "cataclysm:royal_draugr",
                "count": 1
            },
            {
                "entity": "cataclysm:elite_draugr",
                "count": 1
            }
            ],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "cataclysm:ignited_revenant",
                "count": 2
            },
            {
                "entity": "cataclysm:aptrgangr",
                "count": 1
            }
            ],
            "max_wave_time": 72000,
            "setup_time": 150
        },
        {
            "entities": [{
                "entity": "cataclysm:ignis",
                "count": 1
            },
            {
                "entity": "cataclysm:maledictus",
                "count": 1
            }
            ],
            "max_wave_time": 72000,
            "setup_time": 200
        }
        ],
        "rewards": [{
            "type": "gateways:stack_list",
            "stacks": [{
                "id": "cataclysm:ignitium_ingot",
                "optional": true,
                "count": 3
            },
            {
                "id": "cataclysm:cursium_ingot",
                "optional": true,
                "count": 3
            },
            {
                "id": "cataclysm:black_steel_block",
                "optional": true,
                "count": 2
            },
            {
                "id": "cataclysm:burning_ashes",
                "optional": true,
                "count": 4
            }
            ]
        }],
        "failures": [{
            "type": "gateways:explosion",
            "strength": 4,
            "fire": true,
            "block_damage": false
        }]
    });

    newDataFullPath(event, 'gateways:gateways/boss_rush', {
        "rules": {
            "spawn_range": 0,
            "leash_range": 32,
            "allow_discarding": false,
            "allow_dim_change": false,
            "player_damage_only": true,
            "remove_mobs_on_failure": true,
            "fail_on_out_of_bounds": false,
            "spacing": 0,
            "follow_range_boost": 32,
            "default_drop_chance": 0,
            "requires_nearby_players": false,
            "lives": -1
        },
        "size": "large",
        "color": "#463263",
        "waves": [{
            "entities": [{
                "entity": "twilightforest:lich",
                "count": 1
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "irons_spellbooks:dead_king",
                "count": 1
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "minecraft:wither",
                "count": 1
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "cataclysm:amethyst_crab",
                "count": 1
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "cataclysm:ender_guardian",
                "count": 1
            }],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "cataclysm:netherite_monstrosity",
                "count": 1
            }],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "cataclysm:the_harbinger",
                "count": 1,
                "nbt": {
                    "Is_Act": 1
                }
            }],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "cataclysm:ancient_remnant",
                "count": 1,
                "nbt": {
                    "has_necklace": 1
                }
            }],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "irons_spellbooks:fire_boss",
                "count": 1
            }],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "cataclysm:scylla",
                "count": 1
            }],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "cataclysm:ignis",
                "count": 1
            },
            {
                "entity": "cataclysm:maledictus",
                "count": 1
            }
            ],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            }],
            "max_wave_time": 72000,
            "setup_time": 100
        }
        ],
        "rewards": [{
            "type": "gateways:stack_list",
            "stacks": [{
                "id": "minestuckdungeons:zillium_block",
                "optional": true,
                "count": 1
            }]
        }],
        "failures": [{
            "type": "gateways:explosion",
            "strength": 4,
            "fire": true,
            "block_damage": false
        }]
    });
    newDataFullPath(event, 'gateways:gateways/the_skeleton_war', {
        "rules": {
            "spawn_range": 32,
            "leash_range": 64,
            "allow_discarding": true,
            "allow_dim_change": true,
            "player_damage_only": true,
            "remove_mobs_on_failure": false,
            "fail_on_out_of_bounds": false,
            "spacing": 0,
            "follow_range_boost": 32,
            "default_drop_chance": 0,
            "requires_nearby_players": false,
            "lives": -1
        },
        "size": "medium",
        "color": "#b4c5a9",
        "waves": [{
            "entities": [{
                "entity": "minecraft:skeleton",
                "count": 15
            }
            ],
            "rewards": [{
                "type": "gateways:entity_loot",
                "entity": "minecraft:skeleton",
                "rolls": 5
            }],
            "max_wave_time": 10000,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "minecraft:skeleton",
                "count": 8
            },
            {
                "entity": "minecraft:stray",
                "count": 8
            },
            {
                "entity": "minecraft:bogged",
                "count": 8
            },
            {
                "entity": "minecraft:wither_skeleton",
                "count": 4
            }],
            "modifiers": [{
                "attribute": "generic.max_health",
                "operation": "add_multiplied_total",
                "value": 0.15
            },
            {
                "attribute": "generic.armor",
                "operation": "add_value",
                "value": 2
            },
            {
                "attribute": "generic.knockback_resistance",
                "operation": "add_value",
                "value": 0.5
            },
            {
                "attribute": "generic.movement_speed",
                "operation": "add_multiplied_total",
                "value": 0.20
            }
            ],
            "rewards": [{
                "type": "gateways:entity_loot",
                "entity": "minecraft:skeleton",
                "rolls": 10
            }],
            "max_wave_time": 10000,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "minecraft:skeleton",
                "desc": "Riot Skeleton",
                "nbt": {
                    "CustomNameVisible": 1,
                    "CustomName": "{\"text\":\"Riot Skeleton\"}"
                },
                "modifiers": [{
                    "attribute": "generic.max_health",
                    "operation": "add_value",
                    "value": 40
                },
                {
                    "attribute": "generic.scale",
                    "operation": "add_multiplied_total",
                    "value": 0.20
                },
                {
                    "attribute": "generic.movement_speed",
                    "operation": "add_multiplied_total",
                    "value": -0.10
                },
                {
                    "type": "gateways:gear_set",
                    "gear_set": "gateways:heavy_leather"
                }
                ],
                "count": 4,
                "finalize_spawn": false
            },
            {
                "entity": "minecraft:skeleton",
                "count": 14
            },
            {
                "entity": "irons_spellbooks:necromancer",
                "count": 3
            }
            ],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            },
            {
                "type": "gateways:entity_loot",
                "entity": "minecraft:skeleton",
                "rolls": 15
            }],
            "max_wave_time": 10000,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "minecraft:wither_skeleton",
                "desc": "Assault Skeletrooper",
                "nbt": {
                    "CustomNameVisible": 1,
                    "CustomName": "{\"text\":\"Assault Skeletrooper\"}"
                },
                "modifiers": [{
                    "attribute": "generic.max_health",
                    "operation": "add_value",
                    "value": 80
                },
                {
                    "attribute": "generic.scale",
                    "operation": "add_multiplied_total",
                    "value": 0.30
                },
                {
                    "attribute": "generic.movement_speed",
                    "operation": "add_multiplied_total",
                    "value": -0.20
                },
                {
                    "type": "gateways:gear_set",
                    "gear_set": "gateways:steel"
                }
                ],
                "count": 4,
                "finalize_spawn": false
            },
            {
                "entity": "minecraft:wither_skeleton",
                "count": 20
            },
            {
                "entity": "irons_spellbooks:necromancer",
                "count": 10
            }
            ],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            },
            {
                "type": "gateways:entity_loot",
                "entity": "minecraft:skeleton",
                "rolls": 15
            }],
            "max_wave_time": 10000,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "minecraft:wither",
                "count": 3
            },
            {
                "entity": "irons_spellbooks:citadel_keeper",
                "count": 5
            }
            ],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            },
            {
                "type": "gateways:entity_loot",
                "entity": "minecraft:wither_skeleton",
                "rolls": 20
            }],
            "max_wave_time": 10000,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "minestuck:lich",
                "count": 20
            }
            ],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            },
            {
                "type": "gateways:entity_loot",
                "entity": "minecraft:wither_skeleton",
                "rolls": 20
            }],
            "max_wave_time": 10000,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "twilightforest:lich",
                "count": 3
            },
            {
                "entity": "minecraft:stray",
                "count": 10
            },
            {
                "entity": "minecraft:bogged",
                "count": 10
            },
            {
                "entity": "irons_spellbooks:citadel_keeper",
                "count": 5
            }
            ],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            },
            {
                "type": "gateways:entity_loot",
                "entity": "minecraft:wither_skeleton",
                "rolls": 20
            }],
            "max_wave_time": 10000,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "minecraft:wither_skeleton",
                "desc": "Necro-Paladin",
                "nbt": {
                    "CustomNameVisible": 1,
                    "CustomName": "{\"text\":\"Necro-Paladin\"}"
                },
                "modifiers": [{
                    "attribute": "generic.max_health",
                    "operation": "add_value",
                    "value": 130
                },
                {
                    "attribute": "generic.scale",
                    "operation": "add_multiplied_total",
                    "value": 0.50
                },
                {
                    "attribute": "generic.movement_speed",
                    "operation": "add_multiplied_total",
                    "value": -0.10
                },
                {
                    "type": "gateways:gear_set",
                    "gear_set": "gateways:power_armor"
                }
                ],
                "count": 4,
                "finalize_spawn": false
            },
            {
                "entity": "cataclysm:draugr",
                "count": 10
            },
            {
                "entity": "cataclysm:royal_draugr",
                "count": 5
            },
            {
                "entity": "cataclysm:elite_draugr",
                "count": 5
            }
            ],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            },
            {
                "type": "gateways:entity_loot",
                "entity": "minecraft:wither_skeleton",
                "rolls": 40
            }],
            "max_wave_time": 10000,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "minecraft:wither_skeleton",
                "desc": "Necro-Paladin",
                "nbt": {
                    "CustomNameVisible": 1,
                    "CustomName": "{\"text\":\"Necro-Paladin\"}"
                },
                "modifiers": [{
                    "attribute": "generic.max_health",
                    "operation": "add_value",
                    "value": 130
                },
                {
                    "attribute": "generic.scale",
                    "operation": "add_multiplied_total",
                    "value": 0.50
                },
                {
                    "attribute": "generic.movement_speed",
                    "operation": "add_multiplied_total",
                    "value": -0.10
                },
                {
                    "type": "gateways:gear_set",
                    "gear_set": "gateways:power_armor"
                }
                ],
                "count": 4,
                "finalize_spawn": false
            },
            {
                "entity": "cataclysm:koboleton",
                "count": 10
            },
            {
                "entity": "cataclysm:kobolediator",
                "count": 3
            },
            {
                "entity": "irons_spellbooks:citadel_keeper",
                "count": 5
            }
            ],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            },
            {
                "type": "gateways:entity_loot",
                "entity": "cataclysm:kobolediator",
                "rolls": 20
            }],
            "max_wave_time": 10000,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "minecraft:skeleton",
                "desc": "Bones Jones",
                "nbt": {
                    "CustomNameVisible": 1,
                    "CustomName": "{\"text\":\"Bones Jones\"}"
                },
                "modifiers": [{
                    "attribute": "generic.max_health",
                    "operation": "add_value",
                    "value": 480
                },
                {
                    "attribute": "generic.knockback_resistance",
                    "operation": "add_value",
                    "value": 1
                },
                {
                    "attribute": "generic.armor",
                    "operation": "add_value",
                    "value": 20
                },
                {
                    "attribute": "generic.attack_damage",
                    "operation": "add_value",
                    "value": 10
                },
                {
                    "attribute": "generic.armor_toughness",
                    "operation": "add_value",
                    "value": 20
                },
                {
                    "attribute": "generic.movement_speed",
                    "operation": "add_multiplied_total",
                    "value": 0.30
                },
                {
                    "type": "gateways:gear_set",
                    "gear_set": "gateways:suit"
                }
                ],
                "count": 1,
                "finalize_spawn": false
            }
            ],
            "max_wave_time": 10000,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "irons_spellbooks:dead_king",
                "count": 2
            },
            {
                "entity": "cataclysm:aptrgangr",
                "count": 2
            },
            {
                "entity": "irons_spellbooks:necromancer",
                "count": 10
            }
            ],
            "max_wave_time": 10000,
            "setup_time": 200
        }
        ],
        "rewards": [{
            "type": "gateways:stack_list",
            "stacks": [{
                "id": "e2s2:treasure_bag_wither",
                "count": 10
            },
            {
                "id": "minecraft:nether_star",
                "count": 5
            },
            {
                "id": "minecraft:skeleton_skull",
                "count": 50
            },
            {
                "id": "minecraft:wither_skeleton_skull",
                "count": 15
            }]
        }],
        "failures": []
    });
    newDataFullPath(event, 'gateways:gateways/ender_onslaught', {
        "rules": {
            "spawn_range": 16,
            "leash_range": 48,
            "allow_discarding": true,
            "allow_dim_change": false,
            "player_damage_only": true,
            "remove_mobs_on_failure": false,
            "fail_on_out_of_bounds": false,
            "spacing": 0,
            "follow_range_boost": 32,
            "default_drop_chance": 0,
            "requires_nearby_players": false,
            "lives": -1
        },
        "size": "medium",
        "color": "#8a34d1",
        "waves": [{
            "entities": [{
                "entity": "minecraft:endermite",
                "count": 8
            },
            {
                "entity": "enderscape:rubblemite",
                "count": 6
            },
            {
                "entity": "cataclysm:endermaptera",
                "count": 4
            }
            ],
            "rewards": [{
                "type": "gateways:entity_loot",
                "entity": "minecraft:enderman",
                "rolls": 5
            }],
            "max_wave_time": 2400,
            "setup_time": 100
        },
        {
            "entities": [{
                "entity": "minecraft:enderman",
                "count": 5
            }],
            "modifiers": [{
                "attribute": "generic.max_health",
                "operation": "add_multiplied_total",
                "value": 0.15
            },
            {
                "attribute": "generic.armor",
                "operation": "add_value",
                "value": 2
            },
            {
                "attribute": "generic.attack_damage",
                "operation": "add_multiplied_total",
                "value": 0.15
            },
            {
                "attribute": "generic.knockback_resistance",
                "operation": "add_value",
                "value": 0.05
            },
            {
                "attribute": "generic.movement_speed",
                "operation": "add_multiplied_total",
                "value": -0.20
            }
            ],
            "rewards": [{
                "type": "gateways:entity_loot",
                "entity": "minecraft:enderman",
                "rolls": 10
            }],
            "max_wave_time": 3600,
            "setup_time": 150
        },
        {
            "entities": [{
                "entity": "minecraft:enderman",
                "count": 3
            },
            {
                "entity": "endermanoverhaul:end_enderman",
                "count": 3
            },
            {
                "entity": "endermanoverhaul:end_islands_enderman",
                "count": 3
            }
            ],
            "modifiers": [{
                "attribute": "generic.max_health",
                "operation": "add_multiplied_total",
                "value": 0.20
            },
            {
                "attribute": "generic.armor",
                "operation": "add_value",
                "value": 3
            },
            {
                "attribute": "generic.attack_damage",
                "operation": "add_multiplied_total",
                "value": 0.20
            },
            {
                "attribute": "generic.knockback_resistance",
                "operation": "add_value",
                "value": 0.15
            },
            {
                "attribute": "generic.movement_speed",
                "operation": "add_multiplied_total",
                "value": -0.20
            }
            ],
            "rewards": [{
                "type": "gateways:entity_loot",
                "entity": "minecraft:enderman",
                "rolls": 15
            }],
            "max_wave_time": 3600,
            "setup_time": 200
        },
        {
            "entities": [{
                "entity": "minecraft:shulker",
                "count": 5
            },
            {
                "entity": "e2s2:ender_knight",
                "count": 2
            }

            ],
            "modifiers": [{
                "attribute": "generic.max_health",
                "operation": "add_multiplied_total",
                "value": 0.25
            }],
            "rewards": [{
                "type": "gateways:entity_loot",
                "entity": "minecraft:enderman",
                "rolls": 45
            }],
            "max_wave_time": 3600,
            "setup_time": 280
        },
        {
            "entities": [{
                "entity": "e2s2:ender_knight",
                "desc": "Ender Shinobi",
                "nbt": {
                    "CustomNameVisible": 1,
                    "CustomName": "{\"text\":\"Ender Shinobi\"}"
                },
                "modifiers": [{
                    "attribute": "generic.max_health",
                    "operation": "add_value",
                    "value": 6
                },
                {
                    "attribute": "generic.movement_speed",
                    "operation": "add_multiplied_total",
                    "value": 0.30
                },
                {
                    "type": "gateways:gear_set",
                    "gear_set": "gateways:asterite"
                }
                ],
                "count": 2,
                "finalize_spawn": false
            },
            {
                "entity": "minecraft:enderman",
                "count": 3
            }
            ],
            "modifiers": [{
                "attribute": "generic.max_health",
                "operation": "add_multiplied_total",
                "value": 0.20
            },
            {
                "attribute": "generic.armor",
                "operation": "add_value",
                "value": 5
            },
            {
                "attribute": "generic.attack_damage",
                "operation": "add_multiplied_total",
                "value": 0.50
            },
            {
                "attribute": "generic.knockback_resistance",
                "operation": "add_value",
                "value": 0.20
            }
            ],
            "rewards": [{
                "type": "gateways:experience",
                "experience": 500,
                "orb_size": 25
            }],
            "max_wave_time": 4800,
            "setup_time": 340
        },
        {
            "entities": [{
                "entity": "e2s2:ender_knight",
                "desc": "Dragon Knight",
                "nbt": {
                    "CustomNameVisible": 1,
                    "CustomName": "{\"text\":\"Dragon Knight\"}"
                },
                "modifiers": [{
                    "attribute": "generic.max_health",
                    "operation": "add_value",
                    "value": 10
                },
                {
                    "type": "gateways:gear_set",
                    "gear_set": "gateways:dragon"
                }
                ],
                "count": 2,
                "finalize_spawn": false
            },
            {
                "entity": "cataclysm:ender_golem",
                "count": 1
            }],
            "max_wave_time": 4800,
            "setup_time": 280
        }
        ],
        "rewards": [
            {
                "type": "gateways:entity_loot",
                "entity": "endermanoverhaul:crimson_forest_enderman",
                "rolls": 15
            },
            {
                "type": "gateways:entity_loot",
                "entity": "endermanoverhaul:warped_forest_enderman",
                "rolls": 15
            },
            {
                "type": "gateways:entity_loot",
                "entity": "endermanoverhaul:windswept_hills_enderman",
                "rolls": 15
            },
            {
                "type": "gateways:entity_loot",
                "entity": "endermanoverhaul:soulsand_valley_enderman",
                "rolls": 15
            },
            {
                "type": "gateways:entity_loot",
                "entity": "endermanoverhaul:coral_enderman",
                "rolls": 15
            },
            {
                "type": "gateways:entity_loot",
                "entity": "endermanoverhaul:snowy_enderman",
                "rolls": 15
            },
            {
                "type": "gateways:entity_loot",
                "entity": "endermanoverhaul:coral_enderman",
                "rolls": 15
            },
            {
                "type": "gateways:entity_loot",
                "entity": "endermanoverhaul:end_enderman",
                "rolls": 15
            },
            {
                "type": "gateways:entity_loot",
                "entity": "endermanoverhaul:end_islands_enderman",
                "rolls": 15
            },
            {
                "type": "gateways:stack_list",
                "stacks": [{
                    "id": "e2s2:asterite_template",
                    "count": 1
                },
                {
                    "id": "e2s2:dragon_template",
                    "count": 1
                },
                {
                    "id": "e2s2:modifier_template",
                    "count": 1
                }]
            }],
        "failures": []
    });
    newDataFullPath(event, 'gateways:gateways/basic/blaze', {});//blank entries to disable base gateways
    newDataFullPath(event, 'gateways:gateways/basic/enderman', {});
    newDataFullPath(event, 'gateways:gateways/basic/slime', {});
    newDataFullPath(event, 'gateways:gateways/endless/blaze', {});
    newDataFullPath(event, 'gateways:gateways/emerald_grove', {});
    newDataFullPath(event, 'gateways:gateways/overworldian_nights', {});
    newDataFullPath(event, 'gateways:gateways/hellish_fortress', {});

    console.log('Ending gen in gateways.');
};