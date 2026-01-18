import supabaseClient from "../configs/supabase.js";
import express from 'express';



const authRouter = express.Router();


// POST REQUESTS
authRouter.post('/register', ( req, res ) => {
    res.json("add new user route reached")
})


authRouter.post('/login', ( req, res ) => {
    res.json("login route")
})


authRouter.post('/logout', ( req, res ) => {
    res.json("logout route")
})




// GET Requests
authRouter.get('/get-current-user', ( req, res ) => {
    res.json("current user route")
})




// PUT REQUESTS
authRouter.put('/update-credentials', ( req, res ) => {
    res.json("user credential update route")
})




export default authRouter