#!/bin/bash

# Algarve Seasons - GitHub Pages Deployment (Simple)
# Uses git subtree to deploy dist/ folder to gh-pages branch

set -e

echo "🚀 Starting GitHub Pages deployment..."

# Verify build exists
if [ ! -f "dist/index.html" ]; then
    echo "❌ Error: dist/index.html not found. Please run 'pnpm build' first."
    exit 1
fi

echo "✅ Build verified"

# Create .nojekyll file
touch dist/.nojekyll

# Add dist to git (if not already tracked)
echo "📂 Staging build artifacts..."
git add dist/ -f

# Commit if there are changes
if git diff --cached --quiet; then
    echo "⚠️  No changes to commit"
else
    git commit -m "Build: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Deploy using git subtree
echo "🌐 Deploying to gh-pages branch..."
git subtree push --prefix dist github gh-pages

echo "✅ Deployment complete!"
echo "🎉 Your site will be available at: https://azibfdeveloper.github.io/Algarve-Seasons/"
echo ""
echo "Note: It may take a few minutes for GitHub Pages to update."
