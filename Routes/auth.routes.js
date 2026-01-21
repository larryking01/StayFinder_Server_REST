import supabaseClient from "../configs/supabase.js";
import express from 'express';



const authRouter = express.Router();


// POST REQUESTS
authRouter.post('/register', async ( req, res ) => {
    const { data, error } = await supabaseClient.auth.signUp({
        email: req.body.email,
        password: req.body.password,
        options: {
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }
        }
    })

    if( error ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Failed to register new user",
            error: error
        })
    }
    else {
        res.status(200).json({
            success: true,
            status: 200,
            message: "User registered successfully",
            data: data
        })
    }

})


authRouter.post('/login', async ( req, res ) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: req.body.email,
        password: req.body.password
    })

    if( error ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Failed to login user",
            error: error
        })
    }
    else {
        res.status(200).json({
            success: true,
            status: 200,
            message: "User logged in successfully",
            data: data
        })
    }
})


authRouter.post('/logout', ( req, res ) => {
    res.json("logout route")
})




// GET Requests
authRouter.get('/get-current-user', ( req, res ) => {
    res.json("current user route")
})




// PUT REQUESTS
authRouter.put('/update-credentials', ( req, res ) => {
    res.json("user credential update route")
})




export default authRouter