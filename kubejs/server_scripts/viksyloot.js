LootJS.lootTables((event) => {
    event.getLootTable('e2s2:chests/wither_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('minestuck:starshard_tri_blade')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('endrem:wither_eye')).rolls([1, 1]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('ends_delight:non_hatchable_dragon_egg')).rolls([0, 3]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('ends_delight:dragon_leg')).rolls([1, 2]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('ends_delight:raw_dragon_meat')).rolls([6, 8]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('ends_delight:dragon_tooth')).rolls([0, 4]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('irons_spellbooks:dragonskin')).rolls([4, 8]);
    });
    event.getLootTable('e2s2:chests/dragon_treasure').createPool((pool) => {
        pool.addEntry(LootEntry.of('minestuck:basilisk_breath_dragonslayer')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('e2s2:dragon_stone')).rolls([0, 1]);
    });
    event.create('custom:chests/meteor_lab/all').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/ecto')).rolls([1, 3]);
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/supplies')).rolls([1, 4]);
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/parts')).rolls([1, 3]);
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/electronics')).rolls([1, 2]);
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/misc')).rolls([1, 5]);
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/sburb')).rolls([0, 1]);
    });
    event.create('custom:chests/meteor_lab/ecto').createPool((pool) => {
        pool.addEntry(LootEntry.of('minestuck:computer_parts')).rolls([1, 3]);
        pool.addEntry(LootEntry.of('minestuck:completed_sburb_code')).rolls([1, 1]);
        pool.addEntry(LootEntry.of('minestuckdungeons:build_block')).rolls([1, 3]);
        pool.addEntry(LootEntry.of('create_things_and_misc:slime_bucket')).rolls([1, 1]);
        pool.addEntry(LootEntry.of('minecraft:slime_block')).rolls([1, 4]);
    });
    event.create('custom:chests/meteor_lab/supplies').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:bread')).rolls([0, 6]);
        pool.addEntry(LootEntry.of('alchemyexpanded:dito')).rolls([0, 2]);
        pool.addEntry(LootEntry.of('alchemyexpanded:ammo')).rolls([0, 3]);
        pool.addEntry(LootEntry.of('alchemyexpanded:flare')).rolls([0, 1]);
    });
    event.create('custom:chests/meteor_lab/parts').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:redstone')).rolls([3, 6]);
        pool.addEntry(LootEntry.of('minecraft:iron_ingot')).rolls([1, 4]);
        pool.addEntry(LootEntry.of('dndecor:industrial_cogwheel')).rolls([1, 6]);
        pool.addEntry(LootEntry.of('tfmg:copper_wire')).rolls([1, 6]);
        pool.addEntry(LootEntry.of('tfmg:cast_iron_pipe')).rolls([1, 2]);
    });
    event.create('custom:chests/meteor_lab/electronics').createPool((pool) => {
        pool.addEntry(LootEntry.of('sillyworks:basic_processor')).rolls([1, 2]);
        pool.addEntry(LootEntry.of('minestuck:battery')).rolls([1, 4]);
        pool.addEntry(LootEntry.of('tfmg:capacitor_item')).rolls([1, 2]);
        pool.addEntry(LootEntry.of('tfmg:resistor')).rolls([1, 2]);
        pool.addEntry(LootEntry.of('tfmg:transistor_item')).rolls([1, 2]);
        pool.addEntry(LootEntry.of('sillyworks:vacuum_tube')).rolls([1, 2]);
    });
    event.create('custom:chests/meteor_lab/misc').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/captcha_codes')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:uranium_powered_stick')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:blank_disk')).rolls([0, 2]);
        pool.addEntry(LootEntry.of('alchemyexpanded:gun_parts')).rolls([0, 3]);
        pool.addEntry(LootEntry.of('minestuck:captcha_card')).rolls([3, 8]);
    });
    event.create('custom:chests/meteor_lab/sburb').createPool((pool) => {
        pool.addEntry(LootEntry.of('minestuck:platform_receptacle')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:platform_generator')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:trajector_block')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:skaianet_denier')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('minestuck:holopad')).rolls([1, 1]);
        pool.addEntry(LootEntry.of('computercraft:computer_normal')).rolls([1, 1]);
        pool.addEntry(LootEntry.of('minestuck:ancient_thumb_drive')).rolls([0, 1]);
        pool.addEntry(LootEntry.of('alchemyexpanded:green_sun_book')).rolls([1, 1]);
    });
    event.create('custom:chests/meteor_lab/all/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/all')).rolls([2, 8]);
    });
    event.create('custom:chests/meteor_lab/ecto/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/ecto')).rolls([2, 8]);
    });
    event.create('custom:chests/meteor_lab/supplies/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/supplies')).rolls([6, 12]);
    });
    event.create('custom:chests/meteor_lab/parts/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/parts')).rolls([2, 8]);
    });
    event.create('custom:chests/meteor_lab/electronics/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/electronics')).rolls([2, 8]);
    });
    event.create('custom:chests/meteor_lab/misc/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/misc')).rolls([1, 3]);
    });
    event.create('custom:chests/meteor_lab/sburb/stocked').createPool((pool) => {
        pool.addEntry(LootEntry.reference('custom:chests/meteor_lab/sburb')).rolls([6, 8]);
    });
});