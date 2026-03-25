import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import health from './routers/health.js';
import router from './routers/index.js';
const app = new Hono();
app.use('*', cors());
app.use('*', logger());
app.route('/health', health);
app.route('/api', router); // 統一加 /api 前綴也在這決定
const server = serve({
    fetch: app.fetch,
    port: 3600
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
process.on('SIGINT', () => {
    server.close();
    process.exit(0);
});
process.on('SIGTERM', () => {
    server.close((err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        process.exit(0);
    });
});
