const { Matchup, Tech } = require('../models')

const resolvers = {

    Query: {
        matchups: async () => {
            return Matchup.find();
        },
        matchup: async (parent, { matchupId })Matchup.findOne({matchupId})
        
    }
}