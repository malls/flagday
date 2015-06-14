var express = require('express');
var router = express.Router();

var today = new Date();
var month = today.getMonth();
var day = today.getDate();

/* GET home page. */
router.get('/', function(req, res) {
    if (month === 5 && day === 14) {
        res.render('yes');
    } else {
        res.render('no');
    }
});

module.exports = router;
