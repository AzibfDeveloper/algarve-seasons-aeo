#!/bin/bash
set -e

# Create a temporary directory
TEMP_DIR=$(mktemp -d)
trap "rm -rf $TEMP_DIR" EXIT

# Clone the gh-pages branch
git clone --depth 1 --branch gh-pages https://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@github.com/AzibfDeveloper/AlgarveSeasons.git "$TEMP_DIR"

# Remove all old files
cd "$TEMP_DIR"
find . -type f ! -name '.git*' -delete
find . -type d -empty -delete

# Copy the new dist files
cp -r /home/ubuntu/algarve-seasons-aeo/dist/* .

# Commit and push
git config user.email "developer@algarveseasons.com"
git config user.name "Algarve Seasons Developer"
git add -A
git commit -m "Deploy: Update with hash-based routing fix for GitHub Pages (HomePT-D1RIrK4x)" || true
git push origin gh-pages

echo "✅ Deployment to GitHub Pages completed!"
