import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setup(app) {
    app.use(
        createProxyMiddleware('/imageApi', {            
            target: 'http://3.25.107.27:5000',
            changeOrigin: true,   
        })
    );

}
