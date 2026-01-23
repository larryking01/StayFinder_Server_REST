import createUserSupabaseClient from '../configs/supabase.user.js';
import express from 'express';



const bookingsRouter = express.Router();


// POST requests
bookingsRouter.post('/add-new-booking', async ( req, res ) => {
    let supabaseUser = createUserSupabaseClient( req )
    console.log(req.headers.authorization)

    try {
        let bookingData = {
            currency: req.body.currency,
            customer_id: req.body.customer_id,
            hotel_id: req.body.hotel_id,
            customer_email: req.body.customer_email,
            hotel_name: req.body.hotel_name,
            hotel_cover_image: req.body.hotel_cover_image,
            hotel_location: req.body.hotel_location,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            number_of_nights: req.body.number_of_nights,
            price_per_night: req.body.price_per_night,
            total_price: req.body.total_price,
            booking_status: req.body.booking_status,
            payment_status: req.body.payment_status,
            created_at: req.body.created_at
        }

        const { data, error } = await supabaseUser.from("Bookings").insert([ bookingData ]).select().single()

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to add new booking...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'New booking added successfully...',
                data: data
            })
        }

    }
    catch (err) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: err
        })
    }
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