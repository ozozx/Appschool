@echo off
git add .
git commit -am "%*"
set /p BRANCH="choose branch: "
git push origin %BRANCH%