const express = require("express")
const cors = require("cors")

const handleNextMove = require("../src/handle")

const app = express()

app.use(cors())

app.use(express.json())

app.post("/", (req, res) => {
    const nextMove = handleNextMove.nextMove(req.body.legalMoves)
    res.send({
        move: nextMove
    })
})

app.listen(9000, () => {
    console.log("app listeining at 9000")
})