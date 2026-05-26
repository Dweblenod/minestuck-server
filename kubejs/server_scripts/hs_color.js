const $AttachmentHolder = Java.loadClass('net.neoforged.neoforge.attachment.AttachmentHolder');
const $PlayerData = Java.loadClass('com.mraof.minestuck.player.PlayerData');
const $MSAttachments = Java.loadClass('com.mraof.minestuck.util.MSAttachments');
const $ColorHandler = Java.loadClass('com.mraof.minestuck.util.ColorHandler');
const $PlayerColorPackets = Java.loadClass('com.mraof.minestuck.network.PlayerColorPackets');
const $IdentifierHandler = Java.loadClass('com.mraof.minestuck.player.IdentifierHandler');
const $Objects = Java.loadClass('java.util.Objects');
const $Double = Java.loadClass("java.lang.Double");
const $Integer = Java.loadClass("java.lang.Integer");

//author is Mysterijojo, on the Minestuck public discord
PlayerEvents.chat(event => {
	const player = event.getEntity();
	const msg = event.getMessage();
	const data = $PlayerData.get(player).get();
	const display_name = player.getDisplayName();
	const color = data.getData($MSAttachments.PLAYER_COLOR);
	const r = (color >> 16) & 255;
	const g = (color >> 8) & 255;
	const b = color & 255;
	
	let msg_display = Text.of(msg).color(Color.rgba(r, g, b, 255));
	
	//filter message
	let filtering = true;
	let iterator = 0;
	let search_result = msg.search(/</);
	let max = 128;
	let properties = [r,g,b,255,false,false,false,false,false];
	let msg_part = null;
	if (search_result+1) {
		msg_display = Text.of('');
		let msg_search = msg.slice(-(msg.length-search_result-1));
		let search_result_end = -1;
		//console.info(msg_search);
		while (filtering) {
			search_result_end = msg_search.search(/>/);
			if (search_result_end+1) {
				msg_part = Text.of(msg_search.slice(0,search_result));
				msg_part.color(Color.rgba(properties[0],properties[1],properties[2],properties[3]));
				msg_part.bold(properties[4]);
				msg_part.italic(properties[5]);
				msg_part.underlined(properties[6]);
				msg_part.strikethrough(properties[7]);
				msg_part.obfuscated(properties[8]);
				msg_display.append(msg_part);
				if ((-(msg_search.length-search_result_end-1))) {
					let filter = msg_search.slice(search_result+1,search_result_end);
					//console.info(filter);
					if (filter.length) {
						let operator = filter.search(/=/);
						let value = true;
						if (operator+1) {
							value = filter.slice(-(filter.length-(operator+1)));
							filter = filter.slice(0,operator);
						};
						switch(filter) {
							case 'c':
							case 'color':
								if (value.length >= 6) {
									let new_r = $Integer.parseInt(value.slice(0,2),16);
									let new_g = $Integer.parseInt(value.slice(2,4),16);
									let new_b = $Integer.parseInt(value.slice(4,6),16);
									let new_a = properties[3];
									if (value.length > 6) {
										new_a = $Integer.parseInt(value.slice(6,8),16);
									};
									properties[0] = new_r;
									properties[1] = new_g;
									properties[2] = new_b;
									properties[3] = new_a;
								};
								break;
							case '/c':
							case '/color':
								properties[0] = r;
								properties[1] = g;
								properties[2] = b;
								properties[3] = 255;
								break;
							case 'b':
							case 'bold':
								properties[4] = true;
								break;
							case '/b':
							case '/bold':
								properties[4] = false;
								break;
							case 'i':
							case 'italic':
							case 'italics':
								properties[5] = true;
								break;
							case '/i':
							case '/italic':
							case '/italics':
								properties[5] = false;
								break;
							case 'u':
							case 'underline':
								properties[6] = true;
								break;
							case '/u':
							case '/underline':
								properties[6] = false;
								break;
							case 's':
							case 'strikethrough':
								properties[7] = true;
								break;
							case '/s':
							case '/strikethrough':
								properties[7] = false;
								break;
							case 'o':
							case 'obfuscate':
								properties[8] = true;
								break;
							case '/o':
							case '/obfuscate':
								properties[8] = false;
								break;
						};
					};
					//console.info('MSG_FILTER  '+filter);
					msg_search = msg_search.slice(-(msg_search.length-search_result_end-1));
					//console.info('MSG_SEARCH  '+msg_search);
					iterator = search_result_end;
					search_result = msg_search.search(/</);
					//console.info('SRC_RESULT  '+search_result);
					//console.info('CUT_TO      '+(-(msg_search.length-search_result_end-1)));
					if (!(search_result+1)) {
						filtering = false;
					};
				} else {
					filtering = false;
				};
			} else {
				filtering = false;
				//console.info('message terminates before > is found!');
			};
			
			//failsafe
			max--;
			if (!max) {
				filtering = false;
			};
		};
		if (((search_result_end+1)!=msg_search.length)) {
			msg_part = Text.of(msg_search);
			msg_part.color(Color.rgba(properties[0],properties[1],properties[2],properties[3]));
			msg_part.bold(properties[4]);
			msg_part.italic(properties[5]);
			msg_part.underlined(properties[6]);
			msg_part.strikethrough(properties[7]);
			msg_part.obfuscated(properties[8]);
			msg_display.append(msg_part);
		};
	};
	
	let msg_pre_u = Text.of('<');
	let msg_user = display_name.color(Color.rgba(r, g, b, 255));
	let msg_post_u = Text.of('> ');
	let msg_msg = event.getComponent().color(Color.rgba(r, g, b, 255));
	
	let msg_full = msg_pre_u.append(msg_user).append(msg_post_u).append(msg_display);
	data.setData($MSAttachments.PLAYER_COLOR.get(), color);
	
	event.server.tell(msg_full);
	event.cancel();
});

ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments} = event;
    event.register(//register a new command
        Commands.literal("sburb_color")//the command is called myCommand
		.then(Commands.argument('r', Arguments.INTEGER.create(event))//takes argument string called arg1. You can have as many (or none) as you want.
			.then(Commands.argument('g', Arguments.INTEGER.create(event))//takes argument float called arg2. The other type you can use can be found with ProbeJS
				.then(Commands.argument('b', Arguments.INTEGER.create(event))//takes argument float called arg2. The other type you can use can be found with ProbeJS
					.executes(ctx => {//run the command
						const player = ctx.source.player;
						const r = Arguments.INTEGER.getResult(ctx, "r");
						const g = Arguments.INTEGER.getResult(ctx, "g");
						const b = Arguments.INTEGER.getResult(ctx, "b");
						//your code goes here
						const color = Math.round((r << 16) + (g << 8) + b);
						const int_color = $Integer.valueOf($Double.valueOf(color).intValue());
						const playerData = $PlayerData.get(player).get();
						let prevColor = playerData.setData($MSAttachments.PLAYER_COLOR.get(), int_color);
						if(!$Objects.equals(prevColor, int_color)) {
							player.connection.send(new $PlayerColorPackets.Data(int_color));
						};
						
						return 1;
					})
				)// every then requires a ')' so dont forget them
			)// every then requires a ')' so dont forget them
		)//but requires does not
    )
})