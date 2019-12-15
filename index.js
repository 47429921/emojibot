﻿const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


client.on('ready', () => {
    console.log(`登入成功 ${client.user.tag}`);
    require('events').EventEmitter.defaultMaxListeners = 15;
 client.user.setActivity('機器人已上線 Bot is online!', { type: 'PLAYING' })
  .then(presence => console.log(`目前遊玩 ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
  
  let statuses = [
      `Working on ${client.guilds.size} servers`,
      "Enter !!help for help.",
      'News: new command !!say',
      'Join discord server now!',
      'If you can please donate https://donatebot.io/checkout/642985085418733569',
      'Thanks for Fauzh#9487 凱恩Kane#5384 for help',
      'Made by 青楓OuO#5224',
      'Vote me now!',
      'ouo?'
  ]
  
  setInterval(function() {
  let status = statuses[Math.floor(Math.random() * statuses.length)];
  client.user.setActivity(status, { type: 'WATCHING'});
  }, 5000)
 });

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`已加入 ${guild.name} ID為 (id: ${guild.id}). 此伺服器有 ${guild.memberCount} 人!`);
  let defaultChannel = "";
guild.channels.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})
//defaultChannel will be the channel object that it first finds the bot has permissions for
defaultChannel.send({embed: {
  color:0x00FF00,
   author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
 title: "Thanks of adding me to this server!!!",
  description: "I will help you to add emoji!",
  fields: [{
        name: "Vote me!",
        value: "[Click me](www.google.com)"
      },
      {
        name: "Suppot?",
        value: "[Join Now!](https://discord.gg/AFGqm5f)"
      },
      {
        name: "Donate!",
        value: "[Donate](https://donatebot.io/checkout/642985085418733569)"
      }
	  
],
    footer: {
      icon_url: 'https://yt3.ggpht.com/-HZiKlwM2SWA/AAAAAAAAAAI/AAAAAAAAAAA/w_a9sYsYiOE/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg',
      text: "Made by 青楓OuO#5224"
}}});
 });
 client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`我已經離開了 ${guild.name} id: (id: ${guild.id}) 此群還有 ${guild.memberCount} 人`);
  client.user.setActivity(`Working on ${client.guilds.size} servers`);
 });

client.on("message", async message => {
    var roll = (Math.floor(Math.random() * 40) + 1);
    if (roll == 1) {
        message.react("601733169909071883"); //老乾家族同樂區
    }
    if (roll == 2) {
        message.react("655247342433468460"); //Emoji bot
    }
    if (roll == 3) {
        message.react("655247342433468450"); //Emoji bot
    }
    if (roll == 4) {
        //blank
    }
    if (roll == 5) {
        message.react("655248522744168480"); //Emoji bot
    }
    if (roll == 6) {
        message.react("625208023320887312"); //601 chatting
    }
    if (roll == 7) {
        //blank
    }
    if (roll == 8) {
        message.react("593034817000570880"); //601 chatting
    }
    if (roll == 9) {
        message.react("625208023756832778"); //601 chatting
    }
    if (roll == 10) {
        //blank
    }
    if (roll == 11) {
        message.react("625208024931368980"); //601 chatting
    }
    if (roll == 12) {
        message.react("625314126872182814"); //601 chatting
    }
    if (roll == 13) {
        //blank
    }
    if (roll == 14) {
        //blank
    }
    if (roll == 15) {
        message.react("593034931492618251"); //601 chatting
    }
    if (roll == 16) {
        message.react("625208025241878529"); //601 chatting
    }
    if (roll == 17) {
        //blank
    }
    if (roll == 30) {
        message.react("625208023547379712"); //601 chatting
    }
   if (roll == 19) {
        //blank
    }
	if (roll == 20) {
        //blank
    }
	if (roll == 21) {
        //blank
    }
	if (roll == 22) {
        //blank
    }
	if (roll == 23) {
        //blank
    }
	if (roll == 24) {
        //blank
    }
	if (roll == 25) {
        //blank
    }
	if (roll == 26) {
        //blank
    }
	if (roll == 27) {
        //blank
    }
	if (roll == 28) {
        //blank
    }
	if (roll == 29) {
        //blank
    }
	if (roll == 18) {
        //blank
    }
	if (roll == 31) {
        //blank
    }
	if (roll == 32) {
        //blank
    }
	if (roll == 33) {
        //blank
    }
	if (roll == 40) {
        //blank
    }
}); 

client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.

    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (message.author.bot) return;

    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if (message.content.indexOf(config.prefix) !== 0) return;

    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === "ping"){
    message.channel.send(`Pong!   API  ${Math.round(client.ping)}ms`);
  }

    if (command === "invite") {
    message.channel.send('Invite me by this link https://discordapp.com/oauth2/authorize?client_id=650246586445594625&permissions=8&scope=bot support server:https://discord.gg/AFGqm5f');
}




    if (command === "serverinfo") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Serverinfo')
	.addField('Server name', `${message.guild.name}` )
	.addField('Created at', `${message.guild.createdAt}`)
	.addField('Server owner', `${message.guild.owner}`)
	.addField('Total members', `${message.guild.memberCount}`)
	.setTimestamp()
	.setFooter('Made by 青楓OuO#5224', 'https://yt3.ggpht.com/-HZiKlwM2SWA/AAAAAAAAAAI/AAAAAAAAAAA/w_a9sYsYiOE/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg');
	message.channel.send(exampleEmbed);
}


if (command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => { });
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
}

    if (command === "help") {
     message.channel.send({embed: {
  color:0x00FF00,
   author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
 title: "Help!!",
  description: "command:!!",
  fields: [{
        name: "!!ping",
        value: "API's ms."
      },
      {
        name: "!!invite",
        value: "Add the bot to your servers"
      },
      {
          name: "!!say",
          value: "Say something!"
      },
	  {
        name: "!!kick",
        value: "kick someone in your server"
      },
      {
          name: "!!addemoji (your emoji ID) ",
          value: "Add emoji to bot!"
      },
	  {
          name: "!!serverinfo ",
          value: "Server info!!!"
      },
	  {
        name: "every words!",
        value: "Add emoji!!"
      }
	 ],
    footer: {
      icon_url: 'https://yt3.ggpht.com/-HZiKlwM2SWA/AAAAAAAAAAI/AAAAAAAAAAA/w_a9sYsYiOE/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg',
      text: "Made by 青楓OuO#5224"
    }}});
	
    }





  
    if (command === "kick") {
    const member = message.mentions.members.first()

    if (!member) {
      return message.reply(
        `Who are you trying to kick? You must mention a user.`
      );
    }

    if (!member.kickable) {
      return message.reply(`I can't kick this user. `);
    }
	
	if (!message.guild.me.hasPermissions("KICK_MEMBERS")) {
      return message.reply(`I don't have permission,please tell the server's stuff `);
    }

if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.reply(`You don't have permission. If you think this is wrong please report bug at suppot server. `);
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch(error => message.reply(`Sorry,We have an error. `));
  }

    if (command === "addemoji") {
        const sm = args.join(" ");
        client.channels.get("650257003192516630").send(`${message.author.username} give emoji:`, sm);
    }






});
client.login(process.env.BOT_TOKEN);
