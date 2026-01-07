# backend-conocer727/contacto/urls.py

from rest_framework.routers import DefaultRouter
from .views import ContactoViewSet

# 1. Crear una instancia del Router. Esto automatiza la creación de rutas.
router = DefaultRouter()

# 2. Registrar el ViewSet:
# El primer argumento (r'mensajes') define el prefijo de la URL para este CRUD.
# El segundo argumento es la clase ViewSet que maneja la lógica.
router.register(r'mensajes', ContactoViewSet, basename='mensaje-contacto') 

# 3. La lista 'urlpatterns' ahora contiene todas las rutas generadas, incluyendo:
# - /mensajes/ (GET para listar, POST para crear)
# - /mensajes/{pk}/ (GET, PUT, PATCH, DELETE para detalle/edición)
urlpatterns = router.urls