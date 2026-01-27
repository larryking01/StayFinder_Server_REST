
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

        const { data, error } = await supabaseUser.from("Reviews").insert([ reviewData ]).select().single()

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