import { addLocker,getAvailableLockersNum } from '../services/lockerService.js'
// import Locker from '../models/locker.js';
// Add new lockers

export const registerLocker = async (req, res) => {
    const locker = req.body;
    // console.log(locker);
    try {
        await addLocker(locker);
        res.status(201).json({
            success: true,
            message: "Locker created succesfully"
        })
    } catch (error) {
        res.status(409).json({
            success: false,
            name: error.name,
            message: error.message
        })
    }
    // res.send('testing works123!');
};

export const getAvailableLockers = async (req, res) => {
    try {
        const locker = await getAvailableLockersNum();
        res.status(200).json({
            success: true,
            message: "Here some locker",
            locker: locker
            
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    // res.send('berjalan sampai disini')
};

// exports.rentLockers = async (req, res) => {
//     try {
//         const lockerId = req.params.lockerId;
//         const locker = await lockerService.rentLocker(lockerId);
//         res.status(200).json({ message: 'Locker rented successfully', locker });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };