"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
"""
from django.contrib import admin
from django.urls import path, include 

urlpatterns = [
    # Ruta de administración de Django
    path('admin/', admin.site.urls),
    
    # Conecta las URLs de la aplicación 'contacto' bajo el prefijo 'api/'
    path('api/', include('contacto.urls')), 
]