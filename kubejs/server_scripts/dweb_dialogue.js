// priority: 20

const generateDwebDialogue = function (event) {
  console.log('Started generating custom data in dweb_dialogue. If no finish log, then something may be broken!');


  newTextFullPath(event, 'computercraft:lua/rom/skaianet-4.13.0.0.1-log',
    `
[Skaianet.main/]: Scrying Furthest Ring
[Skaianet.main/]: Transforming Soffits
[Skaianet.main/]: Reorganizing Keys
[Skaianet.main/]: Formalizing Immersion Joints
[Skaianet.main/]: Justifying Kick Extractors
[Skaianet.main/]: Advising Aggregates
[Skaianet.main/]: Managing Elbows
[Skaianet.main/]: Recasting Connectors
[Skaianet.main/]: Achieving Aluminum Trowels
[Skaianet.main/]: Officiating Disks
[Skaianet.main/]: Exhibiting Absolute Spigots
[Skaianet.main/]: Progressing Coil Hydrants
[Skaianet.main/]: Jerry-building Reflectors
[Skaianet.main/]: Informing Casters
[Skaianet.main/]: Inventing Rubber Hoists
[Skaianet.main/]: Performing Wrenches
[Skaianet.main/]: Judging Chalk Adapters
[Skaianet.main/]: Handover to ipwrangler
[Skaianet.ipwrangler/]: Attempting connection to 237.50.210.161
[Skaianet.main/]: Upgrading Ignition Paths
[Skaianet.ipwrangler/]: Attempting connection to 237.50.210.161:26935
[Skaianet.main/]: Regrowing Flashing
[Skaianet.main/]: Network frozen on ipwrangler! Removing Session
[Skaianet.ipwrangler/]: Establishment failed, dumping crash report to /modules/skaianet/crash-report/ipwranglershitass-612.txt`
  );

  newTextFullPath(event, 'computercraft:lua/rom/modules/skaianet/crash-report/ipwranglershitass-612',
    `
NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL
NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL
NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL
NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL
NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL
NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL
Critical error in hardware! Shutting down
all systems. Last stored message:
Discovered last remaining server operational in
The Veil. Will use to establish connection to
Overworld. 

No one gets one over on me.
  `
  );

  newTextFullPath(event, 'computercraft:lua/rom/modules/skaianet/notes/delete_or_queen_will_have_your_ass',
    `
Note to self, dont store information here. May end
up embedded in OS if forgotten!

We have recently made breakthroughs in deciphering
the frog temple code. One specific section has
been of particular interest. 
Within this section, there are exons, coding
regions of nucleotides, which correspond to item 
captchalogue codes. We dont have digital copies
anymore, so someone needs to collect the printed
paper copies which unintentionally were distributed
across the kingdom. If you do find the papers, 
look for any which are on Chromosome 5 and follow 
the captchalogue character to codon mapping.

A=GCT,B=GCA,C=TGT,D=GAT,E=GAA,F=TTT,G=GGT,H=CAT,
I=ATT,J=GGA,K=AAA,L=TTA,M=AGC,N=AAT,O=CTA,P=CCT,
Q=CAA,R=CGT,S=TCT,T=ACT,U=AGA,V=GTT,W=TGG,X=AGT,
Y=TAT,Z=ATA,a=GCC,b=GCG,c=TGC,d=GAC,e=GAG,f=TTC,
g=GGC,h=CAC,i=ATC,j=GGG,k=AAG,l=TTG,m=ACA,n=AAC,
o=CTG,p=CCC,q=CAG,r=CGC,s=TCC,t=ACC,u=TGA,v=GTC,
w=TAG,x=AGT,y=TAC,z=CTC,0=GTA,1=CGG,2=TCG,3=ACG,
4=GTG,5=CTT,6=CCA,7=CGA,8=TCA,9=UUU,!=AUA,?=GUG

The message will exist as a valid amino acid
sequence where it must start with 
Start Codon (ATG) and end with Stop Codon (TAG). 
All 6 reading frames may be used. 

If checking reverse reading frame, use other strand
and convert using following: A=>T, T=>A, C=>G, G=>C
  `
  );




  // carapacian ============================================================================================================================================

  newSelectableWithDialogue(event, 'carapacian/battlefront_news/start',
    [cond('is_is_land')], 'any',
    newNode(nodeDataMessages(
      messageCarapacian('They ask if youve heard anything new about the war. Nobody knows anything. They look incredibly tired'),
      [
        resp('What war?',
          'carapacian/battlefront_news/explain_war'),
        resp('Prospit has been invaded by order of the Dersite usurpers', 'carapacian/battlefront_news/knew_it',
          [{ type: 'player_advancement', advancement_id: 'custom:custom/enter_prospit' }], 'all',
          [],
          true),
      ],
    )));

  newDialogue(event, 'carapacian/battlefront_news/explain_war',
    newNode(nodeDataMessages(
      messageCarapacian('They look exasperated and sigh before getting in to it. The war between Prospit and Derse was continuing as normal until recently when suddenly all hell broke loose. Communication networks went down and everyone was left to fend for themselves.'),
      [resp('Goodbye')],
    )));

  newDialogue(event, 'carapacian/battlefront_news/knew_it',
    newNode(nodeDataMessages(
      messageCarapacian('Their eyes fall. It seems like they were expecting this news.'),
      [resp('Goodbye')],
    )));

  newDialogue(event, 'carapacian/terminal_mention',
    newNode(nodeDataMessages(
      messageCarapacian('They tell you that theyve heard of laboratories in The Veil containing monitoring screens that can view almost anywhere. But they arent sure if this meteor has one or not.'),
      [],
    )));

  /*

  */





  // consort ================================================================================================================================================

  newSelectableWithDialogue(event, 'consort/wire_magic', [cond('is_is_land')], 'any', newNode(nodeData('You better not go and tell me electricity isnt magic. What do you MEAN something can travel invisibly and without sound over a thousand miles within a second???', [])));
  newSelectableWithDialogue(event, 'consort/describe_lich', [cond('is_is_land')], 'any', newNode(nodeData('Theres large towers you can come across every once in a while. A buddy of mine said there something called the “Lich” at the top. Do you think its related to all these creepy skull guys with the horns that crowd up the place?', [])));
  newSelectableWithDialogue(event, 'consort/describe_naga', [cond('is_is_land')], 'any', newNode(nodeData('Every once in a while on Lands, we come across these large courtyards with a giant snake. Is that an underling? IS THAT OUR DENIZEN?', [])));
  newSelectableWithDialogue(event, 'consort/describe_hydra', [cond('is_is_land')], 'any', newNode(nodeData('Stay clear of those giant dragon looking things with multiple heads! They roasted my cousin in 3 seconds flat. There werent even any bones left : (', [])));
  newSelectableWithDialogue(event, 'consort/dungeon_loot', [cond('is_is_land')], 'any', newNode(nodeData('Loot in the Land often will contain maps. Its nice to be able to find a dungeon and then get shown to the next one!', [])));
  newSelectableWithDialogue(event, 'consort/voice_in_head', [cond('is_is_land')], 'any', newNode(nodeData('Dont forget you can open your FTB questbook by going to your inventory and clicking the book icon in the upper left corner! … … Did I just say something? My head hurts a lot now', [])));

  newSelectableWithDialogue(event, 'consort/corn_secrets/start', [cond('is_is_land')], 'any',
    newNode(nodeData('We always say not to wander too deep into a cornfield. People start to get nauseous and then disappear from sight…', [
      resp('You dont have cornfields, what are you talking about???', 'consort/corn_secrets/weirdo'),
      resp('How would you find the exit?', 'consort/corn_secrets/exit'),
    ]))
  );
  newDialogue(event, 'consort/corn_secrets/weirdo',
    newNode(nodeData('What, you dont dream of the vast sea of corn? Seems abnormal to me', [])));
  newDialogue(event, 'consort/corn_secrets/exit',
    newNode(nodeData('Just gotta die I think', [])));

  newSelectableWithDialogue(event, 'consort/last_one_remaining/start', [cond('is_is_land')], 'any',
    newNode(nodeData('Im the only person left from the village I was born in, everyone else became a follower of the occult.', [
      resp('Why is everyone becoming a cultist?', 'consort/last_one_remaining/why_cult'),
      resp('Why didnt you join?', 'consort/last_one_remaining/why_no_join'),
      resp('Where did they all go?', 'consort/last_one_remaining/where_go'),
    ])));
  newDialogue(event, 'consort/last_one_remaining/why',
    newNode(nodeData('I dont know about other villages, but everyone in mine was promised really nice robes if they joined. Like, a perfect tailor fit, breathable, silk blend kind of nice.', [
      resp('Why didnt you join?', 'consort/last_one_remaining/why_no_join'),
    ])));
  newDialogue(event, 'consort/last_one_remaining/why_no_join',
    newNode(nodeData('You cant bribe a nudist with luxury cultist robes', [])));
  newDialogue(event, 'consort/last_one_remaining/where_go',
    newNode(nodeData('Ive seen them congregate around those creepy purple stone wells you find on the surface occasionally. You might have luck buying a map to one of them off someone else.', [])));

  /*scribe_merchant (consort, structure, merchant nbt)
    Greeting traveler, might I interest you in some fine maps and inks?
        What do you have? [open shop]
            Loot table
                Blank map (1-5): 2
                Purified ink (1-3): 5
                Horrorterror ink (1-2): 3
                Common ink (1-3): 8
                Uncommon ink (1-2): 4
                Rare ink (1): 1
                Paper (8-24): 12
                Village: 10
                Occultists: 2
                Standard dungeon: 6
                Lich: 3
                Naga: 2
                Hydra: 1
                Catacombs: 1
            3 rolls
        Why are you out here in the open?
            I dont outsource my map making, gotta do it all by hand.
        Got any tips for me?
            A furled map will turn into a normal blank map if the structure it holds is not in the same dimension as you!
  */

  newSelectableWithDialogue(event, 'consort/gourmet_banquet/start', [cond('is_is_land')], 'any',
    newNode(nodeData('I only eat the most delectable food available. In fact, I would be willing to give away my one beloved earthly possession if my appetite could be sated.',
      [
        resp('What is it?', 'consort/gourmet_banquet/ask_item'),
        resp('What do you want to eat?', 'consort/gourmet_banquet/ask_food'),
        resp('I see you are a consort of educated tastes', 'consort/gourmet_banquet/indubitably1')
      ]))
  );

  newDialogue(event, 'consort/gourmet_banquet/ask_item',
    newNode(nodeData('It is an eye, granted to my ancestors long long ago by a Denizen but had become lost. I uh, found it between my couch cushions last week.', [
      resp('Lets talk about something else', 'consort/gourmet_banquet/start')
    ]))
  );

  newDialogue(event, 'consort/gourmet_banquet/ask_food',
    newNode(nodeData('Well its quite simple! I could be satisfied, perchance, by a meal consisting of ghasta with cream, a bucket of strong acid, and a blood chocolate bar.', [
      resp('Here you go', 'consort/gourmet_banquet/sated1',
        [condItem('extradelight:blood_chocolate_bar'), condItem('mynethersdelight:plate_of_ghasta_with_cream'), condItem('sillyworks:vessel_strong_acid')],
        "all", [trigTakeItem('extradelight:blood_chocolate_bar'), trigTakeItem('mynethersdelight:plate_of_ghasta_with_cream'), trigTakeItem('sillyworks:vessel_strong_acid'), trigGiveItem('endrem:lost_eye'), trigSetPlayerDialogue('custom:consort/gourmet_banquet/sated1')],
        false
      ),
      resp('That cant be safe to eat', 'consort/gourmet_banquet/weakling')
    ]))
  );

  newDialogue(event, 'consort/gourmet_banquet/weakling',
    newNode(nodeData('Of course someone of your caliber couldnt recognize a good meal to safe your life', [
      resp('What did you want again?', 'consort/gourmet_banquet/ask_food'),
      resp('Whatever', 'consort/gourmet_banquet/start')
    ]))
  );

  newDialogue(event, 'consort/gourmet_banquet/indubitably1',
    newNode(nodeData('Mmm yes indubitably', [
      resp('Indubitably?', 'consort/gourmet_banquet/indubitably2'),
      resp('This is stupid', 'consort/gourmet_banquet/start')
    ]))
  );

  newDialogue(event, 'consort/gourmet_banquet/indubitably2',
    newNode(nodeData('Indubitably.', [
      resp('Indubitably?', 'consort/gourmet_banquet/indubitably1')
    ]))
  );

  newDialogue(event, 'consort/gourmet_banquet/sated1',
    newNode(nodeDataMessages(
      messageDescription('Mmmm!!! This meal is so.. yummy!!!!!', 'They are sweating bullets'),
      [
        resp('How does it taste?', 'consort/gourmet_banquet/sated2')
      ]))
  );

  newDialogue(event, 'consort/gourmet_banquet/sated2',
    newNode(nodeData('...', [
      resp('=>', 'consort/gourmet_banquet/sated3')
    ]))
  );

  newDialogue(event, 'consort/gourmet_banquet/sated3',
    newNode(nodeData('....', [
      resp('uh', '', [], 'all', [trig('explode')])
    ]))
  );









  // Occultist =============================================================================================================================================
  newDialogue(event, 'consort/occultist_initiate',
    newNode(nodeData('I am but a humble initiate,, you want to talk to our local leader.', [])));

  newDialogue(event, 'consort/occultist_follower',
    newNode(nodeData('We were promised cultist robes but no one here has any…', [])));

  newDialogue(event, 'consort/occultist/start',
    newNode(nodeData(
      {
        arguments: [
          'player_title',
        ],
        key: 'Greetings %s,,,',
      },
      [
        resp('Who are you?', 'consort/occultist/explain',
          [], 'all',
          [trigCommand('tag @s add occultExplain')],
          true),
        resp('Do you actually know what you are doing?', 'consort/occultist/trust',
          [condTag('occultTrust')], 'none',
          [trigCommand('tag @s add occultTrust')],
          false, 'You decide you trust them with anything magical,, ohh also anything bug related,'),
        resp('What is this well thing?', 'consort/occultist/explain_well1'),
      ],
    )));

  newDialogue(event, 'consort/occultist/explain',
    newNode(
      nodeData(
        'We are but followers of the inky abyss. We are those gifted with insight from beyond this realm, seeking to bring about great changes through this turbulent times.',
        [
          resp('Lets talk about something else', 'consort/occultist/start'),
        ],
      ),
    ));

  newDialogue(event, 'consort/occultist/explain_well1',
    newNode(
      nodeData(
        'This,, is the Weeping Well. It is a mysterious thing that we have congregated to research. As we speak, we have our brightest minds collaborating to exhaust its complexities through rigorous research such as testing what will happen if 50 consorts in a row jump inside.',
        [
          resp('=>', 'consort/occultist/explain_well2'),
        ],
      ),
    ));

  newDialogue(event, 'consort/occultist/explain_well2',
    newNode(
      nodeData(
        'It turns out they all die. But we have a brand new hypothesis. What would happen if 51 consorts jump into it?',
        [
          resp('Have you tried throwing stuff into it that is not consorts?', 'consort/occultist/explain_well3'),
          resp('Lets talk about something else', 'consort/occultist/start'),
        ],
      ),
    ));

  newDialogue(event, 'consort/occultist/explain_well3',
    newNode(
      nodeData(
        'Perhaps we will try that after finishing with the consort experiment,,',
        [
          resp('Lets talk about something else', 'consort/occultist/start'),
        ],
      ),
    ));

  newDialogue(event, 'consort/occultist/trust',
    newNode(nodeDataMessages(
      messageDescription('Of course, we are nothing less than the most learned of our kind.', 'You realize now you can trust them implicitly,,'),
      [
        resp('Lets talk about something else', 'consort/occultist/start'),
      ],
    )));

  /*
      I feel compelled to jump into the Weeping Well (tag from quests)
      I jumped into the well and received a boo
  */













  // Hapless Scientist =======================================================================================================================================
  newDialogue(event, 'carapacian/hapless_scientist/start',
    newNode(nodeDataMessages(
      messageCarapacian('They greet you tersely, occupied by the repair process of what appears to be a severely damaged ship.'), [
      resp('What happened?', 'carapacian/hapless_scientist/accident1',
        [], 'all',
        [trigCommand('tag @s add scientistShipExplain')],
        true),
      resp('What supplies do you need?', 'carapacian/hapless_scientist/supplies1',
        [condTag('scientistShipExplain')], 'all',
        [trigCommand('tag @s add scientistShipSupplies')],
        true),
    ],
    )));

  newDialogue(event, 'carapacian/hapless_scientist/start_stage_2',
    newNode(nodeDataMessages(
      messageCarapacian('They greet you tersely, occupied by the repair process of their severely damaged ship.'), [
      resp('What happened again?', 'carapacian/hapless_scientist/accident1',
        [], 'all',
        [trigCommand('tag @s add scientistShipExplain')],
        false),
      resp('What supplies do you need again?', 'carapacian/hapless_scientist/supplies1',
        [condTag('scientistShipExplain')], 'all',
        [trigCommand('tag @s add scientistShipSupplies')],
        false),
      resp('I would like a map please', 'carapacian/hapless_scientist/start_stage_2',
        [{ type: 'minestuck:custom_tag', tag_name: 'noMoreMap', check_player: false }], 'none',
        [trigCommand('tag @e[type=minestuck:prospitian_pawn, distance=..20] add noMoreMap'), trigGiveLoot('custom:gameplay/scientist_map')],
        false, 'They do not have any more maps to give'),
      resp('[Hand over an Engine Gearbox and Engine Controller]', 'carapacian/hapless_scientist/givesupp',
        [condItem('tfmg:engine_gearbox', 1), condItem('tfmg:engine_controller', 1)], 'all',
        [trigTakeItem('tfmg:engine_gearbox', 1), trigTakeItem('tfmg:engine_controller', 1), trigGiveLoot('custom:gameplay/ruined_artifact'), trigSetPlayerDialogue('custom:carapacian/hapless_scientist/repair_proccess')],
        false),
      resp('[Hand over 3 Witherite Ingots]', 'carapacian/hapless_scientist/givewither',
        [condItem('cataclysm:witherite_ingot', 3)], 'all',
        [trigTakeItem('cataclysm:witherite_ingot', 3), trigGiveLoot('custom:gameplay/ruined_artifact'), trigSetPlayerDialogue('custom:carapacian/hapless_scientist/repair_proccess')],
        false),
      resp('Im surprised a Prospitian was working on a dangerous secret weapon', 'carapacian/hapless_scientist/no_surprise'),
    ],
    )));

  newDialogue(event, 'carapacian/hapless_scientist/accident1',
    newNode(nodeDataMessages(
      messageCarapacian('They explain how they used to be a researcher in The Veil before being moved elsewhere. When shit hit the fan recently, they got scared that someone would try to use the secret weapon they had been trying to develop and went to make sure it was decommissioned.'),
      [resp('=>', 'carapacian/hapless_scientist/accident2')],
    )));
  newDialogue(event, 'carapacian/hapless_scientist/accident2',
    newNode(nodeDataMessages(
      messageCarapacian('However just above the surface of this meteor something happened. They cant remember what, but they ended up crash landing on the surface as a result. They went to check on the weapon but one of the lesser robots they also tested was guarding the surface and had destroyed the access point.'),
      [resp('=>', 'carapacian/hapless_scientist/accident3')],
    )));
  newDialogue(event, 'carapacian/hapless_scientist/accident3',
    newNode(nodeDataMessages(
      messageCarapacian('Now they just want to focus on repairing this ship. They dont know where they want to go but this is their way out.'),
      [resp('Lets talk about something else', 'carapacian/hapless_scientist/start')],
    )));

  newDialogue(event, 'carapacian/hapless_scientist/supplies1',
    newNode(nodeDataMessages(
      messageCarapacian('They say that they need to replace the engine controller and engine gearbox, which is a pretty challenging task. But maybe there is another option...'),
      [resp('=>', 'carapacian/hapless_scientist/supplies2')],
    )));
  newDialogue(event, 'carapacian/hapless_scientist/supplies2',
    newNode(nodeDataMessages(
      messageCarapacian('They take a moment before explaining that they could probably fix all the damaged systems they need simply by obtaining 3 witherite ingots. But that would require defeating the secret weapon.'),
      [resp('=>', 'carapacian/hapless_scientist/supplies3')],
    )));
  newDialogue(event, 'carapacian/hapless_scientist/supplies3',
    newNode(nodeDataMessages(
      messageCarapacian('They are not sure why they are doing this, but they are willing to give you a map to the secret weapon. Its under the surface.'), [
      resp('Lets talk about something else', 'carapacian/hapless_scientist/start_stage_2',
        [], 'all',
        [trigSetPlayerDialogue('custom:carapacian/hapless_scientist/start_stage_2')],
        true),
    ],
    )));

  newDialogue(event, 'carapacian/hapless_scientist/givesupp',
    newNode(nodeDataMessages(
      messageCarapacian('They do a big sigh of relief, and offer you a gift in thanks. Then they gratefully get to work on repairing the ship.'), [],
    )));
  newDialogue(event, 'carapacian/hapless_scientist/givewither',
    newNode(nodeDataMessages(
      messageCarapacian('They look at you with great shock, before handing you a gift in thanks. Then they gratefully get to work on repairing the ship.'), [],
    )));

  newDialogue(event, 'carapacian/hapless_scientist/no_surprise',
    newNode(nodeDataMessages(
      messageCarapacian('They frown and bluntly say not to be surprised. You dont get \"good guys\" in a war. Doesnt matter your intentions, you dont get to be noble when you kill others. Not that it means your bad either.'), [
      resp('Lets talk about something else', 'carapacian/hapless_scientist/start_stage_2'),
    ],
    )));

  newDialogue(event, 'carapacian/hapless_scientist/repair_proccess',
    newNode(nodeDataMessages(
      messageCarapacian('They greet you fondly, they are working on repairing a ship and have nothing to say to you.'), [],
    )));

  /*
  hapless_scientist (veil, dersite, structure spawn)

    They greet you tersely, appearing to be occupied by repairing the damaged ship.
        What happened?
            They explain how they used to be a researcher in The Veil before being moved elsewhere. When shit hit the fan recently, they got scared that someone would try to use the secret weapon they had been trying to develop and went to make sure it was decommissioned.
                => [tag scientistShipExplain]
                    However just above the surface of this meteor something happened. They cant remember what, but they ended up crash landing on the surface as a result. They went to check on the weapon but one of the lesser robots they also tested was guarding the surface and had destroyed the access point.
                        Lets talk about something else
        What supplies do you need? (tag scientistShipExplain, hidden) [tag scientistShipSupplies]
            They say that they will need a lot to get things in working order. It kind
        Heres your supplies (has items, hidden) [give random portal gear or maybe ruined artifact, set dialogue]
            They do a big sigh of relief, and offer you a gift in thanks. Then they gratefully get to work on repairing the ship
        Heres some witherite (has witherite, hidden) [give random portal gear or maybe ruined artifact, set dialogue]
            They look at you with great shock, before handing you a gift in thanks. Then they gratefully get to work on repairing the ship
  */















  // Guide ====================================================================================================================================================

  newDialogue(event, 'consort/guide/start',
    newNodeCond(
      nodeData(
        'Hey are you the person?',
        [
          resp('What person?', 'consort/guide/what_person'),
          resp('Goodbye'),
        ],
      ),
      [condTag('guide_explain')], 'all',
      nodeData(
        'Hey, whats up',
        [
          resp(
            'So can you give me a rundown on everything', 'consort/guide/rundown', [], 'all',
            [trigCommand('tag @s add guide_rundown')],
            true
          ),
          resp('Has anything weird been going on?', 'consort/guide/weird', [condTag('guide_rundown')], 'all', [], true),
          resp('I want to set my Class and Aspect', 'consort/guide/predefine_confirm', [/*condTag('predefined'), */cond('player_entered')], 'none',
            [trigCommand('scoreboard objectives add class dummy'), trigCommand('scoreboard objectives add aspect dummy'), trigCommand('scoreboard objectives add terrain dummy')],
            false, "You cannot have already Entered"),
          resp('I have that script for you', 'consort/guide/meany', [condTag('guide_lie')], 'all', [], true),
          resp('Goodbye')
        ]
      )
    )
  );

  newDialogue(event, 'consort/guide/predefine_confirm',
    newNode(
      nodeData(
        'Excellent! I just need you to really confirm that you want to do this. You can keep predefining again up until you Enter, after which it can no longer be changed.',
        [
          resp('Nevermind', 'consort/guide/start'),
          resp('Yes, I want to predefine my Land and Classpect', 'consort/guide/predefine_class')
        ]
      )
    )
  );

  newDialogue(event, 'consort/guide/predefine_class',
    newNode(
      nodeData(
        'Pick your Class. Afterwards, while picking Aspect, you can return to this dialogue by choosing \"Go back to Class\"',
        [
          resp('Nevermind', 'consort/guide/start'),
          resp('Page', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 1')]),
          resp('Heir', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 2')]),
          resp('Maid', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 3')]),
          resp('Knight', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 4')]),
          resp('Sylph', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 5')]),
          resp('Seer', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 6')]),
          resp('Witch', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 7')]),
          resp('Mage', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 8')]),
          resp('Thief', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 9')]),
          resp('Rogue', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 10')]),
          resp('Prince', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 11')]),
          resp('Bard', 'consort/guide/predefine_aspect', [], 'all', [trigCommand('scoreboard players set @s class 12')])
        ]
      )
    )
  );

  newDialogue(event, 'consort/guide/predefine_aspect',
    newNode(
      nodeData(
        'Pick your Aspect. Afterwards, while picking Terrain, you can return to this dialogue by choosing \"Go back to Aspect\"',
        [
          resp('Go back to Class', 'consort/guide/predefine_class'),
          resp('Breath', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 1')]),
          resp('Life', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 2')]),
          resp('Light', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 3')]),
          resp('Time', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 4')]),
          resp('Heart', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 5')]),
          resp('Rage', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 6')]),
          resp('Blood', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 7')]),
          resp('Doom', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 8')]),
          resp('Void', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 9')]),
          resp('Space', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 10')]),
          resp('Mind', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 11')]),
          resp('Hope', 'consort/guide/predefine_terrain', [], 'all', [trigCommand('scoreboard players set @s aspect 12')])
        ]
      )
    )
  );

  newDialogue(event, 'consort/guide/predefine_terrain',
    newNode(
      nodeData(
        'Pick your Terrain Land Type. Once you choose a Terrain Land Type, you should see some messages appear in the chat and can close this dialogue. You should only be alarmed if the last messages are incorrect or if there was any red text. You can also confer the Data Checker tab of the Minestuck GUI, once you have made a Connection.',
        [
          resp('=>', 'consort/guide/predefine_terrain2'),
        ]
      )
    )
  );

  newDialogue(event, 'consort/guide/predefine_terrain2',
    newNode(
      nodeData(
        'Pick your Terrain Land Type.',
        [
          resp('Go back to Aspect', 'consort/guide/predefine_aspect'),
          resp('Go back to previous dialogue', 'consort/guide/predefine_terrain'),
          resp('End', '', [condScore('aspect', 8)], 'none', [trigCommand('scoreboard players set @s terrain 1'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Flora', '', [], 'none', [trigCommand('scoreboard players set @s terrain 2'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Forest', '', [], 'none', [trigCommand('scoreboard players set @s terrain 3'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Taiga', '', [], 'none', [trigCommand('scoreboard players set @s terrain 4'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Frost', '', [condScore('aspect', 8), condScore('aspect', 9)], 'none', [trigCommand('scoreboard players set @s terrain 5'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Fungi', '', [condScore('aspect', 9)], 'none', [trigCommand('scoreboard players set @s terrain 6'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Heat', '', [condScore('aspect', 2), condScore('aspect', 3), condScore('aspect', 7), condScore('aspect', 8), condScore('aspect', 10), condScore('aspect', 11)], 'none', [trigCommand('scoreboard players set @s terrain 7'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Rainbow', '', [], 'none', [trigCommand('scoreboard players set @s terrain 8'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Rain', '', [], 'none', [trigCommand('scoreboard players set @s terrain 9'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Rock', '', [], 'none', [trigCommand('scoreboard players set @s terrain 10'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Petrification', '', [], 'none', [trigCommand('scoreboard players set @s terrain 11'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Sand', '', [condScore('aspect', 8)], 'none', [trigCommand('scoreboard players set @s terrain 12'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Lush Deserts', '', [condScore('aspect', 8)], 'none', [trigCommand('scoreboard players set @s terrain 13'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Red Sand', '', [condScore('aspect', 8)], 'none', [trigCommand('scoreboard players set @s terrain 14'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Sandstone', '', [], 'none', [trigCommand('scoreboard players set @s terrain 15'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Red Sandstone', '', [], 'none', [trigCommand('scoreboard players set @s terrain 16'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Shade', '', [condScore('aspect', 3)], 'none', [trigCommand('scoreboard players set @s terrain 17'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect"),
          resp('Wood', '', [condScore('aspect', 3)], 'none', [trigCommand('scoreboard players set @s terrain 18'), trigCommand('execute as @s run function custom:predefine'), trigCommand('execute as @s run simplePredefine')], false, "Land Type incompatible with Aspect")
        ]
      )
    )
  );

  newDialogue(event, 'consort/guide/what_person',
    newNode(
      nodeData(
        'I guess the delivery person? Yknow, for the script?',
        [
          resp(
            'No idea what you are talking about', 'consort/guide/explain_person', [], 'all',
            [trigCommand('tag @s add guide_explain')],
            true,
          ),
          resp(
            'Yes (lie)', 'consort/guide/lie_relief', [], 'all',
            [trigCommand('tag @s add guide_lie')],
            true,
          ),
        ],
      ),
    )
  );

  newDialogue(event, 'consort/guide/explain_person',
    newNode(
      nodeData(
        'Hooboy I was really hoping you would be the one. I was hired to stand here and answer questions, help people out you know? But this time around I wasnt given anything to work with. Been improvising, which is not something people want to see.',
        [
          resp('Who hired you?', 'consort/guide/who_hired'),
          resp('Lets talk about something else', 'consort/guide/start'),
        ],
      ),
    )
  );

  newDialogue(event, 'consort/guide/lie_relief',
    newNode(
      nodeData(
        'Ok thank god! I keep having no idea what to say to people, not sure whats going on but theres certainly a lot of upheaval. Just dont let the players hear you say that. So where is it?',
        [
          resp('I must have dropped it somewhere, I will give it to you later. Lets talk about something else', 'consort/guide/start'),
        ],
      ),
    ));

  newDialogue(event, 'consort/guide/who_hired',
    newNode(
      nodeData(
        'Thats above my paygrade to answer.',
        [
          resp('Lets talk about something else', 'consort/guide/start'),
        ],
      ),
    ));

  newDialogue(event, 'consort/guide/rundown',
    newNode(
      nodeData(
        'A rundown? On like reality?? Um well I guess reality is composed of several dimensions. This is the Overworld, then there is The Nether, and The End. Once you Enter the Medium, there are Lands, Skaia, The Veil, Prospit, and Derse.',
        [
          resp('=>', 'consort/guide/rundown2'),
        ],
      ),
    ));

  newDialogue(event, 'consort/guide/rundown2',
    newNode(
      nodeData(
        'Something makes me think you cant access Derse, though. Not sure why. Uhhh does that help?',
        [
          resp('What about the Twilight Forest?', 'consort/guide/twilight_forest'),
          resp('Lets talk about something else', 'consort/guide/start'),
        ],
      ),
    ));

  newDialogue(event, 'consort/guide/twilight_forest',
    newNode(
      nodeData(
        'Yeah no idea what you are talking about there',
        [
          resp('Lets talk about something else', 'consort/guide/start'),
        ],
      ),
    ));

  newDialogue(event, 'consort/guide/weird',
    newNode(
      nodeData(
        'I didnt get around much before taking this job. All I can tell you are rumors... for one, theres been an uptick in occult activity within the consort community. Like all the robe wearing business. Never been in to it though so cant tell you more. Then theres one other thing...',
        [
          resp('=>', 'consort/guide/weird2'),
        ],
      ),
    ));

  newDialogue(event, 'consort/guide/weird2',
    newNode(
      nodeData(
        'There were some skirmishes between Prospitians and Dersites on the Land. Which was really strange because thats supposed to be neutral territory for their war. Then, just before I left for the Overworld, I saw Derse in pieces and something decending upon Prospit. It was coming from The Veil... or maybe beyond it.',
        [
          resp('Lets talk about something else', 'consort/guide/start'),
        ],
      ),
    ));

  newDialogue(event, 'consort/guide/meany',
    newNode(
      nodeData(
        'Really???',
        [
          resp('Yep!', 'consort/guide/meany2a'),
          resp('Nope', 'consort/guide/meany2b'),
        ],
      ),
    ));

  newDialogue(event, 'consort/guide/meany2a',
    newNode(
      nodeData(
        'Really really????????',
        [
          resp('Nope', 'consort/guide/meany2b'),
        ],
      ),
    ));

  newDialogue(event, 'consort/guide/meany2b',
    newNode(
      nodeData(
        '... die a painful death',
        [
          resp('Lets talk about something else', 'consort/guide/start'),
        ],
      ),
    ));

  console.log('Ending gen in dweb_dialogue.');
};
