// priority: 1

//check similarly named script in server for server/common configs
ClientEvents.loggedIn((event) => {
    //CONFIGS

    new DataModifier('kubejs/config/defaultoptions.txt')
        .createFile('modelPart_cape:false')
        .append('key_key.jei.toggleCheatMode:key.keyboard.unknown')
        .append('key_key.jei.cheatOneItem:key.keyboard.unknown')
        .append('key_key.jei.cheatOneItem2:key.keyboard.unknown')
        .append('key_key.jei.cheatItemStack:key.keyboard.unknown')
        .append('key_key.jei.cheatItemStack2:key.keyboard.unknown')
        .append('key_key.minestuck.captchalogue:key.keyboard.c')
        .append('key_key.parcool.Crawl:key.keyboard.x')
    //key_cos.key.opencosarmorinventory:key.keyboard.unknown
    //key_iris.keybind.reload:key.keyboard.unknown
    //key_iris.keybind.toggleShaders:key.keyboard.unknown

    new DataModifier('config/jei/jei-client.ini')
        .replaceValue('showTagRecipesEnabled = false', 'showTagRecipesEnabled = true')

    new DataModifier('config/minestuck-client.toml')
});