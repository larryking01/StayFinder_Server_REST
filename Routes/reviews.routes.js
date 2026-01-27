
import express from 'express';
import createUserSupabaseClient from '../configs/supabase.user.js';






const reviewsRouter = express.Router();


// POST requests
reviewsRouter.post('/add-new-review', async ( req, res ) => {
    try {
        let supabaseUser = createUserSupabaseClient( req )

        let reviewData = {
            user_name: req.body.user_name,
            hotel_id: req.body.hotel_id,
            hotel_name: req.body.hotel_name,
            rating: req.body.rating,
            review_title: req.body.review_title,
            review_content: req.body.review_content,
            is_visible: req.body.is_visible,
            verified_stay: req.body.verified_stay,
        }

        const { data, error } = await supabaseUser.from("Reviews").insert([ reviewData ]).select()

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: "Failed to add new review...",
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: "Review added successfully...",
                data: data
            })
        }
    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error...",
            error: err
        })
    }
    
})



// GET requests
reviewsRouter.get('/get-hotel-reviews/:hotelID', async ( req, res ) => {
    try {
        let hotelID = req.params.hotelID
        let supabaseUser = createUserSupabaseClient( req )

        const { data, error } = await supabaseUser.from("Reviews").select("*").eq("hotel_id", hotelID)

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: "Failed to fetch reviews for hotels...",
                error: err
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: "Successfully fetched reviews for hotel...",
                data: data
            })
        }
    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error...",
            error: err
        })
    }
})


reviewsRouter.get('/find-review/:reviewID', async ( req, res ) => {
    try {
        let reviewID = req.params.reviewID
        let supabaseUser = createUserSupabaseClient( req )

        const { data, error } = await supabaseUser.from("Reviews").select("*").eq("id", reviewID)

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: "Failed to fetch review details...",
                error: err
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: "Successfully fetched review details...",
                data: data
            })
        }
    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error...",
            error: err
        })
    }
})



// DELETE requests
reviewsRouter.delete('/delete-review/:reviewID', async ( req, res ) => {
    try {
        let reviewID = req.params.reviewID
        let supabaseUser = createUserSupabaseClient( req )

        const { data, error } = await supabaseUser.from("Reviews").delete().eq('id', reviewID).select()

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: "Failed to delete review...",
                error: err
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: "Successfully deleted review...",
                data: data
            })
        }
    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error...",
            error: err
        })
    }
})


reviewsRouter.delete('/delete-all-reviews', ( req, res ) => {
    res.json("delete all reviews route reached")
})



// PUT requests
reviewsRouter.put('/update-review/:reviewID', ( req, res ) => {
    res.json("update review route reached")
})



export default reviewsRouter