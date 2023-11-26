const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    const TARGET_URI = process.env.
    app.use('/api',
        createProxyMiddleware({
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: { '^/api': '' }
        })
    );
}
