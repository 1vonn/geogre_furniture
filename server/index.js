import express from 'express';
import newsletterRouter from './routes/newsLetter.route.js';
import ordersRouter from './routes/order.route.js';
import clientRouter from './routes/client.route.js';
import { config } from 'dotenv';
import cors from 'cors';

config(); // Load environment variables from .env file

const app = express(); // Initialize Express application



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "PATCH"]
}))

//  routers
app.use("/api/orders", ordersRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/client", clientRouter);



app.listen(3004, () => {
    console.log("App running on port 3004...");
})
export default app;
