import supabaseClient from '../configs/supabase.js';
import express from 'express'; 
const hotelsRouter = express.Router(); 





// GET requests
hotelsRouter.get('/all', ( req, res ) => {
    res.json("all hotels route reached")
})


hotelsRouter.get('/find-hotel/:hotelID', ( req, res ) => {
    res.json("hotel details route reached")
})




// POST requests
hotelsRouter.post('/add-new-hotel', ( req, res ) => {
    res.json("add new hotel route reached")
})










export default hotelsRouter



