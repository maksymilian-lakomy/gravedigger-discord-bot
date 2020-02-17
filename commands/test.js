import Command from "../classes/Command.js";
import Discord from "discord.js";

import addPlayer from "../mongo/addPlayer.js";

function method(args, msg) {
    if (msg instanceof Discord.Message) {
        addPlayer(msg.member);
    }
        
}

export default new Command ("test", method);