import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/connection.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import hotelRouter from "./routes/hotel.route.js"

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use("/api/hotels", hotelRouter)
app.use(errorHandlerMiddleware)

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT} 👌`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();