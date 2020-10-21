module.exports = (req, res) => {
    const { url } = req.query
    res.send(`location.href = "${url}"`);
}