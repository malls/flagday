var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDate();
    
    if (month === 5 && day === 14) {
        res.render('yes');
    } else {
        res.render('no');
    }
});

module.exports = router;
