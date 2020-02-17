import Command from "../classes/Command.js";

function method(args, msg) {
    console.log (args);
}

export default new Command ("test", method);