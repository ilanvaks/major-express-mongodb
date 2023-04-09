import express from "express";
import cors from "cors";
import { addClothing, getAllClothing, deleteClothing } from "./src/clothing.js";


const PORT = 3000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send(`My clothing api.`)
})

app.get("/clothing", getAllClothing)
app.post("/clothing", addClothing)
app.delete("/clothing/:docId", deleteClothing)
// app.patch("/clothing/:docId", updateClothing)


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})