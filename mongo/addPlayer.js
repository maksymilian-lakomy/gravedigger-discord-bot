import Connection from "./Connection.js";

import Discord from "discord.js";
import Mongo from "mongodb";

export default function addPlayer(member) {
    if (member instanceof Discord.GuildMember && Connection.db instanceof Mongo.MongoClient) {
        let dbo = Connection.db.db("gravedigger");

        const idObject = {
            _id: member.id
        }

        dbo.collection("Players").updateOne(idObject, {$set: {name: member.user.username}}, {
            upsert: true
        }, (err, res) => {
            if (err) throw err;
            console.log (`Player ${member.user.username} has been updated!`);
        });
    }
}