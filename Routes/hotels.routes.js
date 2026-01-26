import supabasePublic from '../configs/supabase.public.js';
import express from 'express'; 





const hotelsRouter = express.Router(); 


// POST requests
hotelsRouter.post('/add-new-hotel', async ( req, res ) => {
    try {
        let hotelData = {
            hotelName: req.body.hotelName,
            shortDescription: req.body.shortDescription,
            fullDescription: req.body.fullDescription,

            streetAddress: req.body.streetAddress,
            city: req.body.city,
            country: req.body.country,

            latitude: req.body.latitude,
            longitude: req.body.longitude,

            startingPrice: req.body.startingPrice,
            currency: req.body.currency,
            priceRange: req.body.priceRange,

            isAvailable: req.body.isAvailable,
            numberOfRoomsAvailable: req.body.numberOfRoomsAvailable,

            coverImageURL: req.body.coverImageURL,
            galleryImages: req.body.galleryImages,

            averageRating: req.body.averageRating,
            reviewCount: req.body.reviewCount,
            starRating: req.body.starRating,

            amenities: req.body.amenities,
            policies: req.body.policies,
            accessibilityFeatures: req.body.accessibilityFeatures,

            checkInTime: req.body.checkInTime,
            checkOutTime: req.body.checkOutTime,

            minimumStay: req.body.minimumStay,
            maximumStay: req.body.maximumStay,

            houseRules: req.body.houseRules,

            contactPhone: req.body.contactPhone,
            contactEmail: req.body.contactEmail,

            acceptedPaymentMethods: req.body.acceptedPaymentMethods,

            isFeatured: req.body.isFeatured
        };

        const { data, error } = await supabasePublic.from("Hotels").insert([ hotelData ]).select().single()

        if( error ) {
            console.log( error )
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to add new hotel...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'New hotel added successfully...',
                data: data
            })
        }

    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: err
        })
    }
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



