# Portfolio Project

A portfolio website with both Django backend and static GitHub Pages frontend.

## 📁 Project Structure

```
portfolio/
├── public/                  # ✅ GitHub Pages (DO NOT DELETE)
│   ├── index.html          # Main portfolio page
│   └── static/             # Web assets
│       ├── css/style.css
│       ├── js/script.js
│       └── img/
│
├── landing_page/           # Django app
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   └── urls.py
│
├── portfolio_project/      # Django project config
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── static/                 # Django static files (for development)
├── manage.py               # Django management script
├── requirements.txt        # Python dependencies
├── docker-compose.yml      # Docker services
├── Dockerfile
├── db.sqlite3             # Local database (git ignored)
└── .gitignore             # Git ignore rules
```

## 🚀 GitHub Pages Setup

✅ **Already configured** - The `public/` folder is deployed to GitHub Pages.
- Uses **relative paths** (`./static/`) - works on GitHub Pages
- Independent from Django backend
- Updates to `public/` folder auto-deploy

## 🛠️ Django Backend (Local Development)

For local development:
```bash
python manage.py runserver
```

## 📝 Important Notes

- **Do NOT move/delete `public/` folder** - it's published to GitHub Pages
- **Do NOT change absolute paths (`/`) to relative (`./`) in Django templates** - only done for public folder
- All Django static files go in `/static/` directory
- Run `python manage.py collectstatic` to compile assets
