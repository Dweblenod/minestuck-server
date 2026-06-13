// priority: 1

//check similarly named script in server for server/common configs
ClientEvents.loggedIn((event) => {
    //CONFIGS

    //kubejs defaultoptions.txt is defined manually at kubejs/config/

    new DataModifier('config/jei/cosycritters.json')
        .replaceValue('"#c:is_jungle",', '"#c:is_jungle", #c:is_plains,')

    new DataModifier('config/DistantHorizons.toml')
        .replaceValue('enableAutoUpdater = true', 'enableAutoUpdater = false')

    new DataModifier('config/emi.css')
        .replaceValue('effect-location: top', 'effect-location: right-compressed')

    new DataModifier('config/jei/jei-client.ini')
        .replaceValue('showTagRecipesEnabled = false', 'showTagRecipesEnabled = true')

    new DataModifier('config/minestuck-client.toml')
});