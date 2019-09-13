const express = require('express');

const app = express();
const port = process.env.PORT || 5036;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(require('./routes/routes'));

app.listen(port, function(){
    console.log(`Listening on port ${port}`);
});



