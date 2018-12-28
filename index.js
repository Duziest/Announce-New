const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
const bot = new Discord.Client({disableEveryone: true})
bot.commands = new Discord.Collection();
var prefix = ".";

client.on("message", async message => {
	var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;

  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
 let cmd = messageArray[0];
	switch (args[0].toLowerCase()) {
		case "say":
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You're not an admin!");
await message.delete();
let embed = new Discord.RichEmbed()
.setDescription(args.join(" ").slice(3))
.setTimestamp()
.setFooter(`Announced by ${message.member.user.username}`)
.setColor("#FFFFFF");

message.channel.send(embed);
break; 
case "help":
let helpEmbed = new Discord.RichEmbed()
.addField("**Commands**",
"** **")
.addField(`.say [message]`, "Have the bot say something using RichEmbed.\n*(( Could be used for announcements, information, polls, etc ))*")
.addField(".help", "Displays this message.")
.addField("Want your own version?", "If so, join our server at https://discord.io/duziest and make a ticket to order your own.")
.setColor("#FFFFFF")
.setTimestamp()
.setFooter(`Coded by Duziest#5104`);
message.channel.send(helpEmbed);
break;
case "devleave":
    if(!message.member.id === "394249288005451776") return message.channel.send("Nope.");
await message.channel.send("Leaving. Bye!");
message.guild.leave();
break;
}
});

client.on("ready", async () => {
	console.log(`${client.user.username} is online on ${client.guilds.size} servers with ${client.users.size}!`);
	client.user.setActivity(`.help | Announce`, {type: "WATCHING"});
  });

client.login("TOKEN");
