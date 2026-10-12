import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Case-insensitive & subfolder router middleware
app.use((req, res, next) => {
  const reqPath = req.path.replace(/^\/|\/$/g, '');
  if (!reqPath) return next();

  try {
    const entries = fs.readdirSync(__dirname, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        if (entry.name.toLowerCase() === reqPath.toLowerCase()) {
          // Canonical redirect with trailing slash so relative paths in sub-apps work
          if (req.path !== `/${entry.name}/`) {
            return res.redirect(301, `/${entry.name}/`);
          }
        }
      }
    }
  } catch (err) {
    // Proceed if directory read fails
  }
  next();
});

// Serve static files from root directory
app.use(express.static(__dirname));

// Route fallback: check if request is inside a subfolder with index.html, else root index.html
app.get('*', (req, res) => {
  const segments = req.path.split('/').filter(Boolean);
  if (segments.length > 0) {
    const topDir = segments[0];
    const subIndex = path.join(__dirname, topDir, 'index.html');
    if (fs.existsSync(subIndex)) {
      return res.sendFile(subIndex);
    }
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
