const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefixes = require("./prefixy.json");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Ladowanie komendy ${commandName}`);
    bot.commands.set(commandName, props);
  });
});
bot.on("ready", async => {
  console.log(`${bot.user.username} Działa! Na ${bot.guilds.size} Serwerach!`);
  let statuses = ["C*pomoc to pomoc bota", 'Stworzyło mnie Coding Studio Dzienki', `Nasza strona www: coding-studio.cba.pl`, `Bot jest na ${bot.guilds.size} Serverach! `, ` ${bot.users.size} Graczy!`];

  setInterval(function() {

    let status = statuses[Math.floor(Math.random()*statuses.length)];
    bot.user.setPresence({ game: { name: status }, status: 'online' });

    //Update every 10 seconds

    }, 10000)
  bot.user.setStatus('available')
});
bot.on("guildMemberAdd", async member => {


    let server = message.guild;
let powitania = server.channels.find(c => c.name === "💡powitania💡");
    let generalCat = server.channels.find(c => c.name === "coding-info");
  let welcomeChannel = server.channels.find(c => c.name === "coding-logs");

  if(!generalCat) await server.createChannel("coding-info", "category");

  if(!welcomeChannel) await server.createChannel("coding-logs", "text");
  if(!powitania) await server.createChannel("💡powitania💡", "text");



   if(powitania) welcomeChannel.send(`Witamy *** ${member}***Na Serverze `);

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./botconfig.json", "utf8"));

  if(!prefixes[message.guild.id]){
   prefixes[message.guild.id] = {
     prefixes: botconfig.prefix
    };
  }

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});
bot.login(botconfig.token);
