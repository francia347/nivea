const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
  var generalChannel = client.channels.cache.get(891145051021922385)

  generalChannel.send("Hola a todo el mundo")
  
   console.log("Estoy listo!");
});

client.on("message", (message) => {
  if (message.content.startsWith("¿Madre?")) {
    message.channel.send("Mi madre es Sochel!")}
    if (message.content.startsWith("Nivea")){
    message.channel.send("Come cola")}
    if (message.content.startsWith("¿awela?")) {
    message.channel.send("Francia")}
    if (message.content.startsWith("nya")) {
    message.channel.send("ichi ni san") ; 
    }
});

client.login("ODkxNzgyNDk4MDQ3MTExMTk4.YVDXLA._0qG4eLY_AogCY_VBdVkO1RKzeE");   