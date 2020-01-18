const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    rank_tier: 0,
    solo_competitive_rank: String,
    profile: {
        personaname: String,
        avatar: String,
        profileurl: String,
        last_login: String,
    },
});

module.exports = mongoose.model('Player', PlayerSchema);