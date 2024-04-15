const express = require('express');

const app = express();

const PORT =3005;
const  morgan = require('morgan');

app.use(morgan('combined'))


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});