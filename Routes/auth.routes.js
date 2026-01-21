import supabaseClient from "../configs/supabase.js";
import express from 'express';



const authRouter = express.Router();


// POST REQUESTS
authRouter.post('/register', async ( req, res ) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                firstName: firstName,
                lastName: lastName
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
    let email = req.body.email
    let password = req.body.password

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
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


authRouter.post('/logout', async ( req, res ) => {
    const { error } = await supabaseClient.auth.signOut()

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
            message: "Session terminated successfully",
        })
    }
})


authRouter.post('/send-password-reset-link', async ( req, res ) => {
    let email = req.body.email

    const { data, error } = await supabaseClient.auth.resetPasswordForEmail( email, {
        redirectTo: 'redirect link here'
    })
    if( error ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Failed to send password reset link",
            error: error
        })
    }
    else {
        res.status(200).json({
            success: true,
            status: 200,
            message: "Password reset link sent..",
            data: data
        })
    }
})


authRouter.post('/reset-password', async ( req, res ) => {
    let password = req.body.password

    const { data, error } = await supabaseClient.auth.updateUser({
        password: password
    })

    if( error ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Failed to reset user password",
            error: error
        })
    }
    else {
        res.status(200).json({
            success: true,
            status: 200,
            message: "Password reset successfully..",
            data: data
        })
    }
})


// GET Requests
authRouter.get('/current-user', async ( req, res ) => {
    const { data: { user } } = await supabaseClient.auth.getUser()
    
    try {
        if(!user) {
            res.status(200).json({
                success: true,
                status: 200,
                message: "No current user is available",
                data: user
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: "Current user details fetched",
                data: user
            })
        }
    }
    catch( error ) {
        res.status(500).json({
            success: false,
            status: 200,
            message: "Error while trying to fetch current user",
            error: error
        })
    }
})


// PUT REQUESTS
authRouter.put('/update-user-details', async ( req, res ) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password

    const { data, error } = await supabaseClient.auth.updateUser({
        email: email,
        password: password,
        data: {
            firstName: firstName,
            lastName: lastName
        }
    })

    if( error ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Failed to update user details",
            error: error
        })
    }
    else {
        res.status(200).json({
            success: true,
            status: 200,
            message: "User details updated successfully...",
            data: data
        })
    }

})




export default authRouter