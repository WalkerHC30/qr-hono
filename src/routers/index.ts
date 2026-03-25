import { Hono } from 'hono';
import health from './health.js';

const router = new Hono();

router.route('/health', health);
// 之後加路由只動這個檔案
// router.route('/qr', qr)
// router.route('/users', users)

export default router;