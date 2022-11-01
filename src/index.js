const handle = require("handle")


exports.handler = async function (event, context) {

    const body = handle.nextMove()

    return {
        statusCode: 200,
        body: {
            move: JSON.stringify(body)
        }
    }
}
