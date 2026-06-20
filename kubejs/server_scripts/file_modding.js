// priority: 1

//client configs done more manually due to FilesJS restrictions
ServerEvents.loaded((event) => {
    //CONFIGS

    new DataModifier('config/ohmymeteors/ohmymeteors_config.yml')
        .replaceValue('announce_meteor_spawn:false', 'announce_meteor_spawn:true')
        .replaceValue('actionbar_announcements:true', 'actionbar_announcements:false')
        .replaceValue('area_explosion_sound:false', 'area_explosion_sound:true')
        .replaceValue('min_meteor_cooldown_time:20', 'min_meteor_cooldown_time:6')
        .replaceValue('spawn_dimensions:[minecraft:overworld, minecraft:the_end]', 'spawn_dimensions:[minecraft:overworld, minecraft:the_end, minestuck:veil, minestuck:skaia]')
        .replaceValue('max_meteors_in_shower:20', 'max_meteors_in_shower:30')

    new DataModifier('config/Butchery-LITE.toml')
        .replaceValue('"First Join Book" = true', '"First Join Book" = false')
        //.replaceValue('"Only Cleavers Drop Carcasses" = true', '"Only Cleavers Drop Carcasses" = false')
        .replaceValue('"Farmers Delight" = false', '"Farmers Delight" = true')
        .replaceValue('Carcass" = true', 'Carcass" = false') //carcasses are dropped through loot.js
        .replaceValue('Rabbit = true', 'Rabbit = false')

    new DataModifier('config/computercraft-server.toml')
        .replaceValue('max_requests = 16', 'max_requests = 12')
        .replaceValue('modem_range = 64', 'modem_range = 400')
        .replaceValue('modem_high_altitude_range = 384', 'modem_high_altitude_range = 4000')
        .replaceValue('modem_range_during_storm = 64', 'modem_range_during_storm = 300')
        .replaceValue('modem_high_altitude_range_during_storm = 384', 'modem_high_altitude_range_during_storm = 3000')

    new DataModifier('config/createcybernetics-common.toml')
        .replaceValue('tattooUploadMode = "OP_ONLY_AUTO_APPROVE"', 'tattooUploadMode = "ANY_PLAYER_PENDING_APPROVAL"')

    new DataModifier('config/emi.css')
        .replaceValue('cheat-mode: creative', 'cheat-mode: false')

    new DataModifier('config/extradelight-common.toml')
        .replaceValue('mintSpreadRate = 6', 'mintSpreadRate = 1')
        .replaceValue('allYearSpooky = false', 'allYearSpooky = true')

    new DataModifier('config/ftbchunks-world.snbt')
        .replaceValue('claim_dimension_blacklist: [ ]', 'claim_dimension_blacklist: ["minecraft:overworld" ]')
        .replaceValue('party_limit_mode: "largest"', 'party_limit_mode: "sum"')
        .replaceValue('max_force_loaded_chunks: 25', 'max_force_loaded_chunks: 1')

    new DataModifier('config/jei-server.toml')
        .replaceValue('enableCheatModeForCreative = true', 'enableCheatModeForCreative = false')

    var logbegone = new JsonBuilder([
        'Disconnecting VANILLA connection attempt',
        'Channels ',
        'specified shader program',
        'artifacts:',
        'railways:track_natures',
        'railways:track_byg',
        'railways:blocks/track_byg',
        'railways:blocks/track_natures',
        'casualness_delight',
        'cold_sweat',
        'aether',
        'just_blahaj',
        'northstar',
        'irons_spellbooks',
        'create_enchantment_industry',
        'allthetweaks',
        'No migration necessary',
        '"type":"fluid_stack"',
        'Failed to load icon for pack',
        'FileNotFoundException: minecraft:models/compass_',
        'minecraft:0block/acacia_planks',
        'FileNotFoundException: compendium',
        'Exception loading blockstate definition',
        'ravager_carcass',
        'Invalid path in pack',
        'Skipping entity cyberware roll',
        'unknown protocol: jij',
        'Failed to get Road Sign Block Entity during generation',
        'Failed to create block entity minecraft:sign',
        'Failed to create block entity minecraft:mob_spawner'
    ]).build();
    new DataModifier('config/logbegone.json')
        .replaceJsonField(
            'logbegone',
            new JsonBuilder()
                .setField('phrases', logbegone)
                .setField('regex', logbegone)
                .build()
        )

    new DataModifier('config/minestuck-server.toml')
        .replaceValue('globalSession = false', 'globalSession = true')
        .replaceValue('dataCheckerPermission = "OPS_OR_GAMEMODE"', 'dataCheckerPermission = "ANYONE"')
        .replaceValue('puzzleBlockTickRate = 6', 'puzzleBlockTickRate = 7')
        .replaceValue('statStorerRadius = 10', 'statStorerRadius = 8')
        .replaceValue('forbiddenWorldsTpz = []', 'forbiddenWorldsTpz = ["minestuck:prospit"]')

    new DataModifier('config/parcool-server.toml')
        .replaceValue('allow_infinite_stamina = true', 'allow_infinite_stamina = false')

    new DataModifier('config/salts_animal_farm.json')
        .replaceValue('"minimumWeight": 1', '"minimumWeight": 0')
        .replaceValue('"maximumWeight": 8', '"maximumWeight": 6')
        .replaceValue('"loseWeightWhenWitnessingAnimalDeath": false', '"loseWeightWhenWitnessingAnimalDeath": true')
        .replaceValue('"allowNonBredAnimalsToBecomeSick": false', '"allowNonBredAnimalsToBecomeSick": true')
        .replaceValue('"hostileScanIntervalTicks": 40', '"hostileScanIntervalTicks": 70')
        .replaceJsonField(
            'Farm Animals',
            new JsonBuilder([])
                .addObject("minecraft:cow")
                .addObject("minecraft:mooshroom")
                .addObject("minecraft:pig")
                .addObject("minecraft:sheep")
                .addObject("minecraft:chicken")
                .addObject("minecraft:rabbit")
                .addObject("minecraft:goat") //did not have goat
                .build()
        )

    const solBenefit = function (thresholdIn, benefitIn) {
        return {
            "threshold": thresholdIn,
            "benefit": benefitIn
        }
    }
    var solHealth = "{key:\"minecraft:generic.max_health\",op:0,type:\"att\",val:1.0d}";
    var solStamina = "{key:\"parcool:max_stamina\",op:0,type:\"att\",val:750.0d}";
    new DataModifier('config/solonion.json')
        .replaceJsonField(
            'benefits',
            new JsonBuilder([])
                .addObject(solBenefit(3, solHealth))
                .addObject(solBenefit(5, solHealth))
                .addObject(solBenefit(7, solStamina))
                .addObject(solBenefit(10, solHealth))
                .addObject(solBenefit(13, solHealth))
                .addObject(solBenefit(18, solStamina))
                .addObject(solBenefit(25, solHealth))
                .addObject(solBenefit(31, solHealth))
                .addObject(solBenefit(36, solStamina))
                .addObject(solBenefit(40, solHealth))
                .addObject(solBenefit(43, solHealth))
                .build()
        )

    //modified manually and then copied in here
    //no villagers/illagers
    new DataModifier('config/structurify.json')
        .replaceJsonField(
            'structure_sets',
            new JsonBuilder([
                {
                    "spacing": 16,
                    "separation": 4,
                    "name": "ae2:meteorite",
                    "is_disabled": false,
                    "salt": 124895654,
                    "frequency": 1.0,
                    "override_global_spacing_and_separation_modifier": false,
                    "structure_weights": {
                        "ae2:meteorite": 1
                    }
                },
                {
                    "spacing": 48,
                    "separation": 8,
                    "name": "minecraft:desert_pyramids",
                    "is_disabled": false,
                    "salt": 14357617,
                    "frequency": 1.0,
                    "override_global_spacing_and_separation_modifier": false,
                    "structure_weights": {
                        "minecraft:desert_pyramid": 1
                    }
                },
                {
                    "spacing": 48,
                    "separation": 8,
                    "name": "minecraft:jungle_temples",
                    "is_disabled": false,
                    "salt": 14357619,
                    "frequency": 1.0,
                    "override_global_spacing_and_separation_modifier": false,
                    "structure_weights": {
                        "minecraft:jungle_pyramid": 1
                    }
                },
                {
                    "spacing": 32,
                    "separation": 8,
                    "name": "minecraft:pillager_outposts",
                    "is_disabled": true,
                    "salt": 165745296,
                    "frequency": 0.2,
                    "override_global_spacing_and_separation_modifier": false,
                    "structure_weights": {
                        "minecraft:pillager_outpost": 1
                    }
                },
                {
                    "spacing": 34,
                    "separation": 8,
                    "name": "minecraft:villages",
                    "is_disabled": true,
                    "salt": 10387312,
                    "frequency": 1.0,
                    "override_global_spacing_and_separation_modifier": false,
                    "structure_weights": {
                        "minecraft:village_snowy": 1,
                        "minecraft:village_plains": 1,
                        "minecraft:village_taiga": 1,
                        "minecraft:village_savanna": 1,
                        "minecraft:village_desert": 1
                    }
                },
                {
                    "spacing": 80,
                    "separation": 20,
                    "name": "minecraft:woodland_mansions",
                    "is_disabled": true,
                    "salt": 10387319,
                    "frequency": 1.0,
                    "override_global_spacing_and_separation_modifier": false,
                    "structure_weights": {
                        "minecraft:mansion": 1
                    }
                }
            ]).build()
        )

    new DataModifier('config/supplementaries-common.toml')
        .replaceValue('max_search_radius = 200', 'max_search_radius = 150')
        .replaceValue('creative_tab = false', 'creative_tab = true')













    //MCFUNCTIONS

    new DataModifier('kubejs/data/custom/function/world_top.mcfunction')
        .createFile('say test')
        .append('advancement revoke @a only custom:custom/world_top');
});