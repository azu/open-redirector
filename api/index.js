module.exports = (req, res) => {
    const { url } = req.query
    res.redirect(url);
}