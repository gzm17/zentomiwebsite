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

app.listen(3000, function () {
console.log('zentomi app listening on port 3000!');
});
