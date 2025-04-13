from django.urls import path, include

urlpatterns = [
    path('accounts/', include('apps.accounts.urls')),
    path('repositories/', include('apps.repositories.urls')),
]