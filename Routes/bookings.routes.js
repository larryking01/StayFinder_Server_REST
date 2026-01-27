import createUserSupabaseClient from '../configs/supabase.user.js';
import express from 'express';



const bookingsRouter = express.Router();


// POST requests
bookingsRouter.post('/add-new-booking', async ( req, res ) => {
    try {
        let supabaseUser = createUserSupabaseClient( req )
        
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

        const { data, error } = await supabaseUser.from("Bookings").insert([ bookingData ]).select()

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
bookingsRouter.get('/user-bookings/:customerID', async ( req, res ) => {
    try {
        let supabaseUser = createUserSupabaseClient( req )
        let customerID = req.params.customerID

        const { data, error } = await supabaseUser.from('Bookings').select('*').eq('customer_id', customerID)

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to fetch user bookings...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'User bookings fetched successfully...',
                data: data
            })
        }

    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: err
        })
    }
})



bookingsRouter.get('/booking-details/:bookingID', async ( req, res ) => {
    try {
        let supabaseUser = createUserSupabaseClient( req )
        let bookingID = req.params.bookingID

        const { data, error } = await supabaseUser.from('Bookings').select('*').eq('id', bookingID)

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to fetch booking details...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Booking details fetched successfully...',
                data: data
            })
        }

    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: err
        })
    }
})



// DELETE requests
bookingsRouter.delete('/cancel-booking/:bookingID', async ( req, res ) => {
    try {
        let supabaseUser = createUserSupabaseClient( req )
        let bookingID = req.params.bookingID

        const { data, error } = await supabaseUser.from('Bookings').delete().eq('id', bookingID).select()

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to delete booking...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Booking deleted successfully...',
                data: data
            })
        }

    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: err
        })
    }
})


bookingsRouter.delete('/cancel-all-bookings/:customerID', async ( req, res ) => {
    try {
        let customerID = req.params.customerID 
        let supabaseUser = createUserSupabaseClient( req )

        const { data, error } = await supabaseUser.from('Bookings').delete().eq('customer_id', customerID).select()

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to delete all bookings...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'All bookings deleted successfully...',
                data: data
            })
        }

    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: err
        })
    }
})


// PUT requests
bookingsRouter.put('/update-booking/:bookingID', ( req, res ) => {
    res.json("update booking route reached")
})




export default bookingsRouter