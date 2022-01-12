const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("OTI4NjE5MDM5MDU0NTE2MjU1.YdbZ3w.IPA6XMrpiM10cq_xCrRrsOUK2Jg")

client.on("ready", () => {
    console.log("Bot ONLINE")
})

client.on("messageCreate", (message) => {
    if (message.content == "+yt") 
        message.channel.send("E' inutile che provi a fare questo comando, ormai ho chiuso...")

        if (message.content == "+aiuto")
        message.channel.send("+yt - +twitch - +ip - +invite - +collab")

if (message.content == "+twitch")
    message.channel.send("Il twitch di _zEmyx è: https://twitch.tv/zemyx212")

    if (message.content == "+collab")
    message.channel.send("La mia collab è Foxeon! Ovvero il mio secondo canale: https://www.youtube.com/channel/UCQHuaJzZ3AxNhnrKqm2f9_A ")

   if (message.content == "+invite")
   message.channel.send("Usa questo per invitare i tuoi amici! https://dsc.gg/emyy")
    
})

