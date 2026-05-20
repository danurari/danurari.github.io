Write-Host "Collecting static files..."
.\venv\Scripts\python.exe manage.py collectstatic --noinput

Write-Host "Generating static HTML site for GitHub Pages..."
.\venv\Scripts\python.exe manage.py distill-local --force public/

Write-Host "Build complete! You can upload the contents of the 'public/' directory to GitHub Pages."
