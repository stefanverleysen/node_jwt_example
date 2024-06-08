const Rsvp = require('../models/Rsvp');
const { getUserByEmail } = require('../service/user');

async function getAll() {
    const all = await Rsvp.find().populate('user').exec();
    return all
}

async function createRsvp(body) {
    const { email } = body;

    const user = await getUserByEmail(email);

    if (user) {
        const rsvp = new Rsvp({
            user: user._id
        });

        await rsvp.save();

        return rsvp;
    }

    throw new Error("User don't exist");
}

async function updateRsvp(body) {
    const rsvp = await Rsvp.updateOne({ _id: body.id }, { $set: body });
    return rsvp.nModified > 0
}

async function deleteRsvp(body) {
    const rsvp = await Rsvp.findByIdAndDelete(body.id);
    return rsvp;
}

async function activateRsvp(body) {
    const result = await Rsvp.updateOne(
        { _id: body.id },
        { $set: { status: body.status } }
    );
    return result
}

module.exports = {
    getAll,
    createRsvp,
    updateRsvp,
    deleteRsvp,
    activateRsvp
};