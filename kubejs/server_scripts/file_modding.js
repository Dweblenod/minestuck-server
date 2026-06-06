// priority: 1

//check similarly named script in client for client configs
ServerEvents.loaded((event) => {
    //CONFIGS

    new DataModifier('config/ohmymeteors/ohmymeteors_config.yml')
        .replaceValue('announce_meteor_spawn:false', 'announce_meteor_spawn:true')
        .replaceValue('actionbar_announcements:true', 'actionbar_announcements:false')
        .replaceValue('area_explosion_sound:false', 'area_explosion_sound:true')
        .replaceValue('min_meteor_cooldown_time:20','min_meteor_cooldown_time:6')
        .replaceValue('spawn_dimensions:[minecraft:overworld, minecraft:the_end]', 'spawn_dimensions:[minecraft:overworld, minecraft:the_end, minestuck:veil, minestuck:skaia]')
        .replaceValue('max_meteors_in_shower:20', 'max_meteors_in_shower:30')

    new DataModifier('config/computercraft-server.toml')
        .replaceValue('max_requests = 16', 'max_requests = 12')
        .replaceValue('modem_range = 64', 'modem_range = 400')
        .replaceValue('modem_high_altitude_range = 384', 'modem_high_altitude_range = 4000')
        .replaceValue('modem_range_during_storm = 64', 'modem_range_during_storm = 300')
        .replaceValue('modem_high_altitude_range_during_storm = 384', 'modem_high_altitude_range_during_storm = 3000')

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
        'No migration necessary',
        '"type":"fluid_stack"',
        'Failed to load icon for pack',
        'FileNotFoundException: minecraft:models/compass_'
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

    new DataModifier('config/supplementaries-common.toml')
        .replaceValue('max_search_radius = 200', 'max_search_radius = 150')
        .replaceValue('creative_tab = false', 'creative_tab = true')

    new DataModifier('config/ubesdelight.json')
        .replaceValue('"generateWildGarlic": true', '"generateWildGarlic": false')
        .replaceValue('"generateWildGinger": true', '"generateWildGinger": false')













    //MCFUNCTIONS

    new DataModifier('kubejs/data/custom/function/world_top.mcfunction')
        .createFile('say test')
        .append('advancement revoke @a only custom:custom/world_top');
});