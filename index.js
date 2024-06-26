const express = require('express');
const  morgan = require('morgan');
const { rateLimit } = require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios');

const app = express();

const PORT =3005;

app.use(morgan('combined'))

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 15 minutes
	limit: 5, 
})

app.use(limiter)

app.use('/bookingservice', async(req,res,next) => {
    try {
        console.log(req.headers['x-access-token']);
        const response = await axios.get('http://localhost:3001/api/v1/isauthenticated', {
            headers: {
                'x-access-token': req.headers['x-access-token']
            }
        });
        console.log(response.data);
        if(response.data.success) {
            next();
        } else {
            return res.status(401).json({
                message: 'Unauthorised'
            })
        }
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorised'
        })
    }
})

app.use('/bookingservice', createProxyMiddleware({ target: 'http://localhost:3002/', changeOrigin: true}));

// proxy and change the base path from "/api" to "/secret"
// http://127.0.0.1:3000/api/foo/bar -> http://www.example.org/secret/foo/bar

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
