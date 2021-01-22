require('dotenv').config()
const Discord = require('discord.js')
const client =new Discord.Client();

const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

client.on('ready',()=>{
    console.log('Bot is ready');
})
client.login(process.env.BOT_TOKEN)
client.on('message', msg => {

    if ((msg.content === `Show`)||(msg.content === `show`)) {
        const vgmUrl= 'https://flowalgo.com';
        got(vgmUrl).then(response => {
        const dom = new JSDOM(response.body);
       console.log(
        msg.reply(dom.window.document.querySelector('.inner').textContent)
       );

    }).catch(err => {
        console.log(err);
        });   
}


   
});