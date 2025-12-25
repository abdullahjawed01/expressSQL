import express from "express"
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.get("/",(req,res)=>{
    try {
        res.status(200).json("The server is running ")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.listen(PORT,()=>{
    console.log(`Server is up and running on http://localhost:${PORT}`);
})