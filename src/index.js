exports.handler = async function (event, context) {
    console.log("I just got ziped!")
    return { statusCode: 200, body: { nextMove: "(1, 1)" } }
}