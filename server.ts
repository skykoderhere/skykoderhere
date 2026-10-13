import express from 'express';
import type { Request, Response, Application } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;
const HOST: string = '0.0.0.0';

// Serve static assets from project root (including index.html, dist/, assets/)
app.use(express.static(__dirname));

// Single-page application fallback
app.get('*', (_req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, (): void => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});

export default app;
