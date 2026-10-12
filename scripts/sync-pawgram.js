import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const targetDir = path.join(rootDir, 'PawGram');

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/pawjects/PawGram/main/website';
const FILES = [
  'index.html',
  'styles.css',
  'app.js',
  'release-config.json'
];

async function syncPawGram() {
  console.log('🔄 Syncing PawGram website from pawjects/PawGram/main/website...');

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const file of FILES) {
    const url = `${GITHUB_RAW_BASE}/${file}`;
    try {
      console.log(`  ⬇️ Fetching ${file}...`);
      const response = await fetch(url, { headers: { 'User-Agent': 'pawjects-sync-agent' } });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
      const content = await response.text();
      fs.writeFileSync(path.join(targetDir, file), content, 'utf8');
      console.log(`  ✅ Updated ${file}`);
    } catch (err) {
      console.error(`  ❌ Failed to fetch ${file}:`, err.message);
    }
  }

  console.log('✨ PawGram website sync complete.');
}

syncPawGram().catch((err) => {
  console.error('Sync failed:', err);
  process.exit(1);
});
