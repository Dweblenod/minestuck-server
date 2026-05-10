// priority: 30

/*ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "e2s2:shadow_crystal"
        },
        "weight": 500.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "season_x:osmium_round"
        },
        "weight": 250.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "season_x:uranium_round"
        },
        "weight": 250.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "season_x:atomic_round"
        },
        "weight": 350.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "season_x:godbreaker_round"
        },
        "weight": 500.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "e2s2:asterite_nugget"
        },
        "weight": 300.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "e2s2:sunbeam_nugget"
        },
        "weight": 280.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "e2s2:bedrock_shard"
        },
        "weight": 450.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "e2s2:nether_star_shard"
        },
        "weight": 320.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "malum:malignant_pewter_nugget"
        },
        "weight": 420.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "cataclysm:ancient_metal_nugget"
        },
        "weight": 450.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "cataclysm:black_steel_nugget"
        },
        "weight": 240.0
    })
    event.custom({
        "type": "ae2:matter_cannon",
        "ammo": {
            "item": "season_x:cueball_round"
        },
        "weight": 1000.0
    })
})*/

const generateAmmo = function (event) {
    console.log('Started generating custom data in ammo. If no finish log, then something may be broken!');

    new PotatoAmmo(['supplementaries:cannonball']).setDamage(8).setKnockback(1).setVelocMult(0.65).setReloadTicks(60).setSoundPitch(0.8)
        .setPath('create:create/potato_projectile/type/tnt') //replace create expanded potato cannon version
        .setEntityHit({
            "type": "create_expanded_potato_cannon:explosion",
            "radius": 4.0,
            "causes_fire": false,
            "interaction": "tnt"
        }).setBlockHit({
            "type": "create_expanded_potato_cannon:explosion",
            "radius": 4.0,
            "causes_fire": false,
            "interaction": "tnt"
        }).build(event);
    new PotatoAmmo('minestuck:fungal_spore').setKnockback(0.1).setVelocMult(1.05).setReloadTicks(60).setSplit(5).setSticky(true).setSoundPitch(0.8)
        .setEntityHit({
            "type": "create:potion_effect",
            "effect": "minecraft:poison",
            "level": 1,
            "recoverable": false,
            "ticks": 100
        }).build(event);

    /*
    newData(event, `create/potato_projectile/type/glizzy`,
        ammunitionWithEntityHit("mynethersdelight:roasted_sausage",
            5,
            0.1,
            {
                "type": "create:potion_effect",
                "effect": "minecraft:hunger",
                "level": 1,
                "recoverable": false,
                "ticks": 1
            },
            {
                "type": "create:tumble"
            },
            1,
            1,
            1,
            false,
            10
        )
    );
    newData(event, `create/potato_projectile/type/iron_rod`,
        ammunitionWithEntityHit("sillyworks:iron_rod",
            15,
            0.5,
            {
                "type": "create:potion_effect",
                "effect": "e2s2:bleed",
                "level": 1,
                "recoverable": false,
                "ticks": 100
            },
            {
                "type": "create:toward_motion",
                "spin": 0.0,
                "sprite_angle_offset": 140
            },
            1.3,
            1,
            1.3,
            false,
            20
        )
    );
    newData(event, `create/potato_projectile/type/rebar`,
        ammunitionWithEntityHit("tfmg:rebar",
            15,
            0.5,
            {
                "type": "create:potion_effect",
                "effect": "e2s2:bleed",
                "level": 1,
                "recoverable": false,
                "ticks": 150
            },
            {
                "type": "create:toward_motion",
                "spin": 0.0,
                "sprite_angle_offset": 140
            },
            1.3,
            1,
            1.3,
            false,
            20
        )
    );
    newData(event, `create/potato_projectile/type/netherite_rod`,
        ammunitionWithEntityHit("sillyworks:netherite_rod",
            40,
            0.5,
            {
                "type": "create:potion_effect",
                "effect": "e2s2:bleed",
                "level": 2,
                "recoverable": false,
                "ticks": 200
            },
            {
                "type": "create:toward_motion",
                "spin": 0.0,
                "sprite_angle_offset": 140
            },
            1.1,
            1,
            1.3,
            false,
            30
        )
    );
    newData(event, `create/potato_projectile/type/bedrock_rod`,
        ammunitionWithEntityHit("sillyworks:bedrock_rod",
            45,
            0.5,
            {
                "type": "create:potion_effect",
                "effect": "e2s2:bleed",
                "level": 3,
                "recoverable": false,
                "ticks": 250
            },
            {
                "type": "create:toward_motion",
                "spin": 0.0,
                "sprite_angle_offset": 140
            },
            1.1,
            1,
            1.3,
            false,
            30
        )
    );
    */

    console.log('Ending gen in ammo.');
};