const app = require('express')();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        status: 'UP',
    });
});

app.listen(PORT, () => {
   console.log(`Authentication service up on port ${PORT}`);
});