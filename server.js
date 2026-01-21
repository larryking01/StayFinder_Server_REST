import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import hotelsRouter from './Routes/hotels.routes.js';
import authRouter from './Routes/auth.routes.js';
import bookingsRouter from './Routes/bookings.routes.js';
import reviewsRouter from './Routes/reviews.routes.js';



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT || 4000; 




app.use('/hotels', hotelsRouter)

app.use('/auth', authRouter)

app.use('/bookings', bookingsRouter)

app.use('/reviews', reviewsRouter)

// 404 handler
app.use(( req, res ) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint does not exist',
        method: req.method,
        path: req.originalUrl

    })
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}....`);
});
