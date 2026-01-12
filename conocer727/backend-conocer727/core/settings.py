"""
Django settings for core project.
"""
from pathlib import Path
# Importar django-environ y os
import environ 
import os 
# Importamos la configuración específica para Whitenoise
from whitenoise.storage import CompressedManifestStaticFilesStorage

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# 1. CONFIGURACIÓN DE ENTORNO (django-environ)
env = environ.Env()
# Lee variables locales del archivo .env (solo en desarrollo)
environ.Env.read_env(os.path.join(BASE_DIR, '.env')) 

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/

# 2. VARIABLES DE ENTORNO CLAVE
# SECRET_KEY: OBTENER de la variable de entorno
SECRET_KEY = env('SECRET_KEY')

# DEBUG: OBTENER de la variable de entorno (False por defecto en producción)
DEBUG = env('DEBUG', default=False) 

# ALLOWED_HOSTS: OBTENER como lista de la variable de entorno
ALLOWED_HOSTS = env.list('ALLOWED_HOSTS', default=[]) 


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'posts',
    'contacto',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    # Middleware de Whitenoise para servir archivos estáticos comprimidos
    'whitenoise.middleware.WhiteNoiseMiddleware', 
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    
]

# Configuración CORS (Se mantiene igual)
CORS_ALLOWED_ORIGINS = [
    "https://venerable-baklava-fb769b.netlify.app/", 
    "http://localhost:5173",
     "http://127.0.0.1:5173", # Puerto de desarrollo de Vite
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# 3. DATABASE: Usar DATABASE_URL (para Railway/Postgres) o SQLite (por defecto)
# DATABASES = {'default': env.db('DATABASE_URL', default='sqlite:///db.sqlite3')}
DATABASES = {
    'default': env.db(
        'DATABASE_URL', 
        # Si no se encuentra DATABASE_URL, usa SQLite por defecto
        default=f'sqlite:///{BASE_DIR / "db.sqlite3"}'
    )
}


# Password validation (Se mantiene igual)
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization (Se mantiene igual)
# https://docs.djangoproject.com/en/5.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# 4. ARCHIVOS ESTÁTICOS (CONFIGURACIÓN PARA WHITENOISE)
STATIC_URL = 'static/'
# Directorio donde Gunicorn/Whitenoise buscará los archivos estáticos colectados
STATIC_ROOT = BASE_DIR / 'staticfiles'
# Clase de almacenamiento para manejar la compresión y el cacheo
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'


# Default primary key field type (Se mantiene igual)
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'