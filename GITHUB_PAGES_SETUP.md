# GitHub Pages Setup Guide

This guide will help you deploy your wedding site to GitHub Pages.

## Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: `https://github.com/Bhuwan99/wedding-sparkle-site`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Click **Save**

## Step 2: Push the Workflow File

The GitHub Actions workflow file has been created. Commit and push it:

```bash
git add .github/workflows/deploy.yml
git add vite.config.ts
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

## Step 3: Wait for Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, your site will be live at:
   ```
   https://bhuwan99.github.io/wedding-sparkle-site/
   ```

## Step 4: Verify Deployment

- The workflow will automatically deploy on every push to `main` branch
- Check the **Actions** tab to see deployment status
- Your site URL will be shown in the workflow summary

## Custom Domain (Optional)

If you want to use a custom domain:

1. Update `vite.config.ts` and change the base to `'/'`:
   ```typescript
   base: '/',
   ```
2. In GitHub Pages settings, add your custom domain
3. Update your DNS settings as instructed by GitHub

## Troubleshooting

- **404 errors**: Make sure the base path in `vite.config.ts` matches your repository name
- **Build fails**: Check the Actions tab for error messages
- **Assets not loading**: Verify the base path is correct

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

