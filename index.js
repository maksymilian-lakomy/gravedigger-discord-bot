import Connection from "./mongo/Connection.js";

import Dotenv from "dotenv";
Dotenv.config();

import fs from "fs";
import Discord from "discord.js";
import Command from "./classes/Command.js";
const client = new Discord.Client();

let commands = {};

client.on('ready', () => {
    Connection.connectToMongo();
    let commandsPaths = fs.readdirSync("./commands/");
    for (let path of commandsPaths) {
        if (!path.endsWith(".js"))
            continue;
        import(`./commands/${path}`).then(m => {
            if (m.default && m.default instanceof Command) {
                commands[m.default.name] = m.default.method;
            }
        });
    }
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX))
        return;
    const finalMsg = msg.content.substr(1).toLowerCase().split(" ");
    if (commands[finalMsg[0]])
        commands[finalMsg[0]](finalMsg.slice(1), msg);
});

client.login(process.env.TOKEN);