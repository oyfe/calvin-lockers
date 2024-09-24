import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
// import { getAvailableLockers } from './services/lockerService.js';
import lockerRoutes from "./routes/lockerRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
// app.use('/api/lockers', lockerRoutes);

// app.get('/', (req, res) => {
//   res.send('Server is up and running!');
// });


app.use('/locker',lockerRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An internal server error occurred' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});