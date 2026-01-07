# contacto/views.py

from rest_framework import viewsets
from .models import MensajeContacto
from .serializers import ContactoSerializer

class ContactoViewSet(viewsets.ModelViewSet):
    """
    Este ViewSet proporciona automáticamente las operaciones CRUD 
    (Create, Retrieve, Update, Destroy, List) para el modelo MensajeContacto 
    utilizando Django REST Framework.
    """
    
    # 1. Definir el queryset: Obtiene todos los mensajes ordenados por fecha de envío descendente.
    queryset = MensajeContacto.objects.all().order_by('-fecha_envio')
    
    # 2. Definir el serializer: Indica qué serializer usar para la conversión JSON.
    serializer_class = ContactoSerializer

# Este ViewSet es lo que conectarás a tus URLs usando un Router de DRF.