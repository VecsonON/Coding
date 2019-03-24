

const Discord = require("discord.js");

const fs = require("fs");



module.exports.run = async (bot, message, args) => {



  //!unmute @user

  let uRole = message.guild.roles.find(c => c.name === "🔇 MUTED 🔇");



  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("nie masz pozwoleń");

  let uMute = message.mentions.members.first();

  if(!uMute) return message.reply("nie znalezono gracza");

  if(!uMute.roles.has(uRole.id)) return message.channel.send(`<@${uMute.id}> nie ma muta`);



  //start of create role

  if(!uRole){

    message.channels.send("nie ma roli 🔇 MUTED 🔇 ")

  }

  //end of create role



  uMute.removeRole(urole.id)

  message.reply(`<@${(uMute.id)}> dostał unmuta!`)





//end of module

};



module.exports.help = {

  name: "unmute",

  description: "Unmute a player",

  usage: "!unmute <@player>"

};
