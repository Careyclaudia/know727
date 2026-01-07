from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

# Esta clase manejará las peticiones GET (lista) y POST (crear)
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all() # Obtiene todos los posts
    serializer_class = PostSerializer # Usa el Serializer que creaste