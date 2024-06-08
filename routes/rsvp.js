const express = require('express');
const router = express.Router();
const { getAll, createRsvp, deleteRsvp, updateRsvp, activateRsvp } = require('../service/rsvp');

router.get('/', async(req, res) => {
   const rsvps = await getAll();
   return res.send(rsvps);
});

router.post('/', async(req, res) => {
    const rsvp = await createRsvp(req.body);
    return res.send(rsvp);
});


router.put('/', async(req, res) => {
    const rsvp = await updateRsvp(req.body);
    return res.send(rsvp);
});


router.delete('/', async(req, res) => {
    const rsvp = await deleteRsvp(req.body);
    return res.send(rsvp);
});


router.patch('/', async(req, res) => {
    const rsvp = await activateRsvp(req.body);
    return res.send(rsvp);
});

module.exports = router;