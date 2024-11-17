const Discord = require('discord.js'); //gets the discord.js library
const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});


/*
const messages = ["pieu", "porte coulissante qui grince", "Legos disposés au sol", "étagère vascillante"]

const randomMessage = messages[Math.floor(Math.random() * messages.length)];
*/

async function fetchAllMessages() {
  if (typeof totArmes === 'undefined') {
    const channel = client.channels.cache.get("943577676663390311");
    let messages = [];

    // Create message pointer
    let message = await channel.messages
      .fetch({ limit: 1 })
      .then(messagePage => (messagePage.size === 1 ? messagePage.at(0) : null));

    while (message) {
      await channel.messages
        .fetch({ limit: 100, before: message.id })
        .then(messagePage => {
          messagePage.forEach(msg => messages.push(msg));

          // Update our message pointer to be last message in page of messages
          message = 0 < messagePage.size ? messagePage.at(messagePage.size - 1) : null;
        }
        )
    }
    console.log(messages);  // Print all messages
    totArmes = []
    for (var i = 0; i < messages.length; i++) {
      var Message = messages[i];
      totArmes.push(Message["content"]);
    }
    r = Math.floor(Math.random() * totArmes.length);
    //client.channels.cache.get(`1011893363273908237`).send(totArmes[r]);
    //console.log(totArmes[r]);
    client.channels.cache.get(`943582450779570196`).send(totArmes[r]);
    console.log(totArmes[r]);
    arme = totArmes[r];
  } else {
    r = Math.floor(Math.random() * totArmes.length);
    //client.channels.cache.get(`1011893363273908237`).send(totArmes[r]);
    //console.log(totArmes[r]);
    client.channels.cache.get(`943582450779570196`).send(totArmes[r]);
    console.log(totArmes[r]);
    arme = totArmes[r];
  }

}

client.once('ready', () => {


  console.log("Félicitations, votre bot Discord a été correctement initialisé !");
  //   client.channels.cache.get(`1011893363273908237`).send(randomMessage);
});
client.on('messageCreate', (message) => {
  if (message.content === 'Arme est requise !') {
    message.reply({
      content: String("Arme :"),
    })
    fetchAllMessages();


  }

})

/*
  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
let i = 0
while (i < 10) {
 sleep(1000);
 i++;
 fetchAllMessages(); 
}
*/


client.login("YOU WON'T GET MY TOKEN BRU");
