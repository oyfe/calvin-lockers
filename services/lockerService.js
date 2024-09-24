import Locker from '../models/locker';

exports.addLocker = async (location, size) => {
    const locker = new Locker({ location, size });
    await locker.save();
    return locker;
};  

exports.getAvailableLockers = async () => {
    const lockers = await Locker.find({ status: 'available' });
    return lockers;
};

exports.rentLocker = async (lockerId) => {
    const locker = await Locker.findById(lockerId);
    if (!locker || locker.status !== 'available') {
        throw new Error('Locker is not available');
    }

    // Update locker status to 'rented'
    locker.status = 'rented';
    await locker.save();

    return locker;
};
