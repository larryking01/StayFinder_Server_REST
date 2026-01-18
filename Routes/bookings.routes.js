import supabaseClient from "../configs/supabase.js";
import express from 'express';



const bookingsRouter = express.Router();


// POST requests
bookingsRouter.post('/add-new-booking/:user', ( req, res ) => {
    res.json("add new bookings route reached")
})



// GET requests
bookingsRouter.get('/user-bookings/:user', ( req, res ) => {
    res.json("user bookings route reached")
})


bookingsRouter.get('/find-booking/:bookingID', ( req, res ) => {
    res.json("target booking route reached")
})



// PUT requests
bookingsRouter.put('/update-booking/:bookingID', ( req, res ) => {
    res.json("update booking route reached")
})



// DELETE requests
bookingsRouter.delete('/cancel-booking/:bookingID', ( req, res ) => {
    res.json("delete booking route reached")
})


bookingsRouter.delete('/cancel-all-bookings', ( req, res ) => {
    res.json("delete all bookings route reached")
})




export default bookingsRouter