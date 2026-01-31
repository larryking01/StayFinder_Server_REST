import express from 'express';
import supabaseAdmin from '../configs/supabase.admin.js';






const notificationsRouter = express.Router();

notificationsRouter.post('/send-signup-confirmation-email', async ( req, res ) => {
    try {
        const fullName = req.body.fullName
        const { data, error } = await supabaseAdmin.functions.invoke('send-signup-confirmation-email', {
            body: {
                to: req.body.to,
                subject: req.body.subject,
                html: `
                    <p>Hello <strong> ${fullName} </strong>,</p>
                    <p>Welcome to <strong>StayFinder</strong>! Your account has been created successfully.</p>
                    <p>
                        To sign in and start using the platform, please verify your email address.
                        Check your inbox for a confirmation email from <strong>Supabase Auth</strong> and click
                        the verification link.
                    </p>
                    <p>If you don’t see the email, check your spam folder.</p>
                    <p>— The StayFinder Team</p>
                `
            }
        })
        if( error ) {
            console.log( error )
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to send welcome email...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Welcome and confirmation email sent successfully...',
                data: data
            })
        }
    }
    catch( error ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: error
        })
    }
})



notificationsRouter.post('/send-email-verification-success', async ( req, res ) => {
    try {
        const { data, error } = await supabaseAdmin.functions.invoke('send-email-verification-success', {
            body: {
                to: req.body.to,
                subject: req.body.subject,
                html: `
                    <div style="font-family: Arial, sans-serif; color: #333;">
                        <h2>You're all set 🎉</h2>
                        <p>Your email has been successfully verified.</p>
                        <p>You can now sign in and <strong>explore all available features.</strong>.</p>

                        <p style="margin-top: 24px;">
                            Happy booking,<br />
                            <strong>The StayFinder Team</strong>
                        </p>
                    </div>

                `
            }
        })
        if( error ) {
            console.log( error )
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to send verification success email...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Verification success email sent successfully...',
                data: data
            })
        }
    }
    catch( error ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: error
        })
    }
})




notificationsRouter.post('/send-booking-success-email', async ( req, res ) => {
    try {
        const hotelName = req.body.hotelName
        const numberOfNights = req.body.numberOfNights
        const location = req.body.location
        const checkInDate = req.body.checkInDate
        const checkOutDate = req.body.checkOutDate
        const checkInTime = req.body.checkInTime
        const checkOutTime = req.body.checkOutTime

        const { data, error } = await supabaseAdmin.functions.invoke('send-booking-success-email', {
            body: {
                to: req.body.to,
                subject: req.body.subject,
                html: `
                    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                        <h2>Booking Confirmed 🎉</h2>

                        <p>Your stay has been successfully booked. Here are your reservation details:</p>

                        <div style="margin: 16px 0; padding: 12px; background-color: #f7f7f7; border-radius: 6px;">
                            <p><strong>Hotel:</strong> ${ hotelName }</p>
                            <p><strong>Location:</strong> ${ location }</p>
                            <p><strong>Check In:</strong> ${ checkInDate } at ${ checkInTime}</p>
                            <p><strong>Check Out:</strong> ${ checkOutDate } at ${ checkOutTime}</p>
                            <p><strong>Nights:</strong> ${ numberOfNights }</p>
                        </div>

                        <p>
                            You can view or manage your booking anytime from your StayFinder dashboard.
                        </p>

                        <p style="margin-top: 20px;">
                            Safe travels,<br />
                            <strong>The StayFinder Team</strong>
                        </p>
                    </div>

                `
            }
        })
        if( error ) {
            console.log( error )
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to send booking success email...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Booking success email sent successfully...',
                data: data
            })
        }
    }
    catch( error ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: error
        })
    }
})




notificationsRouter.post('/send-booking-failure-email', async ( req, res ) => {
    try {
        const hotelName = req.body.hotelName
        const numberOfNights = req.body.numberOfNights
        const location = req.body.location
        const checkInDate = req.body.checkInDate
        const checkOutDate = req.body.checkOutDate
        const checkInTime = req.body.checkInTime
        const checkOutTime = req.body.checkOutTime

        const { data, error } = await supabaseAdmin.functions.invoke('send-booking-success-email', {
            body: {
                to: req.body.to,
                subject: req.body.subject,
                html: `
                    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                        <h2>Booking Unsuccessful ⚠️</h2>

                        <p>Unfortunately, we couldn’t complete your hotel booking.</p>
                        <p>Here are the details you attempted to book:</p>

                        <div style="margin: 16px 0; padding: 12px; background-color: #f7f7f7; border-radius: 6px;">
                            <p><strong>Hotel:</strong> ${ hotelName }</p>
                            <p><strong>Location:</strong> ${ location }</p>
                            <p><strong>Check In:</strong> ${ checkInDate } at ${ checkInTime}</p>
                            <p><strong>Check Out:</strong> ${ checkOutDate } at ${ checkOutTime}</p>
                            <p><strong>Nights:</strong> ${ numberOfNights }</p>
                        </div>

                        <p>No charges were made. You can try booking again or explore other available options on StayFinder</p>

                        <p style="margin-top: 20px;">If you need help, feel free to reach out to our support team.</p>

                        <p style="margin-top: 20px;"><strong>The StayFinder Team</strong></p>
                    </div>

                `
            }
        })
        if( error ) {
            console.log( error )
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to send booking failure email...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Booking failure email sent successfully...',
                data: data
            })
        }
    }
    catch( error ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: error
        })
    }
})




notificationsRouter.post('/send-booking-cancellation-email', async ( req, res ) => {
    try {
        const hotelName = req.body.hotelName
        const numberOfNights = req.body.numberOfNights
        const location = req.body.location
        const checkInDate = req.body.checkInDate
        const checkOutDate = req.body.checkOutDate
        const checkInTime = req.body.checkInTime
        const checkOutTime = req.body.checkOutTime

        const { data, error } = await supabaseAdmin.functions.invoke('send-booking-success-email', {
            body: {
                to: req.body.to,
                subject: req.body.subject,
                html: `
                    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                        <h2>Booking Cancelled</h2>

                        <p>Your booking has been successfully cancelled as requested.</p>
                        <p>Here are the details of the cancelled booking:</p>

                        <div style="margin: 16px 0; padding: 12px; background-color: #f7f7f7; border-radius: 6px;">
                            <p><strong>Hotel:</strong> ${ hotelName }</p>
                            <p><strong>Location:</strong> ${ location }</p>
                            <p><strong>Check In:</strong> ${ checkInDate } at ${ checkInTime}</p>
                            <p><strong>Check Out:</strong> ${ checkOutDate } at ${ checkOutTime}</p>
                            <p><strong>Nights:</strong> ${ numberOfNights }</p>
                        </div>

                        <p>If a refund applies, it will be processed according to the hotel’s cancellation policy.</p>

                        <p>You’re always welcome to book again anytime on StayFinder.</p>

                        <p style="margin-top: 20px;"><strong>The StayFinder Team</strong></p>
                    </div>

                `
            }
        })
        if( error ) {
            console.log( error )
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Failed to send booking failure email...',
                error: error
            })
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Booking failure email sent successfully...',
                data: data
            })
        }
    }
    catch( error ) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Internal server error...',
            error: error
        })
    }
})





export default notificationsRouter