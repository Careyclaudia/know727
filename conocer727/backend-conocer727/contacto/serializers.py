# backend-conocer727/contacto/serializers.py

from rest_framework import serializers
from .models import MensajeContacto

class ContactoSerializer(serializers.ModelSerializer):
    """
    Serializer para el modelo MensajeContacto.
    Define los campos que serán expuestos en la API.
    """
    class Meta:
        # 1. Especificar el modelo al que pertenece este serializer
        model = MensajeContacto
        
        # 2. Especificar qué campos deben ser incluidos en la API.
        # '__all__' incluye automáticamente: nombre, email, opcion, y fecha_envio
        fields = '__all__' 
        
        # Opcional: Podrías listar los campos explícitamente:
        # fields = ('id', 'nombre', 'email', 'opcion', 'fecha_envio')