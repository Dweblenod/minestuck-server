// priority: 14

ServerEvents.tags('item', event => {
    global.REMOVED_FROM_TAGS.forEach(entry => {
        event.removeAllTagsFrom(entry);
    });

    event.add('c:foods/vegetable', 'peruviansdelight:aji_amarillo');
    event.add('c:foods/vegetable', 'peruviansdelight:camote');
    event.add('c:foods/vegetable', 'peruviansdelight:yuca');
    event.add('c:foods/vegetable', 'peruviansdelight:palta_cortada');

    event.add('c:fat', 'extradelight:butter');
    event.add('c:heart', 'peruviansdelight:beef_heart');
    event.add('c:heart', 'createcybernetics:bodypart_heart');
    event.add('c:offal', 'createcybernetics:ground_offal');
    event.add('c:liver', 'createcybernetics:bodypart_liver');
    event.add('c:brain', 'createcybernetics:bodypart_brain');
    event.add('c:beef/cubed/raw', 'farmersdelight:minced_beef');
    event.add('c:beef/roast', 'minecraft:cooked_beef');
    event.add('c:beef/scrap', 'farmersdelight:minced_beef');
    event.add('c:beef/oxtail', 'minecraft:beef');
    event.add('c:chicken/wing/cooked', 'farmersdelight:cooked_chicken_cuts');
    event.add('c:chicken/breast/raw', 'farmersdelight:chicken_cuts');
    event.add('c:chicken/cubed/raw', 'farmersdelight:chicken_cuts');
    event.add('c:chicken/thigh/raw', 'farmersdelight:chicken_cuts');
    event.add('c:mutton/ribs', 'farmersdelight:mutton_chops');
    event.add('c:mutton/cooked', '#c:foods/cooked_mutton');
    event.add('c:pork/roast', 'minecraft:porkchop');
    event.add('c:pork/ground/raw', 'minecraft:porkchop');
    event.add('c:pork/scrap/cooked', 'peruviansdelight:chuleta_cortada');
    event.add('c:sausage/raw', 'createcybernetics:andoille_sausage');
    event.add('c:sausage/raw', 'mynethersdelight:hoglin_sausage');
    event.add('c:sausage/cooked', 'createcybernetics:roasted_andouille');
    event.add('c:sausage/cooked', '#c:foods/cooked_sausage');
    event.add('c:sausage', '#c:sausage/raw');
    event.add('c:sausage', '#c:sausage/cooked');
    event.add('c:meat/ribs/raw', 'farmersdelight:mutton_chops');
    event.add('c:meat/roast/raw', 'minecraft:beef');
    event.add('c:meat/roast/raw', 'minecraft:mutton');

    event.add('c:foods/milk', '#c:drinks/milk');

    event.add('c:tools/hammer', 'butchery_lite:bone_hammer');
    event.add('c:tools/hammer', 'butchery_lite:copper_hammer');
    event.add('c:tools/hammer', 'butchery_lite:iron_hammer');
    event.add('c:tools/hammer', 'butchery_lite:diamond_hammer');
    event.add('c:tools/hammer', 'butchery_lite:gold_hammer');
    event.add('c:tools/hammer', 'butchery_lite:netherite_hammer');
    
    event.add('curios:ring', 'minestuck:black_queens_ring')
    event.add('curios:ring', 'minestuck:white_queens_ring')

    //newDataFullPath(event, 'c:tags/item/tea_ingredients', newTag(false, ['nomansland:thistle']));
})

ServerEvents.tags('entity_type', event => {
    /*// 3, like witch
    event.add('custom:tiny_exp_enemy', 'cataclysm:drowned_host', 'cataclysm:endermaptera', 'cataclysm:the_watcher');

    //5
    event.add('custom:small_exp_enemy', 'cataclysm:draugr', 'cataclysm:royal_draugr', 'cataclysm:cindaria',
        'cataclysm:deepling', 'cataclysm:deepling_angler', 'cataclysm:koboleton',
        'irons_spellbooks:cultist', 'irons_spellbooks:necromancer');

    // 10, like ravager
    event.add('custom:medium_exp_enemy', 'cataclysm:elite_draugr', 'cataclysm:coral_golem', 'cataclysm:hippocamtus',
        'cataclysm:deepling_brute', 'cataclysm:deepling_priest', 'cataclysm:deepling_warlock', 'cataclysm:ignited_berserker',
        'cataclysm:ignited_revenant', 'irons_spellbooks:citadel_keeper', 'irons_spellbooks:cryomancer', 'irons_spellbooks:pyromancer',
        'irons_spellbooks:archevoker', 'immersiveengineering:commando', 'immersiveengineering:fusilier');

    // 75
    event.add('custom:large_exp_enemy', 'cataclysm:amethyst_crab', 'cataclysm:aptrgangr', 'cataclysm:coralssus',
        'cataclysm:kobolediator', 'cataclysm:wadjet', 'cataclysm:the_prowler');

    // 125
    event.add('custom:huge_exp_enemy', 'cataclysm:clawdian');*/

    // These bosses spawn together in twilight final castle in Skaia. Structures are left behind in dimensions and have trial spawners with fun stuff
    //event.add('cataclysm:team_ignis', 'cataclysm:maledictus')
    //newDataFullPath(event, 'cataclysm:tags/entity_type/team_maledictus', newTag(false, ['cataclysm:ignis']));
})

ServerEvents.tags('fluid', event => {
  event.add('c:blood', 'minestuck:blood')
  event.add('c:blood', 'butchery_lite:blood')
})