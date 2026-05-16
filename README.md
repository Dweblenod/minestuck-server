# Installation

Installation has been streamlined with this pack so that everything is in the same directory space!

- Find the .minecraft folder/directory in your computers files
- Select every folder in the same filepath as this instruction file (i.e. the folders called "mods"/"config"/"kubejs")
- Copy or drag all the selected folders over to .minecraft


You can of course install additional client side mods/content. The public server runs Simple Discord.


Problem solving:
- If the Minecraft launcher you are using to run this modpack has already been used for another pack, make sure there isnt any left over mods still in your mods folder
- Make sure you are using NeoForge version 21.1.228 (or whatever is specified on our website) and are in Minecraft version 1.21.1
- If you plan on playing on the server, do not manually download the mods if it can be helped and do not update mods unless they are client only!
- Try to avoid using the default Minecraft launcher. Instead use a launcher like MultiMC or Prism
- This pack is not compatible with Optifine, and has issues with Embeddium/NeOculus. If there is a recommended mod that allows shader, it will be included in the pack
- If KubeJS or configs do not appear correct, try copying the folders over to .minecraft again
- You may be able to improve the speed at which the modpack boots up by increasing the minimum memory allocation to at least 1 GB
- Some players may have difficulty connecting, or staying connected, to the server. Networking errors are mostly out of the servers control, but there are some general things you can do
  - Use "Direct Connection" in the multiplayer menu
  - Checking your personal firewall settings
  - Switching networks (moving your computer, stopping/starting use of a VPN, etc)
  - Using a wired/ethernet connection as opposed to relying on wifi
- The following mods are client only, and need to be removed if you are running on a dedicated server
  - temp
- Consider disabling the following mods if you are having trouble reaching the main menu or joining a server. You can reenable them one by one to determine which is causing issues. You can also go to the configs and disable EMI if it takes a long time to load.
  - temp



# Customization

- If there are configs that keep seeming to reset, check for a kubejs server script called config.js and edit values through that
- There may be mods and configs included in the download which have no effect out of the box.
Mods which are disabled have the filetype ending `.disabled`. To reenable them, simply rename the ending to `.jar`.
- Mod launchers like MultiMC have built in functionality to enable/disable mods without needing to manually rename.

## Mods

### AmbientSounds (disabled by default)
This mod does what it sounds like, and adds atmospheric sound effects to the game to make it feel more alive!

### DistantHorizons (disabled by default)
This mod allows for LODs. Allowing blocks in far away chunks to be viewed at a lower resolution!
It can be a source of lag and occassional crashes. Configs are available to change performance cost. It may be compatible with shaders!

### Ears
This mod makes use of blank space in your player skin file in order to render ears/claws/horns/tails/wings.
You can see the custom changes of others when in a server too!

[Create an Ears mod compatibile skin here!](https://ears.y2k.diy/manipulator/)

### Sound Physics Remastered (disabled by default)
This mod processes in-game sounds to make them echo or be muffled as if they are real sound waves!
It can be a source of lag. Configs are available to change performance cost.

## Shaders
There is support for Shaders through Iris HOWEVER they must not edit skyboxes significantly in order to be compatible. 
BSL and Complimentary are not compatible despite working with Iris/Distant Horizons as they ruin the End skybox and skyboxes in the Medium



# Incompatabilities

- Optifine is incompatible with mods in the pack and cannot be recommended
- Shaders which modify the skybox are likely to be incompatible. This includes BSL and Complimentary. They can cause issues in the Medium and in the End



# Contributing to the pack

Anyone can make suggestions for the modpack in the public Minestuck discord server, but to have a more direct effect on development/upkeep of the pack. Consider forking the Repository and making Pull Requests!

Rules/guidelines:
- If a config is going to be modified, first release a freshly created and unedited instance of the config files. This is important to establish a baseline of changes
- Dont include the actual mod files. Instead use a link to the mod page on Modrinth or Curseforge
- Commit messages do not have to be super precise, but give at least a vague idea of whats changing
- Make sure to check that the KubeJS scripts did not fail before creating a PR
- Try to make use of the helper functions for KubeJS. It helps with readability to have everything structured the same, and it makes it easier to adapt to changes between versions

https://github.com/Dweblenod/minestuck-server
