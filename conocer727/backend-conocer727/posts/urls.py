from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Incluimos las rutas de nuestra aplicación 'posts' bajo el prefijo 'api/posts/'
    path('api/posts/', include('posts.urls')), 
]