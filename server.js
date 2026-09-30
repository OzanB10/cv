import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');
const publicImagesPath = path.join(__dirname, 'public', 'images');

// Serve static assets from dist
app.use(express.static(distPath));

// Explicit fallback for /images to guarantee image loading on Railway/cloud platforms
app.use('/images', express.static(path.join(distPath, 'images')));
app.use('/images', express.static(publicImagesPath));

// Never send index.html for missing images or assets
app.get('/images/*', (req, res) => {
  res.status(404).send('Image Not Found');
});

// SPA fallback: send index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio server listening on http://0.0.0.0:${port}`);
});
