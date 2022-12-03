function gameObject(){
    let object = {
        home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
            'Alan Anderson': {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
            'Reggie Evans': {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
            },
            'Brook Lopez': {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
            },
            'Mason Plumlee': {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
            },
            'Jason Terry': {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
            },
        },
    },
    away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien': {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 11,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            'DeSagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            'Ben Gordon': {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            },
            'Brendan Haywood': {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            },
        },
    },
}; 
return object;
}

function numPointsScored(playerName) {
    let game = gameObject();
    for (const gameKey in game) {
        let teamObj = game[gameKey].players
        for (const player in teamObj){
            let data = teamObj[player]
            if (data === teamObj[playerName])
                return data.points;
        }
    }
}

function shoeSize(playerName) {
    let game = gameObject();
    for (const gameKey in game) {
        let teamObj = game[gameKey].players
        for (const player in teamObj){
            let data = teamObj[player]
            if (data === teamObj[playerName])
                return data.shoe;
        }
    }
}

function teamColors(name) {
    let game = gameObject();
    for (const gameKey in game) {
        let teamObj = game[gameKey]
        if (teamObj.teamName === name)

        return teamObj.colors;
    }
};

function teamNames(){
    let match = []
    let game = gameObject();
    for (const gameKey in game) {
        let teamObj = game[gameKey]
        match.push(teamObj.teamName);
    }
    return match;
}

function playerNumbers(team){
    let numbers =[]
    let game = gameObject();
    for (const gameKey in game) {
        let teamObj = game[gameKey]
        if (teamObj.teamName === team){
            for (const player in teamObj.players){
                let data = teamObj.players[player]
                numbers.push(data.number);
            }
        }
    }
    return numbers;
}

function playerStats(playerName) {
    let game = gameObject();
    for (const gameKey in game) {
        let teamObj = game[gameKey].players
        for (const player in teamObj){
            let data = teamObj[player]
            if (data === teamObj[playerName])
                return data;
        }
    }
}

function bigShoeRebounds(){
    let bigFoot = 0
    let game = gameObject();
    for (const gameKey in game) {
        let teamObj = game[gameKey].players
        for (const player in teamObj) {
            let data = teamObj[player]
            if (data.shoe > bigFoot) {
                bigFoot = data.shoe
            }
        }
        for (const player in teamObj) {
            let data = teamObj[player]
            if (data.shoe === bigFoot) {
                return data.rebounds;
            }
        }
    }
}

function mostPointsScored(){
    let bigPoints = 0
    let game = gameObject();
    for (const gameKey in game) {
        let teamObj = game[gameKey].players
        for (const player in teamObj) {
            let data = teamObj[player]
            if (data.points > bigPoints) {
                bigPoints = data.points
            }
        }
        for (const player in teamObj) {
            let data = teamObj[player]
            if (data.points === bigPoints) {
                return player;
            }
        }
    }
}

function winningTeam(){
    let home = [];
    let away = [];
    let game = gameObject();
    for (const gameKey in game) {
        let teamObj = game[gameKey].players
        for (const player in teamObj) {
            let data = teamObj[player]
            if (gameKey === 'home'){
                home.push(data.points)
            } else {
                away.push(data.points)
            }
        }
    }
    let homeScore = home.reduce(function (acc, score){
        return acc + score
    })
    let awayScore = away.reduce(function (acc, score){
        return acc + score
    })
    return homeScore > awayScore ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName(){
    let bigName = ''
    let game = gameObject();
    for (const gameKey in game) {
        let teamObj = game[gameKey].players
        for (const player in teamObj) {
            if (player.length > bigName.length) {
                bigName = player;
            }
        }
    }
    return bigName;
}

function doesLongNameStealATon(){
    let game = gameObject();
    let mostSteals = 0
    for (const gameKey in game) {
        let teamObj = game[gameKey].players
        for (const player in teamObj) {
            let data = teamObj[player]
            if (data.steals > mostSteals){
                mostSteals = data.steals
            } console.log(mostSteals)
        }
    }
    for (const gameKey in game) {
        let teamObj = game[gameKey].players
        for (const player in teamObj) {
        let data = teamObj[player]
        if (data.steals === mostSteals) {
            return player === playerWithLongestName() ? true : false;
            }
        }
    }
}