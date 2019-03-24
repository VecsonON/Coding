// const Discord = require("discord.js");
//
//
//
// module.exports.run = async (bot, message, args) => {
//
//
//
//   // if(message.guild.id != "364019348295254017") return;
//
//
//
//   let role = message.guild.roles.find(r => r.name === "Twórca BOTA");
//
//   if(!role){
//
//     try{
//
//     role = await message.guild.createRole({
//
//         name: "Twórca BOTA",
//
//         hoist: true,
//
//         permissions: 104324161
//
//       })
//
//     }catch(e){
//
//       console.log(e.stack);
//
//     };
//
//   }
//
//
//
//   if(message.member.roles.has(role.id)) return;
//
//   await(message.member.addRole(role.id));
//
//
//
// };
//
//
//
// module.exports.help = {
//
//   name:"Host"
//
// };
