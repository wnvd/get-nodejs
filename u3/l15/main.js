const connectDB = require("./config/db.js");
const express = require("express");
const { getSubscribers,
        createSubscriber,
        getContact,
        home } = require("./controllers/subscribers.js");

connectDB();

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug');

app.get('/', home);
app.get('/subscribers', getSubscribers);
app.get('/contacts', getContact);
app.post('/subscriber', createSubscriber);

app.listen(3000, () => {
    console.log('server is listening at port: 3000');
});
