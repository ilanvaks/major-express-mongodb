import { ObjectId } from "mongodb";
import { db } from "./dbConnect.js";


const coll = db.collection("clothing")


//CRUD: create 
export async function addClothing(req, res) {
  const newClothes = req.body 
  await coll.insertOne(newClothes)
  res.status(201).send({message: "new clothes added"})
}

//CRUD read get

export async function getAllClothing(req, res) {
  const clothing = await coll.find({}).toArray()
  res.send(clothing)
}


//CRUD delete 
export async function deleteClothing(req, res) {
  const docId = { "_id": new ObjectId(req.params.docId) }
  await coll.deleteOne( docId )
  res.status(201).send( { message: "Clothing has been deleted."})
}

// CRUD: update 

// export async function updateClothing(req, res) {
//   const docId = { "_id": new ObjectId(req.params.docId)}
//   const updateClothes = { $set: req.body }
//   const returnOption = { returnNewDocument: true }
  
//   const query = await coll.findOneAndUpdate( docId, updateClothes, returnOption)
//   res.status(201).send( { message: "Clothing has been updated."})
//   console.table(query.value)∫ 
// }



