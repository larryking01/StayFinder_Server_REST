
import supabaseClient from "../configs/supabase.js";
import express from 'express';



const reviewsRouter = express.Router();


// POST requests
reviewsRouter.post('/add-new-review/:user', ( req, res ) => {
    res.json("add new reviews route reached")
})



// GET requests
reviewsRouter.get('/get-all-reviews', ( req, res ) => {
    res.json("all reviews route")
})


reviewsRouter.get('/find-review/:reviewID', ( req, res ) => {
    res.json("target review route reached")
})



// PUT requests
reviewsRouter.put('/update-review/:reviewID', ( req, res ) => {
    res.json("update review route reached")
})



// DELETE requests
reviewsRouter.delete('/delete-review/:reviewID', ( req, res ) => {
    res.json("delete review route reached")
})


reviewsRouter.delete('/delete-all-reviews', ( req, res ) => {
    res.json("delete all reviews route reached")
})



export default reviewsRouter