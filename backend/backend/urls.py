from django.urls import path, include
from django.contrib import admin
from django.http import HttpResponse
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from backend.orcamento.views import OrcamentosAllViewSet, OrcamentosAddViewSet

schema_view = get_schema_view(
    openapi.Info(
        title="Orçamento simples construtora",
        default_version='V1',
        description="API para calculadora de orçamento",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)




urlpatterns = [

    path('', schema_view.with_ui('swagger', cache_timeout=0), name='DOCS'),
    path('admin/', admin.site.urls),

    # Items
    path('get_orcamentos/', OrcamentosAllViewSet.as_view(), name='get_orcamentos'),

    # Orçamentos
    path('get_orcamentos/', OrcamentosAllViewSet.as_view(), name='get_orcamentos'),
    path('set_orcamentos/', OrcamentosAddViewSet.as_view(), name='set_orcamentos'),

]
