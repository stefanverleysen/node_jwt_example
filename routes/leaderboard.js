const express = require('express');
const router = express.Router();
const {getLeaderboard, registerToLeaderBoard} = require('../service/leaderboard');


router.get('/', async (req, res) => {
    const allPlayers = await getLeaderboard();
    return res.json(allPlayers);
});


router.post('/', async (req, res) => {
    const leaderboard = await registerToLeaderBoard(req.body);
    if(leaderboard === null) {
        return res.status(404).send({msg: "User not found"});
    }
    return res.json(leaderboard);
});



module.exports = router;