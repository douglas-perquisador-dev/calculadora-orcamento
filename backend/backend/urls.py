from django.urls import path, include
from django.contrib import admin
from django.http import HttpResponse
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from backend.categorias.views import CategoriaViewSet, CategoriaAddViewSet, CategoriaAllViewSet
from backend.items.views import ItemsAllViewSet, ItemsAddViewSet, ItemViewSet
from backend.orcamento.views import OrcamentosAllViewSet, OrcamentosAddViewSet, OrcamentoViewSet, \
    OrcamentoGraficoViewSet
from backend.users.views import RegisterView, LogoutView

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

    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name="sign_up"),
    path('logout/', LogoutView.as_view(), name='logout'),
    # path('reset_password/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    # path('change_password/', ChangePasswordView.as_view(), name='change_password'),

    # Items
    path('get_item/', ItemViewSet.as_view(), name='get_item'),
    path('get_all_items/', ItemsAllViewSet.as_view(), name='get_all_items'),
    path('set_add_item/', ItemsAddViewSet.as_view(), name='set_add_item'),

    # Orçamentos
    path('get_orcamento/', OrcamentoViewSet.as_view(), name='get_orcamento'),
    path('set_add_orcamento/', OrcamentosAddViewSet.as_view(), name='set_add_orcamento'),
    path('get_all_orcamentos/', OrcamentosAllViewSet.as_view(), name='get_all_orcamentos'),
    path('get_graph_orcamentos/', OrcamentoGraficoViewSet.as_view(), name='get_graph_orcamentos'),

    # Categorias
    path('get_categoria/', CategoriaViewSet.as_view(), name='get_categoria'),
    path('set_add_categoria/', CategoriaAddViewSet.as_view(), name='set_add_categoria'),
    path('get_all_categorias/', CategoriaAllViewSet.as_view(), name='get_all_categorias'),

]
