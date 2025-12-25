import pool from "../utils/dbConnect.js";
import express from "express"
const router = express.Router()


router.get("/read",async(req,res)=>{
    try {
        let users = await pool.execute("SELECT * FROM users")
        res.status(200).json(users[0])
        console.log(users[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})


router.post("/create",async(req,res)=>{
    try {
    let {name,email} = req.body      
    const [users] =   await pool.execute('INSERT INTO users (name,email) VALUES(?,?)',
        [name,email]
    )
    res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
   }
})

router.put("/update",async(req,res)=>{
    try {
        let{id,name,email} = req.body 
       let users = await pool.execute(' UPDATE users SET name=? ,email=? WHERE id = ?',
        [name,email,id]
       )
       res.status(200).json(users)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try {
        await pool.execute('DELETE FROM users WHERE id=?',[req.params.id])
        res.status(200).json("user deleted")
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})



export default router