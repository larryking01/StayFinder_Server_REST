import supabasePublic from '../configs/supabase.public.js';
import express from 'express'; 





const hotelsRouter = express.Router(); 


// POST requests
hotelsRouter.post('/add-new-hotel', ( req, res ) => {
    res.json("add new hotel route reached")
})



// GET requests
hotelsRouter.get('/get-all-hotels', async ( req, res ) => {
    try {
        const { data, error } = await supabasePublic.from('Hotels').select('*')

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to fetch all hotels..',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'All hotels fetched...',
                data: data
            })
        }
    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Unexpected server error...',
            error: err.message
        })
    }
})


hotelsRouter.get('/find-hotel/:hotelID',  async ( req, res ) => {
    try {
        const hotelID = req.params.hotelID
        const { data, error } = await supabasePublic.from('Hotels').select('*').eq('id', hotelID).single()

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: 'No matching hotel found...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Hotel fetched successfully...',
                data: data
            })
        }
    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Unexpected server error...',
            error: err.message
        })
    }
})










export default hotelsRouter



