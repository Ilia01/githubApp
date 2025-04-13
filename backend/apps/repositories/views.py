from rest_framework import viewsets
from .models import Repository
from .serializers import RepositorySerializer
from rest_framework.response import Response
from rest_framework.decorators import action

class RepositoryViewSet(viewsets.ModelViewSet):
    queryset = Repository.objects.all()
    serializer_class = RepositorySerializer

    @action(detail=False, methods=['get'])
    def search(self, request):
        query = request.query_params.get('q', None)
        if query:
            repositories = self.queryset.filter(name__icontains=query)
            serializer = self.get_serializer(repositories, many=True)
            return Response(serializer.data)
        return Response({"error": "No query provided"}, status=400)