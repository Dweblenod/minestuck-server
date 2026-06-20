// priority: 1

ServerEvents.loaded((event) => {
    //files are copied unedited to kubejs/data and then edited here
    
    //none of this seems to work
    new DataModifier('kubejs/data/lostcities/lostcities/palettes/common.json')
        .replaceValue('minecraft:brewing_stand', 'powergrid:electric_fan')
        .replaceValue('minecraft:enchanting_table', 'computercraft:computer_advanced')
        //.replaceValue('minecraft:furnace[facing=north]', 'powergrid:heating_coil')
        .replaceValue('minecraft:ladder', 'createdeco:iron_ladder')
        //.replaceValue('minecraft:redstone_torch[lit=true]', 'powergrid:light_bulb')
        //.replaceValue('minecraft:glowstone', 'minestuck:cruxite_lamp[clicked=true]')

    new DataModifier('kubejs/data/lostcities/lostcities/palettes/default.json')
        .replaceValue('minecraft:furnace', 'powergrid:heating_coil')

    new DataModifier('kubejs/data/lostcities/lostcities/palettes/oilrig.json')
        .replaceValue('minecraft:ladder', 'createdeco:iron_ladder')
});