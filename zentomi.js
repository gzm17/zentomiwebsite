const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
app.use('/', router);

router.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
    });

router.get('/about', function (req, res) {
    res.sendFile(path + 'about.html');
    });

const port = process.env.PORT || 3000;
app.listen(port, function () {
console.log('zentomi app listening on port ' + port);
});
