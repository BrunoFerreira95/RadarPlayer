const axios = require('axios');
const Player = require('../models/Player');

module.exports = {
    async index(request, response){
        const playes = await Player.find();

        return response.json(playes);
    },

    async store(request, response) {

        const { account_id } = request.body;

        let player = await Player.findOne({account_id});

        if(!player) {
            const Apiresponse = await axios.get(`https://api.opendota.com/api/players/${account_id}`)

            const { 
                solo_competitive_rank, 
                rank_tier,
                profile: {
                    personaname,
                    avatar,
                    profileurl,
                    last_login,
                }, 
            } = Apiresponse.data;

            player = await Player.create({
                account_id,
                solo_competitive_rank,
                rank_tier,
                profile: {
                    personaname,
                    avatar,
                    profileurl,
                    last_login,
                },
            })
        }
        return response.json(player);
    }
};