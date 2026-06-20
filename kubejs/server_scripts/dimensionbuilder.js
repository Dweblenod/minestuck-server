const $InfiniverseAPI = Java.loadClass("net.commoble.infiniverse.api.InfiniverseAPI");
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries");
const $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey");
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const $BuiltinDimensionTypes = Java.loadClass("net.minecraft.world.level.dimension.BuiltinDimensionTypes");
const $LevelStem = Java.loadClass("net.minecraft.world.level.dimension.LevelStem");
const $WorldPresets = Java.loadClass("net.minecraft.world.level.levelgen.presets.WorldPresets");

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("newoverworld")
            .then(Commands.argument('name', Arguments.STRING.create(event))
                .executes(ctx => {
                    const name = Arguments.STRING.getResult(ctx, "name");
                    const server = ctx.source.server;
                    build(server, name);
                    return 1;
                })
            )
    );
});

const build = function (server, name) {
    console.log(`starting new dimension creation!`);
    const path = $ResourceLocation.fromNamespaceAndPath("custom", name);
    const key = $ResourceKey.create($Registries.DIMENSION, path);

    const supplier = function () {
        const registryAccess = server.registryAccess();
        const dimTypeLookup = registryAccess.lookupOrThrow($Registries.DIMENSION_TYPE);
        const dimensionTypeHolder = dimTypeLookup.getOrThrow($BuiltinDimensionTypes.OVERWORLD);
        const chunkGenerator = $WorldPresets.getNormalOverworld(registryAccess).generator();
        return new $LevelStem(dimensionTypeHolder, chunkGenerator);
    };

    $InfiniverseAPI.get().getOrCreateLevel(server, key, supplier);
    console.log(`got or created dimension of key "${key}"`);
};