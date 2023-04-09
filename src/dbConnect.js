import { MongoClient } from "mongodb";
import { MONGOURI } from "../credential.js";

const client = new MongoClient(MONGOURI)
export const db = client.db("major-express-mongodb")
