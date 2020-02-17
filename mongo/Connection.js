import Dotenv from "dotenv";
Dotenv.config();

import Mongo from "mongodb";
const MongoClient = Mongo.MongoClient;


export default class Connection {
    static connectToMongo() {
        if (this.db)
            return Promise.resolve(this.db);
        return MongoClient.connect(process.env.MONGODB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
            .then(db => this.db = db);
    }
}

Connection.db = null;
