const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  var wUser = message.mentions.members.first();

  var wMember = message.guild.member(wUser);

  //!unban @user



  var ubUser = args[0];



  let ubChannel = message.guild.channels.find(c => c.name === "coding-logs");



  if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");

  if(args[0] == "help"){

      message.reply("Usage: !unban <user>");

      return;

    }



  if(!args.slice(0).join(" ")) return errors.didntSpecifyUser(message);

  if(!ubUser) return errors.cantFindID(message);



  message.guild.unban(ubUser);

let channel = message.guild.channels.find(c => c.name === "coding-logs");




let embed = new Discord.RichEmbed()

.setDescription("~UNBAN~")

.setColor("#000000")

.addField("Unbanned User", `<@${ubUser}> with ID: ${ubUser}`)

.addField("Unbanned By", `<@${message.author.id}> with ID: ${message.author.id}`);

let incidentchannel = message.guild.channels.find(`name`, "coding-logs");
if(!incidentchannel) return message.channel.send("Nie znalezono kanału incydentów");
message.guild.unban(ubUser);
message.channel.send(embed);

};



module.exports.help = {

name: "unban",

description: "Unban a member",

usage: "!unban <member>"

};
