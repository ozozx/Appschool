#@echo off
git add .
git commit -m "%*"
set /p BRANCH="choose branch: "
git push origin %BRANCH%