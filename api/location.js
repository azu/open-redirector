module.exports = (req, res) => {
    const { url } = req.query
    res.send(`<script>location.href = "${url}"</script>`);
}