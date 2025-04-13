from django.urls import path
from .views import RepositoryListView, RepositoryDetailView

urlpatterns = [
    path('', RepositoryListView.as_view(), name='repository-list'),
    path('<int:pk>/', RepositoryDetailView.as_view(), name='repository-detail'),
]