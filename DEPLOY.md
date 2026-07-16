# Deploy ke GitHub Pages

## Langkah-langkah

1. Buka repo Settings > Pages > Source, pilih **GitHub Actions**
2. Buat folder `.github/workflows/` di repo dan tambahkan file `deploy.yml` dengan isi berikut:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. Juga buat file kosong `public/.nojekyll` agar GitHub Pages tidak memfilter folder assets.

4. Setelah itu, setiap push ke branch `main` akan otomatis build dan deploy ke GitHub Pages.
