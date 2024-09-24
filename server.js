import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js'
// import { getAvailableLockers } from './services/lockerService.js';
import lockerRoutes from "./routes/lockerRoutes.js"

const app = express();
app.use(express.json());
dotenv.config();
// app.use('/api/lockers', lockerRoutes);

// app.get('/', (req, res) => {
//   res.send('Server is up and running!');
// });

// app.get('/api/lockers',async(req, res) => {
//   try{
//     const num_lock = await getAvailableLockers();
//     res.json(num_lock);
//   } catch(error){
//     res.status(500  )
//   }
// })

// app.post('/api/lockers', async (req, res) => {
//   const locker = req.body;

//   if (!locker.location || !locker.size) {
//     return res.status(400).json({ success: false, message: "Please fill in on all the fields!" });
//   }
//   const newLocker = new Locker(locker);

//   try {
//     await newLocker.save();
//     res.status(201).json({ success: true, data: newLocker })
//   } catch (error) {
//     res.status(500).json({success: false, message: "Server Error"})
//   }
// })

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