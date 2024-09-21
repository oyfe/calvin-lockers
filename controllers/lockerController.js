const lockerService = require('../services/lockerService');

// Add new lockers
exports.addLocker = async (req, res) => {
    try {
        const { location, size } = req.body;
        const locker = await lockerService.addLocker(location, size);
        res.status(201).json({ message: 'Locker added successfully', locker });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAvailableLockers = async (req, res) => {
    try {
        const lockers = lockerService.getAvailableLockers();
        res.status(200).json(lockers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.rentLockers = async (req, res) => {
    try {
        const lockerId = req.params.lockerId;
        const locker = await lockerService.rentLocker(lockerId);
        res.status(200).json({ message: 'Locker rented successfully', locker });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};