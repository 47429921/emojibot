const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const Constants = require("discord.js/src/util/Constants.js");
Constants.DefaultOptions.ws.properties.$browser = `Discord Android`;
const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Emoji bot', {useNewUrlParser: true, useUnifiedTopology: true});
const emojiadd = new mongoose.Schema({
	
	guildID: String,
	Auto: String
	
});


const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, { webhookPort: 5000, webhookAuth:'ZFpeUThy4wvmk_KUYiiyovp_KuTuj0S1mFz7UcsU1B7PSKgg2sQvseVGsIWyITe4Y9Rt'}, client);

// Optional events
dbl.on('posted', () => {
  console.log('服務器數量已發布!');
})

dbl.on('error', e => {
 console.log(`糟糕 發生錯誤! ${e}`);
})

dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});

dbl.webhook.on('vote', vote => {
  message.channel.get('655236227947036702').send(`感謝 ${vote.user}的投票!`);
});



client.on('ready', async () => {
    console.log(`登入成功 ${client.user.tag}`);
    require('events').EventEmitter.defaultMaxListeners = 15;
 client.user.setActivity('機器人已上線 Bot is online!', { type: 'PLAYING' })
  .then(presence => console.log(`目前遊玩 ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
  
  let statuses = [
      `Working on ${client.guilds.size} servers`,
      "Enter !!help for help.",
      "輸入 --help 獲得幫助",
      `Bots have ${client.users.size} users`,
      'Join discord server now!',
      'If you can please donate https://donatebot.io/checkout/642985085418733569',
      'Thanks for Fauzh#9487 Memer#4264 凱恩Kane#5384 for help',
      'Made by 青楓OuO#5224',

      'Vote me now!',
      'ouo?'
  ]
  
  setInterval(function() {
  let status = statuses[Math.floor(Math.random() * statuses.length)];
  client.user.setActivity(status, { type: 'PLAYING'});
  }, 20000);
 
 await client.guilds.keyArray().forEach(id => {
	 emojiadd.findOne({
		 guildID: id
	 }, (guild) => {
		 if(!guild) {
			 const newConfig = newconfig({
				 guildID: id,
				 Auto:'false'
			 })
			 return newconfig.save();
			 }
	 });
 }); 
});
/*setInterval(function() {
  POST https://bots.ondiscord.xyz/bot-api/bots/650246586445594625/guilds HTTP/1.1
Authorization: ba42e55844878df3ab90b742a7e19d04
Content-Type: application/json

{
	"guildCount": 463
}
  }, 120000);
 
 

});
*/
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
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
        value: "[Click me](https://top.gg/bot/650246586445594625/vote)"
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


client.on("message", async message => {
	if(message.guild.id == "521218288299278336") {
		return
    }
	
    var roll = (Math.floor(Math.random() * 52) + 1);
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
        
	    message.react("693348921107283990");
    }
    if (roll == 11) {
        message.react("625208024931368980"); //601 chatting
    }
    if (roll == 12) {
        message.react("625314126872182814"); //601 chatting
    }
    if (roll == 13) {
        //blank1
    }
    if (roll == 14) {
        message.react("667957942472933427"); //6Emoji bot
    }
    if (roll == 15) {
        message.react("593034931492618251"); //601 chatting
    }
    if (roll == 16) {
        message.react("625208025241878529"); //601 chatting
    }
    if (roll == 17) {
        message.react("693348921690292344");
	    
    }
    if (roll == 30) {
        message.react("625208023547379712"); //601 chatting
    }
   if (roll == 19) {
        message.react("693348921271124009");
    }
	if (roll == 20) {
         message.react("715538193126129704");
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
        message.react("716532491422400533"); //Ant
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
       message.react("658822268033564682"); //Ant
    }
	if (roll == 29) {
        message.react("658819893168439297"); //Ant
    }



	if (roll == 47) {
         message.react("716206293853143050"); //Ant
    }
	if (roll == 41) {
         message.react("654081912780095518"); //etp
    }
	if (roll == 44) {
         message.react("654081992643706899"); //etp
    }
	
	if (roll == 50) {
        message.react("643004985642188800"); //emoji
    }
	
	if (roll == 51) {
        message.react("685678907319779380"); //emoji
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
     message.channel.send({embed: {
  color:0x00FF00,
   author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
 title: "Bot info",
  description: "Emoji bot",
  fields: [{
        name: "Invite to your server!",
        value: "[Click me!](https://discordapp.com/oauth2/authorize?client_id=650246586445594625&permissions=8&scope=bot)"
      },
	  {
        name: "Need help?",
        value: "[Click me~](https://discord.gg/AFGqm5f)"
      },
	   {
        name: "Vote for me!",
        value: "[Click me.](https://top.gg/bot/650246586445594625/vote)"
      }
	 ],
    footer: {
      icon_url: 'https://yt3.ggpht.com/-HZiKlwM2SWA/AAAAAAAAAAI/AAAAAAAAAAA/w_a9sYsYiOE/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg',
      text: "Made by 青楓OuO#5224 "
    }}});
}

//if (command === "report"){
 //const sayMessage = args.join(" ");
  // message.channel.get('659591875854073856').send(`${message.}`)
 // }


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
	
	 if (command === "botinfo") {
	const botEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle("Bot's info")
	.addField("Bot's name", `${client.user.username}` )
	.addField("Bot's owner", `<@485286330792673280>`)
	.addField('Servers size', `${client.guilds.size}`)
	.addField('Users size', `${client.users.size}`)
	.addField('Channels size', `${client.channels.size}`)
	.setTimestamp()
	.setFooter('Made by 青楓OuO#5224', 'https://yt3.ggpht.com/-HZiKlwM2SWA/AAAAAAAAAAI/AAAAAAAAAAA/w_a9sYsYiOE/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg');
	message.channel.send(botEmbed);
}


if (command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply(`You don't have permission. If you think this is wrong please report bug at suppot server. `);
    }
	if(message.guild.id == "632237589771976714") {
		message.delete().catch(O_o => { });
      return message.channel.send(`${sayMessage}`);
    }
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => { });
    // And we get the bot to say the thing: 
	const sayEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Message.')
	.addField(`Message:` , `${sayMessage}` )
	.setTimestamp()
	.setFooter(`Message send by:${message.author.username}`, `${message.author.avatarURL}` )

    message.channel.send(sayEmbed);
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
        name: "!!ban",
        value: "Ban someone in your server"
      },
{
        name: "!!botinfo",
        value: "Bot's information."
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



if (command === "ban") {
    const member = message.mentions.members.first()
const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)


    if (!member) {
      return message.reply(
        `Who are you trying to kick? You must mention a user.`
      );
    }
    if (!banReason) {
      return message.reply(
        `You need to enter a reason!`
      );
    }

    if (!member.bannable) {
      return message.reply(`I can't ban this user.`);
    }
	
	if (!message.guild.me.hasPermissions("BAN_MEMBERS")) {
      return message.reply(`I don't have  permissions **Ban members**.`);
    }

if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.reply(`You don't have permissions **Ban members**.`);
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} has been ban.`))
      .catch(error => message.reply(`Sorry,We have an error.`));
  }

  
    if (command === "kick") {
    const member = message.mentions.members.first()
    message.react("656567727942795267");

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

    
 if (command === "botvote") {
	 dbl.hasVoted(`${message.author.id}`).then(voted => {
    if (voted) message.channel.send(`${message.author.username} has voted`)
    else{
        message.channel.send("NO! You haven't vote now!")
        }
   
    });

 }

	

});

client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.

    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (message.author.bot) return;

    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if (message.content.indexOf(config.Chinese_prefix) !== 0) return;

    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.Chinese_prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
   
	if (command === "ping"){
    message.channel.send(`Pong!   API  ${Math.round(client.ping)}延遲`);
  }
	if (command === "react-set"){
		const set = args.join(" ");
		let tf = {
			
		};
		if(!set) {
	return	message.reply('你需要選擇 True 或 false.');
		}
		
		if(set === "true") {
		    let setting = {
			Guild: ${message.guild.id}
			setting: true    
		    }
	       fs.writeFile("./setting.json", JSON.stringify(setting));
		}
		
		if(set === "false") {
	return	message.reply('Test no but good');
		}
		
		message.channel.send('你需要選擇 **true** 或 **false**!')
		
		
 
  }

    if (command === "invite") {
	    message.channel.send({embed: {
  color:0x00FF00,
   author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
 title: "機器人資訊",
  description: "一堆訊息",
  fields: [{
        name: "邀請我到你的伺服器",
        value: "[點我!!!](https://discordapp.com/oauth2/authorize?client_id=650246586445594625&permissions=8&scope=bot)"
      },
	  {
        name: "需要幫助?",
        value: "[點我~](https://discord.gg/AFGqm5f)"
      },
	   {
        name: "投票給我!",
        value: "[點我.](https://top.gg/bot/650246586445594625/vote)"
      }
	 ],
    footer: {
      icon_url: 'https://yt3.ggpht.com/-HZiKlwM2SWA/AAAAAAAAAAI/AAAAAAAAAAA/w_a9sYsYiOE/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg',
      text: "由 青楓OuO#5224 製作"
    }}});
  
}
	if (command === "serverinfo") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('伺服器資訊')
	.addField('伺服器名稱', `${message.guild.name}` )
	.addField('創建時間', `${message.guild.createdAt}`)
	.addField('伺服器主人', `${message.guild.owner}`)
	.addField('人數', `${message.guild.memberCount}`)
	.setTimestamp()
	.setFooter('由 青楓OuO#5224 製作', 'https://yt3.ggpht.com/-HZiKlwM2SWA/AAAAAAAAAAI/AAAAAAAAAAA/w_a9sYsYiOE/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg');
	message.channel.send(exampleEmbed);
}
	
   if (command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply(`你需要有 **管理訊息** 權限 才可使用此指令`);
    }
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => { });
    // And we get the bot to say the thing: 
    const sayEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('訊息')
	.addField( `訊息:` , `${sayMessage}` )
	.setTimestamp()
	.setFooter(`由:${message.author.username}送出`, `${message.author.avatarURL}` )

    message.channel.send(sayEmbed);
}
	
	    if (command === "botinfo") {
	const botEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle("機器人資訊")
	.addField("機器人名稱", `${client.user.username}` )
	.addField("機器人擁有者", `<@485286330792673280>`)
	.addField('伺服器數量', `${client.guilds.size}`)
	.addField('使用者數量', `${client.users.size}`)
	.addField('頻道數量', `${client.channels.size}`)
	.setTimestamp()
	.setFooter('由 青楓OuO#5224 製作', 'https://yt3.ggpht.com/-HZiKlwM2SWA/AAAAAAAAAAI/AAAAAAAAAAA/w_a9sYsYiOE/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg');
	message.channel.send(botEmbed);
}
	
	
	      
	if (command === "help") {
     message.channel.send({embed: {
  color:0x00FF00,
   author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
 title: "幫助",
  description: "prefix:--",
  fields: [{
        name: "--ping",
        value: "API的延遲."
      },
      {
        name: "--invite",
        value: "邀請機器人到你的伺服器"
      },
      {
          name: "--say",
          value: "用機器人說話"
      },
	  {
        name: "--kick",
        value: "踢出某位使用者"
      },
      {
        name: "--ban",
        value: "將某人列為黑名單"
      },
{
        name: "--botinfo",
        value: "機器人資訊"
      },
        {
          name: "--serverinfo",
          value: "伺服器資訊"
      },
	  {
        name: "每則訊息",
        value: "加表情符號"
      }
	 ],
    footer: {
      icon_url: 'https://yt3.ggpht.com/-HZiKlwM2SWA/AAAAAAAAAAI/AAAAAAAAAAA/w_a9sYsYiOE/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg',
      text: "由 青楓OuO#5224 製作"
    }}});
	
    }
	
	if (command === "kick") {
    const member = message.mentions.members.first()

    if (!member) {
      return message.reply(
        `你需要提及一位使用者!`
      );
    }

    if (!member.kickable) {
      return message.reply(`我不能踢出此使用者`);
    }
	
	if (!message.guild.me.hasPermissions("KICK_MEMBERS")) {
      return message.reply(`我沒有權限! 請通知管理員.`);
    }

if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.reply(`你並沒有權限 無法使用此指令. `);
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} 已踢出.`))
      .catch(error => message.reply(`發生了錯誤!`));
  }
	if (command === "ban") {
    const member = message.mentions.members.first()
const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)


    if (!member) {
      return message.reply(
        `你需要提及一位使用者!`
      );
    }
    if (!banReason) {
      return message.reply(
        `你需要提供原因!`
      );
    }

    if (!member.bannable) {
      return message.reply(`我不能將此使用者列為黑名單`);
    }
	
	if (!message.guild.me.hasPermissions("BAN_MEMBERS")) {
      return message.reply(`我沒有權限! 請通知管理員.`);
    }

if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.reply(`你並沒有權限 無法使用此指令. `);
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} 已列為黑名單.`))
      .catch(error => message.reply(`發生了錯誤!`));
  }

	
   if (command === ".w.-8787878787+87") {
	   message.delete()
		message.channel.send('你好 <@488951133528653834> 此群的自動新增表情已啟用 :D 感謝你的使用.');
	   message.channel.send("Hi, <@488951133528653834> This server's auto react is on.  :D Thank you for using Emojibot.");
	   
}

});
//const user = message.mentions.users.first(); // returns the user object if an user mention exists
//const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)

client.on('message', message => {
     if (message.content === '!!emoji' || message.content === '--emoji') {
	     
	    var roll = (Math.floor(Math.random() * 17) + 1);
    if (roll == 1) {
	    message.delete(5000);
        message.channel.send("<:owo:625208023811358775>");
    }
    if (roll == 2) {
	    message.delete(5000);
      message.channel.send("<:ww:625208023547379712>");
    }
    if (roll == 3) {
	    message.delete(5000);
        message.channel.send(":tada:");
    }
    if (roll == 4) {
       message.delete(5000);
	    message.channel.send("<:LuL:625208025241878529>");
    }
    if (roll == 5) {
	    message.delete(5000);
        message.channel.send("<:GengarRip:625208023320887312>");
    }
	if (roll == 6) {
	    message.delete(5000);
        message.channel.send("<:8987_discord:655247342433468450>");
    }
	if (roll == 7) {
	    message.delete(5000);
        message.channel.send("<:spots:667957942472933427>");
    }
	    if (roll == 8) {
	    message.delete(5000);
        message.channel.send(":+1:");
    }
	    if (roll == 9) {
	    message.delete(5000);
        message.channel.send(":smile:");
    }
	    if (roll == 10) {
	    message.delete(5000);
        message.channel.send(":dollar:");
    }
	     
	    
	     if (roll == 11) {
  message.delete(5000);
        message.channel.sendMessage("<:owo:693348921271124009>");
    }
	   
	      if (roll == 12) {
  message.delete(5000);
        message.channel.sendMessage("<a:test:643004985642188800>");
    }
	   
	     if (roll == 13) {
  message.delete(5000);
        message.channel.sendMessage("<a:slime:715538193126129704>");
    }   
	    if (roll == 14) {
  message.delete(5000);
        message.channel.sendMessage("<a:Hehe~1:692422760076410881>");
    }
	     if (roll == 15) {
  message.delete(5000);
        message.channel.sendMessage("<:wut:713513735607812237>");
    }
	     if (roll == 16) {
  message.delete(5000);
        message.channel.sendMessage("<:XD:716206293853143050>");
    } 
	     if (roll == 17) {
  message.delete(5000);
        message.channel.sendMessage("<:ouo87:716532491422400533>");
    }/**
	     if (roll == 16) {
  message.delete(5000);
        message.channel.sendMessage("<:sky_studio_logo:670887659798921266>");
    }
	     if (roll == 17) {
  message.delete(5000);
        message.channel.sendMessage("<:sitting_panda:670950858342531082>");
    }
	     if (roll == 18) {
  message.delete(5000);
        message.channel.sendMessage("<:redstone_torch:670932686969503745>");
    }
	     if (roll == 19) {
  message.delete(5000);
        message.channel.sendMessage("<:Pork_chop:670951339785846799>");
    }
	     if (roll == 20) {
  message.delete(5000);
        message.channel.sendMessage("<:minecart_command_block:670927001602752514>");
    }
	     if (roll == 21) {
  message.delete(5000);
        message.channel.sendMessage("<:lucky_block:670954372674486272>");
    }
	     if (roll == 22) {
  message.delete(5000);
        message.channel.sendMessage("<:iron_ingot:670950964227735564>");
    }
	     if (roll == 23) {
  message.delete(5000);
        message.channel.sendMessage("<:honey_bottle:670953738785259540>");
    }
	      if (roll == 24) {
  message.delete(5000);
        message.channel.sendMessage("<:golden_apple:670923631404122122>");
    }
	     if (roll == 25) {
  message.delete(5000);
        message.channel.sendMessage("<:glass_bottle:670951239407763476>");
    }
	     if (roll == 26) {
  message.delete(5000);
        message.channel.sendMessage("<:fox~1:670952082265866240>");
    }
	     if (roll == 27) {
  message.delete(5000);
        message.channel.sendMessage("<:enchanting_revision_bottle:670934480214818846>");
    }
	     if (roll == 28) {
  message.delete(5000);
        message.channel.sendMessage("<:easter_spawn_egg:670963673438879764>");
    }
	     if (roll == 29) {
  message.delete(5000);
        message.channel.sendMessage("<:diamond:670951481238749194>");
    }
	      if (roll == 30) {
  message.delete(5000);
        message.channel.sendMessage("<:coin:670918509106167849>");
    }
	     if (roll == 31) {
  message.delete(5000);
        message.channel.sendMessage("<:bedrock:670933546168221707>");
    }
	     if (roll == 32) {
  message.delete(5000);
        message.channel.sendMessage("<:apple~1:670924077799833626>");
    }
	**/
    
   /** else{
        const voteEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Emoji')
	.addField('Sorry', `You need to vote to use this command.` )
	.addField('Vote link', `[Click me](https://top.gg/bot/650246586445594625/vote)`)
	.addField('抱歉', `你需要前往投票才可以使用此指令`)
	.addField('投票連結', `[點我](https://top.gg/bot/650246586445594625/vote)`)
	.setTimestamp()
	.setFooter('由 青楓OuO#5224 製作/Made by 青楓OuO#5224', 'https://yt3.ggpht.com/-HZiKlwM2SWA/AAAAAAAAAAI/AAAAAAAAAAA/w_a9sYsYiOE/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg');
	message.channel.send(voteEmbed);
	   
        }**/

	
  
	
	

}});


client.login(process.env.BOT_TOKEN);
