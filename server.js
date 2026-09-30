import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');
const publicPath = path.join(__dirname, 'public');

// 1. Serve static files from dist first (built assets)
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// 2. Fallback to public folder directly
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}

// 3. Direct route for /images to ensure images in public or dist are always reached
const publicImages = path.join(publicPath, 'images');
const distImages = path.join(distPath, 'images');

if (fs.existsSync(publicImages)) {
  app.use('/images', express.static(publicImages));
}
if (fs.existsSync(distImages)) {
  app.use('/images', express.static(distImages));
}

// SPA fallback: send index.html for any client navigation route
app.get('*', (req, res) => {
  const indexFile = path.join(distPath, 'index.html');
  if (fs.existsSync(indexFile)) {
    res.sendFile(indexFile);
  } else {
    res.status(404).send('Application build in progress. Please run npm run build.');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio server listening on http://0.0.0.0:${port}`);
});
