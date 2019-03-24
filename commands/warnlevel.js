const Discord = require("discord.js");


const fs = require("fs");



let warns = JSON.parse(fs.readFileSync("./warny.json", "utf8"));



module.exports.run = async (bot, message, args) => {



  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that!");

  let wUser = message.mentions.members.first();

  if(!wUser) return message.reply("Couldn't find them.");

  let warnlevel = warns[wUser.id].warns;



  message.channel.send(`<@${wUser.id}> ma ${warnlevel} warnów.`);



};



module.exports.help = {

name: "warnlevel"

};
