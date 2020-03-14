class DefaultController {
    index (req, res) {
        res.status(200);
        res.json({status: 'UP'});
    }
}

module.exports = new DefaultController();