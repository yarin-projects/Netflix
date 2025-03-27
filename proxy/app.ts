import express from 'express';
import {createProxyMiddleware} from 'http-proxy-middleware';
import rateLimit from 'express-rate-limiter';

//we can validate the jwt here

const app = express();

const TARGET_URL = 'http://localhost:3000';

const limiter = rateLimit({
    windowMs: 60000,
    max: 100,
    message: "Too many requests, please try again later."
})

app.use(limiter);

app.use("/",
    createProxyMiddleware({
        target: TARGET_URL,
        changeOrigin: true
    })
);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});

