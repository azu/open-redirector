module.exports = (req, res) => {
    const { url } = req.query
    res.send(`<meta http-equiv="refresh" content="0;URL='${url}'" />`);
}