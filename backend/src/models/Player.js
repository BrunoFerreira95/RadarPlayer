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
    win: 0,
    lose: 0,
});

module.exports = mongoose.model('Player', PlayerSchema);