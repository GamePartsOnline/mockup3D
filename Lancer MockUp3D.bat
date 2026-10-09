@echo off
cd /d "%~dp0"
if not exist "node_modules" (
  echo Installation locale des dependances...
  call npm install
  if errorlevel 1 (
    echo.
    echo Echec de l'installation. Verifiez que Node.js est installe.
    pause
    exit /b 1
  )
)
call npm run build
if errorlevel 1 (
  echo Echec de la preparation de l'application.
  pause
  exit /b 1
)
start "" http://127.0.0.1:4173
call npm run preview -- --port 4173
