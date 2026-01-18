import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import hotelsRouter from './Routes/hotels.routes.js';



const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000; 




app.use('/hotels', hotelsRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}....`);
});
