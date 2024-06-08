const User = require('../models/User');
const bcrypt = require('bcryptjs');
/* 
    Organizer: Create team, matches, send notif
    Admin: Menage users (promote deactivate add etc...)
*/
async function getUserById(id) {
    let dbUser = await User.findById(id);

    return dbUser;
}


async function createUser(body) {
    const { firstName, lastName, email, phone, password, isRightHanded, backhandType } = body;
    let user = new User({
        firstName,
        lastName,
        email,
        phone,
        password,
        isRightHanded,
        backhandType,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    return user;
}


async function getUserByEmail(email) {
    const user = await User.findOne({ email: email });
    return user;
}

async function updateUser(body) {
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    let user = await User.updateOne({ _id: body.id }, { $set: body });
    return user.nModified > 0
}

async function deleteUser(body) {
    const user = await User.findByIdAndDelete(body.id);
    return user;
}

async function getAllUsers() {
    return await User.find();
}


async function activateUser(body) {
    const result = await User.updateOne(
        { email: body.email },
        { $set: { active: body.active } }
    );
    return result
}



module.exports = {
    createUser,
    getUserById,
    updateUser,
    getAllUsers,
    deleteUser,
    activateUser,
    getUserByEmail
}