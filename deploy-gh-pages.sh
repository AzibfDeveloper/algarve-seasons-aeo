#!/bin/bash

# Algarve Seasons - GitHub Pages Deployment Script
# This script builds the project and deploys it to the gh-pages branch

set -e

echo "🚀 Starting GitHub Pages deployment..."

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist/ directory not found. Please run 'pnpm build' first."
    exit 1
fi

# Check if index.html exists in dist
if [ ! -f "dist/index.html" ]; then
    echo "❌ Error: dist/index.html not found. Build may have failed."
    exit 1
fi

echo "✅ Build artifacts verified"

# Create a temporary directory for the gh-pages branch
TEMP_DIR=$(mktemp -d)
trap "rm -rf $TEMP_DIR" EXIT

echo "📦 Preparing gh-pages deployment..."

# Clone the gh-pages branch (or create it if it doesn't exist)
if git rev-parse --verify gh-pages > /dev/null 2>&1; then
    echo "📋 Checking out existing gh-pages branch..."
    git clone -b gh-pages --single-branch . "$TEMP_DIR"
else
    echo "📋 Creating new gh-pages branch..."
    mkdir -p "$TEMP_DIR"
    cd "$TEMP_DIR"
    git init
    git remote add origin https://github.com/AzibfDeveloper/Algarve-Seasons.git
    cd -
fi

# Copy dist contents to temp directory
echo "📂 Copying build artifacts..."
rm -rf "$TEMP_DIR"/* "$TEMP_DIR"/.*
cp -r dist/* "$TEMP_DIR/"

# Create .nojekyll file to prevent Jekyll processing
touch "$TEMP_DIR/.nojekyll"

# Add all files to git
cd "$TEMP_DIR"
git add -A

# Check if there are changes
if git diff --cached --quiet; then
    echo "⚠️  No changes to deploy"
    exit 0
fi

# Commit and push
echo "💾 Committing changes..."
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "🌐 Pushing to GitHub..."
git push -u origin gh-pages

cd -

echo "✅ Deployment complete!"
echo "🎉 Your site will be available at: https://azibfdeveloper.github.io/Algarve-Seasons/"
echo ""
echo "Note: It may take a few minutes for GitHub Pages to update."
