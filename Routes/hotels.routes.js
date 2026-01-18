import supabaseClient from '../configs/supabase.js';
import express from 'express'; 





const hotelsRouter = express.Router(); 


// POST requests
hotelsRouter.post('/add-new-hotel', ( req, res ) => {
    res.json("add new hotel route reached")
})



// GET requests
hotelsRouter.get('/get-all-hotels', ( req, res ) => {
    res.json("all hotels route reached")
})


hotelsRouter.get('/find-hotel/:hotelID', ( req, res ) => {
    res.json("hotel details route reached")
})










export default hotelsRouter



