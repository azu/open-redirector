module.exports = (req, res) => {
    const { url } = req.query
    res.redirect(302, url);
}