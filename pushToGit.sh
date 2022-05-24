#!/bin/bash
echo "Commit Message?"
read MESSAGE
git status
git add .
git status
git commit -m "$MESSAGE"
git push -u origin main
git status