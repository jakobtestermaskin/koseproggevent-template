

/*type Move = {}*/

const nextMove = (legalMoves) => {
    return legalMoves[Math.floor(Math.random() * legalMoves.length)]

}

exports.nextMove = nextMove