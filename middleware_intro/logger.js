module.exports = (req, res, next) => {
    console.log("LOGGED on" + new Date().toLocaleTimeString())
    next();
}