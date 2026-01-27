import supabasePublic from "../configs/supabase.public.js";
import express from 'express';



const authRouter = express.Router();


// POST REQUESTS
authRouter.post('/register', async ( req, res ) => {
    try {
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        let email = req.body.email
        let password = req.body.password

        const { data, error } = await supabasePublic.auth.signUp({
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
                message: "Failed to register new user...",
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: "User registered successfully...",
                data: data
            })
        }
    }
    catch ( err ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error...",
            error: err
        })
    }

})


authRouter.post('/login', async ( req, res ) => {
    try {
        let email = req.body.email
        let password = req.body.password

        const { data, error } = await supabasePublic.auth.signInWithPassword({
            email: email,
            password: password
        })

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: "Failed to login user...",
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


authRouter.post('/logout', async ( req, res ) => {
    try {
        const { error } = await supabasePublic.auth.signOut()

        if( error ) {
            res.status(500).json({
                success: false,
                status: 500,
                message: "Failed to terminate user session...",
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: "User session terminated successfully",
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


authRouter.post('/send-password-reset-link', async ( req, res ) => {
    try {
        let email = req.body.email

        const { data, error } = await supabasePublic.auth.resetPasswordForEmail( email, {
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


authRouter.post('/reset-password', async ( req, res ) => {
    try {
        let password = req.body.password

        const { data, error } = await supabasePublic.auth.updateUser({
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


// GET Requests
authRouter.get('/current-user', async ( req, res ) => {
    try {
        const { data: { user } } = await supabasePublic.auth.getUser()

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
    try {
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        let email = req.body.email
        let password = req.body.password

        const { data, error } = await supabasePublic.auth.updateUser({
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
    }
    catch( err ) {
        res.status(500).json({
            success: false,
            status: 200,
            message: "Error while trying to fetch current user",
            error: error
        })
    }

})




export default authRouter