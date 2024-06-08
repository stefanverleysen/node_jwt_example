const Leaderboard = require('../models/Leaderboard');
const { getUserById } = require('../service/user');

async function getLeaderboard() {
    /* 
        Get all players from leaderboard sorted based on their points
    */
    const all = await Leaderboard.find().populate('user').exec();
    return all.sort((a, b) => a.points - b.points);
}

async function registerToLeaderBoard(body) {
    const { id } = body;

    const user = await getUserById(id);

    if(user) {
        const leaderboard = new Leaderboard({
            user: user._id
        });
        await leaderboard.save();
        return leaderboard
    }

    return null;

}


module.exports = {
    getLeaderboard,
    registerToLeaderBoard
}