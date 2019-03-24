const Discord = require("discord.js");

const fs = require("fs");

const errors = require("../utils/errors.js");





module.exports.run = async (bot, message, args) => {


  var wUser = message.mentions.members.first();

  var wMember = message.guild.member(tomute);
  //!mute @user reason



  let user = message.mentions.members.first();

  var tomute = message.guild.member(user);

  let mReason = args[1];

  let muterole = message.guild.roles.find(c => c.name === "🔇 MUTED 🔇");

  let muteChannel = message.guild.channels.find(c => c.name === "coding-logs");



  if(!muteChannel) return errors.cantFindMuteLogs(message);





  //start of create role



      //start of create role

      if(!muterole){

        try{

          muterole = await message.guild.createRole({

            name: "🔇 MUTED 🔇",

            color: "#585454",

            hoist: true,

            permissions: 1115137

          })

          message.guild.channels.forEach(async (channel, id) => {

            await channel.overwritePermissions(muterole, {

              SEND_MESSAGES: false,

              ADD_REACTIONS: false

            })

          })

        }catch(e){

          console.log(e.stack);

        };

      };


      await(tomute.addRole(muterole.id));
      message.channel.send(`<@${tomute.id}> dostał muta`);

      await tomute.send(`dostałeś muta na **__${message.guild}__**  od admina:${message.author} czas muta :Prem`);




};



module.exports.help = {

  name: "mute",

  description: "Mute a player",

  usage: "!mute <@player>"

};
